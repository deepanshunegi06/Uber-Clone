// Importing necessary modules from React and React Router
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

/**
 * UserSignup Component
 * 
 * Handles the registration process for new users with form validation
 * and error display functionality.
 */
const UserSignup = () => {
  // State hooks to manage form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  // Error handling state
  const [error, setError] = useState("");
  
  // Navigation hook
  const navigate = useNavigate();

  // Accessing user context
  const { user, setUser } = React.useContext(UserDataContext);

  /**
   * Form submission handler
   * Validates inputs and submits registration data to API
   */
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear any previous errors
    
    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Create user object with form data
    const newUser = {
      firstname: firstName,
      lastname: lastName,
      email,
      phone,
      password,
    };

    try {
      // Submit registration request to API
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      // Handle successful registration
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        navigate("/home");
      }

      // Clear form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setTermsAccepted(false);
      
    } catch (error) {
      // Handle registration errors
      const errorMsg = error.response?.data?.message || "Registration failed. Please try again.";
      setError(errorMsg);
    }
  };

  return (
    // Page container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4 py-8">
      {/* Signup form card with glass effect */}
      <div className="bg-white/40 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header section with logo and welcome message */}
        <div className="mb-8 text-center">
          <img
            src="uber-black-logo.png"
            alt="Uber Logo"
            className="w-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-600 text-sm">Sign up to start your journey</p>
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

        {/* Registration form */}
        <form onSubmit={submitHandler}>
          {/* Name fields - side by side layout */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
                placeholder="John"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

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

          {/* Phone field with validation */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              maxLength={10}
              pattern="[6-9]{1}[0-9]{9}"
              value={phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                setPhone(onlyNums);
              }}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
              placeholder="Enter 10-digit phone number"
            />
          </div>

          {/* Password field */}
          <div className="mb-5">
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

          {/* Confirm Password field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
              placeholder="•••••••••"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              id="terms"
              required
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 mr-2"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-black font-medium hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-black font-medium hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-200"
          >
            Create Account
          </button>

          {/* Login link for existing users */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-black font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>

        {/* Captain registration option */}
        <div className="mt-6">
          <Link
            to="/captain-signup"
            className="w-full block text-center bg-white text-black border border-black font-medium py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Register as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;