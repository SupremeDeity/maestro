import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from "./fonts";


export const metadata: Metadata = {
  title: "Maestro",
  description: "Your one-stop ecommerce shopping store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-gray-200"}>{children}</body>
    </html>
  );
}
