import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "./(ui)/Nav/Nav";
import Hero from "./(ui)/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KC Land And Stump",
  description: "The official website for KC Land & Stump's business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <Nav />
        {children}
      </body>
    </html>
  );
}
