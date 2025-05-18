import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/_lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }, // 👈 Promise aqui
): Promise<NextResponse> {
  const { id: productId } = await params; // 👈 await
  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return NextResponse.json(
      { status: 404, message: "Product not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({ status: 200, product });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }, // 👈 idem
): Promise<NextResponse> {
  const { id } = await params; // 👈 await
  await db.product.delete({ where: { id } });
  return NextResponse.json({ status: 200, message: "Product deleted" });
}
