"use client";

import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

export const useRegisterUser = () => {
  const router = useRouter()
  return useMutation(
    async (userData: RegisterUser) => {
      await axios.post("/api/register", userData);
    },
    {
      onSuccess: () => {
        toast.success("User registered successfully!");
        router.push("/login");
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    }
  );
};
