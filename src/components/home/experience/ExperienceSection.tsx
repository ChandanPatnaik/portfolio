/* eslint-disable @next/next/no-img-element */
import { ProjectBg } from "@/assets/utility";
import { experienceData } from "@/locals";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeLine from "./ExperienceTimeLine";

const ExperienceSection = () => {
  return (
    <section className="bg-dark-blue overflow-hidden relative">
      <div className="absolute right-0 flex items-center justify-end">
        <motion.img
          animate={{
            x: [30, 40, 30],
            y: [30, 40, 30],
          }}
          src={ProjectBg.src}
          alt=""
          className="w-1/2 h-full object-contain"
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      <div className="w-full scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <ExperienceTimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
            <div className="text-base font-light text-white/60 tracking-wide">{`Experience />`}</div>
            <div className="w-full flex flex-col gap-10">
              {experienceData.map((curExp, i) => (
                <ExperienceCard curExp={curExp} key={i} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
