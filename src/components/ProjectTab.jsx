import Title from "./Title"
import ProjectSection from "./ProjectSection"
import Icon from "./Icon"
import Text from "./Text";

import githubLogo from "../assets/Icons/Tools/Github.svg";
import arrowIcon from "../assets/Icons/Down-Arrow.svg";


export default function ProjectTab({image, text, name, scale, link, id, next}) {
  return (
    <div className="w-full min-h-screen md:h-screen">
      <a id={id}></a>
      <ProjectSection imageSrc={image} scale={scale}>
        <div className="md:contents flex flex-col w-full space-y-6 bg-linear-to-br
         from-black/10 to-black/35 backdrop-blur-3xl border border-white/15
         md:bg-transparent md:backdrop-blur-none rounded-3xl p-6 md:p-0 ">
          <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
          <Title className="text-white text-3xl md:text-8xl underline underline-offset-4 md:underline-offset-10" name={name} />
          <Text>{text}</Text>
          <div className="flex w-full justify-around">
            <Icon path={githubLogo} link={link} target="_blank" scalar="w-8 h-8 md:w-13 md:h-13" 
                  buttonSize="w-12 h-12 md:w-20 md:h-20"
                  hoverColour="border-pink-200 hover:border-[#df40d45d] to-[#7a34d6c3] from-[#811964]"/>
            <Icon path={arrowIcon} link={next} scalar="w-7 h-5 md:w-10 md:h-6"
                  buttonSize="w-12 h-12 md:w-20 md:h-20" 
                  hoverColour="border-pink-200 hover:border-[#df40d45d] to-[#7a34d6c3] from-[#811964]" />
          </div>
          <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
        </div>
      </ProjectSection>
    </div>
  );
}