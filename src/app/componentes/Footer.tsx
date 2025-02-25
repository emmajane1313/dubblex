import { FunctionComponent, JSX } from "react";
import { FaInstagram } from "react-icons/fa6";

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-black flex relative w-full h-fit text-white text-xs px-4 pt-2 pb-8 justify-between flex-row gap-4 items-center">
      <div className="font-nerd relative w-80 h-fit flex text-left">
        OG tagger from the Bronx. Survived the Summer of Sam. Bombed the first
        subway cars. Putting up across the five for over 40 years.
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
