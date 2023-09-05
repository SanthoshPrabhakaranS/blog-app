import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { currentUserSession } from "@/app/utils/currentUserSession";

export async function POST(request: Request) {
  const currentUser = await currentUserSession();
  const body = await request.json();
  const { title, category, imageSrc, content } = body;

  if (!currentUser) {
    return NextResponse.error();
  }

  const article = await prisma.article.create({
    data: {
      userId: currentUser.id,
      title,
      category,
      imageSrc,
      content,
      author: currentUser.name
    },
  });

  return NextResponse.json(article);
}
