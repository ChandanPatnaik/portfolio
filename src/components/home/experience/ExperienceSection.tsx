import { experienceData } from "@/locals";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeLine from "./ExperienceTimeLine";

const ExperienceSection = () => {
  return (
    <section className="bg-dark-blue">
      <div className="w-full scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <ExperienceTimeLine />
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
export default ExperienceSection;
