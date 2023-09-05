"use client";

import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="pt-[5rem] h-[100vh] flex justify-center items-center flex-col">
      <PuffLoader size={80} color="#1565D8" />
    </div>
  );
};

export default Loader;
