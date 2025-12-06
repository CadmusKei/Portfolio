import { motion } from "framer-motion";

import ableton from "../assets/Icons/Tools/Ableton.svg";
import blender from "../assets/Icons/Tools/Blender.svg";
import unity from "../assets/Icons/Tools/Unity.svg";
import vsCode from "../assets/Icons/Tools/VSCode.svg";

const icons = [
  { id: 1, src: ableton, link: "https://www.ableton.com/" },
  { id: 2, src: blender, link: "https://www.blender.org/" },
  { id: 3, src: unity, link: "https://unity.com/" },
  { id: 4, src: vsCode, link: "https://code.visualstudio.com/" },
];

export default function AppsCarousel() {
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
          <button
            key={i}
            onClick={() => window.open(icon.link, "_blank")}
            className="w-20 h-20 flex items-center justify-center rounded-2xl 
            hover:bg-[#7575755e] transition hover:duration-300 
            bg-linear-to-br from-[#3131315e] to-[#8888885e] 
            border-2 border-[#7777775e] shadow-lg shadow-[#17171770]"
          >
            <img src={icon.src} className="w-12 h-12 pointer-events-none" />
          </button>
        ))}
      </motion.div>
    </div>
  );
}