import Nav from "../components/Nav";

import me from "../assets/Images/Music/me_0.jpeg"



export default function Music() {
    return (
        <div className="w-full h-screen bg-[#2e2e2e]">
            <Nav background="bg-[#00000041]" TitleColour="text-white" />

            <div className="w-full h-[40%]  shadow-2xl
             shadow-black rounded-b-4xl">
                <img src={me} alt="" className="w-full h-full object-cover object-bottom rounded-b-4xl"/>
            </div>
            
        </div>
    );
}