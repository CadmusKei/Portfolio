import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";

import me from "../assets/Images/Music/me_0.jpeg"
import me_2 from "../assets/Images/Music/me_2.jpeg"




export default function Music() {

    const mainUI = "#2121218e"

    return (

        

            <div className=" items-center w-full h-screen overflow-auto bg-black scrollbar">

                <div className="bg-[#2121218e]"></div>

                <Nav background="bg-[#00000071] z-50" TitleColour="text-white" />

                <div className={`relative flex items-end w-full h-[60%] bg-cover bg-bottom`} style={{ backgroundImage: `url(${me})` }}>
                    <div className="absolute inset-0 bg-linear-to-t from-black to-[#ffffff00]"></div>
                    <Title name="Cadmus" className="text-white z-10 text-8xl ml-20 mb-15"/>
                </div>

                
                <div className="flex flex-col items-center w-full h-400 bg-black">
                    
                    <div className="mt-20 p-10 space-x-10 flex w-[95%] h-[80%] bg-[#111] rounded-4xl">
                        

                        <div className={`flex flex-col space-y-10 p-10 w-[70%] h-[100%] bg-[${mainUI}] rounded-4xl`}>
                            <Title name="Samples" className="text-white text-8xl underline"/>
                            <Text>Find here a few samples of Cadmus's work.</Text>
                        </div>


                        <div className={`flex flex-col w-[30%] h-[70%] rounded-4xl bg-[${mainUI}] overflow-hidden shadow-2xl shadow-black`}>
                            <div className={`relative flex items-end w-full h-[60%] bg-cover bg-bottom`} style={{ backgroundImage: `url(${me_2})` }}> 
                                <div className={`absolute inset-0 bg-linear-to-t from-[#000] to-transparent`}></div>
                                <Text className="text-white z-10 m-5 text-3xl">About Cadmus</Text> 
                            </div>  
                            <Text className="text-white z-10 m-5">A South African Lo-fi and Jazz Hip-Hop producer. 
                                Taking inspiration from both classical hip-hop producers and lo-fi pioneers by the likes of Nujabes.  
                                Blending a classical piano background with experimental vocals.</Text> 
                        </div>
                        
                    </div>
                

                    

                </div>

            </div>
    );
}