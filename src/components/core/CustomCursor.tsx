/* eslint-disable @next/next/no-img-element */
// components/CustomCursor.js
import { Giphy } from "@/assets/utility";
import { useTorch } from "@/hooks";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isTorchOn, setIsTorchOn } = useTorch();

  useEffect(() => {
    const updateCursorPosition = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed ${
          isTorchOn ? "" : "w-7 h-7 border"
        } rounded-full z-[9999] custom-cursor border-white hidden lg:flex items-center justify-center`}
        style={{
          left: `${position.x - 0}px`,
          top: `${position.y - 0}px`,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      >
        {isTorchOn ? (
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img src={Giphy.src} alt="" className="w-full h-full" />
          </div>
        ) : (
          <div
            className={`w-1.5 h-1.5 bg-white rounded-full hover:cursor-none`}
            style={{
              marginLeft: "-1px",
              marginTop: "-1px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
