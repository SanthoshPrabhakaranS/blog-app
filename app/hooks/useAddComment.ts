"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

export const useAddComment = ({ articleId }: { articleId: string }) => {
    const router = useRouter()

  return useMutation(
    async (comment: string) => {
      await axios.post("/api/comments", { content: comment, articleId });
    },
    {
      onSuccess: () => {
        toast.success("Comment added successfully!");
        router.refresh()
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );
};
