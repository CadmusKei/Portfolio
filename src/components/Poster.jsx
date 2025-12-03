import Card from "./Card";
import Title from "./Title";

import Description from "./Description"
import AnimatedCover from "./AnimatedCover";

function Poster({name, link, desc, image, colour}) {
  return (
    <>
      {/* Poster dividing blocks */}
      <div className={`flex w-[96%] shrink-0 h-[65%] mt-20 transition duration-800 justify-center items-center 
          space-x-30 rounded-4xl bg-neutral-900 border-[0.4rem] border-neutral-800
           hover:border-neutral-700 shadow-2xl`}>

          <Card link={link} width="w-[28%]" height="h-[100%]" className={`flex shadow-2xl -rotate-2 hover:rotate-2 transition duration-700
          border-2 border-neutral-800 ${colour}`}>
            <div className="flex flex-col h-full w-full justify-start items-center">
              <AnimatedCover src={image} width="w-full" />
              <div className="flex items-center justify-center w-full h-[25%]">
                <Title name={name} className="text-6xl"/>
              </div>
            </div>
          </Card>

        {/* Poster dividing blocks */}
        <div className="flex w-[30%] h-full items-center justify-center">
          <Description content={desc} />
        </div>

      </div>  
    </>
  );
}



export default Poster;
