"use client";
import { CustomCursor } from "@/components/core";
import { About, Contact, Header, Hero, Projects } from "@/components/home";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const text = "Chandan Patnaik";

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen bg-dark-blue">
          <div className="flex items-center justify-center w-full h-full text-white gap-2 text-xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={textVariants}
                  style={{ display: "inline-block", margin: "0.2em" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        <main className="w-full h-full">
          <CustomCursor />
          <section className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-screen">
            <Header />
            <Hero />
          </section>
          <About />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
