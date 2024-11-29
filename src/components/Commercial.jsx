import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faRupeeSign, faChartLine, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const  Commercial= () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-blue-900 text-3xl font-bold mb-6">
            Why Commercial Real Estate?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Stable Asset Class */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-900 bg-yellow-100 p-3 rounded-full">
                <FontAwesomeIcon icon={faBuilding} size="lg" />
              </div>
              <p className="text-blue-900 font-semibold">Stable Asset Class</p>
            </div>
            {/* Monthly Cashflow */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-900 bg-yellow-100 p-3 rounded-full">
                <FontAwesomeIcon icon={faRupeeSign} size="lg" />
              </div>
              <p className="text-blue-900 font-semibold">Monthly Cashflow</p>
            </div>
            {/* Capital Appreciation */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-900 bg-yellow-100 p-3 rounded-full">
                <FontAwesomeIcon icon={faChartLine} size="lg" />
              </div>
              <p className="text-blue-900 font-semibold">Capital Appreciation</p>
            </div>
            {/* Portfolio Diversification */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-900 bg-yellow-100 p-3 rounded-full">
                <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
              </div>
              <p className="text-blue-900 font-semibold">
                Portfolio Diversification
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              CRE vs. Other Asset Classes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white text-blue-900 p-4 rounded-lg">
                Residential Properties
              </div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg">
                Commercial Real Estate
              </div>
              <div className="bg-white text-blue-900 p-4 rounded-lg">Gold</div>
              <div className="bg-white text-blue-900 p-4 rounded-lg">
                Stocks & Mutual Funds
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <p>Lower Returns</p>
              <p>Higher Returns</p>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <p>Stable</p>
              <p>Volatile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Commercial;
