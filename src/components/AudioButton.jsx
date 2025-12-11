import playIcon from '../assets/Icons/audio/Play.svg'

export default function AudioButton({icon, onClick}) {
    return (
        <button onClick={onClick} className="flex items-center justify-center w-25 h-25 bg-[#2c5a8b] p-3
        active:shadow-sm shadow-lg transition-all rounded-2xl shadow-[#111] duration-75 border-8
         border-[#203e5a]">
                <img className='w-[90%] h-[90%]' src={icon} alt="" />
        </button>
    );
}