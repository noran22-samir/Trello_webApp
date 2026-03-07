import React, { useState } from "react";
import googleIcon from "../assets/images/Logo-google-icon-PNG.png";
import githubIcon from "../assets/images/github.png";
import microsoftIcon from "../assets/images/pngimg.com - microsoft_PNG5.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = ({ goToSignup , onFinish }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (value) => {
        if (!value) return "Please enter your email.";
        const regex = /^[\w\.-]{4,}@[\w-]{2,}(\.[\w-]{2,})+$/;
        if (!regex.test(value)) return "Please enter a valid email.";
        return "";
    };

    const validatePassword = (value) => {
        if (!value) return "Please enter your password.";
        if (value.length < 8) return "Password must be at least 8 characters long.";
        if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter.";
        if (!/\d/.test(value)) return "Password must contain at least one number.";
        if (!/[!@#\$&*~]/.test(value)) return "Password must contain at least one special character.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        const passError = validatePassword(password);

        if (emailError || passError) {
            setError(emailError || passError);
            return;
        }

        setError("");
        onFinish();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[400px] h-[600px] bg-gray-100 rounded-2xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-blue-900 text-center">Login</h1>
                <p className="text-center text-gray-500 italic mt-2">Welcome back! Login to your account.</p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    {/* Email */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e-mail"
                        className="w-full px-4 py-3 rounded-full shadow-md border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password"
                            className="w-full px-4 py-3 rounded-full shadow-md border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}

                        </button>


                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-blue-800 hover:bg-blue-600 text-white font-bold transition-colors"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-5">
                    Don't have an account?{" "}
                    <span
                        onClick={goToSignup}
                        className="text-blue-800 cursor-pointer font-bold"
                    >
                        Sign Up
                    </span>
                </p>

                <div className="flex items-center justify-center mt-5 space-x-5">
                    <img src={googleIcon} alt="Google" className="w-8 h-8 cursor-pointer" />
                    <img src={githubIcon} alt="GitHub" className="w-8 h-8 cursor-pointer" />
                    <img src={microsoftIcon} alt="Microsoft" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Login;