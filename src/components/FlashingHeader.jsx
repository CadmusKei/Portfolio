import { useState, useEffect } from "react";
import Title from "./Title";

export default function FlashingHeader() {
  const [isBlue, setIsBlue] = useState(false);

  // Toggle every 500ms (0.5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlue(prev => !prev);
    }, 1500);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
  
      <div className="w-10 h-10 shadow-2xl shadow-black">
          <div className={`w-full h-full rounded-md transition-all
            duration-900 bg-[#232323] ${isBlue ? " bg-green-500" : "bg-[#131313]"}`}></div>
      </div>
  );
}