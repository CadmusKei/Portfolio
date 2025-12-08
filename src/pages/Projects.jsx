import { useRef, useEffect } from "react";
const pageGradient = "bg-linear-to-br from-neutral-950 to-[#21212141] transition duration-800 hover:to-[#66666641] "

import Nav from "../components/Nav";
import ProjectSection from "../components/ProjectSection";

import githubLogo from "../assets/Icons/Tools/Github.svg"

import Title from "../components/Title";
import Text from "../components/Text";
import Icon from "../components/Icon";

import suikaImage from "../assets/Images/Projects/Suika.png"

function Projects() {
  
  return (
    <>

      {/* <Nav background="bg-[#1111116d]" TitleColour="text-white"/> */}

      <div className="w-full h-screen bg-black">
        <ProjectSection imageSrc={suikaImage} colours="bg-linear-to-br from-[#811964] to-[#110b39]">
            <Title className="text-white text-8xl underline underline-offset-10 mt-20" name="Suika Game" />
            <Text>Pixel-Art clone of popular Chinese game 'Suika Game' made 
                using python game development library Pygame, and python's physics 
                simulation engine pymunk.</Text>
            <Text>The aim of the game is to merge as many fruits as possible without 
              completely filling the container. Each merged fruit bcomes a slightly 
              bigger one until the biggest fruits are merged which disappear.</Text>
              
            <Icon path={githubLogo} link="www.chess.com" scalar="w-13 h-13" buttonSize="w-20 h-20" 
            hoverColour="hover:border-neutral-300 hover:bg-[#222] "/> 

        </ProjectSection>
      </div>
      

    </>
  );
}

export default Projects;