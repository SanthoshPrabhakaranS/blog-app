"use client";

import { useAddComment } from "@/app/hooks/useAddComment";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface CommentSectionProps {
  currentUser?: User | null;
  articleId?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  currentUser,
  articleId,
}) => {
  const [comments, setComments] = useState("");
  const router = useRouter();
  const { mutate } = useAddComment({ articleId } as any);

  const _addCommnet = async () => {
    if (!currentUser) return toast.error("You must be logged in");
    await mutate(comments);
    setComments("");
    router.refresh();
  };

  return (
    <div className="mt-[3rem]">
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Leave your comment"
        className="w-full p-2 border border-neutral-400 focus:outline-primary h-[200px] rounded-lg"
      ></textarea>
      <button
        disabled={comments === ""}
        onClick={_addCommnet}
        className={`py-2 px-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/80 ${
          comments === "" ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Send
      </button>
    </div>
  );
};

export default CommentSection;
