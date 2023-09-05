import { Article, Comment } from "@prisma/client";

export type SafeArticle = Omit<Article, "createdAt"> & {
  createdAt: string;
};

export type SafeComments = Omit<Comment, "createdAt"> & {
  createdAt: string;
};
