"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";
import { LinkedInIcon, WhatsAppIcon, XIcon } from "@/components/ui/BrandIcons";

const btn =
  "grid size-11 place-items-center rounded-sm border border-line text-primary transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-surface";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="mr-2 text-sm font-medium text-primary">Paylaş:</span>
      <a
        className={btn}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn'de paylaş (yeni sekmede açılır)"
      >
        <LinkedInIcon className="size-4" />
      </a>
      <a
        className={btn}
        href={`https://x.com/intent/post?url=${u}&text=${t}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X'te paylaş (yeni sekmede açılır)"
      >
        <XIcon className="size-4" />
      </a>
      <a
        className={btn}
        href={`https://wa.me/?text=${t}%20${u}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile paylaş (yeni sekmede açılır)"
      >
        <WhatsAppIcon className="size-4" />
      </a>
      <button type="button" className={btn} onClick={copy} aria-label="Bağlantıyı kopyala">
        {copied ? <Check aria-hidden="true" className="size-4" /> : <Link2 aria-hidden="true" className="size-4" />}
      </button>
      <span aria-live="polite" className="text-sm text-ink-muted">
        {copied ? "Bağlantı kopyalandı" : ""}
      </span>
    </div>
  );
}
