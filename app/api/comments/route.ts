import prisma from "@/app/libs/prismadb";
import { currentUserSession } from "@/app/utils/currentUserSession";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const currentUser = await currentUserSession();
  const { articleId, content } = body;

  console.log(articleId);
  

  if (!currentUser) return NextResponse.error();

  const comment = await prisma.comment.create({
    data: {
      articleId,
      username: currentUser?.name,
      content,
    },
  });

  return NextResponse.json(comment);
}
