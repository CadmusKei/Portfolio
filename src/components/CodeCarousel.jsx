import { motion } from "framer-motion";

import python from "../assets/Icons/Tools/Python.svg";
import java from "../assets/Icons/Tools/Java.svg";
import cSharp from "../assets/Icons/Tools/CSharp.svg";
import js from "../assets/Icons/Tools/JS-Colour.svg";

const icons = [
  { id: 1, src: python, link: "https://www.python.org/" },
  { id: 2, src: java, link: "https://www.java.com/" },
  { id: 3, src: cSharp, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { id: 4, src: js, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
];

export default function CodeCarousel() {
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
          duration: 15,
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