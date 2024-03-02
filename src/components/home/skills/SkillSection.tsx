import SkillBox from "./SkillBox";
import SkillTimeLine from "./SkillTimeLine";

const SkillsSection = () => {
  return (
    <section id="about" className="bg-dark-slate/50">
      <div className="w-full scroll-mt-16 md:scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <SkillTimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
            <div className="text-base font-light text-white/60 tracking-wide">{`Skills />`}</div>
            <SkillBox />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
