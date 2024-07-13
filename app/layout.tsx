import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./(ui)/Nav/Nav";
import Hero from "./(ui)/Hero/Hero";
import Footer from "./(ui)/Footer/Footer";
import "./globals.scss";

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
        <div className="MAIN_LAYOUT_CONTENT">
          <div className="BODY_CONTENT_WRAPPER">
            <Hero />
            <Nav />
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
