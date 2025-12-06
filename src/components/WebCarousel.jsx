import { motion } from "framer-motion";

import react from "../assets/Icons/Tools/react.svg";
import framer from "../assets/Icons/Tools/Framer.svg";
import tailwind from "../assets/Icons/Tools/tailwind.svg";
import node from "../assets/Icons/Tools/Node.svg";

const icons = [
  { id: 1, src: tailwind, link: "https://tailwindcss.com" },
  { id: 3, src: react, link: "https://react.dev" },
  { id: 4, src: framer, link: "https://www.framer.com/motion/" },
  { id: 5, src: node, link: "https://nodejs.org" },
];

export default function WebCarousel() {
  const loopIcons = [...icons, ...icons];

  const iconWidth = 80;
  const gap = 24;
  const totalIconWidth = iconWidth + gap;

  const containerWidth = totalIconWidth * 4;
  const scrollDistance = totalIconWidth * icons.length;

  return (
    <div
      className="relative overflow-hidden h-24"
      style={{
        width: containerWidth,
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-6 absolute"
        animate={{ x: [0, -scrollDistance] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {loopIcons.map((icon, i) => (
          <div
            key={i}
            onClick={() => window.open(icon.link, "_blank")}
            className="w-20 h-20 flex items-center justify-center rounded-2xl 
            cursor-pointer
            hover:bg-[#7575755e] transition hover:duration-300 duration-1000 
            bg-linear-to-br from-[#3131315e] to-[#8888885e] 
            border-2 border-[#7777775e] shadow-lg shadow-[#17171770]"
          >
            <img src={icon.src} className="w-12 h-12" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}