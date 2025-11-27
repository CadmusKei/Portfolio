import { useState } from "react";
import Nav from "./components/Nav";
import Poster from "./components/Poster";
import posterImage from './assets/Kei-Single.png';
import CSImage from './assets/CS-Single.png';

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-[#212121] highlight-white">
        <Nav />
        <Poster name="Bio" desc="Who is this guy?!" image={posterImage} className="mt-40"/>
        <Poster name="Projects" desc="A peak inside the Github vault"  image={CSImage}className="mt-40"/>
        <Poster name="Music" desc="Lo-fi beats to debug to" className="mt-40"/>
        <Poster name="Art" desc="My digital napkin sketches." className="mt-40"/>

      </div>
    </>
  );
}



export default App;
