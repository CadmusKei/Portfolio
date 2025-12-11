
import Nav from '../components/Nav';

import suikaImage from "../assets/Images/Projects/Suika.png"  ;
import verifierImage from "../assets/Images/Projects/Verifier.png";
import nsdImage from "../assets/Images/Projects/nsd.png";
import webImage from "../assets/Images/Projects/Website.png";
import drawingImage from "../assets/Images/Projects/DrawingApp.png";
import textbasedImage from "../assets/Images/Projects/Textbased.png";
import rougeLike from "../assets/Images/Projects/RougeLike.png";

import ProjectTab from '../components/ProjectTab';

function Projects() {

    let navColour = "bg-[#00000041]"

  
  return (
    <>

      <div className="fixed top-0 left-0 w-full h-screen bg-black z-0" />
      <div className="fixed top-0 left-0 w-[55%] h-screen 
      bg-linear-to-br from-[#811964] to-[#110b39] z-0
      rounded-r-2xl shadow-[inset_0_-1rem_4rem] shadow-[#00000086]" />
  
      <div className={`w-full h-[15%] bg-[#00000041] fixed shadow-xl z-50`}>
        <Nav background={navColour} TitleColour="text-white" />
      </div>  

         <ProjectTab id="#" image={nsdImage} scale="w-[90%]" name="NSD-RUN!" 
                    text="As part of a Game-Development Internship at animation and game development company, Studio Bo, 
                    I developed a endless runner game in Unity.The game was made for National Stop Sign Day. 
                    The player must collect all stop sign shards whilst avoiding obsatcles and fight the boss, 'Karen'. "
                    link="https://github.com/CadmusKei/NSD-RUN" next="#verify"/>

        <ProjectTab id="verify" image={verifierImage} scale="w-[90%]" name="Verifier" 
                    text="As a team, developed a qualification verifier using a feature-rich 
                    simulated blockchain in a Next.js (React) application with Node.js backend
                    within 24 hours. The verifyer implements encryption methods including RSA 
                    and SHA-256 for secure hashing. "
                    link="https://github.com/shawqicauses/yeagerists-project/" next="#suika"/>

        <ProjectTab id="suika" image={suikaImage} scale="h-[90%]" name="Suika Game" 
                    text="Pixel-Art clone of popular Chinese game 'Suika Game' made
                          using python game development library Pygame, and python's physics
                          simulation engine pymunk."
                    link="https://github.com/CadmusKei/Suika-Game-Clone" next="#portfolio"/>
      
        <ProjectTab id="portfolio" image={webImage} scale="w-[90%]" name="My Website" 
                    text="Things are getting a bit meta...Built with a modern web development stack including 
                    Vite, React, Framer Motion, and Tailwind CSS, it features a sleek, UI with dynamic animations. 
                    Key highlights include a custom-built audio player, responsive layouts, and carefully crafted 
                    visual elements that showcase my skills in web design, front-end development, and interactive media. "
                    link="https://github.com/CadmusKei/Portfolio" next="#drawing"/>

        <ProjectTab id="drawing" image={drawingImage} scale="w-[80%]" name="Drawing App" 
                    text="A lightweight, web-based drawing application built using vanilla HTML and Tailwind CSS. 
                    The app provides a simple GUI for quick sketches."
                    link="https://github.com/CadmusKei/DrawingApp" next="#textbased-adventure"/>

        <ProjectTab id="textbased-adventure" image={textbasedImage} scale="h-[75%]" name="Text Game" 
                    text="A text-based adventure game demo, built to explore 
                    building modular designs outside classes. 
                    Data files, objects, and maps were all stored in python dictionaries."
                    link="https://github.com/CadmusKei/Textbased-Adventure-Project" next="#rougelike"/>

        <ProjectTab id="rougelike" image={rougeLike} scale="w-[80%]" name="ROG: Rougelike" 
                    text="An endless rougelike built with Python's game development library Pygame. 
                    Features resource management, powerups and varied rooms." next="#"/>

        <ProjectTab id="rougelike" image={rougeLike} scale="w-[80%]" name="ROG: Rougelike" 
                    text="An endless rougelike built with Python's game development library Pygame. 
                    Features resource management, powerups and varied rooms." next="#"/>

    </>
  );
}

export default Projects;