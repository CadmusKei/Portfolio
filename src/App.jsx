import { useState } from "react";
import Nav from "./components/Nav";
import Bio from "./components/Bio";

function App() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-linear-to-br from-teal-800 to-neutral-900">
        <Nav />
        <Bio />
      </div>
    </>
  );
}

export default App;
