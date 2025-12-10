import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";

import me from "../assets/Images/Music/me_0.jpeg"
import me_2 from "../assets/Images/Music/me_2.jpeg"




export default function Music() {

    const mainUI = "bg-[#2121218e]"

    return (

        

            <div className=" items-center w-full h-screen overflow-auto bg-black scrollbar">

                <div className="bg-[#2121218e]"></div>

                <Nav background="bg-[#00000071] z-50" TitleColour="text-white" />

                <div className={`relative flex items-end w-full h-[60%] bg-cover bg-bottom`} style={{ backgroundImage: `url(${me})` }}>
                    <div className="absolute inset-0 bg-linear-to-t from-black to-[#ffffff00]"></div>
                    <Title name="Cadmus" className="text-white z-10 text-8xl ml-20 mb-15"/>
                </div>

                
                <div className="flex flex-col items-center w-full h-full bg-black">
                    
                    <div className="mt-15 p-10 space-x-10 flex w-[95%] h-[85%] bg-[#111] rounded-4xl">
                        

                        <div className={`w-[80%] h-[90%] ${mainUI} rounded-4xl`}>

                        </div>


                        <div className={`w-[25%] h-[80%] rounded-4xl ${mainUI} overflow-hidden`}>
                            <div className={`relative flex items-end w-full h-[60%] bg-cover bg-bottom`} style={{ backgroundImage: `url(${me_2})` }}> 
                                <div className="absolute inset-0 bg-linear-to-t from-black to-[#ffffff00]"></div>
                                <Text className="text-white z-10 m-5 text-3xl">About Cadmus</Text> 
                            </div>  
                            <Text className="text-white z-10 m-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, repellat.</Text> 
                        </div>
                        
                    </div>
                

                    

                </div>

            </div>
    );
}