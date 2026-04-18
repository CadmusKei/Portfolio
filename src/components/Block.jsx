

function Block({ children, className, hoverColour }) {
    return (
        <div className={`flex flex-col md:flex-row w-full md:w-[96%] shrink-0 h-[80%] md:h-[65%] justify-center items-center 
          md:space-x-30  border border-white/15 space-y-10 rounded-4xl bg-linear-to-br from-neutral-950 to-white/2 transition duration-800 ${hoverColour} shadow-2xl ${className}`}>{children}
        
          </div>

    );
}


export default Block; 