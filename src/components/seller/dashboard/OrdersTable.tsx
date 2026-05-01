import type { OrderRow } from "@/data/sellerMock";
import { cn } from "@/lib/cn";

export interface OrdersTableProps {
  orders: OrderRow[];
}

function OrderStatus({ status }: { status: OrderRow["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-medium",
        status === "Delivered" && "bg-namkeenly-sage/20 text-namkeenly-navy/85",
        status === "Shipped" && "bg-namkeenly-navy/[0.06] text-namkeenly-navy/75",
        status === "Processing" && "bg-namkeenly-accent/12 text-namkeenly-navy/85",
        status === "Cancelled" && "bg-namkeenly-navy/[0.04] text-namkeenly-navy/45",
      )}
    >
      {status}
    </span>
  );
}

export function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-namkeenly-navy/[0.05] bg-white shadow-[0_1px_2px_rgb(31_41_55_/_0.04),0_12px_32px_-12px_rgb(31_41_55_/_0.09)]">
      <div className="border-b border-namkeenly-navy/[0.05] bg-gradient-to-r from-white to-namkeenly-cream/30 px-5 py-6 sm:px-8 sm:py-8">
        <p className="text-[14px] text-namkeenly-navy/45">
          <span className="font-medium text-namkeenly-navy/70">{orders.length}</span> shown
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-[14px]">
          <thead>
            <tr className="border-b border-namkeenly-navy/[0.05] bg-namkeenly-cream/35">
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Order
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Customer
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Date
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Amount
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-namkeenly-navy/[0.04] text-namkeenly-navy/80 transition-colors last:border-0 hover:bg-namkeenly-cream/25"
              >
                <td className="whitespace-nowrap px-4 py-4 font-mono text-[13px] font-medium text-namkeenly-navy/90 sm:px-8 sm:py-5">
                  {o.id}
                </td>
                <td className="whitespace-nowrap px-4 py-4 sm:px-8 sm:py-5">{o.customer}</td>
                <td className="whitespace-nowrap px-4 py-4 text-namkeenly-navy/50 sm:px-8 sm:py-5">{o.date}</td>
                <td className="whitespace-nowrap px-4 py-4 tabular-nums text-namkeenly-navy/75 sm:px-8 sm:py-5">{o.amount}</td>
                <td className="whitespace-nowrap px-4 py-4 sm:px-8 sm:py-5">
                  <OrderStatus status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
