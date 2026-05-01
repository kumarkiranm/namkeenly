import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/namkeenly";
import { cn } from "@/lib/cn";

const nav = [
  { to: "/#shop", label: "Shop" },
  { to: "/#categories", label: "Categories" },
  { to: "/#sellers", label: "Sellers" },
  { to: "/#story", label: "Story" },
] as const;

const primaryNavCtaClass =
  "inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-xl bg-namkeenly-navy px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-namkeenly transition-[transform,box-shadow,background-color] duration-300 ease-premium hover:bg-namkeenly-navy/[0.92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namkeenly-navy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-namkeenly-cream motion-safe:hover:-translate-y-px motion-safe:hover:shadow-namkeenly-md motion-safe:active:translate-y-0 sm:min-h-0";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative h-3.5 w-5" aria-hidden>
      <span
        className={cn(
          "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-namkeenly-navy transition-transform duration-200",
          open && "translate-y-1.5 rotate-45",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-namkeenly-navy transition-opacity duration-200",
          open && "opacity-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-3 h-0.5 w-5 rounded-full bg-namkeenly-navy transition-transform duration-200",
          open && "-translate-y-1.5 -rotate-45",
        )}
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-namkeenly-navy/[0.05] bg-gradient-to-r from-white/92 via-namkeenly-cream/95 to-namkeenly-wheat/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Link to="/" className="group min-w-0 shrink-0 text-left">
          <img
            src="/logo-horizontal.png"
            alt="Namkeenly"
            width={604}
            height={210}
            className="h-9 w-auto sm:h-10"
            decoding="async"
          />
          <p className="mt-0.5 hidden text-xs text-namkeenly-navy/50 sm:block">
            Regional snacks, handpicked
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-namkeenly-navy/70 transition-colors hover:text-namkeenly-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" className="!px-4">
            Sign in
          </Button>
          <Link to="/#shop" className={primaryNavCtaClass}>
            Browse shop
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-namkeenly-navy/10 bg-white/80 text-namkeenly-navy shadow-namkeenly-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-namkeenly-navy/[0.06] bg-namkeenly-cream/95 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:px-6"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-12 items-center rounded-xl px-3 py-3 text-base font-medium text-namkeenly-navy/80 active:bg-white/50"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-namkeenly-navy/[0.06] pt-4">
            <Button variant="ghost" className="w-full justify-center">
              Sign in
            </Button>
            <Link
              to="/#shop"
              className={primaryNavCtaClass + " w-full justify-center"}
              onClick={() => setOpen(false)}
            >
              Browse shop
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
