import React, { useState,useRef,useEffect } from "react";
import PropertyCard from "./PropertyCard";
import FilterModal from "./FilterModal";

const Banner = () => {
    return (
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x1080')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
  
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold text-orange-400 mb-2">
            Strata Properties
          </h1>
          <p className="text-lg font-light">Our handpicked portfolio</p>
        </div>
      </div>
    );
  };

const propertyData = [
  {
    id: 1,
    title: "Pune Industrial Opportunity - 1",
    location: "Hinjewadi",
    targetIRR: "13%",
    grossEntryYield: "8.1%",
    assetValue: "₹39.20 Cr",
    assetType: "Industrial",
    status: "Open",
    funding: 95,
    type: "Fractional Investment",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Healthcare Growth Opportunity",
    location: "Hosur",
    targetIRR: "16-18%",
    grossEntryYield: "0%",
    assetValue: "₹35.00 Cr",
    assetType: "Healthcare",
    status: "Fully Funded",
    funding: 100,
    type: "Strata Growth",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Healthcare Opportunity",
    location: "Hosur",
    targetIRR: "13.4%",
    grossEntryYield: "9.02%",
    assetValue: "₹45.00 Cr",
    assetType: "Healthcare",
    status: "Fully Funded",
    funding: 100,
    type: "Fractional Investment",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

const PropertyPage = () => {
  const [filteredProperties, setFilteredProperties] = useState(propertyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = propertyData.filter((property) =>
      property.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSortChange = (option) => {
    let sortedProperties = [...filteredProperties];
    if (option === "Asset Size (High to Low)") {
      sortedProperties.sort(
        (a, b) =>
          parseFloat(b.assetValue.replace(/[₹,]/g, "")) -
          parseFloat(a.assetValue.replace(/[₹,]/g, ""))
      );
    } else if (option === "Asset Size (Low to High)") {
      sortedProperties.sort(
        (a, b) =>
          parseFloat(a.assetValue.replace(/[₹,]/g, "")) -
          parseFloat(b.assetValue.replace(/[₹,]/g, ""))
      );
    }
    setFilteredProperties(sortedProperties);
  };

  const applyFilters = (filters) => {
    const filtered = propertyData.filter((property) => {
      return (
        (!filters.investmentOptions.length ||
          filters.investmentOptions.includes(property.type)) &&
        (!filters.assetType.length ||
          filters.assetType.includes(property.assetType)) &&
        (!filters.city.length || filters.city.includes(property.location))
      );
    });
    setFilteredProperties(filtered);
    setIsFilterModalOpen(false);
  };

  return (
    <div className="property-page">
      {/* Search, Sort, and Filter */}
      <SearchFilterSort
        onSearch={handleSearch}
        onSortChange={handleSortChange}
        onFilterClick={() => setIsFilterModalOpen(true)}
      />

      {/* Property Cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <FilterModal
          onClose={() => setIsFilterModalOpen(false)}
          onApply={applyFilters}
        />
      )}
    </div>
  );
};


const SearchFilterSort = ({ onSearch, onSortChange, onFilterClick }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value); // Callback for searching
    };
  
    const handleDropdownToggle = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    const handleDropdownSelect = (option) => {
      onSortChange(option); // Callback to update sort
      setIsDropdownOpen(false); // Close dropdown after selecting
    };
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);
  
    return (
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        {/* Search Box */}
        <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="ml-2 flex-grow outline-none text-gray-600"
          />
        </div>
  
        {/* Sort Dropdown */}
        <div className="relative ml-4" ref={dropdownRef}>
          <button
            className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-600"
            onClick={handleDropdownToggle}
          >
            Sort By: <span className="ml-1 font-semibold text-blue-900">Latest</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg w-48 mt-1 z-10">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("Latest")}
                >
                  Latest
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("Asset Size (High to Low)")}
                >
                  Asset Size (High to Low)
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("Asset Size (Low to High)")}
                >
                  Asset Size (Low to High)
                </li>
              </ul>
            </div>
          )}
        </div>
  
        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="ml-4 flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h3m-6.364 8.182A4.5 4.5 0 015.5 12H18.5m-6.5-6.5v13m-3-6.5a4.5 4.5 0 01-.136 1.682m6.364 8.182A4.5 4.5 0 0118.5 12H5.5m6.5 6.5v-13"
            />
          </svg>
          Filters
        </button>
      </div>
    );
  };

const Property = () => {
  return (
    <>
    <Banner/>
    <PropertyPage/>
    </>
  )
};

export default Property;




