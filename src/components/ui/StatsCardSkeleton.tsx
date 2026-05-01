import { Skeleton } from "./Skeleton";

export function StatsCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/80 bg-gradient-to-br from-white to-namkeenly-cream/60 px-5 py-6 shadow-[0_1px_2px_rgb(31_41_55_/_0.04),0_8px_24px_-6px_rgb(31_41_55_/_0.07)] sm:px-7 sm:py-7">
      <Skeleton className="h-3 w-28 rounded-md" shimmer />
      <Skeleton className="mt-4 h-9 w-32 rounded-md sm:h-10 sm:w-36" shimmer />
    </div>
  );
}

export function StatsCardSkeletonRow({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <StatsCardSkeleton key={i} />
      ))}
    </div>
  );
}
