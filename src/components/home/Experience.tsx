/* eslint-disable @next/next/no-img-element */
import { experienceData } from "@/locals";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className="bg-dark-blue">
      <div className="w-full scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <TimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
            <div className="text-base font-light text-white/60 tracking-wide">{`Experience />`}</div>
            <div className="w-full flex flex-col gap-10">
              {experienceData.map((curExp, i) => (
                <ExperienceCard curExp={curExp} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-10 md:h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const ExperienceCard = ({ curExp }: { curExp: (typeof experienceData)[0] }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full flex-col md:flex-row flex gap-5 md:gap-0">
      <div className="text-milk/80 h-fit relative w-full md:w-1/4">
        <div className="absolute w-1/2 h-1 rounded-lg bg-light-sky/70 -bottom-2 md:-bottom-3"></div>
        <p className="flex text-sm items-center gap-1">
          {curExp.startDate}
          <AiOutlineMinus />
          {curExp.endDate}
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-3/4 text-milk/90">
        <div className="flex flex-col md:flex-row md:items-center gap-1">
          <p className="hidden md:flex gap-2">
            {curExp.role} -{" "}
            <a
              href={curExp.companySite}
              target="_blank"
              className="flex items-center gap-2 cursor-none"
            >
              {curExp.company}
              <FaArrowRightLong className="-rotate-45" />
            </a>
          </p>
          <p className=" md:hidden gap-2">
            {curExp.role} -{" "}
            <a
              href={curExp.companySite}
              target="_blank"
              className="flex items-center gap-2 cursor-none"
            >
              {curExp.company}
              <FaArrowRightLong className="-rotate-45" />
            </a>
          </p>
        </div>
        <p className="text-sm md:text-[15px] text-milk/70 font-[Inter] md:leading-6">
          {readMore ? curExp.description : curExp.description?.slice(0, 240)}{" "}
          <span
            className="font-semibold text-light-sky"
            onClick={() => setReadMore((pre) => !pre)}
          >
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-3">
          {curExp.skills.map((curSkill) => (
            <div
              key={curSkill}
              className="px-2 md:px-3 bg-light-yellow/20 py-1 rounded-3xl text-milk/80 text-xs md:text-[12px]"
            >
              {curSkill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
