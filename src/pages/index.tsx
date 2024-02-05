import { Loader, SocialIconList } from "@/components/common";
import { About, Contact, Expertise, Hero, Projects } from "@/components/home";
import { PublicLayout } from "@/components/layouts";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => {
    setIsLoading(false);
  }, 2000);
  let title = "Chandan Patnaik | Full Stack Developer";
  let description =
    "MERN stack developer passionate about creating web applications with a focus on user experience.";

  return (
    <section className="w-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={"https://chandan-patnaik.vercel.app/og-image.png"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <PublicLayout title={title} description={description}>
          <div className="w-full relative h-full">
            <div className="fixed z-[200] right-1 md:right-8 bottom-2">
              <SocialIconList />
            </div>
            <section className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-[80vh] md:h-screen">
              <Hero />
            </section>
            <Expertise />
            <About />
            <Projects />
            <Contact />
          </div>
        </PublicLayout>
      )}
    </section>
  );
}
