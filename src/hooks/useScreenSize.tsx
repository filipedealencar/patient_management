import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const checkScreenSize = () => {
    const mobileMediaQuery = window.matchMedia("(max-width: 639px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 640px) and (max-width: 1023px)"
    );

    if (mobileMediaQuery.matches) {
      setScreenSize("mobile");
    } else if (tabletMediaQuery.matches) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  useEffect(() => {
    checkScreenSize();

    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
