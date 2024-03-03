import { Car } from "@/assets/utility";
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

const TrackIconRender = () => {
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
    <div className="pl-6 opacity-70 text-base md:text-2xl w-full h-full overflow-hidden relative">
      {icons}
      <div className="md:text-lg opacity-100 absolute left-0 right-0 text-center w-full bottom-0 text-white/30">
        <div className="w-full items-center justify-center flex">
          <div className="w-fit h-fit translate-y-10 md:translate-y-12">
            <motion.img
              src={Car.src}
              alt=""
              className="w-32 md:w-40"
              animate={{
                x: [10, 7, 5, 1, 4, 3, 2, 1, 3, 5, 7, 9],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrackIconRender;
