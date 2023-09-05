"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

export const useDeleteComment = () => {
  const router = useRouter();

  return useMutation(
    async (id: string) => {
      await axios.post("/api/deleteComments", { id });
    },
    {
      onSuccess: () => {
        toast.success("Comment deleted successfully!");
        router.refresh();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );
};
