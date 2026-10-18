import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

/** Dinamik OG görselleri için ortak şablon (next/og ImageResponse içinde kullanılır). */
export function OgTemplate({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0F1E3A",
        color: "#F7F5F0",
        padding: "72px 80px",
        border: "2px solid #B08D57",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 56, height: 2, background: "#B08D57" }} />
        <div style={{ fontSize: 24, letterSpacing: 6, color: "#B08D57" }}>
          {eyebrow.toLocaleUpperCase("tr-TR")}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: title.length > 60 ? 56 : 68, lineHeight: 1.12, maxWidth: 1000 }}>
        {title}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34 }}>
            Arslan <span style={{ color: "#B08D57", margin: "0 10px" }}>&amp;</span> Demir
          </div>
          <div style={{ fontSize: 16, letterSpacing: 8, opacity: 0.7, marginTop: 6 }}>
            HUKUK BÜROSU
          </div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.7 }}>
          {footer ?? `${siteConfig.district}, ${siteConfig.city}`}
        </div>
      </div>
    </div>
  );
}
