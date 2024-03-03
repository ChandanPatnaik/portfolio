/* eslint-disable @next/next/no-img-element */
import {
  AWS,
  Bracket,
  Docker,
  Firebase,
  NextJs,
  Node,
  VsCode,
} from "@/assets/logos";
import { skillSectionIconsArray, skillSliderSettings } from "@/locals";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Slider from "react-slick";

const SkillBox = () => {
  return (
    <div className="w-full grid grid-cols-12 text-white/50 gap-2">
      <LeftSkillSection />
      <RightSkillSection />
      <BottomSection />
    </div>
  );
};
export default SkillBox;

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
        className="text-8xl flex-col flex items-center justify-center col-span-5 md:col-span-3 h-60 rounded-lg group bg-gradient-to-b hover:to-red-200/20 common-transition from-rose-700 to-red-200/10"
      >
        <TbBrandFramerMotion className="group-hover:scale-105 common-transition" />
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
        <img src={Node.src} alt="" className="w-full h-[7.5rem] object-cover" />
        <img
          src={Bracket.src}
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
            <motion.div
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              exit={{ width: 0 }}
              className=" h-1 bg-white/20"
            ></motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              exit={{ scale: 0 }}
              className="w-11 text-light-yellow flex items-center justify-center h-11 rounded-full bg-white/10"
            >
              <IoLogoJavascript />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{ width: 18 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              exit={{ width: 0 }}
              className="h-1 bg-white/20"
            ></motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.8 }}
              exit={{ scale: 0 }}
              className="col-span-2 w-11 text-[#007acc] flex items-center justify-center h-11 rounded-full bg-white/10"
            >
              <SiTypescript />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{ width: 18 }}
              transition={{ duration: 0.2, delay: 1 }}
              exit={{ width: 0 }}
              className="h-1 bg-white/20"
            ></motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 1.2 }}
              exit={{ scale: 0 }}
              className="col-span-2 w-11 text-xl text-[#00ed64] flex items-center justify-center h-11 rounded-full bg-white/10"
            >
              <DiMongodb />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{ width: 18 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              exit={{ width: 0 }}
              className="w-4 h-1 bg-white/20"
            ></motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              exit={{ scale: 0 }}
              className="col-span-2 w-11 text-[#31648c] text-xl flex items-center justify-center h-11 rounded-full bg-white/10"
            >
              <BiLogoPostgresql />
            </motion.div>
          </div>
          <p className="text-lg font-bold">Languages & Libraries</p>
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
          <div className="h-60 right-0 relative group text-white/70 flex-col hidden md:flex overflow-hidden text-xl w-1/2 bg-light-sky/10 rounded-lg">
            <div className="absolute group-hover:visible z-20 invisible w-full h-full bg-dark-slate/60 backdrop-blur-sm common-transition !duration-200 opacity-0 group-hover:opacity-100 inset-0 text-milk p-3 text-base">
              {`The choice between Express.js and Nest.js depends on the project's
              specific requirements and intricacies.`}
            </div>
            <img
              src={Node.src}
              alt=""
              className="w-full h-[7.5rem] object-cover"
            />
            <img
              src={Bracket.src}
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
        <div className="md:mr-7 rounded-lg flex gap-2 overflow-hidden h-44 md:h-36">
          <div className="w-20 h-full bg-slate-700 relative rounded-lg">
            <div className="rotate-90 leading-5 absolute w-full font-bold right h-full flex-col flex items-center justify-center">
              <span className="whitespace-nowrap">SQL & NoSQL</span>{" "}
              <span>Databases</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden w-[calc(100%-5rem)]">
            <img
              src={NextJs.src}
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
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
        className="w-full h-10 rounded-lg overflow-hidden relative"
      >
        {/* Full Stack Development */}
        <Slider {...skillSliderSettings} className="z-30">
          {skillSectionIconsArray.map((curIcon, i) => (
            <div
              key={curIcon.title}
              className={`!flex font-semibold !flex-col !items-center h-full px-1 !justify-center`}
            >
              <div
                className={`text-center w-full rounded-lg p-2 text-milk/60 ${
                  i % 2 ? "bg-milk/20" : "bg-milk/30"
                }`}
              >
                {curIcon.title}
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className="w-full h-full grid grid-cols-12 col-span-full gap-2">
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
        <img src={VsCode.src} alt="" className="w-full h-36 object-cover" />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        exit={{ y: 80 }}
        className="bg-slate-950 relative bg-opacity-90 col-span-full md:col-span-5 lg:col-span-3 h-40 md:h-full flex items-center justify-center rounded-lg overflow-hidden"
      >
        <div className="absolute top-2 text-2xl md:text-3xl font-semibold text-milk/5 left-1">
          Docker
        </div>
        <div className="absolute bottom-1 text-3xl font-semibold text-milk/5 right-4">
          Images
        </div>
        <motion.img
          src={Docker.src}
          alt=""
          className="w-32"
          animate={{
            x: [10, 7, 5, 1, 4, 3, 2, 1, 3, 5, 7, 9],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        exit={{ y: 80 }}
        className="col-span-6 p-3 h-36 bg-[#1A73E8]/60 md:col-span-3 lg:col-span-2 overflow-hidden rounded-lg w-full"
      >
        <img
          src={Firebase.src}
          alt=""
          className="w-full h-full object-contain opacity-90"
        />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        exit={{ y: 80 }}
        className="col-span-6 md:col-span-3 lg:col-span-3 flex items-center justify-center bg-stone-700 overflow-hidden rounded-lg w-full"
      >
        <img src={AWS.src} alt="" className="w-32 object-contain" />
      </motion.div>
    </div>
  );
};
