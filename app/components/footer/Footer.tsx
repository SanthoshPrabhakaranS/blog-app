import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-[#E8E8EA]">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row gap-5 justify-between w-full">
          <div className="flex flex-col gap-3 w-full lg:w-[50%]">
            <h1 className="font-bold text-lg">About</h1>
            <p className="text-sm font-medium">
              Ehya is not a well-known or widely recognized blog website as of
              my last knowledge update in September 2021. However, if you have
              specific information or details about "Ehya" that you'd like to
              include in an about paragraph, please provide more context or
              details about the website, its purpose, content, or any unique
              features, and I'd be happy to help you craft an engaging about
              paragraph based on that information.
            </p>
            <div className="flex flex-row gap-2 font-medium text-sm">
              <p className="text-neutral-500">Email:</p>
              <p className="text-secondaryDark">ehya@template.com</p>
            </div>
            <div className="flex flex-row gap-2 font-medium text-sm">
              <p className="text-neutral-500">Phone</p>
              <p className="text-secondaryDark">880 123 456 789</p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] bg-white rounded-lg px-6 py-12 flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="font-bold text-[1.5rem]">Weekly Newsletter</h1>
            <p className="font-semibold text-neutral-400">
              Get blog artilces and offers via mail
            </p>
            <div className="flex flex-col gap-2 w-full max-w-[70%]">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md focus:outline-none border-2 text-neutral-500"
              />
              <button className="p-2 bg-primary text-white rounded-md font-semibold hover:bg-primary/80">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
