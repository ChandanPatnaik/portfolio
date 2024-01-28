"use client";
import { Loader, SocialIconList } from "@/components/common";
import { CustomCursor } from "@/components/core";
import { About, Contact, Header, Hero, Projects } from "@/components/home";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="w-full relative h-full">
          <div className="hidden md:block fixed right-8 bottom-0">
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
        </main>
      )}
    </>
  );
}
