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
    <section className="w-full ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full relative h-full">
          <div className="fixed z-[200] right-1 md:right-8 bottom-2">
            <SocialIconList />
          </div>
          <CustomCursor />
          <section className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-[80vh] md:h-screen">
            <Header />
            <Hero />
          </section>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </section>
  );
}
