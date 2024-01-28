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
  ];
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="flex flex-col gap-6">
        {iconList.map((curIcon, i) => (
          <div key={i} className="text-milk/60 text-xl">
            {curIcon.icon}
          </div>
        ))}
      </div>
      <div className="h-28 w-0.5 bg-milk/60"></div>
    </div>
  );
};
export default SocialIconList;
