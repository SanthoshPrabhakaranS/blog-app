import Container from "@/app/components/Container";
import { useGetSingleArticle } from "@/app/hooks/useGetSingleArticle";
import React from "react";
import SingleArticle from "./SingleArticle";
import { currentUserSession } from "@/app/utils/currentUserSession";
import { useGetComments } from "@/app/hooks/useGetComments";

interface Iparams {
  articleId?: string;
}

const ArticlePage = async ({ params }: { params: Iparams }) => {
  const article = await useGetSingleArticle({ params });
  const currentUser = await currentUserSession();
  const comments = await useGetComments({ params });
  
  return (
    <Container>
      <div className="pt-[5rem] pb-[2rem] px-[.5rem] md:px-[4rem]">
        <SingleArticle
          currentUser={currentUser}
          article={article as any}
          comments={comments}
        />
      </div>
    </Container>
  );
};

export default ArticlePage;
