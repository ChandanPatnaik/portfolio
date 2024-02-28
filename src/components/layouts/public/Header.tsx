import { navigationData } from "@/locals";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const { push } = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleLinkSession = (path: string) => {
    push(path);
    setShowDrawer(false);
    document.body.style.overflow = "auto";
  };

  if (showDrawer) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <motion.header
        initial={{ translateY: 0, opacity: 1 }}
        animate={
          headerVisible
            ? { translateY: 0, opacity: 1 }
            : { translateY: -100, opacity: 0 }
        }
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-[301] bg-opacity-90 backdrop-blur-md text-white ${
          showDrawer ? "bg-dark-slate backdrop-blur-md" : "bg-dark-blue/10"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 md:py-5 main-container">
          <div
            className="flex group items-center gap-2 text-lg w-fit hover:gap-5 common-transition hover:text-light-yellow"
            onClick={() => push("/")}
          >
            <motion.p
              initial={{ x: 20 }}
              animate={!showDrawer ? { x: 0 } : { x: 10 }}
              transition={{ duration: 0.3 }}
            >
              c
            </motion.p>
            <motion.p
              initial={{ x: 40 }}
              animate={!showDrawer ? { x: 0 } : { x: 20 }}
              transition={{ duration: 0.4 }}
            >
              p
            </motion.p>
            <motion.p
              initial={{ x: 60 }}
              animate={!showDrawer ? { x: 0 } : { x: 30 }}
              transition={{ duration: 0.5 }}
            >
              .
            </motion.p>
          </div>

          <motion.button
            className="cursor-pointer md:hidden"
            onClick={() => setShowDrawer(!showDrawer)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {showDrawer ? (
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </motion.button>

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
                <li
                  onClick={() => handleLinkSession(curLabel.link)}
                  key={curLabel.label}
                  className="tracking-wider hover:text-light-yellow cursor-none common-transition"
                >
                  <span className="font-[Roboto]">
                    0<span>{i + 1}.</span>
                  </span>{" "}
                  {curLabel.label}
                </li>
              )
            )}
          </ul>
        </div>
      </motion.header>

      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ translateY: "40vh", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: "40vh", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed bottom-0 h-screen left-0 right-0 z-[300] bg-dark-slate bg-opacity-90 backdrop-blur-md text-white`}
          >
            <ul className="flex flex-col gap-6 w-full pl-10 h-full justify-center">
              {navigationData.map((curLabel, i) =>
                curLabel.isOuterLink ? (
                  <a
                    onClick={() => setShowDrawer(!showDrawer)}
                    href={curLabel.link}
                    key={curLabel.label}
                    download={true}
                    className="w-fit"
                  >
                    <li className="text-4xl w-fit text-milk/60 common-transition">
                      {curLabel.label}
                    </li>
                  </a>
                ) : (
                  <div
                    onClick={() => handleLinkSession(curLabel.link)}
                    key={curLabel.label}
                    className="w-fit flex justify-center flex-col"
                  >
                    <li className="text-4xl text-milk/60 common-transition">
                      {curLabel.label}
                    </li>
                  </div>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
