import Block from "./Block";
import Title from "./Title";
import Text from "./Text";

function Bio() {
  return (
    <>
      <div className="flex w-full h-[60%] justify-center mt-10 space-y-10">
        <Block width="w-[95%]" height="h-85" className="flex pl-10 pt-5">
          <div className=" flex flex-col space-y-5 w-[50%]">
            <Title name="Bio" />
            <Text content=" Hi I'm Maxewll Kei Farouk!" />
            <Text content="I am a Computer Science student at the University of the Western Cape (UWC) with a passion for creating. I build web apps and websites, design games, make music, and create art. I’m deeply curious about science and space, and I love exploring new ideas and turning them into something tangible." />
            <Text content="My current interests and studies include Vector Calculus, Statistics, Webapp development and LoFi Production. " />
          </div>
        </Block>
      </div>
    </>
  );
}

export default Bio;
