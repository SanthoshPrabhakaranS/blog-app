import React from "react";
import Container from "../components/Container";
import ClientOnly from "../components/ClientOnly";
import { useGetMyArticles } from "../hooks/useGetMyArticles";
import { currentUserSession } from "../utils/currentUserSession";
import ArticleClient from "../components/articles/ArticleClient";

const MyArticles = async () => {
  const currentUser = await currentUserSession();

  if (!currentUser) return null;

  const articles = await useGetMyArticles({ userId: currentUser?.id as any });

  if (articles?.length === 0) {
    return (
      <ClientOnly>
        <div className="h-full min-h-[100vh] pt-[5rem] flex justify-center items-center font-semibold">
          It seems like you haven't written any articles yet!
        </div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="h-full min-h-[100vh] pt-[5rem] pb-[2rem] flex flex-col gap-4">
          <h1 className="font-bold text-secondaryLight text-[1.2rem]">
            My Articles
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {articles?.map((article) => {
              return <ArticleClient key={article.id} article={article} />;
            })}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default MyArticles;
