import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";
import CV from "../components/CV";

import WebCarousel from "../components/WebCarousel";
import CodeCarousel from "../components/CodeCarousel";
import AppsCarousel from "../components/AppsCarousel";


import backgroundPic from '../assets/Images/studio-site-crop.jpeg';
const pageGradient = "bg-linear-to-br from-neutral-950 to-[#21212141] transition duration-800 hover:to-[#66666641] "

function Bio() {
    return (
        <>
            <Nav TitleColour="text-white" background={pageGradient} />
            <div className={`flex flex-col pl-20 w-full h-400 bg-cover `} style={{ backgroundImage: `url(${backgroundPic})` }}>

                <div className={`flex w-[42%] flex-col h-[35%] border-2 border-[#7373736f]  ${pageGradient} mt-40 rounded-2xl 
                p-12 justify-start items-center space-y-4 shadow-2xl shadow-black`} >
                    <Text>I am a Computer Science student at the University of the Western Cape — a developer, musician, and all-round creative.</Text>
                    <Text>I love blending my passions for technology, mathematics, music, and art to build projects that come alive.</Text>
                    <Text>With experience in web development, game development, 3D modelling, and music production, I’m driven to bring ideas to life across disciplines. </Text>
                    <Text>Some of my other passions include: HPC, app development, simulations, Lo-fi Production and VFX. </Text>
                </div>  


                <div className={`flex w-[95%] h-[40%] bg-linear-to-br from-neutral-950 to-[#21212141] mt-50 rounded-2xl 
                p-10 justify-around shadow-2xl shadow-black border-2 border-[#a7a7a747]`} >
                    
                    

                    <div className="flex p-7 w-[45%] flex-col justify-start items-center bg-linear-to-br
                    from-[#171717bb] to-[#85858541] rounded-2xl shadow-[inset_0_-1rem_4rem_rgba(0,0,0,0.6)] 
                    shadow-[#111] space-y-10 overflow-y-auto overflow-x-hidden h-full scrollbar">
                        <Title className="text-white underline text-6xl underline-offset-6" name="Experience"></Title>
                        <CV/>
                    </div>

                    <div className="h-full rounded-3xl w-[0.2rem] bg-[#e7e7e747]" ></div>

                    <div className="w-[40%] h-full flex items-center flex-col space-y-15    ">
                        <Title className="text-white underline underline-offset-6 text-center" name="My Inventory"></Title>
                        <div className="flex flex-col space-y-15">
                            <WebCarousel/>
                            <CodeCarousel/>
                            <AppsCarousel/>
                        </div>
                    </div>
                      
                </div>

            </div>

        </>
    );
}

export default Bio;