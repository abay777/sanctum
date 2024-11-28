import React, { useState } from "react";

const FilterModal = ({ onClose, onApply }) => {
  const [filters, setFilters] = useState({
    investmentOptions: [],
    assetType: [],
    city: [],
  });

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="font-bold text-lg mb-4">Apply Filters</h2>
        <div className="filter-group mb-4">
          <h3 className="font-semibold">Investment Options</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("investmentOptions", "Fractional Investment")}
            />
            Fractional Investment
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("investmentOptions", "Strata Growth")}
            />
            Strata Growth
          </label>
        </div>
        <div className="filter-group mb-4">
          <h3 className="font-semibold">Asset Type</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("assetType", "Industrial")}
            />
            Industrial
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("assetType", "Healthcare")}
            />
            Healthcare
          </label>
        </div>
        <div className="filter-group mb-4">
          <h3 className="font-semibold">City</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("city", "Hinjewadi")}
            />
            Hinjewadi
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("city", "Hosur")}
            />
            Hosur
          </label>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4">Cancel</button>
          <button onClick={() => onApply(filters)} className="bg-blue-900 text-white px-4 py-2 rounded">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
