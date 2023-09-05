"use client";

import { Article } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { FieldValues, useForm } from "react-hook-form";

export const useCreateArticle = () => {
  const router = useRouter();
  const { reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      imageSrc: "",
      content: "",
      category: "",
    },
  });

  return useMutation(
    async (article: Article) => {
      await axios.post("/api/articles", article);
    },
    {
      onSuccess: () => {
        toast.success("Article created successfully!");
        router.push("/");
        router.refresh()
        reset();
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );
};
