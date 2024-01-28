"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const Header = () => {
  const { push } = useRouter();
  const navigationData = useMemo(
    () => [
      {
        label: "Start",
        link: "",
      },
      {
        label: "Work",
        link: "",
      },
      {
        label: "About",
        link: "#about",
      },
      {
        label: "Contact",
        link: "#contact",
      },
      {
        label: "Resume",
        link: "",
      },
    ],
    []
  );
  return (
    <section className="w-full py-5 main-container text-white">
      <div className="w-full justify-between flex items-center">
        <div
          className="flex group items-center gap-2 text-lg w-fit hover:gap-5 common-transition hover:text-light-yellow"
          onClick={() => push("/")}
        >
          <p>c</p>
          <p>k</p>
          <p className="group-hover:animate-pulse">.</p>
        </div>
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
    </section>
  );
};
export default Header;
