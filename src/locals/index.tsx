import { BiCommentDetail } from "react-icons/bi";
import { CiDesktop } from "react-icons/ci";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3,
  FaHtml5,
  FaNetworkWired,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import { IoIosContact, IoLogoJavascript } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdRestartAlt } from "react-icons/md";
import { SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// header
export const navigationData = [
  {
    label: "Start",
    link: "/",
    icon: <MdRestartAlt />,
  },
  {
    label: "About",
    link: "#about",
    icon: <BiCommentDetail />,
  },
  {
    label: "Projects",
    link: "#projects",
    icon: <FaNetworkWired />,
  },
  {
    label: "Contact",
    link: "#contact",
    icon: <IoIosContact />,
  },
  {
    label: "Resume",
    link: "/Chandan Ku. Patnaik.pdf",
    icon: <IoDocumentAttachOutline />,
  },
];

// hero section icon data
export const heroSectionIconsArray = [
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

// hero section slider configuration
export const heroSliderSettings = {
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

// experience data
export const experienceData = [
  {
    role: "Full Stack Developer",
    company: "SearchingYard Group",
    companySite: "https://www.searchingyard.com/",
    description:
      "Spearheaded multiple Full stack projects, overseeing both frontend and backend development to create scalable applications in diverse domains like CMS platforms, ERP systems, online gaming, real estate, and e-commerce. Through close collaboration and mentorship, I provided leadership, emphasizing the importance of best practices. This included building tools to enhance the developer experience and streamlined workflows and improved code quality.",
    startDate: "Nov 2022",
    endDate: "Current",
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "AWS EC2",
      "AWS S3",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "SearchingYard Group",
    companySite: "https://www.searchingyard.com/",
    description:
      "Made significant contributions to developing and improving web applications, including work on diverse projects such as an inventory app, university CMS, and e-commerce, by demonstrating strong proficiency in React, Next.js, JavaScript, and TypeScript. Effectively applying these skills during the internship, I played a key role in enhancing web applications.",
    startDate: "June 2022",
    endDate: "Nov 2022",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "TailwindCss",
      "Firebase",
      "Material UI",
      "Framer Motion",
    ],
  },
];

// project list
export const projectLists = [
  {
    name: "Portfolio",
    description:
      "Explore my portfolio crafted with Next.js, Tailwind CSS, and Framer Motion. Discover sleek designs, responsive layouts, and captivating animations.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel", "Firebase"],
    link: "https://chandan-patnaik.vercel.app/",
  },
  {
    name: "Airbnb Clone",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    image: "/projects/airbnb.png",
    tech: [
      "Next.js",
      "Express",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "TailwindCSS",
    ],
  },
];

// expertise data
export const expertiseData = [
  {
    heading: (
      <div>
        Software <br /> Development
      </div>
    ),
    description:
      "Experienced in both function and OOP: Javascript, Typescript, Python",
    icon: <CiDesktop />,
  },
  {
    heading: (
      <div>
        Frontend Dev <br /> React, NextJS
      </div>
    ),
    description:
      "Over 2 years of development experience in React, NextJS and Other frontend libraries.",
    icon: <FaReact />,
  },
  {
    heading: (
      <div>
        Backend Dev <br /> Node, Express
      </div>
    ),
    description:
      "Experienced in crafting efficient cross-platform backends using Node.js and Express.",
    icon: <SiExpress />,
  },
];
