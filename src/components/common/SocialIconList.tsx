import { motion } from "framer-motion";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export const iconList = [
  {
    icon: <FiGithub />,
    link: "https://github.com/ChandanPatnaik",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/chandan-patnaik/",
    color: "bg-blue-400 text-white",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:chandanpatnaik81@gmail.com",
    color: "bg-orange-600 text-white",
  },
];

const SocialIconList = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center flex-col gap-6">
      <div className="hidden md:flex flex-col gap-6">
        {iconList.map((curIcon, i) => (
          <motion.a
            viewport={{ once: true }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            exit={{ y: 40, opacity: 0 }}
            href={curIcon.link}
            target="_blank"
            key={i}
          >
            <div className="text-milk/60 text-xl common-transition hover:-translate-y-[1px] hover:text-milk/90">
              {curIcon.icon}
            </div>
          </motion.a>
        ))}
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "7rem", opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        exit={{ height: 0, opacity: 0 }}
        className="hidden md:block h-28 w-0.5 bg-milk/60"
      ></motion.div>

      <div className="flex flex-col gap-2">
        {isVisible && (
          <div className="flex md:hidden flex-col gap-2">
            {iconList.map((curIcon, i) => (
              <motion.a
                viewport={{ once: true }}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
                exit={{ y: 40, opacity: 0 }}
                href={curIcon.link}
                target="_blank"
                key={i}
              >
                <div
                  className={`w-10 h-10 flex rounded-lg items-center justify-center text-xl common-transition hover:-translate-y-[1px] hover:text-milk/90 ${curIcon.color}`}
                >
                  {curIcon.icon}
                </div>
              </motion.a>
            ))}
          </div>
        )}
        <div
          className={`flex w-10 h-10 opacity-55 bg-light-yellow rounded-lg text-white items-center justify-center text-xl md:hidden`}
          onClick={() => setIsVisible(!isVisible)}
        >
          <IoIosArrowDown
            className={`common-transition ${isVisible ? "rotate-180" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};
export default SocialIconList;
