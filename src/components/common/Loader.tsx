import { motion } from "framer-motion";

const Loader = () => {
  const text = "Chandan Patnaik";

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  return (
    <div className="w-screen h-screen bg-dark-blue">
      <div className="flex items-center justify-center w-full h-full text-white gap-2 text-lg md:text-xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={textVariants}
              style={{ display: "inline-block", margin: "0.2em" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Loader;
