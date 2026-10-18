"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ChevronDown, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";

type TopicOption = { value: string; label: string };

const fieldBase =
  "w-full rounded-sm border bg-white px-4 text-base text-ink transition-colors duration-300 placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
      <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
      {message}
    </p>
  );
}

const submitError = "Talebiniz şu anda iletilemedi. Lütfen daha sonra tekrar deneyin veya bizi telefonla arayın.";

export function ContactForm({ topics, defaultTopic = "" }: { topics: TopicOption[]; defaultTopic?: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      topic: topics.some((t) => t.value === defaultTopic) ? defaultTopic : "",
      message: "",
      kvkk: false,
      website: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setError(null);
    startTransition(async () => {
      const konu = topics.find((topic) => topic.value === values.topic)?.label ?? values.topic;
      const body = new URLSearchParams({
        "form-name": "iletisim",
        "ad-soyad": values.name,
        telefon: values.phone,
        eposta: values.email,
        konu,
        mesaj: values.message,
        kvkk: "Evet",
        "bot-field": values.website ?? "",
      });

      // Netlify Forms yalnızca yayın ortamında /__forms.html isteğini işler.
      if (process.env.NODE_ENV !== "development") {
        try {
          const response = await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: body.toString(),
          });
          if (!response.ok) {
            setError(submitError);
            return;
          }
        } catch {
          setError(submitError);
          return;
        }
      }

      reset();
      router.push("/iletisim/tesekkurler");
    });
  });

  const describedBy = (name: keyof ContactInput) => (errors[name] ? `${name}-hata` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-durum">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
            Ad Soyad <span aria-hidden="true" className="text-accent-ink">*</span>
          </label>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={cn(fieldBase, "h-13", errors.name ? "border-red-600" : "border-line")}
            {...register("name")}
          />
          <FieldError id="name-hata" message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary">
            Telefon <span aria-hidden="true" className="text-accent-ink">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="0532 000 00 00"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className={cn(fieldBase, "h-13", errors.phone ? "border-red-600" : "border-line")}
            {...register("phone")}
          />
          <FieldError id="phone-hata" message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
            E-posta <span aria-hidden="true" className="text-accent-ink">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={cn(fieldBase, "h-13", errors.email ? "border-red-600" : "border-line")}
            {...register("email")}
          />
          <FieldError id="email-hata" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="topic" className="mb-2 block text-sm font-medium text-primary">
            Konu / Hukuk Alanı <span aria-hidden="true" className="text-accent-ink">*</span>
          </label>
          <div className="relative">
            <select
              id="topic"
              aria-invalid={!!errors.topic}
              aria-describedby={describedBy("topic")}
              className={cn(fieldBase, "h-13 appearance-none pr-10", errors.topic ? "border-red-600" : "border-line")}
              {...register("topic")}
            >
              <option value="" disabled>
                Seçiniz
              </option>
              {topics.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-primary" />
          </div>
          <FieldError id="topic-hata" message={errors.topic?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
          Mesajınız <span aria-hidden="true" className="text-accent-ink">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          placeholder="Hukuki durumunuzu kısaca açıklayın. Lütfen bu aşamada özel nitelikli kişisel veri (sağlık bilgisi vb.) paylaşmayın."
          className={cn(fieldBase, "resize-y py-3", errors.message ? "border-red-600" : "border-line")}
          data-lenis-prevent
          {...register("message")}
        />
        <FieldError id="message-hata" message={errors.message?.message} />
      </div>

      {/* Bot tuzağı */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Web sitesi</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-muted">
          <input
            type="checkbox"
            aria-invalid={!!errors.kvkk}
            aria-describedby={describedBy("kvkk")}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-primary"
            {...register("kvkk")}
          />
          <span>
            <Link href="/kvkk" target="_blank" className="font-medium text-primary underline underline-offset-4">
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum; iletişim talebimin değerlendirilmesi amacıyla kişisel verilerimin işlenmesine
            ilişkin bilgilendirildim. <span aria-hidden="true" className="text-accent-ink">*</span>
          </span>
        </label>
        <FieldError id="kvkk-hata" message={errors.kvkk?.message} />
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <Button type="submit" size="lg" arrow={!pending} disabled={pending}>
          {pending ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Gönderiliyor
            </span>
          ) : (
            "Talebi Gönder"
          )}
        </Button>
        <p className="text-sm text-ink-muted">* ile işaretli alanların doldurulması zorunludur.</p>
      </div>

      <div id="form-durum" aria-live="polite">
        {error && (
          <div role="alert" className="flex gap-3 rounded-sm border border-red-700/30 bg-red-50 p-5 text-base text-red-900">
            <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            {error}
          </div>
        )}
      </div>
    </form>
  );
}

/** `?konu=aile-hukuku` gibi bir parametreyle konu alanını önceden seçer (Suspense içinde). */
export function ContactFormWithTopic({ topics }: { topics: TopicOption[] }) {
  const searchParams = useSearchParams();
  return <ContactForm topics={topics} defaultTopic={searchParams.get("konu") ?? ""} />;
}
