"use client";

import { useScrollPosition } from "@/hooks";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsMenuButtonFill } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdRestartAlt } from "react-icons/md";

const Header = () => {
  const { push } = useRouter();
  const [toggle, setToggle] = useState(false);
  const currentScroll = useScrollPosition();
  const navigationData = useMemo(
    () => [
      {
        label: "Start",
        link: "/",
        icon: <MdRestartAlt />,
      },
      {
        label: "Work",
        link: "#work",
        icon: <FaNetworkWired />,
      },
      {
        label: "About",
        link: "#about",
        icon: <BiCommentDetail />,
      },
      {
        label: "Contact",
        link: "#contact",
        icon: <IoIosContact />,
      },
      {
        label: "Resume",
        link: "",
        icon: <IoDocumentAttachOutline />,
      },
    ],
    []
  );
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
            <p>c</p>
            <p>p</p>
            <p className="group-hover:animate-pulse">.</p>
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="cursor-none md:hidden"
          >
            <BsMenuButtonFill />
          </button>

          <ul className="hidden md:flex items-center gap-12 text-sm">
            {navigationData.map((curLabel) => (
              <Link href={curLabel.link} key={curLabel.label}>
                <li className="tracking-wider hover:text-light-yellow common-transition">
                  {curLabel.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <Collapse in={toggle}>
          <div className="w-full pt-5">
            <ul className="grid grid-cols-5 gap-4 text-sm">
              {navigationData.map((curLabel) => (
                <Link href={curLabel.link} key={curLabel.label}>
                  <div className="w-full h-fit p-1 border border-light-yellow/10 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center justify-center flex-col">
                    <div className="text-xl text-milk/30">{curLabel.icon}</div>
                    <li className="text-[9px] text-milk/60 common-transition leading-4">
                      {curLabel.label}
                    </li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </section>
  );
};
export default Header;
