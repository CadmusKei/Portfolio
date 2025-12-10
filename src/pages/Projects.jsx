
import keiLogo from '../assets/Icons/KeiLogoPixel.svg';
import ProjectSection from "../components/ProjectSection";
import Title from "../components/Title";
import Text from "../components/Text";
import Icon from "../components/Icon";

import githubLogo from "../assets/Icons/Tools/Github.svg"
import arrowIcon from "../assets/Icons/Down-Arrow.svg"

import suikaImage from "../assets/Images/Projects/Suika.png"  
import verifierImage from "../assets/Images/Projects/Verifier.png"
import nsdImage from "../assets/Images/Projects/nsd.png"

function Projects() {
  
  return (
    <>

      <div className="fixed top-0 left-0 w-full h-screen bg-black z-0" />
      <div className="fixed top-0 left-0 w-[55%] h-screen 
      bg-linear-to-br from-[#811964] to-[#110b39] z-0
      rounded-r-2xl shadow-[inset_0_-1rem_4rem] shadow-[#00000086]" />
  
      <div className={`w-full h-[15%] bg-[#00000041] fixed shadow-xl z-50`}>
        <div className="flex pl-10 w-full h-full items-center space-x-20">
                
          <a href="/">
            <div className={
              `flex w-18 h-18 rounded-lg shadow-neutral-950 shadow-md border-3 border-neutral-800 items-center justify-center 
              transition hover:duration-400 hover:border-neutral-400 hover:bg-[#e1e1e13d] duration-900`}>
                <img src={keiLogo} alt="" className={`w-11 h-8 image-pixel `}  />     
            </div>
               
          </a>

          <Title className={` mt-3 mb-3 text-white`} name="Kei Farouk"/>

        </div>
      </div>  

        <div className="relative z-10 scrollbar">
          <ProjectSection imageSrc={verifierImage} scale="w-[80%]" colours="bg-linear-to-br from-[#811964] to-[#110b39]">
              <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
              <Title className="text-white text-8xl underline underline-offset-10" name="Verifier" />  
              <Text>As a team, developed a qualification verifier using a feature-rich 
                simulated blockchain in a Next.js (React) application with Node.js backend
                 within 24 hours.</Text>    
              <Text>The verifyer implements encryption methods including RSA and SHA-256 for secure hashing.</Text>             
              <div className="flex w-full justify-around">
                <Icon path={githubLogo} link="https://github.com/shawqicauses/yeagerists-project/tree/main" 
                scalar="w-13 h-13" buttonSize="w-20 h-20" target="_blank"
                hoverColour="border-pink-200 hover:border-[#df40d45d]
                  to-[#7a34d6c3] from-[#811964]"/>
                <Icon path={arrowIcon} link="#nsd" scalar="w-10 h-6 "
                 buttonSize="w-20 h-20" hoverColour="border-pink-200 hover:border-[#df40d45d]
                  to-[#7a34d6c3] from-[#811964]"/>  
              </div>
              <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
          </ProjectSection>
        </div>

        <div className="w-full h-screen">
        <a id="nsd"></a>
          <ProjectSection imageSrc={nsdImage} scale="w-[90%]" colours="bg-linear-to-br from-[#811964] to-[#110b39]">    
              <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
              <Title className="text-white text-8xl underline underline-offset-10 " name="NSD-RUN!" />
              <Text>As part of a Game-Development Internship at animation and game development company, Studio Bo, 
                I developed a endless runner game in Unity.The game was made for National Stop Sign Day. 
                The player must collect all stop sign shards whilst avoiding obsatcles and fight the boss, 'Karen'.
              </Text>
              <div className="flex w-full justify-around">
                <Icon path={githubLogo} link="https://github.com/CadmusKei/NSD-RUN" target="_blank" scalar="w-13 h-13"
                buttonSize="w-20 h-20" hoverColour="border-pink-200 hover:border-[#df40d45d] to-[#7a34d6c3] from-[#811964]"/>
                <Icon path={arrowIcon} link="#suika" scalar="w-10 h-6 "
                 buttonSize="w-20 h-20" hoverColour="border-pink-200 hover:border-[#df40d45d]
                  to-[#7a34d6c3] from-[#811964]" />  
              </div>
              <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
          </ProjectSection>    
        </div>

        <div className="w-full h-screen">
          <a id="suika"></a>
          <ProjectSection imageSrc={suikaImage} scale="h-[90%]" colours="bg-linear-to-br from-[#811964] to-[#110b39]">    
              <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
              <Title className="text-white text-8xl underline underline-offset-10 " name="Suika Game" />
              <Text>Pixel-Art clone of popular Chinese game 'Suika Game' made
                  using python game development library Pygame, and python's physics
                  simulation engine pymunk.</Text>
                <Text>The aim is to merge as much fruit as posilbe without spilling over the container.</Text>
              <div className="flex w-full justify-around">
                <Icon path={githubLogo} link="https://github.com/CadmusKei/Suika-Game-Clone" target="_blank" scalar="w-13 h-13" buttonSize="w-20 h-20"
                hoverColour="border-pink-200 hover:border-[#df40d45d]
                  to-[#7a34d6c3] from-[#811964]"/>
                <Icon path={arrowIcon} link="#" scalar="w-10 h-6 "
                 buttonSize="w-20 h-20" hoverColour="border-pink-200 hover:border-[#df40d45d]
                  to-[#7a34d6c3] from-[#811964]" />  
              </div>
              <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
          </ProjectSection>    
        </div>
      
    </>
  );
}

export default Projects;