import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/onBoarding";
import Home from "./components/Home";


function App() {
  const [screen, setScreen] = useState("splash");

  const handleSplashFinish = () => setScreen("onboarding");
  const handleOnboardingFinish = () => {
    setScreen("home"); 
  };

  if (screen === "splash") return <SplashScreen onFinish={handleSplashFinish} />;
  if (screen === "onboarding") return <Onboarding onFinish={handleOnboardingFinish} />;
  if (screen === "home") return <Home />;

  return null; 
}

export default App;