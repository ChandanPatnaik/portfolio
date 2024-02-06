/* eslint-disable @next/next/no-img-element */
import { expertiseData } from "@/locals";
import { motion } from "framer-motion";
import { useState } from "react";

const Expertise = () => {
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  return (
    <section
      id="about"
      className="w-full pb-0 lg:pb-32 overflow-hidden scroll-m-10 relative bg-[#15171C] flex items-center justify-center"
    >
      <div className="absolute opacity-30 hidden lg:block lg:top-[70%] left-1/2 -translate-x-1/2">
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
          <img src="/code.png" alt="" className="w-full" />
        </motion.div>
      </div>
      <div className="w-[88%] md:w-4/5 lg:w-3/5 h-full flex items-center relative">
        <TimeLine />
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
          <ExpertiseDetails />
        </div>
      </div>
    </section>
  );
};

export default Expertise;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-10 md:h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const ExpertiseDetails = () => {
  return (
    <section
      className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md h-full md:border-2 border-milk/30 `}
    >
      {expertiseData.map((curStack, index) => (
        <div key={index}>
          <div
            className={`flex flex-col text-white h-full md:px-4 py-4 md:py-7 gap-3  border-milk/30 ${
              index !== 2
                ? "md:border-r-2 md:border-b-2 lg:border-b-0 border-b-0"
                : "md:border-r-2 lg:border-r-0 border-r-0"
            }`}
          >
            <div className="flex items-center gap-3 text-light-sky text-[Inter]">
              <div className="text-5xl">{curStack.icon}</div>
              <div className="text-lg leading-6 font-semibold">
                {curStack.heading}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-milk/50">{`anonymous(){`}</p>
              <p className="pl-4 text-sm md:text-[15px] py-1 text-milk/80">
                {curStack.description?.split("")?.map((data, i) => (
                  <motion.span
                    viewport={{ once: true }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: i * index * 0.02 }}
                    exit={{ scale: 0, opacity: 0 }}
                    key={i}
                  >
                    {data}
                  </motion.span>
                ))}
              </p>
              <p className="text-milk/50">{`}`}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-lg hidden md:block lg:hidden font-semibold leading-6 md:px-4 py-4 md:py-7 text-milk/70">
        {`The first message sent over the internet was "LOG". "LOGIN" was the original intended message but the entire system crashed. This was done at MIT.`}
      </div>
    </section>
  );
};