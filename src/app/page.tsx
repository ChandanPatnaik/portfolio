"use client";
import { CustomCursor } from "@/components/core";
import { About, Contact, Header, Hero } from "@/components/home";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => {
    setIsLoading(false);
  }, 1000);
  let firstName = "chandan";
  let lastName = "patnaik";
  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen bg-dark-blue">
          <div className="flex w-full h-full gap-2 items-center justify-center">
            <div className="flex items-center justify-center w-fit text-white gap-0.5 text-xl">
              {firstName.split("").map((curStr, i) => (
                <motion.p
                  key={i}
                  viewport={{ once: true }}
                  initial={{ x: i * 20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.01 }}
                  exit={{ x: 0 }}
                >
                  {curStr}
                </motion.p>
              ))}
            </div>
            <div className="flex items-center justify-center w-fit text-white gap-0.5 text-xl">
              {lastName.split("").map((curStr, i) => (
                <motion.p
                  key={i}
                  viewport={{ once: true }}
                  initial={{ x: i * 20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.01 }}
                  exit={{ x: 0 }}
                >
                  {curStr}
                </motion.p>
              ))}
            </div>
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
          <Contact />
        </main>
      )}
    </>
  );
}
