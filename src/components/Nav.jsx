import Title from "./Title";
import TextLink from "./TextLink";
import iconPath from "../assets/KeiLogo.svg";

function Nav() {
  return (
    <>
      <div className="w-screen h-[22%] bg-black wrap-normal rounded-b-4xl drop-shadow-2xl">
        <div className=" pl-15 flex w-screen h-full space-x-20 items-center">
          <img src={iconPath} alt="" className="w-18 h-18 mt-2" />
          <Title name="Kei Farouk" />
          <div className="flex justify-around w-[60%] mt-6">
            <TextLink content="Bio" />
            <TextLink content="Projects" />
            <TextLink content="Music" />
            <TextLink content="Art" />
            <TextLink content="CV" />
            <TextLink content="Contact" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
