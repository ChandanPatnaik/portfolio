"use client";
import { HeroAnimatedText } from "../common";
const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center h-[calc(100%-4.5rem)] overflow-hidden">
      <div className="absolute right-0 bottom-0 h-20 w-16 bg-light-yellow/10"></div>
      <div className="w-3/5 h-full flex items-center">
        <TextArea />
      </div>
    </section>
  );
};
export default Hero;

const TextArea = () => {
  return (
    <div className="flex flex-col gap-8 w-fit h-fit relative text-5xl font-semibold pl-8">
      <TimeLine />
      <div className="text-base font-light text-white/40 tracking-wide">
        {`Start />`}
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-milk">
          Hi, my name is
          <span className="text-light-yellow"> Chandan Patnaik</span> <br />
        </div>
        <div className="text-milk">
          i <span className="italic font-normal">design</span> and develop{" "}
          <HeroAnimatedText />
        </div>
      </div>
      <div className="text-2xl font-light text-white/50">
        Let me show You...
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-2 left-0 h-[400%] w-4">
      <div className="w-2 h-2 bg-transparent border rounded-full border-light-yellow"></div>
      <div className="w-0.5 h-full bg-light-yellow"></div>
    </div>
  );
};
