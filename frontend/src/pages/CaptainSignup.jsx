import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  // State variables for capturing input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // For demonstration purposes, captured data is stored here
  const [captainData, setCaptainData] = useState({});

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    // Update the state with form data
    setCaptainData({
      fullName: {
        firstName,
        lastName,
      },
      email,
      phone,
      vehicleType,
      licensePlate,
      password,
    });
    // console.log(captainData); // For demonstration purposes, log the data to console

    // Reset the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setVehicleType("");
    setLicensePlate("");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#edf2f7] to-[#cfd8dc] flex items-center justify-center px-4 py-8">
      <div className="bg-white/40 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <img
            src="uber-black-logo.png"
            alt="Captain Logo"
            className="w-16 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-[#003049]">
            Become a Captain
          </h2>
          <p className="text-gray-600 text-sm">
            Start earning with your vehicle
          </p>
        </div>

        {/* Registration Form */}
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

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

          {/* Phone Field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
            placeholder="(123) 456-7890"
          />

          {/* Vehicle Type Field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
          >
            <option value="">Select vehicle type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
            <option value="motorcycle">Motorcycle</option>
          </select>

          {/* License Plate Field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            License Plate Number
          </label>
          <input
            type="text"
            required
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
            placeholder="ABC123"
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
            className="w-full px-4 py-2 mb-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
            placeholder="••••••••"
          />

          {/* Confirm Password Field - Added this field */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003049] placeholder:text-gray-500 transition-all"
            placeholder="••••••••"
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
              <a
                href="#"
                className="text-[#003049] font-medium hover:underline"
              >
                Terms of Service
              </a>
              ,{" "}
              <a
                href="#"
                className="text-[#003049] font-medium hover:underline"
              >
                Privacy Policy
              </a>
              , and consent to a background check
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#003049] text-white font-medium py-2.5 rounded-lg hover:bg-[#001f2d] transition-all duration-200"
          >
            Register as Captain
          </button>
        </form>

        {/* Bottom Links Section */}
        <div className="mt-6 text-center">
          {/* Link to Login */}
          <p className="text-sm text-gray-600 mb-2">
            Already a Captain?{" "}
            <Link
              to="/captain-login"
              className="text-[#003049] font-medium hover:underline"
            >
              Sign in here
            </Link>
          </p>

          {/* Link to User Signup */}
          <Link
            to="/signup"
            className="w-full inline-block bg-white text-black border border-black font-medium py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Register as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
