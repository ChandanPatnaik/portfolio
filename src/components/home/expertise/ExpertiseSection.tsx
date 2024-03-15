/* eslint-disable @next/next/no-img-element */
import { Code } from "@/assets/utility";
import { motion } from "framer-motion";
import { useState } from "react";
import { CiDesktop } from "react-icons/ci";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import ExpertiseCard from "./ExpertiseCard";
import ExpertiseTimeLine from "./ExpertiseTimeLine";

// expertise data
export const expertiseData = [
  {
    heading: <div>Software Development</div>,
    description:
      "Experienced in both function and OOP: Javascript, Typescript, Python",
    icon: <CiDesktop />,
    image: "/images/software.avif",
    class: "bg-milk/10",
    outerClass: "bg-milk/20",
  },
  {
    heading: <div>Frontend Dev React, NextJS</div>,
    description:
      "Over 2 years of development experience in React, NextJS and Other frontend libraries.",
    icon: <FaReact />,
    image: "/images/backend.png",
    class: "bg-light-sky/30",
    outerClass: "bg-light-sky/40",
  },
  {
    heading: <div>Backend Dev Node, Express</div>,
    description:
      "Experienced in crafting efficient cross-platform backends using Node.js and Express.",
    icon: <SiExpress />,
    image: "/images/frontend.png",
    class: "bg-light-yellow/20",
    outerClass: "bg-light-yellow/30",
  },
];

const ExpertiseSection = () => {
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <section className="w-full bg-[#15171C]">
      <div className="w-full main-container pb-32 overflow-hidden scroll-m-10 relative  flex items-center justify-center">
        <div className="absolute opacity-40 md:opacity-30 top-[81%] md:top-[70%] left-10 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            initial={false}
            animate={
              isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className=""
          >
            <img src={Code.src} alt="" className="w-full" />
          </motion.div>
        </div>
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <ExpertiseTimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
            <motion.div
              viewport={{ once: true }}
              initial={{ x: 40 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              exit={{ x: 40 }}
              className="text-base font-light text-white/60 tracking-wide"
            >
              {`Expertise />`}
            </motion.div>
            <div className="w-full flex flex-col gap-5">
              {expertiseData.map((curExpertise, i) => (
                <div
                  key={i}
                  className={`w-full flex ${
                    i === 1 ? "justify-end " : "justify-start"
                  }`}
                >
                  <ExpertiseCard
                    key={i}
                    curExpertise={curExpertise}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
