import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";

import AudioPlayer from "../components/AudioPlayer";

import me from "../assets/Images/Music/me_0.jpeg"
import me_2 from "../assets/Images/Music/me_2.jpeg"


export default function Music() {
    return (
        <div className="items-center w-full h-screen overflow-auto bg-black scrollbar">
            <Nav background="bg-[#00000071] z-50" TitleColour="text-white" />
            
            {/* Hero */}
            <div className="relative flex items-end w-full h-[30%] md:h-[40%] md:h-[60%] bg-cover bg-bottom" style={{ backgroundImage: `url(${me})` }}>
                <div className="absolute inset-0 bg-linear-to-t from-[#111] to-[#ffffff00]"></div>
                <Title name="Cadmus" className="text-white z-10 text-4xl md:text-8xl ml-6 md:ml-20 mb-8 md:mb-15"/>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center w-full min-h-screen bg-[#111]">
                <div className="mt-10 md:mt-20 p-4 md:p-10 flex flex-col md:flex-row gap-6 md:space-x-10 w-[95%] bg-[#1c1c1c] rounded-4xl">
                    
                    <AudioPlayer/>

                    {/* About card */}
                    <div className="flex flex-col w-full md:w-[30%] rounded-4xl bg-[#3030308e] overflow-hidden shadow-2xl shadow-black">
                        <div className="relative flex items-end w-full h-48 md:h-[60%] bg-cover bg-bottom" style={{ backgroundImage: `url(${me_2})` }}>
                            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                            <Text className="text-white z-10 m-5 text-xl md:text-3xl">About Cadmus</Text>
                        </div>
                        <Text className="text-white z-10 m-5">
                            A South African lo-fi producer who draws inspiration from classical hip-hop legends 
                            and lo-fi pioneers like Nujabes. Blending a classical piano background with experimental 
                            vocals, they create a unique and atmospheric sound.
                        </Text>
                    </div>

                </div>
            </div>
        </div>
    );
}