import { useEffect, useState } from "react";
import useIsMounted from "./useIsMounted";

const useScrollPosition = () => {
  const isMounted = useIsMounted();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [isMounted]);

  return scrollPosition;
};

export default useScrollPosition;
