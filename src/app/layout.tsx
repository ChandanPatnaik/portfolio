import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chandan Patnaik | Full Stack Developer",
  description:
    "MERN stack developer passionate about creating web applications with a focus on user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chandan-patnaik.vercel.app/project-placeholder.png"
        />
        <meta
          property="og:image"
          content="https://chandan-patnaik.vercel.app/project-placeholder.png"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
