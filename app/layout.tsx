import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import { Toaster } from "@/components/ui/sonner";
import { CartContextProvider } from "./contexts/cartcontext";
import { cn } from "@/lib/utils";

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
      <body className={cn(poppins.className, "bg-gray-200 selection:bg-sakura selection:text-white")}>
        <CartContextProvider>{children}</CartContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
