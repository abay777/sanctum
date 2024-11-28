import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white min-h-screen flex flex-col justify-between relative">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">Redefining</h2>
          <div className="overflow-hidden h-16">
            <div className="text-2xl font-semibold text-yellow-400 animate-slide">
              Fractional Ownership
            </div>
          </div>
          <h1 className="text-xl font-light mt-6 leading-8">
            Invest in World-class Commercial Real Estate <br />
            Earn returns of <strong className="text-yellow-400">14-16% IRR</strong>
            <br />
            Start investing from ₹25 lakhs
          </h1>
          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-lg"
            >
              Invest Now
            </a>
            <a
              href="#"
              className="border border-white text-white py-2 px-4 rounded text-lg hover:bg-gray-100 hover:text-indigo-800"
            >
              View Details
            </a>
          </div>
        </div>
      </div>

      {/* Investment Card Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col  items-center justify-between">
          {/* Investment Card Header */}
          <div className="bg-yellow-400 text-indigo-900 font-bold px-4 py-2 rounded-t-lg">
            Fractional Investment
          </div>
          {/* Card Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            {/* Placeholder Image */}
            <img
              src="https://via.placeholder.com/100x100"
              alt="Property"
              className="rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">Pune Industrial Opportunity - 1</h3>
              <p className="text-sm text-gray-600">Hinjewadi</p>
              <div className="mt-2 flex space-x-4 text-sm">
                <div>Gross Entry Yield: <strong>8.1%</strong></div>
                <div>Asset Value: <strong>₹39,20,00,000</strong></div>
                <div>Target IRR: <strong>13%</strong></div>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-1">95% Funded</div>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-4 sm:mt-0">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm"
            >
              Invest Now
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 py-2 px-4 rounded text-sm hover:bg-blue-600 hover:text-white ml-2"
            >
              View Details
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between">
        <a
          href="#"
          className="bg-white text-indigo-900 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100"
        >
          All Properties
        </a>
        {/* App Store Links */}
        <div className="flex mt-4 sm:mt-0">
          <a href="#" className="mr-4">
            <img
              src="https://investor.strataprop.com/assets/Icons/apple_store.svg"
              alt="Download on App Store"
            />
          </a>
          <a href="#">
            <img
              src="https://investor.strataprop.com/assets/Icons/android_play_store.svg"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
    </div>
  );
};

export default HeroSection;
