import ProductStatusBadge from "@/app/_components/product-status-badge";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { MostSoldProductsDTO } from "@/app/_data-access/dashboard/get-most-sold-products";

import { formatCurrency } from "@/app/_helpers/currency";

interface MostSoldProductItemProps {
  product: MostSoldProductsDTO;
}

const MostSoldProductItem = ({ product }: MostSoldProductItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[6px]">
        <ProductStatusBadge status={product.status} />
        <p className="font-semibold">{product.name}</p>
        <p className="font-medium text-slate-500">
          {formatCurrency(Number(product.price))}
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold">{product.totalSold} vendido(s)</p>
      </div>
    </div>
  );
};

export const MostSoldProductItemSkeleton = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[6px]">
        <Skeleton className="h-5 w-20 rounded-md" />
        <Skeleton className="h-4 w-32 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>
      <div>
        <Skeleton className="h-4 w-20 rounded-md" />
      </div>
    </div>
  );
};

export default MostSoldProductItem;
