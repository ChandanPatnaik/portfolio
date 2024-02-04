import { Loader, SocialIconList } from "@/components/common";
import { About, Contact, Expertise, Hero, Projects } from "@/components/home";
import { PublicLayout } from "@/components/layouts";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  setInterval(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <section className="w-full">
      {isLoading ? (
        <Loader />
      ) : (
        <PublicLayout
          title="Chandan Patnaik | Full Stack Developer"
          description="MERN stack developer passionate about creating web applications with a focus on user experience."
        >
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
