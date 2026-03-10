import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/onBoarding";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import WorkspaceSettings from "./components/Settings";
import ProfileVisibility from "./components/Profile";
import Templates from "./components/Templates";

function App() {
//   const [screen, setScreen] = useState("splash");

//   const handleSplashFinish = () => setScreen("onboarding");

//   const handleOnboardingFinish = () => setScreen("signup");

//   if (screen === "splash")
//     return <SplashScreen onFinish={handleSplashFinish} />;

//   if (screen === "onboarding")
//     return <Onboarding onFinish={handleOnboardingFinish} />;

//   if (screen === "signup")
//   return (
//     <SignUp
//       goToLogin={() => setScreen("login")}
//       goToHome={() => setScreen("home")}
//     />
//   );
//   if (screen === "login")
//     return (
//       <Login
//         onFinish={() => setScreen("home")}
//         goToSignup={() => setScreen("signup")}
//       />
//     );

//     if (screen === "home") return <Home setScreen={setScreen} />;
//   if (screen === "settings") return <WorkspaceSettings setScreen={setScreen} />;
// if (screen === "profile") return <ProfileVisibility setScreen={setScreen} />;
// if (screen === "Templates") return <Templates setScreen={setScreen} />;

//   return null;
return <Templates/>;
}

export default App;