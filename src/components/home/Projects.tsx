/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
const Projects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientX = cursorPosition.x + "px";
  const gradientY = cursorPosition.y + "px";

  const backgroundStyle = {
    background: `radial-gradient(600px at ${gradientX} ${gradientY}, rgba(29, 78, 216, 0.25), transparent 80%)`,
  };

  return (
    <section
      style={backgroundStyle}
      id="projects"
      className="w-full flex items-center justify-center overflow-hidden  shadow-[0_0_76px_0_rgba(10,7,22,0.004)]"
    >
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
    <div className="w-full flex flex-col gap-5">
      {projectList.map((curProject, i) => (
        <div
          key={i}
          className="w-full h-44 bg-dark-blue grid grid-cols-12 gap-3 rounded-lg overflow-hidden"
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
            <p className="text-milk/70">{curProject.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
