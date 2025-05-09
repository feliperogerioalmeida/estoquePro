import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { SummaryCardSkeleton } from "./_components/summary-card";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";

import MostSoldProductItem from "./_components/most-sold-products";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";

import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalInStockCard from "./_components/total-in-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import Last14DaysRevenueCard from "./_components/last-14-day-revenue-card";
import { Skeleton } from "../_components/ui/skeleton";

const Home = async () => {
  const { mostSoldProducts } = await getDashboard();

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

        <div className="bg-red flex h-full w-full flex-1 flex-col overflow-hidden rounded-xl bg-white">
          <p className="p-6 text-lg font-semibold text-slate-900">
            Produtos mais vendidos
          </p>
          <div className="space-y-7 overflow-y-auto px-6 pb-6">
            {mostSoldProducts.map((product) => (
              <MostSoldProductItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
