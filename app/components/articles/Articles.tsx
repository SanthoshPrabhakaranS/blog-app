"use client";

import React from "react";
import ArticleClient from "./ArticleClient";
import { SafeArticle } from "@/app/types";
import { format, parseISO } from "date-fns";

interface ArticlesProps {
  articles: SafeArticle[] | null;
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {


  return (
    <div className="pt-[3rem] md:pt-[9rem] pb-[2rem]">
      <h1 className="font-black text-[1.1rem] md:text-[1.3rem] mb-5">
        Latest Post
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {articles?.map((article) => {
          return <ArticleClient key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
