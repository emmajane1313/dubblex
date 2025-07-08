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

    L.tileLayer(
      `https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=${process.env.NEXT_PUBLIC_JAWG}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        crossOrigin: true,
        referrerPolicy: "strict-origin-when-cross-origin",
        attribution:
          '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);
  }, []);

  return {
    map,
  };
};

export default useMapa;
