import Nav from "../components/Nav";
import Title from "../components/Title";

import me from "../assets/Images/Music/me_0.jpeg"
import me_2 from "../assets/Images/Music/me_2.jpeg"


export default function Music() {
    return (

            <div className="w-full h-screen  bg-linear-to-t from-[#0d0d0d] to-[#294249]">
                <Nav background="bg-[#00000071] z-50" TitleColour="text-white" />

                <div className={`relative flex items-end w-full h-[60%] bg-cover bg-bottom`} style={{ backgroundImage: `url(${me})` }}>
                
                    <div className="absolute inset-0 bg-linear-to-t from-black to-[#ffffff00]"></div>
                    <Title name="Cadmus" className="text-white z-10 text-8xl ml-20 mb-15"/>

                </div>
            </div>
    );
}