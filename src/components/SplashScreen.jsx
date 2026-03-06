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
        }, 4000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-white">

            <img
                src={logo}
                alt="Logo"
                className={`
            w-44
            transition-all duration-1200
            ${fade ? "opacity-100" : "opacity-0"}
            ${scale ? "scale-100" : "scale-90"}
        `}
            />

            <div className="h-12" />

            <div className="border-2 border-t-blue-600 border-gray-200 rounded-full w-10 h-10 animate-spin"></div>

            <p className="absolute bottom-6 text-gray-400 text-xs tracking-wide">
                © 2026 Trello Clone
            </p>
        </div>
    );
};

export default SplashScreen;