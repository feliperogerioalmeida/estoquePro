import { Skeleton } from "@/app/_components/ui/skeleton";
import { SummaryCard } from "./summary-card";

const SummaryCardSkeleton = () => {
  return (
    <SummaryCard className="p-0">
      <Skeleton className="h-full w-full" />
    </SummaryCard>
  );
};

export default SummaryCardSkeleton;
