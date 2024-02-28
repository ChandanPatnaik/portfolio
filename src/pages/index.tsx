import { Loader, SocialIconList } from "@/components/common";
import {
  About,
  Contact,
  Experience,
  Expertise,
  Hero,
  Projects,
  Skills,
} from "@/components/home";
import { PublicLayout } from "@/components/layouts";
import { AnimatePresence, motion } from "framer-motion";
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
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          >
            <Loader />
          </motion.div>
        ) : (
          <PublicLayout title="Chandan Patnaik | Full Stack Web Developer">
            <div className="w-full relative h-full ">
              <div className="fixed z-[200] right-1 md:right-8 bottom-2">
                <SocialIconList />
              </div>
              <motion.section
                key="content"
                initial={{ y: "20vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "20vh", opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-[90vh] md:h-screen"
              >
                <Hero />
              </motion.section>
              <Skills />
              <Expertise />
              <Experience />
              <Projects />
              <About />
              <Contact />
            </div>
          </PublicLayout>
        )}
      </AnimatePresence>
    </section>
  );
}
