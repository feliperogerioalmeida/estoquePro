import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const productId = params.id;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return NextResponse.json({
      status: 404,
      message: "Product not found",
    });
  }
  return NextResponse.json({
    status: 200,
    product: product,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  await db.product.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json({
    status: 200,
    message: "Product deleted",
  });
}
