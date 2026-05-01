import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-namkeenly-navy text-white shadow-namkeenly hover:bg-namkeenly-navy/[0.92] focus-visible:ring-namkeenly-navy/40 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-namkeenly-md motion-safe:active:translate-y-0 motion-safe:active:shadow-namkeenly motion-safe:active:brightness-[0.98]",
  secondary:
    "border border-namkeenly-sage/50 bg-white text-namkeenly-navy shadow-namkeenly-sm hover:border-namkeenly-sage hover:bg-namkeenly-sage/15 focus-visible:ring-namkeenly-sage/40 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-namkeenly motion-safe:active:translate-y-0 motion-safe:active:shadow-namkeenly-sm",
  ghost:
    "border border-namkeenly-navy/12 bg-transparent text-namkeenly-navy hover:border-namkeenly-navy/25 hover:bg-namkeenly-navy/[0.04] focus-visible:ring-namkeenly-navy/25 motion-safe:active:scale-[0.99]",
};

const baseClasses =
  "inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-namkeenly-cream disabled:pointer-events-none disabled:opacity-50 sm:min-h-0";

export type ButtonProps =
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: ButtonVariant;
      children: ReactNode;
    })
  | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
      variant?: ButtonVariant;
      children: ReactNode;
    });

export function Button(props: ButtonProps) {
  const { variant = "primary", className } = props;
  const cls = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, children: ch, className: _cn, ...anchorProps } = props;
    return (
      <a href={href} className={cls} {...anchorProps}>
        {ch}
      </a>
    );
  }

  const btn = props as Extract<ButtonProps, { href?: undefined }>;
  const { variant: _v, children: ch, className: _cl, type = "button", ...buttonProps } = btn;
  return (
    <button type={type} className={cls} {...buttonProps}>
      {ch}
    </button>
  );
}
