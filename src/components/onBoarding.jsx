import React, { useState } from "react";
import onboarding1 from "../assets/images/onBoard1.png";
import onboarding2 from "../assets/images/onBoard2.png";
import onboarding3 from "../assets/images/onBoard3.png";
import onboarding4 from "../assets/images/onBoard4.png";

const onboardingData = [
    { title: "Capture to-dos instantly", description: "Add tasks with widgets or snap a photo.", image: onboarding1 },
    { title: "Organize with ease", description: "Drag cards to reorder or move them to a board.", image: onboarding2 },
    { title: "Celebrate progress", description: "Drag to organize cards between lists or move them to a new board.", image: onboarding3 },
    { title: "Your boards go where you go", description: "Access your board anywhere - desktop or mobile.", image: onboarding4 },
];

const Onboarding = ({ onFinish }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        if (currentPage === onboardingData.length - 1) onFinish();
        else setCurrentPage((prev) => prev + 1);
    };

    const skip = () => onFinish();

    return (
        <div className="flex flex-col justify-between h-screen bg-white px-6">
            <div className="flex flex-col items-center justify-center flex-1 mt-12">
                <img src={onboardingData[currentPage].image} alt="Onboarding" className="h-72 object-contain" />
                <h1 className="text-3xl font-bold text-blue-900 text-center mt-8">
                    {onboardingData[currentPage].title}
                </h1>
                <p className="text-center text-blue-300 mt-3 text-lg leading-6">
                    {onboardingData[currentPage].description}
                </p>

                <div className="flex space-x-2 mt-8"> //Pagination Dots 
                    {onboardingData.map((_, index) => (
                        <div
                            key={index}
                            className={`rounded-full transition-all duration-300 ${index === currentPage ? "w-6 h-2 bg-blue-900" : "w-2 h-2 bg-blue-200"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-between mb-12">
                <button onClick={skip} className="text-white font-semibold bg-blue-900 px-6 py-2 rounded-lg">
                    Skip
                </button>
                <button onClick={nextPage} className="bg-blue-900 text-white px-6 py-2 rounded-lg">
                    {currentPage === onboardingData.length - 1 ? "Get Started" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default Onboarding;