import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const SocialIconList = () => {
  const iconList = [
    {
      icon: <FiGithub />,
    },
    {
      icon: <FaLinkedinIn />,
    },
    {
      icon: <BiLogoGmail />,
    },
  ];
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="flex flex-col gap-6">
        {iconList.map((curIcon, i) => (
          <div
            key={i}
            className="text-milk/60 text-xl common-transition hover:-translate-y-[1px] hover:text-milk/90"
          >
            {curIcon.icon}
          </div>
        ))}
      </div>
      <div className="h-28 w-0.5 bg-milk/60"></div>
    </div>
  );
};
export default SocialIconList;
