import { motion } from "framer-motion";
import Link from "next/link";

const HeroTimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-2 left-0 h-[400%] w-4">
      <div className="w-2 h-2 bg-transparent border rounded-full border-light-yellow"></div>
      <motion.div
        viewport={{ once: true }}
        initial={{ scale: 1, y: 0, height: 0 }}
        whileInView={{ scale: 1, y: 0, height: "18rem" }}
        transition={{ duration: 1 }}
        exit={{ scale: 0, y: -40 }}
        className="w-0.5 h-72 bg-light-yellow"
      ></motion.div>
      <Link href={"/#about"}>
        <div className="h-7 w-4 cursor-none group rounded-full border-milk/40 border-2 p-1 flex justify-center">
          <div className="w-0.5 animate-bounce h-1 group-hover:h-2 common-transition bg-light-yellow"></div>
        </div>
      </Link>
      <div className="w-0.5 h-10 bg-light-yellow"></div>
      <div className="h-16 flex items-center justify-center">
        <Link href={"/#about"}>
          <div className="text-xs cursor-none w-fit text-milk/40 rotate-[270deg]">
            SCROLL
          </div>
        </Link>
      </div>
      <div className="w-0.5 h-[calc(100%-23rem)] bg-light-yellow"></div>
    </div>
  );
};

export default HeroTimeLine;
