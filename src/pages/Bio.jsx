    import Nav from "../components/Nav";
    import Title from "../components/Title";
    import Text from "../components/Text";
    import CV from "../components/CV";
    import Icon from "../components/Icon";

    import WebCarousel from "../components/WebCarousel";
    import CodeCarousel from "../components/CodeCarousel";
    import AppsCarousel from "../components/AppsCarousel";  

    import arrowIcon from "../assets/Icons/Down-Arrow.svg"

    const pageGradient = "bg-linear-to-br from-neutral-950 to-[#21212141] transition duration-800 hover:to-[#66666641] "

    function Bio() {
        return (
            <>
                <Nav TitleColour="text-white" background={pageGradient} />
                
                
                <div
                className="
                    flex flex-col items-center md:items-start md:pl-20
                    w-screen md:w-full min-h-screen md:h-400
                    overflow-x-hidden

                    bg-[url('/src/assets/Images/me_3.jpeg')]
                    bg-cover bg-center  bg-no-repeat

                    md:bg-[url('/src/assets/Images/studio-site-crop.jpeg')]
                    md:bg-cover md:bg-center md:bg-no-repeat
                ">
                    {/* Bio blurb */}
                    <div className={`flex w-[90%] md:w-[60%] flex-col border-2 border-[#7373736f] ${pageGradient} mt-24 md:mt-40 rounded-4xl 
                        p-8 md:p-12 justify-start items-center space-y-4 shadow-2xl shadow-black`}>
                        <Text>I am a Computer Science student at the University of the Western Cape — a developer, musician, and all-round creative.</Text>
                        <Text>I love blending my passions for technology, mathematics, music, and art to build projects that come alive.</Text>
                        <Text>With experience in web development, game development, 3D modelling, and music production, I'm driven to bring ideas to life across disciplines.</Text>
                        <Text>Some of my other passions include: HPC, app development, simulations, Lo-fi Production and VFX.</Text>
                        <div></div>
                        <Icon path={arrowIcon} link="#cv-section" scalar="w-10 h-6" hoverColour="hover:border-neutral-200 hover:bg-neutral-600" />
                    </div>

                    {/* CV + Skills section */}
                    <div 
                        id="cv-section"
                        className="flex flex-col md:flex-row w-[90%] md:w-[95%] bg-linear-to-br from-neutral-950:50% to-[#21212141]:50%
                        mt-10 md:mt-60 mb-10 rounded-4xl p-6 md:p-10 justify-around shadow-2xl shadow-black 
                        border-2 border-[#a7a7a747] gap-8 md:h-[40%]"
                    >
                        {/* Experience */}
                        <div className="flex p-7 w-full md:w-[45%] md:h-full flex-col justify-start items-center bg-linear-to-br
                            from-[#171717bb] to-[#85858541] rounded-2xl shadow-[inset_0_-1rem_4rem_rgba(0,0,0,0.6)] 
                            shadow-[#111] space-y-10 overflow-y-auto overflow-x-hidden max-h-[60vh] md:max-h-none scrollbar">
                            <Title className="text-white underline text-4xl md:text-6xl underline-offset-6" name="Experience" />
                            <CV />
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[0.2rem] md:w-[0.2rem] md:h-full rounded-3xl bg-[#e7e7e747]" />

                        {/* Skills */}
                        <div className="w-full md:w-[40%] md:h-full flex items-center flex-col space-y-15">
                            <Title className="text-white underline underline-offset-6 text-center" name="My Inventory" />
                            <div className="flex flex-col items-center w-full space-y-5 md:space-y-15">
                                <WebCarousel />
                                <CodeCarousel />
                                <AppsCarousel />
                            </div>
                        </div>
                    </div>
                </div>

                <a id="page-bottom"></a>
            </>
        );
    }
    export default Bio;