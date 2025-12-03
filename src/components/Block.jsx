function Block({children}){
    return (
        <div className={`flex w-[96%] shrink-0 h-[65%] mt-20 transition duration-800 justify-center items-center 
          space-x-30 rounded-4xl bg-neutral-900 border-[0.4rem] border-neutral-800
           hover:border-neutral-700 shadow-2xl`}>{children}</div>
    );        
}

export default Block; 