"use client";

import React from "react";
import Container from "../components/Container";
import ClientOnly from "../components/ClientOnly";
import SelectImage from "./SelectImage";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateArticle } from "../hooks/useCreateArticle";
import { Article } from "@prisma/client";

const CreateArticlePage = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      imageSrc: "",
      content: "",
      category: "",
    },
  });

  const title = watch("title");
  const imageSrc = watch("imageSrc");
  const content = watch("content");
  const category = watch("category");

  const customSetValue = (id: string, value: string) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const categoryItems = [
    "Food",
    "Travel",
    "Health and Fitness",
    "Fashion",
    "Photography",
    "Personal",
    "Technology",
  ];

  const { mutate } = useCreateArticle();

  const onSubmit: SubmitHandler<FieldValues> = (data: Article | any) => {
    mutate(data);
  };

  return (
    <ClientOnly>
      <Container>
        <div className="max-w-[1400px] mx-auto pt-[5rem] pb-8 flex flex-col gap-3">
          <h1 className="text-lg font-bold text-secondaryLight">
            Create Your Article
          </h1>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* image */}
            <SelectImage
              value={imageSrc}
              onChange={(imageSrc) => customSetValue("imageSrc", imageSrc)}
            />

            {/* Heading */}
            <div className="flex flex-col md:flex-row w-full gap-2">
              <input
                value={title}
                onChange={(e) => customSetValue("title", e.target.value)}
                className="p-3 focus:outline-1 focus:outline-neutral-300 border rounded-lg border-neutral-300 text-lg font-bold w-[100%] md:w-[70%]"
                type="text"
                placeholder="Enter your heading here..."
              />
              <select
                value={category}
                onChange={(e) => customSetValue("category", e.target.value)}
                className="w-[40%] bg-transparent focus:outline-neutral-300 border border-neutral-300 rounded-lg p-2 cursor-pointer font-medium"
              >
                <option value="">Select a category</option>
                {categoryItems.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Body */}
            <textarea
              value={content}
              onChange={(e) => {
                customSetValue("content", e.target.value);
              }}
              style={{ height: "auto" }}
              className="p-3 focus:outline-1 focus:outline-neutral-300 font-semibold resize-none min-h-[700px] text-[.95rem] border rounded-lg border-neutral-300"
              placeholder="Enter your article content here..."
            ></textarea>

            {/* action buttons */}
            <div className="flex flex-row gap-5">
              <button
                disabled={
                  title === "" ||
                  imageSrc === "" ||
                  category === "" ||
                  content === ""
                }
                className={`p-3 text-sm bg-primary text-white font-semibold rounded-md hover:scale-105 transition ${
                  title === "" ||
                  imageSrc === "" ||
                  category === "" ||
                  content === ""
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                Create article
              </button>
            </div>
          </form>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default CreateArticlePage;
