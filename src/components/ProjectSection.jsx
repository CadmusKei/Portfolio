import { useEffect, useRef } from "react";

function ProjectSection({ imageSrc, children, scale }) {


  return (
    <div className="flex w-full h-screen">

      <div
        className={`relative flex items-center justify-center
        w-[55%] h-full overflow-hidden`}
      >
        <img
          className={`shadow-xl shadow-black ${scale} rounded-4xl transition-transform duration-75`}
          src={imageSrc}
          alt=""
        />
      </div>

      {/* RIGHT: Text / Content */}
      <div className="flex z-50 flex-col justify-center pl-20 pr-20 overflow-auto
          w-[45%] h-full space-y-10">
        {children}
      </div>
    </div>
  );
}

export default ProjectSection;