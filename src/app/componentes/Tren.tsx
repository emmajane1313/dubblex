import { FunctionComponent, JSX } from "react";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { INFURA_GATEWAY } from "@/lib/constantes";

const Tren: FunctionComponent<{
  altura: string;
  anchura: string;
  direccion: "right" | "left";
  velocidad: number;
}> = ({ altura, direccion, anchura, velocidad }): JSX.Element => {
  return (
    <div className="bg-mar relative w-full h-fit bg-white flex overflow-x-hidden">
      <Marquee
        gradient={false}
        speed={velocidad}
        direction={direccion}
        pauseOnClick
        className="z-0"
      >
        <div
          className="relative flex"
          style={{
            height: altura,
            width: anchura,
          }}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmbpLc4eaLmUEdWwx2SArwbjShqBDouss95JS5pP1E39gg`}
            layout="fill"
            priority
            objectFit="contain"
            draggable={false}
          />
        </div>
        <div
          className="relative flex"
          style={{
            height: altura,
            width: anchura,
          }}
        >
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmbpLc4eaLmUEdWwx2SArwbjShqBDouss95JS5pP1E39gg`}
            layout="fill"
            priority
            objectFit="contain"
            draggable={false}
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Tren;
