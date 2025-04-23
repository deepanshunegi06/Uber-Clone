// Importing necessary modules from React and React Router
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Functional component for the User Signup page
const UserSignup = () => {
  // State hooks to manage input fields and submitted data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [userData, setUserData] = useState({}); // Stores submitted registration data

  // Handler for form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form refresh behavior
    setUserData({
      fullName: {
        firstName,
        lastName,
      },
      email,
      phone,
      password,
    }); // Save submitted data
    // console.log(userData)

    // Clear all input fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
  };

  return (
    // Outer container with full-screen height and center alignment
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4 py-8">
      {/* Signup form card */}
      <div className="bg-white/40 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header with logo and welcome message */}
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

        {/* Signup form */}
        <form onSubmit={submitHandler}>
          {/* Name fields - side by side */}
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

          {/* Phone input field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
            placeholder="(123) 456-7890"
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
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
            placeholder="•••••••••"
          />

          {/* Confirm Password input field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500 transition-all"
            placeholder="•••••••••"
          />

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

          {/* Submit/Register button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-200"
          >
            Create Account
          </button>

          {/* Navigation to Login page */}
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

        {/* Option for drivers */}
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

// Exporting the component for use in routing or other files
export default UserSignup;
