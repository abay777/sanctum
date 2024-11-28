import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailTab, setIsEmailTab] = useState(true);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex flex-wrap h-screen">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 bg-gray-200">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Building"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Login</h1>
        <button className="flex items-center justify-center bg-white border rounded-md px-4 py-2 mb-6 shadow-sm">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <div className="flex items-center justify-center w-full mb-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center mb-6">
          <button
            onClick={() => setIsEmailTab(true)}
            className={`px-4 py-2 border-b-2 ${
              isEmailTab ? "border-blue-500" : "border-transparent"
            } text-blue-900 font-semibold`}
          >
            Email ID
          </button>
          <button
            onClick={() => setIsEmailTab(false)}
            className={`px-4 py-2 border-b-2 ${
              !isEmailTab ? "border-blue-500" : "border-transparent"
            } text-blue-900 font-semibold`}
          >
            Phone Number
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {isEmailTab ? "Enter your registered email ID" : "Enter your phone number"}
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isEmailTab ? "Email ID" : "Phone Number"}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700">Enter password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1"
            />
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12m0-3.31a3.31 3.31 0 11-6.62 0 3.31 3.31 0 016.62 0zm-3.31 6.62c3.653 0 6.61-2.957 6.61-6.62s-2.957-6.62-6.61-6.62-6.62 2.957-6.62 6.62 2.957 6.62 6.62 6.62z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18M4.219 5.008a10.387 10.387 0 00-1.199 1.1m19.732-1.1a10.387 10.387 0 00-1.2 1.1M15.646 8.31a3.905 3.905 0 00-.55-3.163m-6.153.856a4.2 4.2 0 00-.45 3.307"
                  />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="flex justify-between mt-6 w-full max-w-sm text-sm">
          <a href="/register" className="text-blue-900 hover:underline">
            Don’t have an account? Register
          </a>
          <a href="/forgot-password" className="text-blue-900 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Recaptcha Notice */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default Login;
    