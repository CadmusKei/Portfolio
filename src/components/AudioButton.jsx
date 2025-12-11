import playIcon from '../assets/Icons/audio/Play.svg'

export default function AudioButton({icon}) {
    return (
        <div className="flex items-center justify-center w-25 h-25 bg-[#393939] p-3
        active:shadow-sm shadow-lg transition-all rounded-2xl shadow-[#111] duration-75 border-8
         border-[#2d2c2c]">
                <img className='w-[90%] h-[90%]' src={icon} alt="" />
        </div>
    );
}