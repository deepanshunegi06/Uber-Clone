import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('home-hero-img.avif')] h-screen pt-8  flex justify-between flex-col">
        <img className="w-16 ml-8" src="uber-logo.png" alt="" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center bg-black text-white py-3 rounded mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
