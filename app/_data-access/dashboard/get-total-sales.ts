import "server-only";
import { db } from "@/app/_lib/prisma";

export const getTotalSales = async () => {
  const totalSales = await db.sale.count();

  return totalSales;
};
