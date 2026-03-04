import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/onBoarding";


function App() {
  const [screen, setScreen] = useState("splash");

  const handleSplashFinish = () => setScreen("onboarding");
  const handleOnboardingFinish = () => {
    // هنا بدل Home، نقدر نوقف أو نظهر رسالة
    alert("Onboarding finished!"); 
  };

  if (screen === "splash") return <SplashScreen onFinish={handleSplashFinish} />;
  if (screen === "onboarding") return <Onboarding onFinish={handleOnboardingFinish} />;

  return null; 
}

export default App;