

function ProjectSection({name, imageSrc, children, colours}) {
    
    return (
        <div className="flex w-full h-full " >
            <div className={`flex items-center justify-center w-[60%] h-full 
             ${colours} rounded-r-4xl shadow-[inset_0_-1rem_4rem_rgba(0,0,0,0.6)] `}>
                    <img className="shadow-2xl shadow-black h-[93%] rounded-4xl" src={imageSrc} alt="" />
            </div>
            <div className="flex flex-col pl-20 pr-20 items-center space-y-15 w-[50%] h-full bg-[#000000]">
                {children}
            </div>


            
        </div>
    );

}

export default ProjectSection;