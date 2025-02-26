import { useEffect, useRef, useState } from "react";
import L, { Map } from "leaflet";

const useMapa = () => {
  const [map] = useState<Map>();

  useEffect(() => {
    if (!document.getElementById("map")) return;

    const map = L.map("map", {
      center: L.latLng(40.8499, -73.8664),
      zoom: 14,
    });

    var Stadia_AlidadeSmoothDark = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",

      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        crossOrigin: true,
        referrerPolicy: "strict-origin-when-cross-origin",
        accessToken: process.env.NEXT_PUBLIC_STADIUM,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);
  }, []);

  return {
    map,
  };
};

export default useMapa;
