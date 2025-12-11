
import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";

import me from "../assets/Images/me.jpeg"

export default function Contact() {

    let navColour = "bg-[#00000041]"

    return (
        <div>
            <Nav background={navColour} TitleColour="text-white" />

            
            <div className=" flex items-center w-full h-screen bg-[#171717] justify-center space-x-20">
                <div className=" w-[25%] h-[50%] rounded-full overflow-hidden shadow-2xl
                shadow-black">
                    <img className="object-cover object-center"  src={me} alt="" />
                </div>

                <div className="flex justify-center items-center flex-col w-[50%] h-[50%] space-y-10">
                    <div className="h-[0.2rem] w-[80%] bg-[#ffffff] rounded-full"></div>
                    <div className="h-[0.2rem] w-full bg-[#ffffff] rounded-full"></div>
                    <Title name="Maxwell Kei Farouk" className="text-white font-bold"/>
                    <div >
                        <Text>Email: maxwell.kei.farouk@gmail.com</Text>
                        <Text>Cell-Number: 067 404 1272</Text>
                    </div>
                    <div className="h-[0.2rem] w-full bg-[#ffffff] rounded-full"></div>
                    <div className="h-[0.2rem] w-[80%] bg-[#ffffff] rounded-full"></div>
                </div>

            </div>
        </div>
    );
}