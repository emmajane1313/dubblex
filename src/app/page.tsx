"use client";
import Image from "next/legacy/image";
import Tren from "./componentes/Tren";
import { INFURA_GATEWAY } from "@/lib/constantes";
import Footer from "./componentes/Footer";

export default function Home() {
  return (
    <div className="relative w-full h-full flex items-center justify-start flex-col">
      <div className="relative w-full h-screen flex overflow-hidden z-20">
        <div className="relative w-full h-fit flex flex-col items-start justify-start bg-mar">
          <Tren
            velocidad={200}
            direccion="left"
            anchura="60rem"
            altura="2.5rem"
          />
          <Tren
            velocidad={400}
            direccion="right"
            anchura="60rem"
            altura="2.5rem"
          />
          <Tren
            velocidad={200}
            direccion="right"
            anchura="260rem"
            altura="10rem"
          />
          <Tren
            velocidad={200}
            direccion="left"
            anchura="60rem"
            altura="2.5rem"
          />
          <Tren
            velocidad={160}
            direccion="left"
            anchura="380rem"
            altura="20rem"
          />
          <Tren
            velocidad={200}
            direccion="right"
            anchura="60rem"
            altura="2.5rem"
          />
          <Tren
            velocidad={200}
            direccion="left"
            anchura="60rem"
            altura="2.5rem"
          />
          <Tren
            velocidad={200}
            direccion="right"
            anchura="260rem"
            altura="10rem"
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex"
          id="noise2"
        ></div>
        <div className={`fixed flex left-0 w-fit h-fit`}>
          <div className="relative w-screen h-[calc(100vh+5px)] flex">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmcPokZYG9yuLPR4yfYNbKgETjPrzYs25xEjWADAtxASbZ`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
            <div
              className="absolute top-0 left-0 w-full h-full flex"
              id="noise"
            ></div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-black h-80"></div>
      <Footer />
    </div>
  );
}
