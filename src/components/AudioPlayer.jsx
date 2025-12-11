
import AudioButton from "./AudioButton"
import Title from "./Title"
import Text from "./Text"

import playIcon from '../assets/Icons/audio/Play.svg'
import pauseIcon from '../assets/Icons/audio/Pause.svg'
import nextIcon from '../assets/Icons/audio/Next.svg'
import lastIcon from '../assets/Icons/audio/Last.svg'



export default function AudioPlayer() {

    const demoList = {};

    return (

        <div className={`flex flex-col items-center space-y-8 p-10 w-[70%] h-[85%] 
        bg-[#363636] rounded-4xl border-8 border-[#474747] bg-linear-to-br from-[#aaaaaa] via-[#969696] via-20% to-[#5c5c5c] `}>
                            
            <div className="flex items-center justify-between w-full h-[10%] pl-5 pr-10">
                <Title name="Cad-Sample" className=" text-black"/> 
                <div className="w-10 h-10 rounded-md bg-[#232323] shadow-md shadow-[#262626]"></div>   
            </div>

            <div className="flex items-center justify-center w-full h-[50%] bg-linear-to-br from-[#323232] 
            via-[#131313] via-30% to-[#02090e] rounded-4xl shadow-xl shadow-[#282828]">

                <Text className="font-bold text-4xl">This is a test</Text>

            </div>

            <div className="flex items-center justify-around h-[30%] w-[65%]">
                <AudioButton icon={lastIcon}/>
                <AudioButton icon={playIcon}/>
                <AudioButton icon={pauseIcon}/>
                <AudioButton icon={nextIcon}/>
            </div>

        </div>

    );

}