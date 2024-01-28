"use client";
import { useRef } from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Slider from "react-slick";
import { HeroAnimatedText } from "../common";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center h-full overflow-hidden">
      <div className="w-5/6 md:w-4/5 lg:w-3/5 h-full flex items-center">
        <TextArea />
      </div>
    </section>
  );
};
export default Hero;

const TextArea = () => {
  return (
    <div className="flex flex-col gap-8 w-full h-fit relative text-3xl md:text-4xl lg:text-5xl font-semibold pl-6 md:pl-8">
      <TimeLine />
      <div className="text-base font-light text-white/40 tracking-wide">
        {`Start />`}
      </div>
      <div className="flex flex-col md:gap-3 lg:gap-6">
        <div className="text-milk">
          Hi, my name is
          <span className="text-light-yellow"> Chandan Patnaik</span> <br />
        </div>
        <div className="text-milk">
          i <span className="italic font-normal">design</span> and develop{" "}
          <HeroAnimatedText />
        </div>
      </div>
      <div className="text-xl md:text-2xl font-light text-white/50">
        Let me show You...
      </div>
      <div className="overflow-hidden">
        <HeroSlider />
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-2 left-0 h-[400%] w-4">
      <div className="w-2 h-2 bg-transparent border rounded-full border-light-yellow"></div>
      <div className="w-0.5 h-72 bg-light-yellow"></div>
      <div className="h-7 w-4 group rounded-full border-milk/40 border-2 p-1 flex justify-center">
        <div className="w-0.5 animate-bounce h-1 group-hover:h-2 common-transition bg-light-yellow"></div>
      </div>
      <div className="w-0.5 h-10 bg-light-yellow"></div>
      <div className="h-16 flex items-center justify-center">
        <div className="text-xs w-fit text-milk/40 rotate-[270deg]">SCROLL</div>
      </div>
      <div className="w-0.5 h-[calc(100%-23rem)] bg-light-yellow"></div>
    </div>
  );
};

const HeroSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    cssEase: "linear",
    autoplaySpeed: 0,
    pauseOnHover: false,
    arrows: false,
    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const iconsArray = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3 />,
      title: "HTML",
    },
    {
      icon: <IoLogoJavascript />,
      title: "Javascript",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <SiExpress />,
      title: "Express",
    },
    {
      icon: <DiMongodb />,
      title: "MongoDB",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <TbBrandNextjs />,
      title: "Next.js",
    },
    {
      icon: <SiPostman />,
      title: "Postman",
    },
    {
      icon: <FaNpm />,
      title: "npm",
    },
    {
      icon: <FaYarn />,
      title: "yarn",
    },
  ];

  return (
    <section className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {iconsArray.map((curIcon) => (
          <div
            key={curIcon.title}
            className="!flex !flex-col !items-center !justify-center text-milk/10 text-3xl md:text-4xl"
          >
            <p className="">{curIcon.icon}</p>
            <p className="text-xs">{curIcon.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
