function Profile({image, className}){
    return (
        <div className={`flex w-100 h-100 ml-20 bg-neutral-900 items-center justify-center 
        rounded-4xl shadow-2xl ${className} `}>
            <img src={image} alt="lost" className={`w-[90%] h-[90%] rounded-3xl`} />
        </div>
    );        
}

export default Profile; 