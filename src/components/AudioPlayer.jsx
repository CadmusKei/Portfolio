    import { useRef, useEffect, useState } from "react";

    import AudioButton from "./AudioButton";
    import Title from "./Title";
    import Text from "./Text";
    import FlashingHeader from "./FlashingHeader";

    import playIcon from '../assets/Icons/audio/Play.svg';
    import pauseIcon from '../assets/Icons/audio/Pause.svg';
    import nextIcon from '../assets/Icons/audio/Next.svg';
    import lastIcon from '../assets/Icons/audio/Last.svg';

    import slowlyPath from '../assets/Demos/Slowly.mp3';
    import iverPath from '../assets/Demos/Iver.mp3';
    import wishICouldBePath from '../assets/Demos/Wish I Could Be the Reason Why.mp3';

    export default function AudioPlayer() {
        
    const demoArray = [
        { Title: "Which I Could Be The Reason", Path: wishICouldBePath },
        { Title: "Slowly", Path: slowlyPath },
        { Title: "Iver", Path: iverPath },
    ];

    const [index, setIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(demoArray[0].Path);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef(null);

    const playNext = () => setIndex((prev) => (prev + 1) % demoArray.length);
    const playLast = () => setIndex((prev) => (prev - 1 + demoArray.length) % demoArray.length);

    const toTimeFormat = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    useEffect(() => {
        setCurrentTrack(demoArray[index].Path);
        setCurrentTime(0);
    }, [index]);

    useEffect(() => {
        if (!hasInteracted) return;
        if (audioRef.current) audioRef.current.play();
    }, [currentTrack, hasInteracted]);

    useEffect(() => {
        const audio = audioRef.current;

        const handleLoaded = () => setDuration(audio.duration);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("loadedmetadata", handleLoaded);
        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
        audio.removeEventListener("loadedmetadata", handleLoaded);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [currentTrack]);

    return (
        <div className="flex flex-col items-center space-y-8 p-10 w-[70%] h-[85%] 
                        bg-[#363636] rounded-t-4xl rounded-b-xl border-8 border-[#525252] 
                        bg-linear-to-br from-[#cecece] via-[#969696] via-20% to-[#5c5c5c] 
                        shadow-2xl shadow-black">
        
        <div className="flex items-center justify-between w-full h-[10%] pl-5 pr-10">
            <Title name="Cad-Sampler" className="text-black"/>
            <FlashingHeader/>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-[50%] 
                        bg-linear-to-br from-[#4d4d4d] via-[#131313] via-30% to-[#02090e] 
                        rounded-4xl shadow-xl shadow-[#282828] space-y-4">

            <audio ref={audioRef} src={currentTrack}></audio>

            <Text className="font-bold text-4xl">{demoArray[index].Title}</Text>

            <div className="w-[90%] h-4 bg-gray-600 rounded-full overflow-hidden">

                <div className="h-full w-full bg-[#57a5fd] rounded-full transition-all" 
                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}></div>                  

            </div>

            <div className="flex justify-between w-[90%] text-white"> 
                <Text lassName="">{toTimeFormat(currentTime)}</Text>
                <Text>{toTimeFormat(duration)}</Text> 
            </div>
        </div>

        <div className="flex items-center justify-around h-[30%] w-[65%]">
            <AudioButton onClick={playLast} icon={lastIcon} />
            <AudioButton onClick={() => { setHasInteracted(true); audioRef.current.play(); }} icon={playIcon}/>
            <AudioButton onClick={() => audioRef.current.pause()} icon={pauseIcon}/>
            <AudioButton onClick={playNext} icon={nextIcon}/>
        </div>

        </div>
    );
    }