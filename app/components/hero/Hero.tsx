"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroImg from "../../../public/images/hero.jpg";
import HeroImg2 from "../../../public/images/hero2.jpg";
import HeroCard from "./HeroCard";

const Hero = () => {
  const [HeroImage, setHeroImage] = useState(HeroImg);

  useEffect(() => {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      setHeroImage(HeroImg);
    } else {
      setHeroImage(HeroImg2);
    }
  }, []);

  return (
    <div className="w-full flex flex-col max-w-[1500px] mx-auto md:px-10">
      <div className="relative flex flex-col">
        <Image
          src={HeroImage}
          alt="Hero-img"
          width={"1000"}
          height={"900"}
          className="w-full h-[600px] md:h-auto md:max-h-[600px] object-cover rounded-none md:rounded-xl"
        />
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
