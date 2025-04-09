// Importing necessary modules from React and React Router
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Functional component for the User Login page
const UserLogin = () => {
  // State hooks to manage input fields and submitted data
  const [email, setEmail] = useState("");          // Stores user's email
  const [password, setPassword] = useState("");    // Stores user's password
  const [userData, setUserData] = useState({});    // Stores submitted login data

  // Handler for form submission
  const submitHandler = (e) => {
    e.preventDefault();                            // Prevent default form refresh behavior
    setUserData({ email, password });              // Save submitted data to userData state
    setEmail("");                                  // Clear email field
    setPassword("");                               // Clear password field
  };

  return (
    // Outer container with full-screen height and center alignment
    <div className="min-h-[100dvh] bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
      
      {/* Login form card */}
      <div className="bg-white/40 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">

        {/* Header with logo and welcome message */}
        <div className="mb-8 text-center">
          <img
            src="uber-black-logo.png"
            alt="Uber Logo"
            className="w-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 text-sm">Login to continue your journey</p>
        </div>

        {/* Login form */}
        <form onSubmit={submitHandler}>

          {/* Email input field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
            placeholder="email@example.com"
          />

          {/* Password input field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
            placeholder="••••••••"
          />

          {/* Submit/Login button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-200"
          >
            Login
          </button>

          {/* Navigation to Sign Up page */}
          <p className="text-center text-sm text-gray-600 mt-4">
            New here?{" "}
            <Link
              to="/signup"
              className="text-black font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </form>

        {/* Alternate login option for Captain */}
        <div className="mt-6">
          <Link
            to="/captain-login"
            className="w-full block text-center bg-white text-black border border-black font-medium py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Sign in as Captain
          </Link>
        </div>

      </div>
    </div>
  );
};

// Exporting the component for use in routing or other files
export default UserLogin;
