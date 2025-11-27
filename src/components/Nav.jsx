import Title from "./Title";
import TextLink from "./TextLink";
import iconPath from "../assets/KeiLogoPixel.svg";

function Nav() {
  return (
    <>
      <div className="w-full h-32 bg-[#1111118e] fixed shadow-xl z-50">
        <div className="flex pl-10 w-full h-full items-center space-x-20">
          <div className="flex items-center justify-center w-25 h-20"><img src={iconPath} alt="" className="h-[80%] w-[80%]" /></div>
          <div className="flex items-baseline mt-2">
            <Title name="Kei Farouk"/>
            <div className="flex space-x-20 ml-80">
              <TextLink content="Bio" hoverColour="hover:text-[#3cca8f]" />
              <TextLink content="Projects" hoverColour="hover:text-[#ce2cff]"  />
              <TextLink content="Art" hoverColour="hover:text-[#eee836]" />
              <TextLink content="Music" hoverColour="hover:text-[#485cdc]"  />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Nav;
