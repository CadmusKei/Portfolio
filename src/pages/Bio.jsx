import Nav from "../components/Nav";
import Title from "../components/Title";
import Text from "../components/Text";


import backgroundPic from '../assets/Images/studio-site-crop.jpeg';
const pageGradient = "bg-linear-to-br from-neutral-950 to-[#21212141] transition duration-800 hover:to-[#58585841] "

function Bio() {
    return (
        <>
            <Nav TitleColour="text-white" background={pageGradient} />
            <div className={`flex flex-col pl-20 w-full h-400 bg-cover `} style={{ backgroundImage: `url(${backgroundPic})` }}>

                <div className={`flex w-[42%] flex-col h-[35%] ${pageGradient} mt-40 rounded-2xl 
                p-12 justify-start items-center space-y-4 shadow-2xl shadow-black`} >
                    <Text>I am a Computer Science student at the University of the Western Cape — a developer, musician, and all-round creative.</Text>
                    <Text>I love blending my passions for technology, mathematics, music, and art to build projects that come alive.</Text>
                    <Text>With experience in web development, game development, 3D modelling, and music production, I’m driven to bring ideas to life across disciplines. </Text>
                    <Text>Some of my other passions include: HPC, app development, simulations, Lo-fi Production and VFX. </Text>
                </div>


                <div className={`flex w-[95%] h-[40%] bg-linear-to-br from-neutral-950 to-[#21212141] mt-50 rounded-2xl 
                p-10 justify-around shadow-2xl shadow-black`} >

                    <div className="flex p-7 w-[45%] flex-col justify-start items-center bg-[#222222b7] rounded-2xl shadow-[inset_0_-1rem_4rem_rgba(0,0,0,0.6)] 
                        shadow-[#111] space-y-10 overflow-y-auto overflow-x-hidden h-full scrollbar">

                        <Title className="text-white underline underline-offset-6" name="Experience"></Title>
                        <Text>I am a Computer Science student at the University of the Western Cape — a developer, musician, and all-round creative.</Text>
                        <Text>I love blending my passions for technology, mathematics, music, and art to build projects that come alive.</Text>
                        <Text>With experience in web development, game development, 3D modelling, and music production, I’m driven to bring ideas to life across disciplines. </Text>
                        <Text>Some of my other passions include: HPC, app development, simulations, Lo-fi Production and VFX. </Text>
                    </div>

                    <div className="h-full rounded-3xl w-[0.2rem] bg-neutral-400" ></div>

                    <Title className="text-white underline underline-offset-6 text-center" name="Tools and Languages"></Title>

                </div>

                <div className="bg-[#21212141]"></div>

            </div>

        </>
    );
}

export default Bio;