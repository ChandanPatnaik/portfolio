import { TypeAnimation } from "react-type-animation";

const HeroAnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        "WebApps",
        2000,
        "Frontend",
        2000,
        "Servers",
        2000,
        "Systems",
        2000,
      ]}
      speed={40}
      repeat={Infinity}
      cursor={false}
    />
  );
};
export default HeroAnimatedText;
