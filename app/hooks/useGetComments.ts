import prisma from "@/app/libs/prismadb";

export const useGetComments = async ({ params }: { params?: any }) => {
  try {
    const { articleId } = params;    

    const comments = await prisma.comment.findMany({
      where: {
        articleId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeComments = comments.map((comment) => ({
      ...comment,
      createdAt: comment.createdAt.toISOString(),
    }));
    

    return safeComments;
  } catch (error: any) {
    throw new Error(error);
  }
};
