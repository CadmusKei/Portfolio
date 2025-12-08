const pageGradient = "bg-linear-to-br from-neutral-950 to-[#28282841] transition duration-800 "

const oldDesign = "bg-neutral-900 border-[0.4rem] border-neutral-800 hover:border-neutral-700"

function Block({ children, className, hoverColour }) {
    return (
        <div className={`flex w-[96%] shrink-0 h-[65%] transition duration-800 justify-center items-center 
          space-x-30 rounded-4xl ${pageGradient}  ${hoverColour} shadow-2xl ${className}`}>{children}
          
             <div className="bg-[#0a313841]"> </div>

          </div>

       

    );
}


export default Block; 