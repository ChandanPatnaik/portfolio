import { heroSectionIconsArray, heroSliderSettings } from "@/locals";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import { HeroAnimatedText } from "../common";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center h-full overflow-hidden">
      <div className="w-[88%] md:w-4/5 lg:w-3/5 h-full flex items-center">
        <TextArea />
      </div>
    </section>
  );
};
export default Hero;

const TextArea = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full h-fit relative text-3xl md:text-4xl lg:text-6xl font-semibold pl-6 md:pl-8">
      <TimeLine />
      <motion.div
        viewport={{ once: true }}
        initial={{ x: 40 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        exit={{ x: 40 }}
        className="text-base font-light text-white/40 tracking-wide"
      >
        {`Start />`}
      </motion.div>
      <div className="flex flex-col md:gap-3 lg:gap-4">
        <span className="text-lg text-light-sky"> Hi, my name is</span>
        <div className="text-light-sky">
          <span className="text-light-yellow font-[Inter]">
            {"Chandan Patnaik"?.split("")?.map((data, i) => (
              <motion.span
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                exit={{ scale: 0, opacity: 0 }}
                key={i}
              >
                {data}
              </motion.span>
            ))}
          </span>{" "}
          <br />
        </div>
        <div className="text-light-sky font-[Inter]">
          I design & develop <HeroAnimatedText />
        </div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.07 }}
        exit={{ opacity: 0, y: 10 }}
        className="text-sm md:text-base font-light text-white/60"
      >
        I am a MERN stack developer with a focus on crafting outstanding digital
        experiences. <br className="hidden 2xl:block" /> Currently, I am
        dedicated to developing accessible and human-centered products,
        <br className="hidden 2xl:block" /> contributing to advancements in the
        tech industry.
      </motion.div>
      <div className="overflow-hidden">
        <HeroSlider />
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-2 left-0 h-[400%] w-4">
      <div className="w-2 h-2 bg-transparent border rounded-full border-light-yellow"></div>
      <motion.div
        viewport={{ once: true }}
        initial={{ scale: 1, y: 0, height: 0 }}
        whileInView={{ scale: 1, y: 0, height: "18rem" }}
        transition={{ duration: 1 }}
        exit={{ scale: 0, y: -40 }}
        className="w-0.5 h-72 bg-light-yellow"
      ></motion.div>
      <Link href={"/#about"}>
        <div className="h-7 w-4 cursor-none group rounded-full border-milk/40 border-2 p-1 flex justify-center">
          <div className="w-0.5 animate-bounce h-1 group-hover:h-2 common-transition bg-light-yellow"></div>
        </div>
      </Link>
      <div className="w-0.5 h-10 bg-light-yellow"></div>
      <div className="h-16 flex items-center justify-center">
        <Link href={"/#about"}>
          <div className="text-xs cursor-none w-fit text-milk/40 rotate-[270deg]">
            SCROLL
          </div>
        </Link>
      </div>
      <div className="w-0.5 h-[calc(100%-23rem)] bg-light-yellow"></div>
    </div>
  );
};

const HeroSlider = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <section className="w-full">
      <Slider ref={sliderRef} {...heroSliderSettings}>
        {heroSectionIconsArray.map((curIcon) => (
          <div
            key={curIcon.title}
            className="!flex !flex-col !items-center !justify-center text-milk/20 text-3xl md:text-4xl"
          >
            <p className="">{curIcon.icon}</p>
            <p className="text-xs">{curIcon.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
