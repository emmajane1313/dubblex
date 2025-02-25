import Image from "next/legacy/image";
import Tren from "./componentes/Tren";
import { INFURA_GATEWAY } from "@/lib/constantes";

export default function Home() {
  return (
    <div className="relative w-full h-full flex items-center justify-start flex-col">
      <div className="relative w-full h-screen flex overflow-hidden">
        <div className="relative w-full h-fit flex flex-col items-start justify-start">
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
        <div className="absolute flex bottom-0 left-0 w-fit h-fit">
          <div className="relative w-screen h-[calc(100vh-10px)] flex">
            <Image
              src={`${INFURA_GATEWAY}/ipfs/QmXCXRdaFNB8pTj2iehVaaBNVv2kDJJEN8r5cUQajGWTqF`}
              layout="fill"
              priority
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex"
          id="noise"
        ></div>
      </div>
    </div>
  );
}
