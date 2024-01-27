"use client";
import { CustomCursor } from "@/components/core";
import { About, Header, Hero } from "@/components/home";

export default function Home() {
  return (
    <main className="w-full h-full">
      <CustomCursor />
      <section className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-screen">
        <Header />
        <Hero />
        <About />
      </section>
    </main>
  );
}
