import { Skeleton } from "./Skeleton";

/** Matches SnackProductCard / product card layout for loading states */
export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-namkeenly-navy/[0.05] bg-white shadow-namkeenly">
      <Skeleton className="aspect-[4/3] w-full rounded-none rounded-t-2xl" shimmer />
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <Skeleton className="h-3 w-16 rounded-full" shimmer />
        <Skeleton className="h-5 w-[85%] rounded-md" shimmer />
        <Skeleton className="h-3 w-24 rounded-full" shimmer />
        <Skeleton className="mt-1 h-4 w-full rounded-md" shimmer />
        <div className="mt-3 flex items-end justify-between gap-3 pt-1">
          <Skeleton className="h-8 w-20 rounded-md" shimmer />
          <Skeleton className="h-11 min-w-[8rem] flex-1 rounded-xl sm:flex-initial" shimmer />
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
