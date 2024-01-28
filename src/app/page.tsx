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
  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen bg-dark-blue">
          <div className="flex items-center justify-center w-full h-full text-white gap-2 text-xl">
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.01 }}
              exit={{ x: 0 }}
            >
              c
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 40 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.4, delay: 0.01 }}
              exit={{ x: 0 }}
            >
              p
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 60 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.01 }}
              exit={{ x: 0 }}
            >
              .
            </motion.p>
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
