import { useScrollPosition } from "@/hooks";
import { navigationData } from "@/locals";
import { Collapse } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsMenuButtonFill } from "react-icons/bs";
const Header = () => {
  const { push } = useRouter();
  const [toggle, setToggle] = useState(false);
  const currentScroll = useScrollPosition();
  const handleLinkSession = (path: string) => {
    push(path);
    setToggle(false);
  };

  return (
    <section
      className={`fixed top-0 w-full z-[200] ${
        toggle ? "bg-dark-blue   md:bg-transparent" : ""
      } ${currentScroll > 0 ? "bg-dark-blue/80 backdrop-blur-sm" : ""}`}
    >
      <div className="w-full py-3 md:py-5 main-container text-white">
        <div className="w-full justify-between flex items-center">
          <div
            className="flex group items-center gap-2 text-lg w-fit hover:gap-5 common-transition hover:text-light-yellow"
            onClick={() => push("/")}
          >
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.01 }}
              exit={{ x: 0 }}
            >
              c
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 40 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.4, delay: 0.01 }}
              exit={{ x: 0 }}
            >
              p
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ x: 60 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.01 }}
              exit={{ x: 0 }}
            >
              .
            </motion.p>
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="cursor-none md:hidden"
          >
            <BsMenuButtonFill />
          </button>

          <ul className="hidden md:flex items-center gap-12 text-sm">
            {navigationData.map((curLabel, i) =>
              curLabel.isOuterLink ? (
                <a
                  href={curLabel.link}
                  key={curLabel.label}
                  target="_blank"
                  download={true}
                >
                  <li className="tracking-wider hover:text-light-yellow cursor-none common-transition">
                    <span className="font-[Roboto]">
                      0<span>{i + 1}.</span>
                    </span>{" "}
                    {curLabel.label}
                  </li>
                </a>
              ) : (
                <Link href={curLabel.link} key={curLabel.label}>
                  <li className="tracking-wider hover:text-light-yellow cursor-none common-transition">
                    <span className="font-[Roboto]">
                      0<span>{i + 1}.</span>
                    </span>{" "}
                    {curLabel.label}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>

        <Collapse in={toggle}>
          <div className="w-full pt-5">
            <ul className="grid grid-cols-5 gap-4 text-sm">
              {navigationData.map((curLabel, i) =>
                curLabel.isOuterLink ? (
                  <a
                    onClick={() => setToggle(!toggle)}
                    href={curLabel.link}
                    key={curLabel.label}
                    download={true}
                  >
                    <div className="w-full h-fit p-1 border border-light-yellow/10 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center justify-center flex-col">
                      <div className="text-xl text-milk/30">
                        {curLabel.icon}
                      </div>
                      <li className="text-[9px] text-milk/60 common-transition leading-4">
                        {curLabel.label}
                      </li>
                    </div>
                  </a>
                ) : (
                  <div
                    onClick={() => handleLinkSession(curLabel.link)}
                    key={curLabel.label}
                    className="w-full h-fit p-1 border border-light-yellow/10 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center justify-center flex-col"
                  >
                    <div className="text-xl text-milk/30">{curLabel.icon}</div>
                    <li className="text-[9px] text-milk/60 common-transition leading-4">
                      {curLabel.label}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
        </Collapse>
      </div>
    </section>
  );
};
export default Header;
