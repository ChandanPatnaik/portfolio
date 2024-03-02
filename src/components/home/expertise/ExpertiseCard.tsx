/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { expertiseData } from "./ExpertiseSection";

const ExpertiseCard = ({
  curExpertise,
  index,
}: {
  curExpertise: (typeof expertiseData)[0];
  index: number;
}) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ x: index === 1 ? 220 : 120 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      exit={{ x: index === 1 ? 220 : 120 }}
      className={`flex w-full flex-col md:flex-row md:w-11/12 lg:w-4/5 border overflow-hidden border-light-yellow/10 backdrop-blur-sm rounded-lg md:h-28 common-transition ${curExpertise.outerClass}`}
    >
      <div className="p-3 md:p-0 w-full md:w-28 lg:w-32 h-full text-6xl text-white flex items-center md:justify-center">
        {curExpertise.icon}
      </div>
      <div className="p-1 w-full md:w-[calc(100%-7rem)] lg:w-[calc(100%-8rem)]">
        <div
          className={`h-full rounded-md p-3 md:p-2 lg:p-3 ${curExpertise.class}`}
        >
          <p className="text-lg font-semibold text-white/90 whitespace-normal">
            {curExpertise?.heading}
          </p>
          <p className="text-sm lg:text-base text-white/70">
            {curExpertise?.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;
