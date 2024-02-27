import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import { Toaster } from "@/components/ui/sonner";
import {
  CartContext,
  CartContextProvider,
  CartItem,
} from "./contexts/cartcontext";
import { useState } from "react";

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
      <body className={poppins.className + " bg-gray-200"}>
        <CartContextProvider>{children}</CartContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
