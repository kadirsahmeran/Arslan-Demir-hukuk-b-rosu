import { z } from "zod";

/** İletişim formu şeması. Gönderim Netlify Forms üzerinden yapılır. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Lütfen adınızı ve soyadınızı yazın.")
    .max(80, "Ad soyad en fazla 80 karakter olabilir."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s()-]{10,20}$/, "Lütfen geçerli bir telefon numarası yazın (ör. 0532 000 00 00)."),
  email: z.string().trim().pipe(z.email("Lütfen geçerli bir e-posta adresi yazın.")),
  topic: z.string().min(1, "Lütfen bir konu seçin."),
  message: z
    .string()
    .trim()
    .min(20, "Lütfen talebinizi en az 20 karakterle kısaca açıklayın.")
    .max(2000, "Mesajınız en fazla 2000 karakter olabilir."),
  kvkk: z.boolean().refine((v) => v === true, {
    message: "Devam etmek için KVKK Aydınlatma Metni'ni okuduğunuzu onaylamanız gerekir.",
  }),
  // Bot tuzağı: gerçek kullanıcılar bu alanı görmez ve boş bırakır.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
