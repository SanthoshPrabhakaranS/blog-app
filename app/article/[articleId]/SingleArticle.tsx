"use client";

import { SafeArticle, SafeComments } from "@/app/types";
import React from "react";
import UsrImg from "../../../public/images/user.png";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import CommentSection from "./CommentSection";
import { User } from "@prisma/client";
import Comments from "./Comments";

interface ArticleProps {
  article?: SafeArticle | null;
  currentUser?: User | null;
  comments?: SafeComments[] | null;
}

const SingleArticle: React.FC<ArticleProps> = ({
  article,
  currentUser,
  comments,
}) => {
  const _publishedDate = (date: any) => {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "MMMM d, yyyy");
    return formattedDate;
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Category */}
      <div>
        <p className="py-1 px-3 rounded-md font-semibold text-[.8rem] bg-primary text-white inline-block">
          {article?.category}
        </p>
      </div>
      {/* Title */}
      <h1 className="text-[1.5rem] md:text-[2rem] font-bold">{article?.title}</h1>
      {/* Author */}
      <div className="flex flex-row gap-3 items-center text-[.8rem] font-semibold text-neutral-500">
        <div className="flex flex-row gap-1 items-center">
          <Image src={UsrImg} alt="user-img" width={"30"} height={"30"} />
          <p>{article?.author}</p>
        </div>
        <p>{_publishedDate(article?.createdAt)}</p>
      </div>
      {/* Image */}
      <div>
        <Image
          src={article?.imageSrc as string}
          alt="image"
          height={"900"}
          width={"900"}
          className="w-full h-full max-h-[600px] object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div
        dangerouslySetInnerHTML={{
          __html: article?.content.replace(/\n/g, "<br />") as string,
        }}
      />
      <CommentSection articleId={article?.id} currentUser={currentUser} />
      <Comments currentUser={currentUser} comments={comments} />
    </div>
  );
};

export default SingleArticle;
