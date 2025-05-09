import { Skeleton } from "@/app/_components/ui/skeleton";
import { cn } from "@/app/_lib/utils";
import React from "react";

export const SummaryCardIcon = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-slate-50 text-slate-500">
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-sm font-medium text-slate-500">{children}</p>;
};

export const SummaryCardValue = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-2xl font-semibold text-slate-900">{children}</p>;
};

export const SummaryCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("rounded-xl bg-white p-6", className)}>{children}</div>
  );
};

export const SummaryCardSkeleton = () => {
  return (
    <div className="rounded-xl bg-white p-6">
      <div className="space-y-2">
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-5 w-[86.26px]" />
        <Skeleton className="h-8 w-48" />
      </div>
    </div>
  );
};
