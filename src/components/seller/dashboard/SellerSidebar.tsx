import { cn } from "@/lib/cn";

export type SellerNavId = "products" | "orders" | "analytics";

const items: { id: SellerNavId; label: string }[] = [
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders" },
  { id: "analytics", label: "Analytics" },
];

export interface SellerSidebarProps {
  active: SellerNavId;
  onNavigate: (id: SellerNavId) => void;
}

export function SellerSidebar({ active, onNavigate }: SellerSidebarProps) {
  return (
    <aside className="flex w-full flex-col border-b border-namkeenly-navy/[0.05] bg-gradient-to-b from-white to-namkeenly-cream/40 lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r lg:border-namkeenly-navy/[0.05]">
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <p className="font-display text-xl font-semibold tracking-tight text-namkeenly-navy">Overview</p>
        <p className="mt-2 text-[13px] leading-relaxed text-namkeenly-navy/45">Navigate your workspace</p>
      </div>
      <nav
        className="flex gap-1 px-3 pb-6 lg:flex-col lg:gap-1 lg:px-4 lg:pb-10"
        aria-label="Seller dashboard"
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={cn(
              "min-h-12 touch-manipulation rounded-xl px-4 py-3 text-left text-[14px] font-medium tracking-wide transition-[transform,background-color,box-shadow,color] duration-300 ease-premium sm:min-h-0",
              active === item.id
                ? "bg-white text-namkeenly-navy shadow-namkeenly-sm ring-1 ring-namkeenly-navy/[0.06]"
                : "text-namkeenly-navy/55 hover:bg-white/60 hover:text-namkeenly-navy",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
