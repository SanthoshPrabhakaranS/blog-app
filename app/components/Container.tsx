"use client";

import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1500px] px-3 md:px-10 mx-auto">{children}</div>;
};

export default Container;
