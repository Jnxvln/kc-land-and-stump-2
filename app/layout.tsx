import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./(ui)/Nav/Nav";
import Hero from "./(ui)/Hero/Hero";
import Footer from "./(ui)/Footer/Footer";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "KC Land & Stump"
const DESCRIPTION = "I provide quality tractor services, including dirt work, stump grinding, gravel spreading, and bush hogging around the Atlanta, TX region."
const SITE_URL = "https://kclandandstump.com"
const META_IMAGES = [
  {
    url: 'https://kclandandstump.com/graphics/openGraph/og_image.png',
    width: 1200,
    height: 630,
    alt: 'Quality tractor services in and around Atlanta, TX'
  }
]

export const metadata: Metadata = {
  title: TITLE,
  applicationName: TITLE,
  authors: [{ name: "Justin Cox"}],
  creator: "Justin Cox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  description: DESCRIPTION,
  keywords: ["kc land & stump", "kc land and stump", "atlanta", "texas", "tractor", "bush hogging", "land clearing", "stump grinding", "gravel spreading", "delivery", "hauling", "front end loader", "box blade", "kelly cox"],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: { "en-US": "/en-US" }
  },
  openGraph: {
    title: TITLE,
    siteName: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    type: "website",
    images: META_IMAGES,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    creator: "Justin Cox",
    images: META_IMAGES
  }
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
