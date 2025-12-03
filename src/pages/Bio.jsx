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

                <div className={`flex w-[42%] flex-col h-[35%] ${pageGradient} mt-40 rounded-2xl 
                p-12 justify-start items-center space-y-4 shadow-2xl shadow-black`} >

                        <Text>I am a Computer Science student at The Univeristity of The Western Cape. I am a Developer, Musician and General-Creative. </Text>
                        <Text>I endavour to mix my passions for Math, Computer-Science, Music and Art in all the ways I can imagine.</Text>
                        <Text>With experience in  Web Development, Game Development, 3D-Modeling, Music Production and so much more, I aspire to bring my visions to life.</Text>
                         <Text> Something hinting to me wanting to work on space</Text>

                </div>

                <div className="bg-[#28282841]"></div>

            </div>

        </>
    );
}

export default Bio;