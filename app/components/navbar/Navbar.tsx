"use client";

import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

interface NavbarProps {
  currentUser: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();

  const MenuBar = () => {
    return (
      <Menu>
        <MenuHandler>
          <li
            onClick={() => {}}
            className="cursor-pointer h-8 w-8 text-white font-semibold rounded-full bg-blue-800 grid place-items-center justify-center"
          >
            {currentUser?.name.charAt(0).toUpperCase()}
          </li>
        </MenuHandler>
        <MenuList className="!flex !flex-col !shadow-md !p-0 !min-w-[150px] !max-w-[210px] !bg-white focus:!outline-none !font-semibold !rounded-md !z-20">
          <>
            <MenuItem
              onClick={() => {
                router.push("/create");
              }}
              className="!p-2 hover:!bg-gray-100 focus:!outline-none"
            >
              Create article
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push("/my-articles");
              }}
              className="!p-2 hover:!bg-gray-100 focus:!outline-none"
            >
              My articles
            </MenuItem>
            <MenuItem
              onClick={async () => {
                await signOut();
                router.push("/");
              }}
              className="!p-2 border-t hover:!bg-gray-100 focus:!outline-none"
            >
              Logout
            </MenuItem>
          </>
        </MenuList>
      </Menu>
    );
  };

  return (
    <div className="bg-white fixed z-50 w-full">

    <Container>
      <div className="flex flex-row justify-between items-center py-4">
        <h1
          onClick={() => router.push("/")}
          className="text-xl font-bold flex flex-row items-center gap-[.1rem] cursor-pointer"
        >
          ehya{" "}
          <span className="h-[.40rem] w-[.40rem] rounded-full flex items-start justify-start bg-primary"></span>
        </h1>
        <ul className="flex flex-row gap-5 items-center text-sm">
          <li
            onClick={() => router.push("/")}
            className="text-secondaryLight font-semibold cursor-pointer hover:text-primary"
          >
            Home
          </li>

          {currentUser ? (
            <MenuBar />
          ) : (
            <>
              <li
                onClick={() => router.push("/login")}
                className="text-secondaryLight font-semibold cursor-pointer hover:text-primary"
              >
                Login
              </li>
              <li
                onClick={() => router.push("/register")}
                className="cursor-pointer py-2 px-4 border-2 text-primary font-semibold border-primary rounded-full hover:bg-primary hover:text-white transition"
              >
                Sign in
              </li>
            </>
          )}
        </ul>
      </div>
    </Container>
    </div>

  );
};

export default Navbar;
