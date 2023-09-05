"use client";

import { SafeComments } from "@/app/types";
import React from "react";
import UsrImg from "../../../public/images/user.png";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteComment } from "@/app/hooks/useDeleteComment";
import { User } from "@prisma/client";

interface CommentsProps {
  comments?: SafeComments[] | null;
  currentUser?: User | null;
}

const Comments: React.FC<CommentsProps> = ({ comments, currentUser }) => {

  const _publishedDate = (date: any) => {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "dd MMMM yyyy, hh:mm a");
    return formattedDate;
  };

  const { mutate } = useDeleteComment();

  const _deleteComment = (id: string) => {
    mutate(id);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-sm">All Comments ({comments?.length})</h1>
      <div className="flex flex-col gap-2">
        {comments?.map((comment) => {
          return (
            <div
              className="bg-neutral-100 flex flex-row gap-2 p-3 rounded-md"
              key={comment.id}
            >
              <div>
                <Image
                  src={UsrImg}
                  alt="user-image"
                  width={"30"}
                  height={"30"}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-[.8rem] text-secondaryDark">
                  {comment?.username}
                </h1>
                <p className="text-[.5rem] text-neutral-500">
                  {_publishedDate(comment?.createdAt)}
                </p>
                <p className="text-[.9rem] mt-1 text-neutral-700 mb-2">
                  {comment?.content}
                </p>
                <div>
                  {currentUser?.name === comment?.username && (
                    <span
                      onClick={() => _deleteComment(comment?.id)}
                      className="cursor-pointer inline-block"
                    >
                      <MdDeleteOutline color="#777575" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
