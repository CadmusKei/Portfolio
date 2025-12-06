import Text from "./Text";
import Title from "./Title";

function CV({ className }) {
    return (
        
        <div className="flex w-full h-full pl-10 flex-col space-y-10">

            <Text className=" text-5xl underline underline-offset-4">Achievements</Text>

            <ol  className="flex mt-0 space-y-5 flex-col list-disc marker:text-white marker:text-3xl text-pixel">

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                
                <Text className="text-3xl">Hackathon Winner – UCT Intervarsity Hackathon | 13 to 14 September 2025</Text>
                <li>
                    <Text>Developed a qualification verifier using a feature-rich simulated blockchain in a
                    Next.js (React) application with Node.js backend within 24 hours</Text>
                </li>
                <li>
                    <Text>Implemented encryption methods including RSA and SHA-256 for secure hashing</Text>
                </li>
                <li>
                    <Text>Collaborated with a team to design and deliver a fully functional, secure application
                    under tight time constraints</Text>
                </li>

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

            </ol>

            <Text className=" text-5xl underline underline-offset-4">Education</Text>

            <ol  className="flex mt-0 space-y-5 flex-col list-disc marker:text-white marker:text-3xl text-pixel">

                <div className="h-[0.2rem] w-full bg-[#ffffff00]"></div>

                <Text className="text-3xl">University of the Western Cape – Bachelor of Science, Computer Science (Undergraduate)
                Expected Graduation: November 2027</Text>
                <li>
                    <Text className="italic">Electives: Calculus, Linear Algebra, Statistics,
                    Information Systems</Text>
                    
                </li>

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                <Text className="text-3xl">Software Engineering Mentorship University of the Western Cape | September – October 2025</Text>
                <li>
                    <Text className="italic">Participated in a structured mentorship programme focused on software engineering
                    best practices</Text>
                </li>
                <li>
                    <Text className="italic">Gained exposure to collaborative development workflows and code reviews</Text>
                </li>
  
                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                
                <Text className="text-3xl">Exercise Teachers Academy – Personal Training Qualification
                Qualified: February 2025</Text>
                <li>
                    <Text>Completed a 6-month intensive programme covering anatomy, physiology,
                    kinesiology, programme development, nutrition, and exercise science</Text>
                </li>
                <li>
                    <Text>Gained hands-on experience through supervised practical training and shadowing</Text>
                </li>
                <li>
                    <Text>Built skills in client assessment, programme design, and safe exercise instruction</Text>
                </li>
 
                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                <Text className="text-3xl">University of Cape Town Online High School – National Senior Certificate (Bachelors
                Pass)
                Matriculated: December 2023</Text>
                <li>
                    <Text className="italic">Electives: Pure Mathematics, Physical Sciences, Information Technology, Visual Arts</Text>
                </li>

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

            </ol>

            <Text className=" text-5xl underline underline-offset-4">Work Experience</Text>

            <ol  className="flex mt-0 space-y-5 flex-col list-disc marker:text-white marker:text-3xl text-pixel">

                <div className="h-[0.2rem] w-full"></div>

                <Text className="text-3xl">Studio Bolland – Game Development & Animation Studio
                Intern, Cape Town | 4 August to 4 September 2025</Text>
                <li>
                    <Text className="italic">Developed a game using Unity</Text>
                </li>
                <li>
                    <Text className="italic">Contributed to the creative process in a professional studio environment</Text>
                </li>
                <li>
                    <Text className="italic">Exposed to both game development and animation workflows</Text>
                </li>

                 <a href="https://www.studiobo.io/" target="_blank"className="text-white text-2xl underline">https://www.studiobo.io/</a>

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                <Text className="text-3xl">“In the Wake” by Meghna Singh & Simon Wood – Docent & VR Technician
                Durban | 24 to 26 March 2023</Text>
                <li>
                    <Text className="italic">Acted as a docent, guiding visitors through the production</Text>
                </li>
                <li>
                    <Text className="italic"> Operated and maintained virtual reality equipment for the installation</Text>
                </li>
                <li>
                    <Text className="italic">Assisted with technical and logistical setup of the exhibition</Text>
                </li>
                
                <a href="https://mg.co.za/friday/2021-09-10-review-ghosts-that-cannot-be-contained" target="_blank" className="text-white text-2xl underline">Link to article</a>

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                <Text className="text-3xl">The Barn Owl – Barista Event Services 2023</Text>
                <li>
                    <Text className="italic">Prepared and served coffee and beverages</Text>
                </li>
                <li>
                    <Text className="italic">Provided customer service in a fast-paced environment</Text>
                </li>
                <li>
                    <Text className="italic">Supported event operations with professionalism and reliability</Text>
                    
                </li>

                <a href="https://thebarnowl.co.za/" target="_blank"className="text-white text-2xl underline">https://thebarnowl.co.za/</a>

                <div className="h-[0.2rem] w-full bg-[#ffffff32]"></div>

                <Text className="text-3xl">Colombo Coffee & Tea – Barista Certificate & Internship
                Durban North | February 2023</Text>
                <li>
                    <Text className="italic">Completed a certified barista training programme</Text>
                </li>
                <li>
                    <Text className="italic">Gained practical experience in coffee preparation, waitering, and general café
                    operations</Text>
                </li>
                <li>
                    <Text className="italic">Assisted with customer service while maintaining high-quality standards</Text>
                </li>

                <a href="https://colombo.coffee/" target="_blank" className="text-white text-2xl underline">https://colombo.coffee/</a>
        


            </ol>

        </div>
       
    );
}


export default CV; 