import Block from "./Block";
import Title from "./Title";
import Description from "./Description"
import AnimatedCover from "./AnimatedCover";
import posterImage from '../assets/Kei-Single.png';

function Poster({className, name, desc, image}) {
  return (
    <>
      <div className={`flex w-full h-140 justify-center mt-10 space-x-30 ${className}`}>
        <Block width="w-108" height="h-140" className="shadow-2xl -rotate-2 hover:rotate-1 transition duration-600">
          <div className="flex flex-col h-full w-full items-center">
            <AnimatedCover src={image} height="h-116" width="w-full"/>
            <Title name={`${name}`}/>
          </div>
        </Block>
        <div className="flex w-[30%] h-full items-center justify-center">
          <Description content={desc} />
        </div>
      </div>  
    </>
  );
}



export default Poster;
