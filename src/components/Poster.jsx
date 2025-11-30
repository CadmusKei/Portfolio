import Block from "./Block";
import Title from "./Title";

import Description from "./Description"
import AnimatedCover from "./AnimatedCover";

function Poster({name, desc, image, colour}) {
  return (
    <>
      {/* Poster dividing blocks */}
      <div className={`flex w-[96%] shrink-0 h-[65%] justify-center items-center 
          space-x-30 rounded-4xl bg-neutral-900 border-4 border-neutral-800 shadow-2xl mt-20`}>

          <Block width="w-[28%]" height="h-[105%]" className={`flex shadow-2xl -rotate-2 hover:rotate-2 transition duration-700
          border-2 border-neutral-800 ${colour}`}>
            <div className="flex flex-col h-full w-full justify-start items-center space-y-[15%]">
              <AnimatedCover src={image} />
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
