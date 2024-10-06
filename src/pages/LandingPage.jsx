import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-52 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Welcome to the <span className="text-purple-500">NirmansAI</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-400">
          All Content writing AI models at one place.
        </p>
        <Link to={"/dashboard"}>
          <button className="mt-10 bg-purple-500 hover:bg-purple-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">
              AI-Powered Analytics
            </h3>
            <p className="mt-4 text-slate-900">
              Gain insights with advanced machine learning algorithms and deep
              data analysis.
            </p>
          </div>
          <div className="p-6 bg-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">
              Customizable Contents
            </h3>
            <p className="mt-4 text-slate-900">
              Tailor AI models to suit your specific content needs.
            </p>
          </div>
          <div className="p-6 bg-gray-300 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">
              24/7 Support
            </h3>
            <p className="mt-4 text-slate-900">
              Our AI models are available to assist you any time, day or night.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
