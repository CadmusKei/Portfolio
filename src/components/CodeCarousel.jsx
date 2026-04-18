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

  const isMobile = window.innerWidth < 768;
  const iconWidth = isMobile ? 48 : 80;
  const gap = isMobile ? 16 : 24;
  const totalIconWidth = iconWidth + gap;
  const containerWidth = totalIconWidth * 4;
  const scrollDistance = totalIconWidth * icons.length;

  return (
    <div
      className="relative overflow-hidden h-16 md:h-24 mx-auto"
      style={{
        width: containerWidth,
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex absolute"
        style={{ gap }}
        animate={{ x: [0, -scrollDistance] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {loopIcons.map((icon, i) => (
          <button
            key={i}
            onClick={() => window.open(icon.link, "_blank")}
            style={{ width: iconWidth, height: iconWidth, flexShrink: 0 }}
            className="flex items-center justify-center rounded-2xl 
              hover:bg-[#a8a8a85e] transition hover:duration-300 
              bg-linear-to-br from-[#3131315e] to-[#8888885e] 
              border-2 border-[#7777775e] shadow-lg shadow-[#17171770]"
          >
            <img src={icon.src} className="w-7 h-7 md:w-12 md:h-12 pointer-events-none" />
          </button>
        ))}
      </motion.div>
    </div>
  );
}