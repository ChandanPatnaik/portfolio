/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="about" className="bg-dark-slate/50">
      <div className="w-full scroll-mt-16 md:scroll-m-10 relative flex items-center justify-center overflow-hidden main-container">
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center relative">
          <TimeLine />
          <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative pl-6 md:pl-8">
            <div className="text-base font-light text-white/60 tracking-wide">{`Skills />`}</div>
            <div className="w-full grid grid-cols-12 text-white/50 gap-2">
              <LeftSkillSection />
              <RightSkillSection />
              <BottomSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-10 md:h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const LeftSkillSection = () => {
  return (
    <div className="col-span-full lg:col-span-7 grid grid-cols-10 gap-2">
      {/* -------------- box-1-------------- */}
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        exit={{ y: 200 }}
        className="text-8xl flex-col flex items-center justify-center col-span-5 md:col-span-3 h-60 rounded-lg bg-gradient-to-b from-rose-700 to-red-200/10"
      >
        <TbBrandFramerMotion />
        <p className="text-lg px-2 text-center">Framer Motion</p>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        exit={{ y: 200 }}
        className="h-60 right-0 text-white/70 flex-col flex md:hidden overflow-hidden text-xl col-span-5 bg-light-sky/10 rounded-lg"
      >
        <img
          src="/images/node.webp"
          alt=""
          className="w-full h-[7.5rem] object-cover"
        />
        <img
          src="/images/brackets.webp"
          alt=""
          className="w-full h-[7.5rem] object-cover"
        />
      </motion.div>

      {/* -------------- box-2 -------------- */}
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ y: 200 }}
        className="col-span-full md:col-span-7 h-72 md:h-60 flex flex-col gap-2 relative"
      >
        <div className=" text-white/70 w-full p-3 h-44 md:h-36 bg-light-sky/10 rounded-lg">
          <div className="w-full items-center flex">
            <div className="w-10 h-1 bg-white/20"></div>
            <div className="w-11 text-light-yellow flex items-center justify-center h-11 rounded-full bg-white/10">
              <IoLogoJavascript />
            </div>
            <div className="w-4 h-1 bg-white/20"></div>
            <div className="col-span-2 w-11 text-[#007acc] flex items-center justify-center h-11 rounded-full bg-white/10">
              <SiTypescript />
            </div>
            <div className="w-4 h-1 bg-white/20"></div>
            <div className="col-span-2 w-11 text-xl text-[#00ed64] flex items-center justify-center h-11 rounded-full bg-white/10">
              <DiMongodb />
            </div>
            <div className="w-4 h-1 bg-white/20"></div>
            <div className="col-span-2 w-11 text-[#31648c] text-xl flex items-center justify-center h-11 rounded-full bg-white/10">
              <BiLogoPostgresql />
            </div>
          </div>
          <p className="text-lg font-bold">Programming Language</p>
          <p className="text-sm md:text-xs pt-1">
            Skilled in frontend and backend development, utilizing React.js and
            Express.js for dynamic web apps.
          </p>
        </div>
        <div className="w-full flex absolute top-[65%] md:top-[64%] gap-2">
          <div className="h-24 md:h-[5.3rem] text-white/70 flex items-center justify-center text-xl w-1/2 bg-light-yellow/40 rounded-lg">
            <motion.p
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0.5 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1, repeat: Infinity }}
            >
              Express.js
            </motion.p>
          </div>
          <div className="h-24 gap-1 flex-col md:h-[5.3rem] text-white/70 md:hidden flex items-center justify-center text-xl w-1/2 bg-[#72a763] rounded-lg">
            <FaNodeJs className="text-4xl" />
            <p className="text-sm">Node.js</p>
          </div>
          <div className="h-60 right-0 text-white/70 flex-col hidden md:flex overflow-hidden text-xl w-1/2 bg-light-sky/10 rounded-lg">
            <img
              src="/images/node.webp"
              alt=""
              className="w-full h-[7.5rem] object-cover"
            />
            <img
              src="/images/brackets.webp"
              alt=""
              className="w-full h-[7.5rem] object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ y: 180 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        exit={{ y: 180 }}
        className="col-span-full md:col-span-7 w-full"
      >
        <div className="md:mr-7 rounded-lg overflow-hidden h-44 md:h-36">
          <img
            src="/images/next.webp"
            alt=""
            className="w-full object-cover h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

const RightSkillSection = () => {
  return (
    <div className="col-span-full lg:col-span-5 flex flex-col gap-2">
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        exit={{ y: 80 }}
        className="overflow-hidden flex flex-col w-full md:h-60 bg-light-sky/10 rounded-lg"
      >
        <div className="p-3 bg-gradient-to-b from-pink-700/70 to-red-200/10 h-1/3">
          <div className="text-lg p-3 text-white/70">
            {"Backend Development"?.split("")?.map((data, i) => (
              <motion.span
                key={i}
                variants={{
                  visible: { scale: 1, opacity: 1 },
                  hidden: { scale: 0, opacity: 0 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
              >
                {data}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="p-3 text-white/70 flex justify-center h-2/3 flex-col">
          <p className="text-lg font-semibold">Technical Expertise</p>
          <p className="text-sm pt-1">
            My backend development skills include creating RESTful APIs,
            managing databases, and implementing authentication systems to
            ensure secure and efficient server-side operations.
          </p>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ y: 80 }}
        className="flex items-center gap-2"
      >
        <div className="w-1/2 h-24 rounded-lg bg-[#38bdf8]/70 text-5xl flex items-center justify-center flex-col">
          <SiTailwindcss />
          <p className="text-sm text-white/80">Tailwind CSS</p>
        </div>
        <div className="w-1/2 text-white h-full text-5xl  rounded-lg overflow-hidden flex bg-gradient-to-t from-sky-500/60 to-light-sky/30 items-center justify-center flex-col">
          <FaReact className="animate-[rotate_20s_ease-in-out_infinite]" />
          <p className="text-sm">React.js</p>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ x: 10 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ x: 10 }}
        className="w-full rounded-lg p-2 bg-light-yellow/10 text-center"
      >
        Full Stack Development
      </motion.div>
    </div>
  );
};

const BottomSection = () => {
  return (
    <motion.div className="w-full h-full grid grid-cols-12 col-span-full gap-2">
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        exit={{ y: 80 }}
        className="col-span-6 md:col-span-3 lg:col-span-2 opacity-80 text-white text-8xl bg-gradient-to-b from-dark-slate to-dark-blue border border-light-sky/10 flex items-center justify-center rounded-lg overflow-hidden"
      >
        <FaGithub />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ y: 80 }}
        className="col-span-6 md:col-span-4 lg:col-span-2 overflow-hidden rounded-lg"
      >
        <img
          src="/images/vscode.webp"
          alt=""
          className="w-full h-36 object-cover"
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        exit={{ y: 80 }}
        className="bg-light-sky/10 bg-opacity-90 p-3 col-span-full md:col-span-5 lg:col-span-4 h-40 md:h-full flex items-center justify-center rounded-lg overflow-hidden"
      >
        <motion.img
          src="/images/docker-blue.png"
          alt=""
          className="w-28"
          animate={{
            x: [10, 7, 5, 1, 4, 3, 2, 1, 3, 5, 7, 9],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        exit={{ y: 80 }}
        className="col-span-6 md:col-span-3 lg:col-span-2 overflow-hidden rounded-lg w-full"
      >
        <img
          src="/images/firebase.png"
          alt=""
          className="w-full h-36  object-cover md:object-contain"
        />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        exit={{ y: 80 }}
        className="col-span-6 md:col-span-3 lg:col-span-2 overflow-hidden rounded-lg w-full bg-white opacity-70"
      >
        <img
          src="/images/aws.png"
          alt=""
          className="w-full h-36 object-contain"
        />
      </motion.div>
    </motion.div>
  );
};
