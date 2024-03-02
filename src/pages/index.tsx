import { Loader, SocialIconList } from "@/components/common";
import {
  About,
  Contact,
  Experience,
  ExpertiseSection,
  HeroSection,
  Projects,
  SkillSection,
  TrackSection,
} from "@/components/home";
import { PublicLayout } from "@/components/layouts";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full">
      <Head>
        <title>Chandan Patnaik | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full stack Web developer passionate about creating web applications with a focus on user experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://chandan-patnaik.vercel.app/og-image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader />
        ) : (
          <PublicLayout title="Chandan Patnaik | Full Stack Web Developer">
            <div className="w-full relative h-full ">
              <div className="fixed z-[200] right-1 md:right-8 bottom-2">
                <SocialIconList />
              </div>
              <HeroSection />
              <SkillSection />
              <ExpertiseSection />
              <Experience />
              <Projects />
              <About />
              <Contact />
              <TrackSection />
            </div>
          </PublicLayout>
        )}
      </AnimatePresence>
    </section>
  );
}
