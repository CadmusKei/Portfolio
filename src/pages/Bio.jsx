import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";

import backgroundPic from '../assets/Images/studio-site-crop.jpeg';
const pageGradient = "bg-linear-to-br from-neutral-950 to-[#28282841] "

function Bio(){
    return (
        <>
            <Nav TitleColour="text-white" background={pageGradient}/>
            <div className={`flex flex-col pl-20 w-full h-400 bg-cover `} style={{backgroundImage: `url(${backgroundPic})`}}>

                <div className={`flex w-[42%] flex-col h-[35%] ${pageGradient} mt-40 rounded-2xl 
                p-12 justify-start items-center space-y-4 shadow-2xl hover:to-[#58585841] transition duration-800 shadow-black`} >
                        <Text>I am a Computer Science student at the University of the Western Cape — a developer, musician, and all-round creative.</Text>
                        <Text>I love blending my passions for technology, mathematics, music, and art to build projects that come alive.</Text>
                        <Text>With experience in web development, game development, 3D modelling, and music production, I’m driven to bring ideas to life across disciplines. </Text>
                        <Text>Some of my other passions include: HPC, app development, simulations, Lo-fi Production and VFX. </Text>
                </div>

                <div className={`flex w-[95%] flex-col h-[35%] bg-neutral-900 mt-50 rounded-2xl 
                p-12 justify-start shadow-2xl shadow-black border-4 border-neutral-600`} >
                        <Title className="text-white" name="Experience"></Title>
                </div>

                <div className="bg-[#28282841]"></div>

            </div>

        </>
    );
}

export default Bio;