import { useEffect, useState } from "react";

const useSpotLight = ({
  rgba = "rgba(175, 188, 227, 0.20)",
}: {
  rgba?: string;
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientX = cursorPosition.x + "px";
  const gradientY = cursorPosition.y + "px";

  const backgroundStyle = {
    background: `radial-gradient(600px at ${gradientX} ${gradientY}, ${rgba}, transparent 80%)`,
  };
  return { backgroundStyle };
};
export default useSpotLight;
