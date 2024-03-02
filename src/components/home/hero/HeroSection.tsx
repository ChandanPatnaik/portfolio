import { motion } from "framer-motion";
import HeroAnimatedText from "./HeroAnimatedText";
import HeroSlider from "./HeroSlider";
import HeroTimeLine from "./HeroTimeLine";

const HeroSection = () => {
  return (
    <motion.section
      key="content"
      initial={{ y: "20vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "20vh", opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover h-[90vh] md:h-screen"
    >
      <section className="w-full main-container flex items-center justify-center h-full overflow-hidden">
        <div className="w-full md:w-4/5 lg:w-2/3 h-full flex items-center">
          <TextArea />
        </div>
      </section>
    </motion.section>
  );
};

const TextArea = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full h-fit relative text-3xl md:text-4xl lg:text-6xl font-semibold pl-6 md:pl-8">
      <HeroTimeLine />
      <motion.div
        viewport={{ once: true }}
        initial={{ x: 40 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        exit={{ x: 40 }}
        className="text-base font-light text-white/60 tracking-wide"
      >
        {`Start />`}
      </motion.div>
      <div className="flex flex-col md:gap-3 lg:gap-4 h-32 md:h-auto">
        <span className="text-lg text-light-sky"> Hi, my name is</span>
        <div className="text-light-sky">
          <span className="text-light-yellow font-[Inter]">
            {"Chandan Patnaik"?.split("")?.map((data, i) => (
              <motion.span
                viewport={{ once: true }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                exit={{ scale: 0, opacity: 0 }}
                key={i}
              >
                {data}
              </motion.span>
            ))}
          </span>{" "}
          <br />
        </div>
        <div className="text-light-sky font-[Inter]">
          I design & develop <HeroAnimatedText />
        </div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.07 }}
        exit={{ opacity: 0, y: 10 }}
        className="text-sm md:text-base text-milk/60 font-normal"
      >
        I am a full stack developer with a focus on crafting outstanding digital
        experiences. <br className="hidden 2xl:block" /> Currently, I am
        dedicated to developing accessible and human-centered products,
        <br className="hidden 2xl:block" /> contributing to advancements in the
        tech industry.
      </motion.div>
      <div className="overflow-hidden">
        <HeroSlider />
      </div>
    </div>
  );
};

export default HeroSection;
