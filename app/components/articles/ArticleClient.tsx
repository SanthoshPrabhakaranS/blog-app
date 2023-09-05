"use client";

import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import { SafeArticle } from "@/app/types";
import { usePathname, useRouter } from "next/navigation";
import { format, parseISO } from "date-fns";
import { useDeleteArticle } from "@/app/hooks/useDeleteArticle";

interface ArticleClientProps {
  article: SafeArticle;
}

const ArticleClient: React.FC<ArticleClientProps> = ({ article }) => {
  const router = useRouter();
  const pathname = usePathname();

  const truncate = (input: string) => {
    return input?.length > 300 ? `${input.substring(0, 70)}...` : input;
  };

  const _publishedDate = (date: any) => {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "MMM, d");
    return formattedDate;
  };

  const { mutate } = useDeleteArticle();

  const _deleteArticle = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <div
      onClick={() => router.push(`/article/${article?.id}`)}
      className="flex flex-col rounded-xl shadow-md cursor-pointer hover:-translate-y-2 transition-all duration-300"
    >
      <Image
        className="w-full h-full object-cover rounded-t-xl"
        alt="article-image"
        src={article?.imageSrc}
        width={"400"}
        height={"400"}
      />
      <div className="flex flex-col gap-2 p-2 py-3">
        <div className="">
          <p className="inline-block px-2 py-1 bg-blue-50 text-primary text-[.8rem] rounded-md font-semibold">
            {article?.category}
          </p>
        </div>
        <h1 className="font-bold text-[1.3rem] text-secondaryLight truncate">
          {article?.title}
        </h1>
        <p className="text-secondaryDark font-medium text-sm md:text-base">
          {truncate(article?.content)}
        </p>
        <div>
          <div className="italic flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-bold">{article?.author}</p>
              <div className="flex flex-row gap-1 items-center text-[.6rem] font-medium text-neutral-500">
                <MdVerified color="#6bc178" size="15" />
                <p>Verified writer</p>
              </div>
            </div>
            <p className="text-sm text-neutral-500 font-semibold">
              {_publishedDate(article?.createdAt)}
            </p>
          </div>
        </div>
        {pathname.includes("/my-articles") ? (
          <button
            onClick={(e) => _deleteArticle(article?.id, e)}
            className="text-sm p-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/80"
          >
            Delete Article
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ArticleClient;
