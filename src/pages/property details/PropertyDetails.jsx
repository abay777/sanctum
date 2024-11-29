import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilePdf, faFileExcel, faDownload,
  faInfoCircle,
  faRupeeSign,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";


const data = {
    title: "Pune Industrial Opportunity - 1",
    location: "Hinjewadi 79,845 sqft",
    status: "Open",
    minInvestment: "₹30 Lakhs",
    grossEntryYield: "8.1%",
    targetIRR: "13%",
    targetMultiple: "1.6x",
    fundedAmount: "₹37,10,00,000",
    totalFunding: "₹39,20,00,000",
    fundedPercentage: "95%",
    thumbnails: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    mainImage: "https://via.placeholder.com/800x400",
    investmentThesis: [
      {
        title: "In-Demand Location",
        description:
          "Abundant land for potential construction along with IT SEZ, IT parks, manufacturing, and budget housing options.",
      },
      {
        title: "World-Class Tenant",
        description:
          "The tenant is a leading global manufacturer of precision-engineered and efficient centrifugal pumps and compressors with a strong presence across America, Europe, and Asia.",
      },
      {
        title: "Unused FSI",
        description:
          "The investment opportunity offers 9.4% returns from 1x of FSI, while the potential was to build 4.5x.",
      },
    ],
  };


 
const AssetOverview = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            This is an opportunity to invest in 79,845 sqft. of an industrial
            facility in the fast-growing Hinjewadi Phase II of Pune. The vicinity
            comprises multiple top-tier multinational clients making it a good
            investment option.
          </p>
          <p className="text-gray-700 mb-4">
            The opportunity is valued at INR 39.2 Cr. and the tenant is a leading
            manufacturer of precision pumps, compressors, and accessories.
          </p>
          <p className="text-gray-700">
            With high yields, long lease terms, location, and a world-class
            tenant, the asset makes for a compelling investment opportunity.
          </p>
        </div>
  
        {/* Location Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Location</h2>
          <p className="text-gray-700 mb-4">
            The asset is located in Phase II of Hinjewadi, a major technology and
            manufacturing hub in Pune that is located in the west part of the PBD.
            The upcoming metro line (expected in 2026) and the Mumbai-Bengaluru
            Expressway (expected in 2028) have led to increased commercial
            interest in the area.
          </p>
          <p className="text-gray-700 mb-4">
            With the residential real estate market booming around the vicinity,
            the asset is among the very few parcels of land in the area available
            for development.
          </p>
  
          {/* Image Placeholder */}
          <div className="relative">
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
              <span className="text-gray-500 font-medium">Image Placeholder</span>
            </div>
            <div className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-1 text-sm font-bold rounded-br-lg">
              Map
            </div>
          </div>
  
          {/* Highlighted Points */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 md:w-1/4 px-2 mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11M9 21V3m5 15h2a2 2 0 002-2V8a2 2 0 00-2-2h-2m-6 0H5a2 2 0 00-2 2v8a2 2 0 002 2h2m4 0v-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">
                    National Highway
                  </h4>
                  <p className="text-gray-500 text-sm">NH48 - 7.8 kms</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 px-2 mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16l-4-4m0 0l4-4m-4 4h16"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">
                    Upcoming Metro
                  </h4>
                  <p className="text-gray-500 text-sm">Doelher - 1.1 kms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



const FloorPlanAndPrice = () => {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Floor Plan Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Floor Plan</h2>
          <p className="text-gray-700 mb-4">
            The land parcel located in Hinjewadi Phase II spans across a total
            leasable area of 79,845 sqft.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            Total Opportunity Space: <span className="font-normal">79,845 sqft</span>
          </p>
  
          {/* Image Placeholder */}
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 font-medium">Image Placeholder</span>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Price</h2>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold">Construction Consideration</td>
                <td className="py-2 text-right">₹36,55,73,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Brokerage</td>
                <td className="py-2 text-right">₹1,00,00,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Acquisition Fee</td>
                <td className="py-2 text-right">₹1,31,60,828</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Legal Fees</td>
                <td className="py-2 text-right">₹18,93,750</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">Reserves</td>
                <td className="py-2 text-right">₹12,72,621</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-blue-900">Net Purchase Price</td>
                <td className="py-2 text-right font-bold text-blue-900">
                  ₹39,20,00,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  



const InvestmentCalculator = () => {
  const [appreciationRate, setAppreciationRate] = useState(5);

  const handleSliderChange = (e) => {
    setAppreciationRate(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Calculator</h2>
      <p className="text-gray-700 mb-4">
        Returns and Financial model
        <br />
        Please insert investment amount and toggle with appreciation rate
      </p>

      {/* Capital Input */}
      <div className="mb-6">
        <label
          htmlFor="capital"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Capital
        </label>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faRupeeSign} className="text-gray-400 mr-2" />
          <input
            type="text"
            id="capital"
            value="30,00,000"
            readOnly
            className="w-full border-gray-300 border rounded-lg p-2 text-blue-900 font-semibold"
          />
        </div>
        <p className="text-gray-500 text-sm mt-2">Thirty lakh</p>
      </div>

      {/* Appreciation Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-700 font-medium">
            Appreciation Rate
          </span>
          <span className="text-blue-900 font-semibold">{appreciationRate}%</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSlidersH} className="text-gray-400 mr-2" />
          <input
            type="range"
            min="1"
            max="10"
            value={appreciationRate}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-8">
        <div>
          <p className="text-sm text-gray-700">Profit Amount</p>
          <p className="text-blue-900 font-bold">₹ 20,62,655</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Multiple</p>
          <p className="text-blue-900 font-bold">1.68x</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">IRR</p>
          <p className="text-blue-900 font-bold">13%</p>
        </div>
      </div>

      {/* Financial Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4">Year</th>
            <th className="py-2 px-4">Total Investment</th>
            <th className="py-2 px-4">Rental Income</th>
            <th className="py-2 px-4">Interest on Deposit</th>
            <th className="py-2 px-4">Property Tax</th>
            <th className="py-2 px-4">Management Fee</th>
            <th className="py-2 px-4">Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4].map((year, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{year === 0 ? "Day 0" : `Year ${year}`}</td>
              <td className="py-2 px-4">₹ 30,00,000</td>
              <td className="py-2 px-4">
                {year > 0 ? `₹ ${(240510 + year * 8000).toLocaleString()}` : "-"}
              </td>
              <td className="py-2 px-4">
                {year > 0 ? `₹ ${(7673 + year * 200).toLocaleString()}` : "-"}
              </td>
              <td className="py-2 px-4">₹ 6,722</td>
              <td className="py-2 px-4">₹ {(30000 + year * 1000).toLocaleString()}</td>
              <td className="py-2 px-4">
                {year > 0
                  ? `₹ ${(221467 + year * 10000).toLocaleString()}`
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Disclaimer */}
      <p className="text-gray-500 text-xs mt-4">
        *Calculated at {appreciationRate}% CAGR Value Appreciation
      </p>
    </div>
  );
};








const Resources = () => {
    const resources = [
      { name: "Investment memo", type: "pdf", link: "#" },
      { name: "Financial calculator", type: "excel", link: "#" },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Resources</h2>
        <div className="divide-y divide-gray-200">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={resource.type === "pdf" ? faFilePdf : faFileExcel}
                  className={`text-2xl mr-4 ${
                    resource.type === "pdf" ? "text-red-600" : "text-green-600"
                  }`}
                />
                <span className="text-gray-700 text-lg">{resource.name}</span>
              </div>
              <a
                href={resource.link}
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 flex items-center"
                download
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

const PropertyDetails = ({  }) => {
  return (
    <div className="container mx-auto my-10 px-4 flex flex-col lg:flex-row gap-8">
    {/* Left Section */}
    <div className="lg:w-2/3">
      {/* Main Image */}
      <div className="relative">
        <div className="absolute top-0 left-0 bg-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg">
          Fractional Investment
        </div>
        <img
          src={data.mainImage}
          alt="Main Property"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="mt-4 flex space-x-2">
        {data.thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className="w-16 h-16 rounded-lg border border-gray-200"
          />
        ))}
      </div>

      {/* Investment Thesis */}
      <div className="mt-8">
        <h4 className="text-blue-900 text-lg font-bold mb-4">
          Investment Thesis
        </h4>
        <div className="space-y-4">
          {data.investmentThesis.map((item, index) => (
            <div key={index}>
              <h5 className="text-sm font-bold text-blue-900">{item.title}</h5>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <AssetOverview/>
      <FloorPlanAndPrice/>
      <InvestmentCalculator/>
      <Resources/>
    </div>

    {/* Right Section - Sticky Card */}
    <div className="lg:w-1/3 lg:sticky lg:top-0 h-fit bg-gray-50 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold text-blue-900 mb-2">{data.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{data.location}</p>
      <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
        {data.status}
      </span>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-700">
          <span>Min Investment</span>
          <span className="font-bold">{data.minInvestment}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <span>Gross Entry Yield</span>
          <span className="font-bold">{data.grossEntryYield}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <span>Target IRR</span>
          <span className="font-bold">{data.targetIRR}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <span>Target Multiple</span>
          <span className="font-bold">{data.targetMultiple}</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-700">
          <span>
            {data.fundedAmount} Funded of {data.totalFunding}
          </span>
        </div>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${data.fundedPercentage}` }}
          ></div>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-blue-900 text-white text-sm px-4 py-2 rounded-lg">
          Invest Now
        </button>
        <button className="bg-gray-200 text-blue-900 text-sm px-4 py-2 rounded-lg">
          Express Interest
        </button>
      </div>
    </div>
  </div>

  );
};


export default PropertyDetails;