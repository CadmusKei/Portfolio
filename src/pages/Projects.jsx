import { useRef, useEffect } from "react";
const pageGradient = "bg-linear-to-br from-neutral-950 to-[#21212141] transition duration-800 hover:to-[#66666641] "

import Nav from "../components/Nav";
import ProjectSection from "../components/ProjectSection";

import Title from "../components/Title";
import Text from "../components/Text";
import Icon from "../components/Icon";

import suikaImage from "../assets/Images/Projects/Suika.png"

function Projects() {
  
  return (
    <>

      <div className="w-full h-screen bg-black">
        <ProjectSection imageSrc={suikaImage} className="bg-linear-to-br from-[#811964] to-[#110b39]">
            <Title className="text-white text-8xl underline underline-offset-10 mt-10" name="Suika Game" />
            <Text>Pixel-Art clone of popular Chinese game 'Suika Game' made 
                using python game development library Pygame, and pythons physics 
                simulation engine pymunk.</Text>
        </ProjectSection>
      </div>
      <div className="w-full h-screen bg-black">
        <ProjectSection imageSrc={suikaImage} className="bg-linear-to-br from-[#811964] to-[#110b39]">
            <Title className="text-white text-8xl underline underline-offset-10 mt-10" name="Suika Game" />
            <Text>Pixel-Art clone of popular Chinese game 'Suika Game' made 
                using python game development library Pygame, and pythons physics 
                simulation engine pymunk.</Text>
        </ProjectSection>
      </div>
      

    </>
  );
}

export default Projects;