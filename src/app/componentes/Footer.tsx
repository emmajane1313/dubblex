import { INFURA_GATEWAY } from "@/lib/constantes";
import Image from "next/legacy/image";
import { FunctionComponent, JSX } from "react";
import { FaInstagram } from "react-icons/fa6";

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-black flex relative w-full h-96 px-4 pt-10 pb-2 justify-between flex-row gap-4 items-end">
      <div className="font-nerd relative w-fit h-fit flex justify-start items-start flex-col gap-2">
        <div className="relative w-fit h-fit flex">
          <div className="relative h-60 w-36 flex">
            <Image
              draggable={false}
              layout="fill"
              src={`${INFURA_GATEWAY}/ipfs/QmVNFisg6YFXUezjWvxNzVxzCpXir7ZQbYgmjyvPMTF23s`}
            />
          </div>
        </div>
        <div className="relative w-fit h-fit flex text-left text-white text-xxs">
          <div className="relative h-fit w-72 break-words flex">
            OG tagger from the Bronx. Survived the Summer of Sam. Bombed the
            first subway cars. Putting up across the five for over 40 years.
          </div>
        </div>
      </div>
      <FaInstagram
        color="white"
        size={25}
        onClick={() => window.open("https://www.instagram.com/d__ubble__x/")}
        className="z-50 cursor-pointer"
      />
    </div>
  );
};

export default Footer;
