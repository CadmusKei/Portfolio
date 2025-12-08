import { useEffect } from "react"
import { Routes, Route } from "react-router-dom";;

import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";


function App() {

  return (
    <Routes> 
      <Route path="/" element={<Home />}></Route>
      <Route path="/Bio" element={<Bio/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
    </Routes> 
  );
}

export default App;
