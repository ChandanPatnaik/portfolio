import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 md:col-span-6">
      <div className="font-bold text-3xl md:text-4xl flex flex-col gap-0 md:gap-2 tracking-wider text-milk">
        <p className="">
          {`Let's find`.split("").map((curStr, i) => (
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              exit={{ scale: 0, opacity: 0 }}
              key={i}
            >
              {curStr}
            </motion.span>
          ))}
        </p>
        <p className="">
          {`solution`.split("").map((curStr, i) => (
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.07 + 0.7 }}
              exit={{ scale: 0, opacity: 0 }}
              key={i}
            >
              {curStr}
            </motion.span>
          ))}
        </p>
        <motion.p
          viewport={{ once: true }}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          exit={{ y: 20 }}
          className="text-red-500"
        >{`together?`}</motion.p>
      </div>

      <div className="text-milk/60 md:text-lg ">
        <p className="leading-6 md:leading-7">
          Fill in the form or just use my contacts below. If you need to put a
          project on the move, let’s work on it!
        </p>
      </div>

      <a
        href="mailto:chandanpatnaik81@gmail.com"
        target="_blank"
        className="text-milk tracking-wide hover:tracking-widest w-fit common-transition"
      >
        chandanpatnaik81@gmail.com
      </a>
    </div>
  );
};
export default ContactDetails;
