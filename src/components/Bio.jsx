import Block from "./Block";
import Title from "./Title";
import Text from "./Text";

function Bio() {
  return (
    <>
      <div className="flex w-full h-[60%] justify-center mt-10 space-y-10">
        <Block width="w-[95%]" height="h-80" className="flex pl-10 pt-10">
          <div className=" flex flex-col space-y-5 w-[50%]">
            <Title name="Bio" />
            <Text content="I'm Maxewll Kei Farouk, a Computer Science student at the University of the Western Cape (UWC). I like to make things! I make webapps/websites, Games, Music and Art." />
          </div>
        </Block>
      </div>
    </>
  );
}

export default Bio;
