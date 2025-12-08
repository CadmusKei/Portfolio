import { useRef, useEffect } from "react";
import Nav from "../components/Nav";
import Poster from "../components/Poster";

import posterImage from '../assets/Posters/Kei-Single.png';
import CSImage from '../assets/Posters/CS-Single.png';
import musicImage from '../assets/Posters/Music-Single.png';



function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY + e.deltaX;
    };

    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el?.removeEventListener("wheel", handleWheel);
  }, []);

  let navColour = "bg-[#00000041]"

  return (
    <>

      <Nav background={navColour} TitleColour="text-white" />
      <div
        ref={scrollRef}
        className="flex space-x-30 w-full h-screen bg-[#1c1c1c] overflow-x-hidden overflow-y-hidden items-center px-20">
        <Poster name="Bio" link="/Bio" desc="Who is this guy?!" image={posterImage} 
        colour="hover:border-emerald-400" hoverColour="hover:to-[#165f2a41] " />

        <Poster name="Projects" link="/Projects" desc="A peak inside the Github vault" image={CSImage}
         colour="hover:border-purple-400" hoverColour="hover:to-[#46165f54]"  />

        <Poster name="Music" desc="Lo-fi beats to debug to" image={musicImage} 
        colour="hover:border-sky-400"  hoverColour="hover:to-[#16595f54]"  />

        <Poster name="Contact" desc="Ping me" 
        colour="hover:border-rose-400"  hoverColour="hover:to-[#5f162e41]"  />
      </div>

      <div className="bg-[#5f162e41]"></div>

    </>
  );
}

export default Home;