import Title from "./Title";
import TextLink from "./TextLink";
import iconPath from "../assets/KeiLogo.svg";

function Nav() {
  return (
    <>
      <div className="w-full h-32 bg-[#1111118e] fixed shadow-xl z-50">
        <div className="flex pl-10 w-full h-full items-center space-x-20">
          <div className="flex items-center justify-center w-23 h-23 rounded-full border-3 border-[#ffffff]"><img src={iconPath} alt="" className="h-[80%] w-[80%]" /></div>
          <div className="flex items-baseline mt-2">
            <Title name="Kei Farouk" />
            <div className="flex space-x-20 ml-100">
              <TextLink content="Bio" />
              <TextLink content="Projects" />
              <TextLink content="CV" />
              <TextLink content="Contact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
