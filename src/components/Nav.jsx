import Title from "./Title";
import iconPath from "../assets/KeiLogoPixel.svg";
import Icon from "./Icon";

import piIcon from '../assets/Icons/Pi.svg';
import chipIcon from '../assets/Icons/Chip.svg';
import quaverIcon from '../assets/Icons/Quaver.svg';
import heartIcon from '../assets/Icons/Heart.svg';

function Nav() {
  return (
    <>
      <div className="w-full h-25 bg-[#1111118e] fixed shadow-xl z-50">
        <div className="flex pl-10 w-full h-full items-center space-x-20">
          <div className="flex items-center justify-center w-25 h-20"><img src={iconPath} alt="" className="h-[80%] w-[80%]" /></div>
          <div className="flex items-baseline mt-2">
            <Title className="pl-1 underline" name="Kei Farouk"/>
            <div className="flex space-x-20 ml-85">
              <Icon path={piIcon} scalar="w-8 h-6 " hoverColour="hover:border-emerald-200 hover:bg-emerald-800" />  
              <Icon path={chipIcon} scalar="w-8 h-8 " hoverColour="hover:border-purple-400 hover:bg-purple-900"   />  
              <Icon path={quaverIcon} scalar="w-7 h-6 " hoverColour="hover:border-cyan-200  hover:bg-cyan-600 "/>  
              <Icon path={heartIcon} scalar="w-8 h-7" hoverColour="hover:border-rose-400   hover:bg-rose-900 "/>  
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Nav;
