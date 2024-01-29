/* eslint-disable @next/next/no-img-element */
"use client";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full relative bg-light-sky/5 flex items-center justify-center overflow-hidden  shadow-[0_0_76px_0_rgba(10,7,22,0.004)]"
    >
      <div className="absolute top-20 text-9xl font-semibold text-milk/5 left-10">
        Websites
      </div>
      <div className="absolute bottom-10 text-7xl font-semibold text-milk/5 left-10">
        HTML
      </div>
      <div className="absolute top-20 text-9xl font-semibold text-milk/5 right-10">
        CSS
      </div>
      <div className="absolute top-0 text-5xl font-semibold text-milk/5 left-10">
        Javascript
      </div>
      <div className="absolute top-1/2 text-7xl font-semibold text-milk/5 left-32">
        Typescript
      </div>
      <div className="absolute top-1/3 text-6xl font-semibold text-milk/5 right-20">
        Node.js
      </div>
      <div className="absolute bottom-1/3 text-6xl font-semibold text-milk/5 right-2">
        React
      </div>
      <div className="absolute bottom-20 text-6xl font-semibold text-milk/5 right-44">
        Next.js
      </div>
      <div className="absolute bottom-44 text-7xl font-semibold text-milk/5 left-1/2">
        Tailwind CSS
      </div>

      <div className="w-5/6 md:w-4/5 lg:w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
          <div className="text-base font-light text-white/40 tracking-wide">{`Projects />`}</div>

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
  const projectList = [
    {
      name: "Portfolio",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/project-placeholder.png",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    },
    {
      name: "Build a Spotify Connected App",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/project-placeholder.png",
      tech: ["React", "Express", "Node.js", "MongoDB"],
    },
    {
      name: "Build a Spotify Connected App",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/project-placeholder.png",
      tech: ["React", "Express", "Node.js", "MongoDB"],
    },
    {
      name: "Build a Spotify Connected App",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/project-placeholder.png",
      tech: ["React", "Express", "Node.js", "MongoDB"],
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 gap-5">
      {projectList.map((curProject, i) => (
        <div
          key={i}
          className="w-full bg-dark-slate border border-light-sky/10 flex flex-col gap-3 rounded-lg overflow-hidden"
          onClick={() => alert("clicked")}
        >
          <div className="col-span-4">
            <img
              src={curProject.image}
              alt={curProject.name}
              className="w-full h-full"
            />
          </div>
          <div className="flex col-span-8 flex-col p-3 gap-2">
            <p className="text-lg text-milk/80 font-semibold">
              {curProject.name}
            </p>
            <p className="text-milk/70 text-sm">{curProject.description}</p>
            <div className="flex items-center gap-3 pt-2">
              {curProject.tech.map((curTech) => (
                <div
                  className=" border-milk/20 border text-milk/70 text-xs rounded-full px-3 py-1"
                  key={curTech}
                >
                  {curTech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
