/* eslint-disable @next/next/no-img-element */

import { projectLists } from "@/locals";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full scroll-m-10 relative bg-light-sky/5 flex items-center justify-center overflow-hidden  shadow-[0_0_76px_0_rgba(10,7,22,0.004)]"
    >
      <div className="absolute top-20 text-5xl md:text-7xl lg:text-9xl font-semibold text-milk/5 left-10">
        Websites
      </div>
      <div className="absolute bottom-10 text-7xl font-semibold text-milk/5 left-10">
        HTML
      </div>
      <div className="absolute top-20 text-5xl md:text-7xl lg:text-9xl font-semibold text-milk/5 right-10">
        CSS
      </div>
      <div className="absolute top-0 text-3xl lg:text-5xl font-semibold text-milk/5 left-10">
        Javascript
      </div>
      <div className="absolute top-1/2 text-7xl font-semibold text-milk/5 left-32">
        Typescript
      </div>
      <div className="absolute top-1/3 text-6xl font-semibold text-milk/5 right-20">
        Node.js
      </div>
      <div className="absolute bottom-1/3 text-4xl md:text-6xl font-semibold text-milk/5 right-2">
        React
      </div>
      <div className="absolute bottom-20 text-4xl md:text-6xl font-semibold text-milk/5 right-44">
        Next.js
      </div>
      <div className="absolute bottom-44 text-7xl font-semibold text-milk/5 left-1/2">
        Tailwind CSS
      </div>

      <div className="w-[88%] md:w-4/5 lg:w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
          <div className="text-base font-light text-white/60 tracking-wide">{`Projects />`}</div>

          <ProjectsList />
        </div>
      </div>
    </section>
  );
};

export default Projects;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-10 md:h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      {projectLists.map((curProject, i) => (
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: i * 0.5 }}
          exit={{ y: 40, opacity: 0 }}
          key={i}
          className="w-full bg-dark-slate border border-light-sky/10 flex flex-col gap-3 rounded-lg overflow-hidden"
        >
          <div className="col-span-4">
            <img
              src={curProject.image}
              alt={curProject.name}
              className="w-full h-full"
            />
          </div>
          <div className="flex col-span-8 flex-col p-3 gap-1 md:gap-2">
            <p className="text-lg text-milk/80 font-semibold">
              {curProject.name}
            </p>
            <p className="text-milk/70 text-sm">{curProject.description}</p>
            <div className="flex items-center gap-2 md:gap-3 pt-2 overflow-y-scroll w-full">
              {curProject.tech.map((curTech) => (
                <div
                  className=" border-milk/20 border text-milk/70 md:text-xs rounded-full px-2 text-[10px] md:px-3 py-1"
                  key={curTech}
                >
                  {curTech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
