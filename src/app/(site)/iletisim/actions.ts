"use server";

import { contactSchema, type ContactInput, type ContactResult } from "@/lib/validation/contact";

/**
 * İletişim formu Server Action iskeleti.
 * Şimdilik yalnızca sunucu loguna yazar; e-posta servisi (Resend, SMTP vb.)
 * `deliver` fonksiyonuna bağlanarak devreye alınabilir.
 */
export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactInput;
      fieldErrors[key] ??= issue.message;
    }
    return { ok: false, message: "Lütfen formdaki hataları düzeltin.", fieldErrors };
  }

  // Bot tuzağı doluysa sessizce başarılı dön.
  if (parsed.data.website) {
    return { ok: true, message: "Talebiniz alınmıştır." };
  }

  try {
    await deliver(parsed.data);
    return {
      ok: true,
      message:
        "Talebiniz bize ulaştı. İlgili avukatımız en kısa sürede sizinle iletişime geçecektir.",
    };
  } catch (error) {
    console.error("[iletisim] gönderim hatası", error);
    return {
      ok: false,
      message: "Talebiniz şu anda iletilemedi. Lütfen daha sonra tekrar deneyin veya bizi telefonla arayın.",
    };
  }
}

async function deliver(data: ContactInput) {
  // TODO: E-posta servisini burada bağlayın. Kişisel veriler loglanırken maskelenir.
  console.info("[iletisim] yeni randevu talebi", {
    name: data.name,
    email: data.email.replace(/(.{2}).+(@.+)/, "$1***$2"),
    phone: data.phone.replace(/\d(?=\d{2})/g, "*"),
    topic: data.topic,
    messageLength: data.message.length,
    receivedAt: new Date().toISOString(),
  });
}
