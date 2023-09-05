"use client";

import React from "react";
import Container from "../components/Container";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterUser } from "../hooks/useRegisterUser";

const schema = yup
  .object({
    name: yup.string().required("Name is required!"),
    email: yup.string().required("Email is required!"),
    password: yup.string().required("Password is required!"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const router = useRouter();
  const { mutate } = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    try {
      mutate(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="h-full min-h-[100vh] flex flex-col items-center justify-center py-5">
        <h1 className="text-[2rem] font-bold mb-6 text-secondaryDark">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px] flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-neutral-500" htmlFor="name">
              Name
            </label>
            <input
              {...register("name")}
              className={`focus:outline-none p-3 border-2 rounded-md text-sm ${
                errors?.name?.message ? "border-red-400" : null
              }`}
              type="text"
              placeholder="Enter name"
            />
            <p className="text-red-500 text-sm">{errors?.name?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-neutral-500" htmlFor="name">
              Email
            </label>
            <input
              {...register("email")}
              className={`focus:outline-none p-3 border-2 rounded-md text-sm ${
                errors?.name?.message ? "border-red-400" : null
              }`}
              type="email"
              placeholder="Enter email"
            />
            <p className="text-red-500 text-sm">{errors?.email?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-neutral-500" htmlFor="name">
              Password
            </label>
            <input
              {...register("password")}
              className={`focus:outline-none p-3 border-2 rounded-md text-sm ${
                errors?.name?.message ? "border-red-400" : null
              }`}
              type="password"
              placeholder="Enter password"
            />
            <p className="text-red-500 text-sm">{errors?.password?.message}</p>
          </div>
          <button
            type="submit"
            className="p-3 bg-primary rounded-md text-white font-semibold hover:bg-primary/80"
          >
            Register
          </button>
          <p
            onClick={() => router.push("/login")}
            className="font-semibold text-neutral-500"
          >
            Alreay have an account?{" "}
            <span className="cursor-pointer text-primary">Login now</span>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Register;
