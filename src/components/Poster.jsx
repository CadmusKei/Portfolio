import Block from "./Block";
import Title from "./Title";
import Description from "./Description"

function Poster({className, name, desc}) {
  return (
    <>
      <div className={`flex w-full h-140 justify-center mt-10 space-x-30 ${className}`}>
        <Block width="w-[30%]" height="h-full" className="flex shadow-2xl">
          <div className=" flex h-full w-full items-center justify-center">
            <Title name={`${name}`} />
          </div>
        </Block>
        <div className="flex w-[30%] h-full items-center justify-center bg-red-500">
          <Description content={desc} />
        </div>
      </div>  
    </>
  );
}



export default Poster;
