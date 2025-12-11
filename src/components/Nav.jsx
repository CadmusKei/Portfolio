import Title from "./Title";
import Icon from "./Icon";

import piIcon from '../assets/Icons/Pi.svg';
import chipIcon from '../assets/Icons/Chip.svg';
import quaverIcon from '../assets/Icons/Quaver.svg';
import phoneIcon from '../assets/Icons/Phone.svg';
import keiLogo from '../assets/Icons/KeiLogoPixel.svg';

function Nav({TitleColour, background}) {
  return (
    <>
      <div className={`w-full h-[15%] ${background} fixed shadow-xl z-50`}>
        <div className="flex pl-10 w-full h-full items-center space-x-20">
          
         <a href="/">
         <div className={
          `flex w-18 h-18 rounded-lg shadow-neutral-950 shadow-md border-3 border-neutral-800 items-center justify-center 
          transition hover:duration-400 hover:border-neutral-400 hover:bg-[#e1e1e13d] duration-900`
          }>
            <img src={keiLogo} alt="" className={`w-11 h-8 image-pixel `}  />
         </div>
        </a>
         
          <div className="flex w-full items-center">
            <Title className={`pl-1 mt-3 mb-3 ${TitleColour}`} name="Kei Farouk"/>
            <div className="absolute flex space-x-20 right-[5%]">
              <Icon path={piIcon} link="/Bio" scalar="w-8 h-6 " hoverColour="hover:border-emerald-200 hover:bg-emerald-800" angle="-rotate-3" />  
              <Icon path={chipIcon} link="/Projects" scalar="w-8 h-8 " hoverColour="hover:border-purple-400 hover:bg-purple-900"  angle="rotate-2" />  
              <Icon path={quaverIcon} link="/Music" scalar="w-7 h-6 " hoverColour="hover:border-cyan-200  hover:bg-cyan-600 " angle="-rotate-3"/>  
              <Icon path={phoneIcon} link="/Contact" scalar="w-3 h-7" hoverColour="hover:border-rose-400   hover:bg-rose-900 " angle="rotate-2"/>  
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Nav;
