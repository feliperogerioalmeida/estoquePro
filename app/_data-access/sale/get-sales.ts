"use server";
import { db } from "@/app/_lib/prisma";

interface SaleProuctDTO {
  productId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
}

export interface SaleDTO {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
  saleProducts: SaleProuctDTO[];
}

export const getSales = async (): Promise<SaleDTO[]> => {
  const sales = await db.sale.findMany({
    include: {
      saleProducts: {
        include: {
          product: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return sales.map((sale) => ({
    id: sale.id,
    date: sale.date,
    productNames: sale.saleProducts
      .map((product) => product.product.name)
      .join("•"),
    totalAmount: sale.saleProducts.reduce(
      (acc, saleProduct) =>
        acc + saleProduct.quantity * Number(saleProduct.unitPrice),
      0,
    ),
    totalProducts: sale.saleProducts.reduce(
      (acc, saleProduct) => acc + saleProduct.quantity,
      0,
    ),
    saleProducts: sale.saleProducts.map(
      (saleProduct): SaleProuctDTO => ({
        productId: saleProduct.productId,
        quantity: saleProduct.quantity,
        unitPrice: Number(saleProduct.unitPrice),
        productName: saleProduct.product.name,
      }),
    ),
  }));
};
