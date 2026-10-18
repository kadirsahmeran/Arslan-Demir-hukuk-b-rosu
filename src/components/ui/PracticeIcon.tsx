import {
  Briefcase,
  Building2,
  HeartHandshake,
  House,
  Receipt,
  Scale,
  ScrollText,
  ShoppingBag,
  type LucideProps,
} from "lucide-react";
import type { PracticeIconKey } from "@/lib/data/practice-areas";

const icons = {
  family: HeartHandshake,
  criminal: Scale,
  employment: Briefcase,
  realEstate: House,
  commercial: Building2,
  inheritance: ScrollText,
  enforcement: Receipt,
  consumer: ShoppingBag,
} satisfies Record<PracticeIconKey, unknown>;

export function PracticeIcon({ icon, ...props }: { icon: PracticeIconKey } & LucideProps) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" strokeWidth={1.4} {...props} />;
}
