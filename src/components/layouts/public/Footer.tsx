import { motion } from "framer-motion";
const Footer = () => {
  return (
    <section className="w-full main-container flex items-center h-fit justify-center overflow-hidden">
      <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
        <TimeLine />
        <div className="py-5 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            exit={{ x: 40 }}
            className="text-sm hidden md:flex items-center gap-2 text-white/60 tracking-wide"
          >
            <p>
              Develop and Design by{" "}
              <span className="text-light-yellow">Chandan</span>
            </p>
            <p>|</p>
            <p>
              © copyright {new Date().getFullYear()} Chandan. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            exit={{ x: 40 }}
            className="text-sm md:hidden flex items-center gap-2 text-white/60"
          >
            <p>
              Develop and Design by{" "}
              <span className="text-light-yellow">Chandan</span> <span>| </span>
              © copyright {new Date().getFullYear()} Chandan. All rights
              reserved.
            </p>
            <p></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 w-4">
      <div className="w-0.5 h-7 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
    </div>
  );
};
