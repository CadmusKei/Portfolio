import Card from "./Card";
import Title from "./Title";
import Block from "./Block";
import Description from "./Description"
import AnimatedCover from "./AnimatedCover";
import Icon from "./Icon";

import sideArrow from '../assets/Icons/Side-Arrow.svg'


function Poster({ name, link, desc, image, colour, hoverColour, successor }) {
  return (
    <>
      {/* Poster dividing blocks */}
      <Block className=" md:mt-20" hoverColour={hoverColour}>

          <a id={successor}></a>

        <Card link={link} width="w-[90%] md:w-[28%]" height=" md:h-[100%]" className={`flex shadow-2xl -rotate-2 hover:rotate-2 transition duration-700
          border-2 border-neutral-800 ${colour} `}>
          <div className="flex flex-col h-full w-full justify-start items-center">
            <AnimatedCover src={image} width="w-full" />
            <div className="flex items-center justify-center w-full h-[25%]">
              <Title name={name} className="md:text-6xl" />
            </div>
          </div>
        </Card>

        {/* Poster dividing blocks */}
        <div className="flex w-full md:w-[30%] md:h-full items-center justify-center">
          <Description content={desc} />
        </div>

          <img src={sideArrow} alt="" />

      </Block>
    </>
  );
}



export default Poster;
