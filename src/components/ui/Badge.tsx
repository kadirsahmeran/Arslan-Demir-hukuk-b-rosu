import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-line bg-surface px-2.5 py-1 text-xs font-medium tracking-wide text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
