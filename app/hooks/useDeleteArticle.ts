"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";

export const useDeleteArticle = () => {
  const router = useRouter();
  return useMutation(
    async (id: string) => {
      await axios.post("/api/deleteArticle", { id });
    },
    {
      onSuccess: () => {
        toast.success("Article deleted successfully!");
        router.refresh();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );
};
