import prisma from "@/app/libs/prismadb";

interface Iparams {
  articleId?: string;
}

export const useGetSingleArticle = async ({ params }: { params: Iparams }) => {
  try {
    const { articleId } = params;

    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!articleId) return null;

    return {
      ...article,
      createdAt: article?.createdAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
};
