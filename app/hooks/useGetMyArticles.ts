import prisma from "@/app/libs/prismadb";

export const useGetMyArticles = async ({ userId }: { userId: string }) => {
  if (!userId) return null;

  const articles = await prisma.article.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const safeArticles = articles.map((article) => ({
    ...article,
    createdAt: article.createdAt.toISOString(),
  }));

  return safeArticles;
};
