import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Provider";
import ShoppingMartModal from "./components/ShoppingMartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecommerce",
  description: "exclusive Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>

        <Navbar/>
        <ShoppingMartModal/>
        {children}
        </CartProvider>
        </body>
    </html>
  );
}
