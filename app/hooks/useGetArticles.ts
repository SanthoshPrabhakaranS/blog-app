import prisma from "@/app/libs/prismadb";

export const useGetArticles = async ({
  page = 1,
  take = 2,
}: {
  page?: number;
  take?: number;
}) => {
  const skip = (page - 1) * take;
  const articles = await prisma.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip,
    take,
  });

  const safeArticles = articles.map((article) => ({
    ...article,
    createdAt: article.createdAt.toISOString(),
  }));

  return safeArticles;
};
