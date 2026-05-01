import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AnalyticsPanel,
  OrdersTable,
  ProductsTable,
  SellerSidebar,
  type SellerNavId,
  StatsCards,
} from "@/components/seller/dashboard";
import { sellerOrders, sellerProducts } from "@/data/sellerMock";
import { OrganicBackdrop } from "@/components/visual";

export function SellerDashboardPage() {
  const [active, setActive] = useState<SellerNavId>("products");

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-namkeenly-cream via-namkeenly-wheat/45 to-[#EDE8E0] font-sans text-namkeenly-navy antialiased">
      <OrganicBackdrop variant="dashboard" />
      <header className="sticky top-0 z-40 border-b border-namkeenly-navy/[0.05] bg-white/88 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="-m-2 inline-flex min-h-11 items-center rounded-lg p-2 text-[13px] font-medium tracking-wide text-namkeenly-navy/50 transition-colors hover:text-namkeenly-navy sm:min-h-0"
            >
              ← Storefront
            </Link>
            <span className="hidden h-4 w-px bg-namkeenly-navy/[0.12] sm:block" aria-hidden />
            <span className="hidden text-[13px] font-medium tracking-wide text-namkeenly-navy/70 sm:inline">
              Seller
            </span>
          </div>
          <span className="text-[13px] text-namkeenly-navy/40">Malabar Crisp Co.</span>
        </div>
      </header>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1600px] flex-col lg:flex-row">
        <SellerSidebar active={active} onNavigate={setActive} />

        <main className="relative flex-1 px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 xl:px-16">
          <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12 lg:space-y-14">
            <header className="max-w-2xl space-y-2 sm:space-y-3">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-namkeenly-navy sm:text-3xl sm:leading-tight lg:text-[2.125rem]">
                {active === "products" && "Products"}
                {active === "orders" && "Orders"}
                {active === "analytics" && "Analytics"}
              </h1>
              <p className="text-[15px] leading-relaxed text-namkeenly-navy/50">
                {active === "products" && "Listings, pricing, and stock—kept simple."}
                {active === "orders" && "Fulfillment and recent buyer activity."}
                {active === "analytics" && "A calm read on how your shop is performing."}
              </p>
            </header>

            {active !== "analytics" ? <StatsCards /> : null}

            {active === "products" ? <ProductsTable products={sellerProducts} /> : null}
            {active === "orders" ? <OrdersTable orders={sellerOrders} /> : null}
            {active === "analytics" ? <AnalyticsPanel /> : null}
          </div>
        </main>
      </div>
    </div>
  );
}
