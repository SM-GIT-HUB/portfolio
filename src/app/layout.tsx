import type { Metadata } from "next";
import "./globals.css";
import StarsCanvas from "../components/StarBackground";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`} >
        <StarsCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
