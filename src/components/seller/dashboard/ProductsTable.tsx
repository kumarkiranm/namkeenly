import { Button } from "@/components/namkeenly";
import type { ProductRow } from "@/data/sellerMock";
import { cn } from "@/lib/cn";

export interface ProductsTableProps {
  products: ProductRow[];
}

function StatusPill({ status }: { status: ProductRow["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-medium",
        status === "Live" && "bg-namkeenly-sage/20 text-namkeenly-navy/85",
        status === "Draft" && "bg-namkeenly-navy/[0.05] text-namkeenly-navy/55",
        status === "Low stock" && "bg-namkeenly-accent/12 text-namkeenly-navy/85",
      )}
    >
      {status}
    </span>
  );
}

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-namkeenly-navy/[0.05] bg-white shadow-[0_1px_2px_rgb(31_41_55_/_0.04),0_12px_32px_-12px_rgb(31_41_55_/_0.09)]">
      <div className="flex flex-col gap-4 border-b border-namkeenly-navy/[0.05] bg-gradient-to-r from-white to-namkeenly-cream/30 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-8">
        <p className="text-[14px] text-namkeenly-navy/45">
          <span className="font-medium text-namkeenly-navy/70">{products.length}</span> listings
        </p>
        <Button type="button" variant="primary" className="w-full shrink-0 sm:w-auto">
          Add product
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[14px]">
          <thead>
            <tr className="border-b border-namkeenly-navy/[0.05] bg-namkeenly-cream/35">
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Name
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Region
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Price
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Stock
              </th>
              <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-namkeenly-navy/40 sm:px-8 sm:py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b border-namkeenly-navy/[0.04] text-namkeenly-navy/80 transition-colors last:border-0 hover:bg-namkeenly-cream/25"
              >
                <td className="whitespace-nowrap px-4 py-4 font-medium text-namkeenly-navy sm:px-8 sm:py-5">{p.name}</td>
                <td className="whitespace-nowrap px-4 py-4 text-namkeenly-navy/55 sm:px-8 sm:py-5">{p.region}</td>
                <td className="whitespace-nowrap px-4 py-4 tabular-nums text-namkeenly-navy/75 sm:px-8 sm:py-5">{p.price}</td>
                <td className="whitespace-nowrap px-4 py-4 tabular-nums text-namkeenly-navy/55 sm:px-8 sm:py-5">{p.stock}</td>
                <td className="whitespace-nowrap px-4 py-4 sm:px-8 sm:py-5">
                  <StatusPill status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
