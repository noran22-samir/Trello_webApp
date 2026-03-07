import React, { useEffect, useState } from "react";
import logo from "../assets/images/logoimg.png";

const SplashScreen = ({ onFinish }) => {
  const [fade, setFade] = useState(false);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    setFade(true);
    setScale(true);

    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-white">

      <img
        src={logo}
        alt="Logo"
        className={`w-44.5 transition-all duration-1000
        ${fade ? "opacity-100" : "opacity-0"}
        ${scale ? "scale-100" : "scale-90"}
        `}
      />

      <div className="h-9"></div>

<div className="w-12 h-12 border-4 border-grey-200 border-t-blue-900 rounded-full animate-spin"></div>   
   <p className="absolute bottom-6 text-gray-400 text-l tracking-wide">
        © 2026 Trello Clone
      </p>
    </div>
  );
};

export default SplashScreen;