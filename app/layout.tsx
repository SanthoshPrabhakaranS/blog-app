import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientProvider from "./providers/ClientProvider";
import { Toaster } from "react-hot-toast";
import { currentUserSession } from "./utils/currentUserSession";
import Footer from "./components/footer/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ehya.",
  description: "Blog app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await currentUserSession();
  return (
    <html lang="en">
      <ClientProvider>
        <body className={inter.className}>
          <Toaster />
          <Navbar currentUser={currentUser} />
          {children}
          <Footer />
        </body>
      </ClientProvider>
    </html>
  );
}
