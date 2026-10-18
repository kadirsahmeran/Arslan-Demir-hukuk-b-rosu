"use client";

import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

// İlk yüklemede içerik gizlenmesin (LCP'yi korumak için); yalnızca
// sonraki sayfa geçişlerinde yumuşak bir giriş animasyonu uygulanır.
let hasNavigated = false;

export default function Template({ children }: { children: ReactNode }) {
  const [animateIn] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 16 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
