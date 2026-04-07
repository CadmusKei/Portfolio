function ProjectSection({ imageSrc, children, scale }) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen md:h-screen">
      
      {/* Image */}
      <div className="relative flex items-center justify-center w-full md:w-[55%] h-[40vh] md:h-full overflow-hidden">
        <img
          className={`shadow-xl shadow-black ${scale} rounded-4xl transition-transform duration-75`}
          src={imageSrc}
          alt=""
        />
      </div>

      {/* Content */}
      <div className="flex z-40 flex-col justify-center px-6 md:pl-20 md:pr-20 overflow-auto
                      w-full md:w-[45%] h-auto md:h-full space-y-6 md:space-y-10 py-10 md:py-0">
        {children}
      </div>

    </div>
  );
}
export default ProjectSection;