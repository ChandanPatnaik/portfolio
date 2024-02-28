/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const IconRain = () => {
  const [icons, setIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIcon = Math.floor(Math.random() * 11);
      const newIcon = (
        <motion.div
          key={Date.now()}
          initial={{ x: -100, y: Math.random() * window.innerWidth }}
          animate={{ x: window.innerHeight + 100, rotate: 260 }}
          transition={{ duration: 2, ease: "linear" }}
          style={{ position: "absolute" }}
          onAnimationComplete={() =>
            setIcons((prevIcons) => prevIcons.slice(1))
          }
        >
          {renderIcon(randomIcon)}
        </motion.div>
      );

      setIcons((prevIcons) => [...prevIcons, newIcon]);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = (index: number) => {
    switch (index) {
      case 0:
        return <SiJavascript color="#f0db4f" />;
      case 1:
        return <SiTypescript color="#3178c6" />;
      case 2:
        return <SiHtml5 color="#e34c26" />;
      case 3:
        return <SiCss3 color="#264de4" />;
      case 4:
        return <SiTailwindcss color="#38b2ac" />;
      case 5:
        return <SiNodedotjs color="#68a063" />;
      case 6:
        return <SiExpress color="#000000" />;
      case 7:
        return <SiMongodb color="#47a248" />;
      case 8:
        return <SiPostgresql color="#336791" />;
      case 9:
        return <SiPrisma color="green" />;
      case 10:
        return <SiGit color="red" />;
      case 11:
        return <SiMongoose color="red" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-dark-slate">
      <div className="w-full scroll-mt-16 md:scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-[10vh] flex items-center relative">
          <TimeLine />
          <div className="pl-6 opacity-70 text-base md:text-2xl w-full h-full overflow-hidden relative">
            {icons}
            <div className="md:text-lg opacity-100 absolute left-0 right-0 text-center w-full bottom-0 text-white/30">
              <div className="w-full items-center justify-center flex">
                <div className="w-fit h-fit translate-y-10 md:translate-y-12">
                  <motion.img
                    src="/images/car.png"
                    alt=""
                    className="w-32 md:w-40"
                    animate={{ x: [0, 10, 0, 2, 1, 4, 3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconRain;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-full bg-light-yellow"></div>
    </div>
  );
};
