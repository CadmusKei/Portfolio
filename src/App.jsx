import { useState } from "react";
import Nav from "./components/Nav";
import Poster from "./components/Poster";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-neutral-800">
        <Nav />
        <Poster name="Bio" desc="This is my bio" className="mt-40"/>
        <Poster name="Pro" className="mt-40"/>
        <Poster name="Art" className="mt-40"/>
        <Poster name="Music" className="mt-40"/>
        <Poster name="CV" className="mt-40"/>
      </div>
    </>
  );
}

export default App;
