import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card border rounded-lg shadow-md p-4 bg-white">
      <div className="relative">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="rounded-lg w-full h-40 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">
          {property.status}
        </div>
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded">
          {property.type}
        </div>
      </div>
      <h3 className="font-bold text-lg mt-4">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <div className="flex justify-between text-sm mt-2">
        <div>
          <strong>Target IRR:</strong> {property.targetIRR}
        </div>
        <div>
          <strong>Yield:</strong> {property.grossEntryYield}
        </div>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <div>
          <strong>Asset Value:</strong> {property.assetValue}
        </div>
        <div>
          <strong>Type:</strong> {property.assetType}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${property.funding}%` }}
        ></div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-900 text-white px-4 py-2 rounded">
          Invest Now
        </button>
        <button className="">
          <Link to="/properties/123 " className="border border-blue-900 text-blue-900 px-4 py-2 rounded">View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
