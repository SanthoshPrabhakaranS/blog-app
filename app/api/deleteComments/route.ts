import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    const comment = await prisma.comment.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(comment);
  } catch (error: any) {
    throw new Error(error);
  }
}
