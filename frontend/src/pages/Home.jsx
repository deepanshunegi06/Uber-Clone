import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-[url('home-hero-img.avif')] bg-cover bg-center flex flex-col justify-between pt-6 px-4">
      {/* Logo */}
      <div>
        <img
          src="uber-logo.png"
          alt="Uber Logo"
          className="w-14 h-auto object-contain"
        />
      </div>

      {/* Bottom Card */}
      <div className="bg-white rounded-t-2xl px-4 py-6 shadow-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Get Started with Uber</h2>
        <Link
          to="/login"
          className="block w-full text-center bg-black text-white py-3 rounded-md font-medium"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
