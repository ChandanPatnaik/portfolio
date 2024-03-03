import { experienceData } from "@/locals";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const ExperienceCard = ({ curExp }: { curExp: (typeof experienceData)[0] }) => {
  const [readMore, setReadMore] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  return (
    <div className="w-full flex-col md:flex-row flex gap-5 md:gap-0">
      <div className="text-milk/80 h-fit relative w-full md:w-1/4">
        <div className="absolute w-1/2 h-1 rounded-lg bg-light-sky/70 -bottom-2 md:-bottom-3"></div>
        <p className="flex items-center gap-1">
          {curExp.startDate}
          <AiOutlineMinus />
          {curExp.endDate}
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-3/4 text-milk/90">
        <div className="flex text-lg text-light-sky font-bold flex-col md:flex-row md:items-center gap-1">
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
          <p className="md:hidden gap-2">
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
        <p className="text-sm md:text-base text-milk/70">
          {readMore ? curExp.description : curExp.description?.slice(0, 180)}{" "}
          <span
            className="font-semibold text-light-sky"
            onClick={() => setReadMore((pre) => !pre)}
          >
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-3">
          {showMoreSkills
            ? curExp.skills.map((curSkill) => (
                <div
                  key={curSkill}
                  className="px-2 md:px-3 bg-light-yellow/20 py-1 rounded-3xl text-milk/80 text-xs md:text-[12px]"
                >
                  {curSkill}
                </div>
              ))
            : curExp.skills.slice(0, 6).map((curSkill) => (
                <div
                  key={curSkill}
                  className="px-2 md:px-3 bg-light-yellow/20 py-1 rounded-3xl text-milk/80 text-xs md:text-[12px]"
                >
                  {curSkill}
                </div>
              ))}
          <div
            onClick={() => setShowMoreSkills(!showMoreSkills)}
            className="px-2 md:px-3 bg-light-yellow py-1 rounded-3xl text-dark-slate text-xs md:text-[12px]"
          >
            {showMoreSkills ? "Show Less" : "Show More"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
