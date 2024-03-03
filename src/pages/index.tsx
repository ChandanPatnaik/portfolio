import { Loader, SeoContent, SocialIconList } from "@/components/common";
import {
  ContactSection,
  DevSection,
  ExperienceSection,
  ExpertiseSection,
  HeroSection,
  Projects,
  SkillSection,
  TrackSection,
} from "@/components/home";
import { PublicLayout } from "@/components/layouts";
import { AnimatePresence, motion } from "framer-motion";
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
              <HeroSection />
              <SkillSection />
              <ExpertiseSection />
              <ExperienceSection />
              <Projects />
              <DevSection />
              <ContactSection />
              <TrackSection />
            </div>
          </PublicLayout>
        )}
      </AnimatePresence>
    </section>
  );
}
