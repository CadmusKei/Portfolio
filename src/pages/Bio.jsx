import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Title from "../components/Title";
import Description from "../components/Description";
import Text from "../components/Text";

import profilePic from '../assets/Images/me.png';
import backgroundPic from '../assets/Images/studio-site-crop.jpeg';

    const pageGradient = "bg-linear-to-br from-neutral-950 to-[#28282841] "

function Bio(){
    return (
        <>
            <Nav TitleColour="text-white" background={pageGradient}/>
            <div className={`flex flex-col pl-20 w-full h-400 bg-cover `} style={{backgroundImage: `url(${backgroundPic})`}}>

                <div className={`flex w-[42%] flex-col h-150 ${pageGradient} mt-40 rounded-lg border-4 border-neutral-400 p-12 space-y-4 shadow-2xl shadow-black`} >
                        <Text>I am a Computer Science student at The Univeristity of The Western Cape. I am a developer, musician and general creative. </Text>
                        <Text>I am a Computer Science student at The Univeristity of The Western Cape. I am a developer, musician and general creative. </Text>
                        <Text>I am a Computer Science student at The Univeristity of The Western Cape. I am a developer, musician and general creative. </Text>

                </div>

                <div className="bg-[#28282841]"></div>

            </div>

        </>
    );
}

export default Bio;