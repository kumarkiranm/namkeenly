import { Skeleton } from "./Skeleton";

export function TableSkeletonRow({ cols = 5 }: { cols?: number }) {
  return (
    <tr className="border-b border-namkeenly-navy/[0.04]">
      {Array.from({ length: cols }, (_, i) => (
        <td key={i} className="px-4 py-4 sm:px-8 sm:py-5">
          <Skeleton className={i === 0 ? "h-4 w-40" : "h-4 w-16"} shimmer />
        </td>
      ))}
    </tr>
  );
}

export function ProductTableSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-namkeenly-navy/[0.05] bg-white shadow-[0_1px_2px_rgb(31_41_55_/_0.04),0_12px_32px_-12px_rgb(31_41_55_/_0.09)]">
      <div className="flex flex-col gap-4 border-b border-namkeenly-navy/[0.05] bg-gradient-to-r from-white to-namkeenly-cream/30 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8">
        <Skeleton className="h-4 w-24" shimmer />
        <Skeleton className="h-11 w-full rounded-xl sm:w-36" shimmer />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-namkeenly-navy/[0.05] bg-namkeenly-cream/35">
              {["Name", "Region", "Price", "Stock", "Status"].map((label) => (
                <th key={label} className="px-4 py-3 text-left sm:px-8 sm:py-4">
                  <Skeleton className="h-3 w-14" shimmer />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }, (_, i) => (
              <TableSkeletonRow key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
