import React, { useState } from "react";

function Properties() {
  // Mock property data (local object)
  const mockData = [
    {
      id: 1,
      title: "Pune Industrial Opportunity - 1",
      location: "Hinjewadi",
      type: "Fractional Investment",
      status: "Open",
      targetIRR: "13%",
      grossEntryYield: "8.1%",
      assetValue: "₹ 39.20 Cr",
      assetType: "Industrial",
      funded: "95%",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Healthcare Growth Opportunity",
      location: "Hosur",
      type: "Strata Growth",
      status: "Fully Funded",
      targetIRR: "16-18%",
      grossEntryYield: "0%",
      assetValue: "₹ 35.00 Cr",
      assetType: "Healthcare",
      funded: "100%",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Healthcare Opportunity",
      location: "Hosur",
      type: "Fractional Investment",
      status: "Fully Funded",
      targetIRR: "13.4%",
      grossEntryYield: "9.02%",
      assetValue: "₹ 45.00 Cr",
      assetType: "Healthcare",
      funded: "100%",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredProperties =
    filter === "All"
      ? mockData
      : mockData.filter((property) => property.status === filter);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          {["All", "Open", "Fully Funded", "Exited", "Resale"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 border-b-2 ${
                filter === status
                  ? "border-yellow-500 text-yellow-500"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <span
                  className={`text-xs uppercase px-2 py-1 rounded-full ${
                    property.status === "Open"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {property.status}
                </span>
                <span className="ml-2 text-xs uppercase px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                  {property.type}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-800">
                  {property.title}
                </h3>
                <p className="text-gray-500">{property.location}</p>
                <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                  <div>
                    <p className="font-bold text-gray-700">Target IRR</p>
                    <p>{property.targetIRR}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700">Entry Yield</p>
                    <p>{property.grossEntryYield}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700">Asset Value</p>
                    <p>{property.assetValue}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700">Asset Type</p>
                    <p>{property.assetType}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: property.funded }}
                    ></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    {property.funded} Funded
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    {property.status === "Open" ? "Invest Now" : "Join Waitlist"}
                  </button>
                  <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Properties;
