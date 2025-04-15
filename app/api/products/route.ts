import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const products = await db.product.findMany({});

  return NextResponse.json(products, {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const name = body.name;
  const price = body.price;
  const stock = body.stock;

  const newProduct = await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });

  return NextResponse.json({
    status: 201,
    message: "Product created",
    product: newProduct,
  });
}
