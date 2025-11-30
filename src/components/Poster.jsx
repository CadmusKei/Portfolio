import Block from "./Block";
import Title from "./Title";

import Description from "./Description"
import AnimatedCover from "./AnimatedCover";

function Poster({className, name, desc, image}) {
  return (
    <>
      {/* Poster dividing blocks */}
      <div className={`flex w-[96%] shrink-0 h-[60%] justify-center items-center space-x-30 rounded-4xl bg-[#11111183] shadow-2xl`}>
        <Block width="w-108" height="h-140" className="shadow-2xl -rotate-2 hover:rotate-2 transition duration-700">
          <div className="flex flex-col h-full w-full items-center">
            <AnimatedCover src={image} height="h-116" width="w-full"/>
            <div className="flex">
              <Title name={name}/>
            </div>
          </div>
        </Block>

        {/* Poster dividing blocks */}
        <div className="flex w-[30%] h-full items-center justify-center">
          <Description content={desc} />
        </div>
      </div>  
    </>
  );
}



export default Poster;
