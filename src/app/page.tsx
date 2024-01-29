"use client";
import { Loader, SocialIconList } from "@/components/common";
import { CustomCursor } from "@/components/core";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
} from "@/components/home";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <main className="">
      <div className="text-milk/60 text-center font-bold w-full h-screen flex items-center justify-center text-xl p-8">
        Work is in under process Please visit later or open in large screen
      </div>
      <section className="w-full hidden md:block">
        {isLoading ? (
          <Loader />
        ) : (
          <section className="w-full relative h-full">
            <div className="hidden md:block fixed z-[200] right-8 bottom-0">
              <SocialIconList />
            </div>
            <CustomCursor />
            <section className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-screen">
              <Header />
              <Hero />
            </section>
            <About />
            <Projects />
            <Contact />
            <Footer />
          </section>
        )}
      </section>
    </main>
  );
}
