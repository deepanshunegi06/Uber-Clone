import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  // State variables for capturing input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // For demonstration purposes, captured data is stored here
  const [captainData, setCaptainData] = useState({});

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    // Update the state with form data
    setCaptainData({ email, password });

    // Reset the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-[#edf2f7] to-[#cfd8dc] flex items-center justify-center px-4">
      <div className="bg-white/40 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
        
        {/* Header Section */}
        <div className="mb-8 text-center">
          <img
            src="uber-black-logo.png"
            alt="Captain Logo"
            className="w-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-[#003049]">Captain Login</h2>
          <p className="text-gray-600 text-sm">Sign in to begin your shift</p>
        </div>

        {/* Login Form */}
        <form onSubmit={submitHandler}>
          {/* Email Field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
            placeholder="captain@example.com"
          />

          {/* Password Field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
            placeholder="••••••••"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#003049] text-white font-medium py-2.5 rounded-lg hover:bg-[#001f2d] transition-all duration-200"
          >
            Login as Captain
          </button>
        </form>

        {/* Bottom Links Section */}
        <div className="mt-6 text-center">
          {/* Link to Sign Up */}
          <p className="text-sm text-gray-600 mb-2">
            New Captain?{" "}
            <Link
              to="/captain-signup"
              className="text-[#003049] font-medium hover:underline"
            >
              Register here
            </Link>
          </p>

          {/* Link to User Login */}
          <Link
            to="/login"
            className="w-full inline-block bg-white text-black border border-black font-medium py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
