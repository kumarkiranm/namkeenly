import { cn } from "@/lib/cn";

export function PlaceholderImg({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-gradient-to-br from-namkeenly-sage/30 to-namkeenly-accent/20 font-display text-sm font-medium text-namkeenly-navy/50",
        className,
      )}
    >
      {label}
    </div>
  );
}
