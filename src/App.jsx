import { useRef, useEffect } from "react";

import Nav from "./components/Nav";
import Poster from "./components/Poster";

import posterImage from './assets/Posters/Kei-Single.png';
import CSImage from './assets/Posters/CS-Single.png';
import musicImage from './assets/Posters/Music-Single.png';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY + e.deltaX;
  };

    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <div>
        <Nav />
        <div
            ref={scrollRef}
          className="flex space-x-30 w-full h-screen bg-[#551983] overflow-x-hidden overflow-y-hidden items-center px-20">
          <Poster name="Bio" desc="Who is this guy?!" image={posterImage} className="mt-40"/>
          <Poster name="Projects" desc="A peak inside the Github vault"  image={CSImage} className="mt-40"/>
          <Poster name="Music" desc="Lo-fi beats to debug to"  image={musicImage} className="mt-40"/>
          <Poster name="Art" desc="My digital napkin sketches." className="mt-40"/>
        </div>
      </div>
    </>
      
  );
}

export default App;
