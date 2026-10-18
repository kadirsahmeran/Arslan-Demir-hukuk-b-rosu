"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Tüm sitede Lenis smooth scroll. `anchors` sayesinde `#iletisim` gibi
 * sayfa içi bağlantılar da Lenis ile kayar. Azaltılmış hareket tercihinde
 * yumuşatma kapatılır; Framer Motion da transform animasyonlarını sadeleştirir.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: !reduce,
        anchors: { offset: -96 },
        stopInertiaOnNavigate: true,
        autoRaf: true,
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
