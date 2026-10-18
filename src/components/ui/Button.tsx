import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "group/btn relative isolate inline-flex items-center justify-center gap-3 overflow-hidden",
    "font-sans font-medium tracking-wide whitespace-nowrap rounded-sm",
    "transition-[color,background-color,border-color,transform] duration-[350ms] ease-out-expo",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
  ],
  {
    variants: {
      variant: {
        // Altın katman soldan sağa kayarak dolar
        primary: [
          "bg-primary text-surface hover:text-primary",
          "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-accent",
          "before:transition-transform before:duration-[400ms] before:ease-out-expo hover:before:scale-x-100",
        ],
        // Koyu zeminler için: altın zemin, krem katman soldan sağa dolar
        accent: [
          "bg-accent text-primary",
          "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-surface",
          "before:transition-transform before:duration-[400ms] before:ease-out-expo hover:before:scale-x-100",
        ],
        // Açık zeminde lacivert, koyu zeminde krem kenarlık; zemin aşağıdan yukarı dolar
        outline: [
          "border border-primary text-primary hover:text-surface",
          "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-primary",
          "before:transition-transform before:duration-[400ms] before:ease-out-expo hover:before:scale-y-100",
        ],
        outlineLight: [
          "border border-surface/60 text-surface hover:text-primary hover:border-surface",
          "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-surface",
          "before:transition-transform before:duration-[400ms] before:ease-out-expo hover:before:scale-y-100",
        ],
        ghost: "text-primary hover:bg-primary/5",
        // Altı çizgi soldan sağa uzar
        link: [
          "rounded-none px-0! py-1! text-primary",
          "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent",
          "after:transition-transform after:duration-[400ms] after:ease-out-expo hover:after:scale-x-100",
        ],
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-[0.9375rem]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  /** Sağda kayan ok ikonu göster */
  arrow?: boolean;
  children: ReactNode;
};

function ButtonInner({ arrow, children }: { arrow?: boolean; children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-[350ms] ease-out-expo group-hover/btn:translate-x-1"
        />
      )}
    </>
  );
}

export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  type = "button",
  ...props
}: ButtonOwnProps & Omit<ComponentProps<"button">, "children">) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  arrow,
  className,
  children,
  ...props
}: ButtonOwnProps & Omit<ComponentProps<typeof Link>, "children">) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </Link>
  );
}

/** Harici bağlantılar (tel:, mailto:, wa.me) için */
export function ButtonAnchor({
  variant,
  size,
  arrow,
  className,
  children,
  ...props
}: ButtonOwnProps & Omit<ComponentProps<"a">, "children">) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </a>
  );
}
