import Title from "./Title"
import ProjectSection from "./ProjectSection"
import Icon from "./Icon"
import Text from "./Text";

import githubLogo from "../assets/Icons/Tools/Github.svg";
import arrowIcon from "../assets/Icons/Down-Arrow.svg";


export default function ProjectTab({image, text, name, scale, link, id, next}) {

    return (
        <div className="w-full h-screen">
            <a id={id}></a>
                <ProjectSection imageSrc={image} scale={scale} colours="bg-linear-to-br from-[#811964] to-[#110b39]">    
                    <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
                    <Title className="text-white text-8xl underline underline-offset-10 " name={name} />
                    <Text>{text}</Text>
                    <div className="flex w-full justify-around">
                        <Icon path={githubLogo} link={link} target="_blank" scalar="w-13 h-13" buttonSize="w-20 h-20"
                            hoverColour="border-pink-200 hover:border-[#df40d45d]
                            to-[#7a34d6c3] from-[#811964]"/>
                        <Icon path={arrowIcon} link={next} scalar="w-10 h-6 "
                            buttonSize="w-20 h-20" hoverColour="border-pink-200 hover:border-[#df40d45d]
                            to-[#7a34d6c3] from-[#811964]" />  
                    </div>
                      <div className="h-[0.2rem] w-full bg-[#ffffff5c] rounded-full"></div>
                  </ProjectSection>    
                </div>
    );

};