"use client";

import React, { useCallback } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface SelectImageProps {
  value?: string;
  onChange: (value: string) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({ onChange, value }) => {
  const handleImageSeclection = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleImageSeclection}
      uploadPreset="eqmqgjfq"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="w-full h-[60vh] bg-neutral-300 rounded-xl flex flex-col justify-center items-center cursor-pointer text-secondaryLight"
          >
            {value ? (
              <Image
                alt="blog-image"
                src={value}
                width={"900"}
                height={"900"}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <AiOutlineCloudUpload size="50" />
                <p className="font-semibold">Upload image!</p>
              </>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default SelectImage;
