
import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";

import me from "../assets/Images/me.jpeg"

export default function Contact() {
    let navColour = "bg-[#00000041]"
    return (
        <div className="w-full min-h-screen bg-[#171717]">
            <Nav background={navColour} TitleColour="text-white" />
            
            <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen gap-10 md:space-x-20 px-6 md:px-0 pt-20 md:pt-0">
                
                {/* Photo */}
                <div className="w-40 h-40 md:w-[25%] md:h-auto rounded-full overflow-hidden shadow-2xl shadow-black shrink-0">
                    <img className="object-cover object-center w-full h-full" src={me} alt="" />
                </div>

                {/* Info */}
                <div className="flex justify-center items-center flex-col w-full md:w-[50%] space-y-6 md:space-y-10">
                    <div className="h-[0.2rem] w-[80%] bg-white rounded-full"></div>
                    <div className="h-[0.2rem] w-full bg-white rounded-full"></div>
                    <Title name="Maxwell Kei Farouk" className="text-white font-bold text-center"/>
                    <div className="text-center space-y-2">
                        <Text>Email: maxwell.kei.farouk@gmail.com</Text>
                        <Text>Cell-Number: 067 404 1272</Text>
                    </div>
                    <div className="h-[0.2rem] w-full bg-white rounded-full"></div>
                    <div className="h-[0.2rem] w-[80%] bg-white rounded-full"></div>
                </div>

            </div>
        </div>
    );
}