"use client";

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
        link: "",
      },
      {
        label: "Contact",
        link: "",
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
          className="flex items-center gap-2 text-lg w-fit hover:gap-5 common-transition hover:text-light-yellow"
          onClick={() => push("/")}
        >
          <p>c</p>
          <p>k</p>
          <p>.</p>
        </div>
        <ul className="hidden md:flex items-center gap-12 text-sm">
          {navigationData.map((curLabel) => (
            <li
              key={curLabel.label}
              className="tracking-wider hover:text-light-yellow common-transition"
            >
              {curLabel.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Header;
