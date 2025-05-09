import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { SummaryCardSkeleton } from "./_components/summary-card";

import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";

import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import Last14DaysRevenueCard from "./_components/last-14-day-revenue-card";
import { Skeleton } from "../_components/ui/skeleton";
import MostSoldProductsCard, {
  MostSoldProductsCardSkeleton,
} from "./_components/most-sold-products-card";

const Home = async () => {
  return (
    <div className="flex h-full w-full flex-col space-y-8 rounded-lg p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão Geral dos dados</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>
      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalInStockCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>

      <div className="grid h-full min-h-0 grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)] gap-6">
        <Suspense
          fallback={
            <div className="rounded-xl bg-white p-6">
              <div className="space-y-2">
                <Skeleton className="h-7 w-12" />
                <Skeleton className="h-5 w-[86.26px]" />
                <Skeleton className="h-[450px] w-full" />
              </div>
            </div>
          }
        >
          <Last14DaysRevenueCard />
        </Suspense>

        <Suspense fallback={<MostSoldProductsCardSkeleton />}>
          <MostSoldProductsCard />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
