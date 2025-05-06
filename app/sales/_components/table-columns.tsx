"use client";

import { SaleDTO } from "@/app/_data-access/sale/get-sales";
import { formatCurrency } from "@/app/_helpers/currency";

import { ColumnDef } from "@tanstack/react-table";

import SalesTableDropdownMenu from "./table-dropdown-menu";
import { ProductDTO } from "@/app/_data-access/product/get-products";
import { ComboboxOption } from "@/app/_components/ui/combobox";

interface SalesTableColumn extends SaleDTO {
  products: ProductDTO[];
  productOptions: ComboboxOption[];
}

export const saleTableColumns: ColumnDef<SalesTableColumn>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidade de Produtos",
  },
  {
    accessorKey: "totalAmount",
    header: "Valor Total",
    cell: ({
      row: {
        original: { totalAmount },
      },
    }) => formatCurrency(totalAmount),
  },
  {
    header: "Data",
    cell: ({
      row: {
        original: { date },
      },
    }) => new Date(date).toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: sale } }) => (
      <SalesTableDropdownMenu
        productOptions={sale.productOptions}
        products={sale.products}
        sale={sale}
      />
    ),
  },
];
