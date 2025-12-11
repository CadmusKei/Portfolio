
    import { useRef, useEffect, useState } from "react";

    import AudioButton from "./AudioButton"
    import Title from "./Title"
    import Text from "./Text"

    import playIcon from '../assets/Icons/audio/Play.svg'
    import pauseIcon from '../assets/Icons/audio/Pause.svg'
    import nextIcon from '../assets/Icons/audio/Next.svg'
    import lastIcon from '../assets/Icons/audio/Last.svg'

    import slowlyPath from '../assets/Demos/Slowly.mp3'
    import iverPath from '../assets/Demos/Iver.mp3'
    import wishICouldBePath from '../assets/Demos/Wish I Could Be the Reason Why.mp3'

    export default function AudioPlayer() {

        const demoObject = {"Slowly": {Title: "Slowly", Path: slowlyPath}, 
                        "Iver": {Title: "Iver", Path: iverPath},
                        "WishICouldBe": {Title: "Which I Could Be The Reason", Path: wishICouldBePath}, 
                    };

        const demoArray = [
            demoObject.Slowly,
            demoObject.Iver,
            demoObject.WishICouldBe
        ];
                        
        let [index, setIndex] = useState(0);
        const [currentTrack, setCurrentTrack] = useState(null); 
        const audioRef = useRef(null);
        const [hasInteracted, setHasInteracted] = useState(false);

        function playNext()
        {
            if (index < demoArray.length - 1)
            {
                setIndex(index + 1);
            }
            else
            {
                setIndex(0);
            }      
        }

        function playLast()
        {
            if (index > 0)
            {
                setIndex(index - 1);
            }
            else 
            {
                setIndex(demoArray.length - 1);
            }

        }

        useEffect(() => {
            if (!hasInteracted) return;  
            if (audioRef.current) audioRef.current.play();
        }, [currentTrack, hasInteracted]);

        useEffect(() => {
            setCurrentTrack(demoArray[index].Path);
        }, [index]);


        return (

            <div className={`flex flex-col items-center space-y-8 p-10 w-[70%] h-[85%] 
            bg-[#363636] rounded-t-4xl rounded-b-xl border-8 border-[#525252] bg-linear-to-br 
            from-[#cecece] via-[#969696] via-20% to-[#5c5c5c] shadow-2xl shadow-black `}>
                                
                <div className="flex items-center justify-between w-full h-[10%] pl-5 pr-10">
                    <Title name="Cad-Sample" className=" text-black"/>  
                    <div className="w-10 h-10 rounded-md bg-[#232323] shadow-md shadow-[#262626]"></div>   
                </div>

                <div className="flex items-center justify-center w-full h-[50%] bg-linear-to-br from-[#323232] 
                via-[#131313] via-30% to-[#02090e] rounded-4xl shadow-xl shadow-[#282828]">

                    <audio ref={audioRef} src={currentTrack}></audio>
                    <Text className="font-bold text-4xl">{demoArray[index].Title}</Text>

                </div>

                <div className="flex items-center justify-around h-[30%] w-[65%]">
                    <AudioButton onClick={() => playLast()} icon={lastIcon} />
                    <AudioButton onClick={() => {setHasInteracted(true);audioRef.current.play();}} icon={playIcon}/>
                    <AudioButton onClick={() => audioRef.current.pause()} icon={pauseIcon}/>
                    <AudioButton onClick={() => playNext()} icon={nextIcon}/>
                </div>

            </div>

        );

    }