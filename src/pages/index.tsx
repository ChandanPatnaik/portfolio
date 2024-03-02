import { Loader, SeoContent, SocialIconList } from "@/components/common";
import {
  About,
  ContactSection,
  ExperienceSection,
  ExpertiseSection,
  HeroSection,
  Projects,
  SkillSection,
  TrackSection,
} from "@/components/home";
import { PublicLayout } from "@/components/layouts";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full">
      <SeoContent />
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
              <ExperienceSection />
              <Projects />
              <About />
              <ContactSection />
              <TrackSection />
            </div>
          </PublicLayout>
        )}
      </AnimatePresence>
    </section>
  );
}
