import { useEffect, useRef, useState } from "react";
import L, { Map } from "leaflet";

const useMap = () => {
  const [map] = useState<Map>();
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const [topPosition, setTopPosition] = useState<number>(0);
  const imageContainerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (document.getElementById("map")) {
      const map = L.map("map", {
        center: L.latLng(40.8499, -73.8664),
        zoom: 14,
      });
      L.tileLayer(
        `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`,
        {
          tileSize: 512,
          zoomOffset: -1,
          minZoom: 1,
          crossOrigin: true,
          attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(map);
    }
  }, []);

  useEffect(() => {
    const scrollElement = document.getElementById("scroll");
    const imageContainer = imageContainerRef.current;

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
    map,
    isFixed,
    topPosition,
    imageContainerRef,
  };
};

export default useMap;
