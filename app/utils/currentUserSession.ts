import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "../libs/prismadb";

const getSession = async () => {
  return await getServerSession(authOptions);
};

export const currentUserSession = async () => {
  const session = await getSession();

  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) return null;

  return user;
};
