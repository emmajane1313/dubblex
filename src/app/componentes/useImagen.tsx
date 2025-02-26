import { useEffect, useRef, useState } from "react";

const useMap = () => {
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const [topPosition, setTopPosition] = useState<number>(0);
  const imageContainerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const scrollElement = document?.getElementById("scroll");
    const imageContainer = imageContainerRef?.current;

    const handleScroll = () => {
      if (scrollElement && imageContainer) {
        const scrollRect = scrollElement.getBoundingClientRect();

        if (scrollRect.top <= window.innerHeight) {
          if (isFixed) {
            const containerRect = imageContainer.getBoundingClientRect();
            setTopPosition(window.scrollY + containerRect.top);
            setIsFixed(false);
          }
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return {
    isFixed,
    topPosition,
    imageContainerRef,
  };
};

export default useMap;
