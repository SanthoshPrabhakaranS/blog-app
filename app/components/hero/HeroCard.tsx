"use client";

import React from "react";

const HeroCard = () => {
  return (
    <div className="p-4 px-6 flex flex-col gap-3 bg-transparent md:bg-white rounded-xl max-w-[450px] md:max-w-[500px] lg:max-w-[650px] absolute left-3 md:left-10 bottom-[0%] md:bottom-[-25%] lg:bottom-[-12%] shadow-md">
      <div>
        <p className="inline-block px-2 py-1 bg-primary text-white text-[.8rem] rounded-md font-semibold">
          Technology
        </p>
      </div>
      <h1 className="text-[1.5rem] lg:text-[2rem] font-bold leading-[2.2rem] text-white md:text-black">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>

      <div className="flex flex-row items-center gap-3 text-neutral-400 font-semibold text-[.8rem]">
        <p>Jason Fransisco</p>
        <p>August 28</p>
      </div>
    </div>
  );
};

export default HeroCard;
