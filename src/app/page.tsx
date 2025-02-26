"use client";
import Image from "next/legacy/image";
import Tren from "./componentes/Tren";
import { INFURA_GATEWAY } from "@/lib/constantes";
import Footer from "./componentes/Footer";
import useMap from "./componentes/useMap";

export default function Home() {
  const { map, isFixed, topPosition, imageContainerRef } = useMap();

  return (
    <div className="relative w-full h-full flex items-center justify-start flex-col overflow-x-hidden">
      <div className="relative w-full h-screen flex overflow-hidden z-0">
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
      </div>
      <div className="relative w-full bg-black h-[50rem] z-10">
        <div className="absolute w-fit h-fit flex left-10 -top-20">
          <div className="relative w-32 h-60 flex -rotate-12">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/Qmd32gnaRea3w2vQHNAasacJKy3y375RWngLP9WF6SPPeR`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute w-fit h-fit flex left-20 bottom-20">
          <div className="relative w-40 h-40 flex">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmaJUFac7nNWsBQ8z1JmjSmUYA7QQP4tdsqnTuTy1jRJhz`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute w-fit h-fit flex right-0 bottom-0">
          <div className="relative w-80 h-60 flex rotate-2">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmVy3Trvxbug6HvkzFRb9AnTst84GTtVn588MBx95UjmDc`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute w-fit h-fit flex right-0 top-10">
          <div className="relative w-40 h-40 flex rotate-6">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmPeUswnFj3182iKBoSoEeNoD6Vp3cLaJSkwzjYxQRsay9`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute w-fit h-fit flex right-40 top-10">
          <div className="relative w-20 h-20 flex -rotate-12">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmRFvDS5PknAjQHfvB8EXC9RfWWo6xgm81TUUsmVVboXXL`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div
        className="relative w-full bg-black h-fit flex overflow-x-scroll items-start justify-start"
        id="scroll"
      >
        <div className="relative w-fit h-full flex flex-row gap-3 p-4">
          {Array.from({ length: 10 }).map((arte, indice) => {
            return (
              <div
                key={indice}
                className="relative w-60 h-60 flex rounded-md bg-white"
              ></div>
            );
          })}
          <div
            className="absolute top-0 left-0 w-full h-full flex"
            id="noise2"
          ></div>
        </div>
      </div>
      <div id="map"></div>

      <Footer />
      <div
        ref={imageContainerRef}
        className={`${
          isFixed ? "fixed" : "absolute"
        } flex left-0 w-fit h-fit z-20`}
        style={!isFixed ? { top: `${topPosition}px` } : {}}
      >
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
  );
}
