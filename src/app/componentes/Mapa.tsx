"use client";
import { FunctionComponent, JSX } from "react";
import useMapa from "./useMapa";

const Mapa: FunctionComponent = (): JSX.Element => {
  const { map } = useMapa();
  return <div id="map"></div>;
};

export default Mapa;
