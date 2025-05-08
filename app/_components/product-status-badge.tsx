import { Badge } from "./ui/badge";
import { ProductStatusDTO } from "../_data-access/product/get-products";

const getStatusLabel = (status: string) => {
  if (status == "IN_STOCK") {
    return "Em estoque";
  }
  return "Fora de Estoque";
};

interface ProductStatusBadgeProps {
  status: ProductStatusDTO;
}

const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  const label = getStatusLabel(status);
  return (
    <Badge
      variant={label == "Em estoque" ? "default" : "outline"}
      className="gap-1.5"
    >
      {label}
    </Badge>
  );
};

export default ProductStatusBadge;
