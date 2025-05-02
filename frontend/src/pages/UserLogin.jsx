// Importing necessary modules from React and React Router
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

/**
 * UserLogin Component
 * 
 * Handles user authentication with form validation
 * and error display functionality.
 */
const UserLogin = () => {
  // State hooks to manage form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Error handling state
  const [error, setError] = useState("");
  
  // Navigation hook
  const navigate = useNavigate();
  
  // Accessing user context
  const { user, setUser } = React.useContext(UserDataContext);

  /**
   * Form submission handler
   * Validates inputs and submits login credentials to API
   */
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear any previous errors
    
    // Create user credentials object
    const userData = {
      email,
      password
    };
    
    try {
      // Submit login request to API
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );
      
      // Handle successful login
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate("/home");
      }
      
      // Clear form fields after successful submission
      setEmail("");
      setPassword("");
      
    } catch (error) {
      // Handle login errors
      const errorMsg = error.response?.data?.message || "Login failed. Please check your credentials.";
      setError(errorMsg);
    }
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
          <p className="text-gray-600 text-sm">
            Login to continue your journey
          </p>
        </div>

        {/* Error message display */}
        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </p>
          </div>
        )}

        {/* Login form */}
        <form onSubmit={submitHandler}>
          {/* Email field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
              placeholder="email@example.com"
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
              placeholder="•••••••••"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-200"
          >
            Login
          </button>

          {/* Signup link for new users */}
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

        {/* Captain login option */}
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

export default UserLogin;