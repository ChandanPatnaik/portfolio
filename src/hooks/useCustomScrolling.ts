import { useEffect } from "react";

const SCROLL_SPEED = 25;
const useCustomScrolling = () => {
  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const newScrollTop = window.scrollY + direction * SCROLL_SPEED;
      window.scrollTo({
        top: newScrollTop,
        behavior: "smooth",
      });
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default useCustomScrolling;
