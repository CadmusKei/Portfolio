import Title from "./Title";
import Icon from "./Icon";

import piIcon from '../assets/Icons/Pi.svg';
import chipIcon from '../assets/Icons/Chip.svg';
import quaverIcon from '../assets/Icons/Quaver.svg';
import heartIcon from '../assets/Icons/Heart.svg';
import keiLogo from '../assets/Icons/KeiLogoPixel.svg';

function Nav() {
  return (
    <>
      <div className="w-full h-[15%] bg-[#1111118e] fixed shadow-xl z-50">
        <div className="flex pl-10 w-full h-full items-center space-x-20">
          <img src={keiLogo} className="image-pixel w-14 h-10 ml-1" alt="" /> 
          <div className="flex w-full items-center">
            <Title className="pl-1 mt-3 mb-3" name="Kei Farouk"/>
            <div className="absolute flex space-x-20 right-[5%]">
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
