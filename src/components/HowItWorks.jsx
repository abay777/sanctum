import React from "react";
import OurBackers from "./OurBankers";



function RecentOpportunities() {
  const opportunities = [
    {
      type: "Strata Growth",
      status: "Fully Funded",
      title: "Healthcare Growth Opportunity",
      location: "Hosur",
      targetIRR: "16-18%",
      rentalYield: "0%",
      imgUrl: "https://via.placeholder.com/300x200",
    },
    {
      type: "Fractional Investment",
      status: "Fully Funded",
      title: "Healthcare Opportunity",
      location: "Hosur",
      targetIRR: "13.4%",
      rentalYield: "9.02%",
      imgUrl: "https://via.placeholder.com/300x200",
    },
    {
      type: "Fractional Investment",
      status: "Fully Funded",
      title: "Gujarat Warehouse Opportunity",
      location: "Kadi, Gujarat",
      targetIRR: "14.4%",
      rentalYield: "9%",
      imgUrl: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="recent-opportunities-section py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Recent Opportunities
          </h2>
          <a href="#" className="text-blue-900 font-medium hover:underline">
            View All &gt;
          </a>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={opportunity.imgUrl}
                  alt={opportunity.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold py-1 px-3 rounded">
                  {opportunity.type}
                </span>
                <span className="absolute bottom-2 right-2 bg-purple-700 text-white text-xs font-bold py-1 px-3 rounded">
                  {opportunity.status}
                </span>
              </div>

              {/* Details */}
              <div className="p-4">
                <h3 className="text-blue-900 text-lg font-bold mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{opportunity.location}</p>

                {/* IRR and Rental Yield */}
                <div className="flex justify-between text-gray-700 text-sm mb-4">
                  <div>
                    <span className="block font-bold text-blue-900">
                      {opportunity.targetIRR}
                    </span>
                    <span>Target IRR</span>
                  </div>
                  <div>
                    <span className="block font-bold text-blue-900">
                      {opportunity.rentalYield}
                    </span>
                    <span>Rental Yield</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                  <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
                    Invest Now
                  </button>
                  <button className="border border-blue-900 text-blue-900 py-2 px-4 rounded hover:bg-blue-100">
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



function InvestmentOptions() {
  return (
    <div className="investment-options-section bg-blue-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold mb-2">
            Investment Options
          </h2>
          <p className="text-white text-lg">
            Strata provides multiple investment options catering to different
            risk profiles, preferences, and requirements.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fractional Investment Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Fractional Investment"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-blue-900 text-xl font-bold mb-2">
                Fractional Investment
              </h3>
              <p className="text-gray-700">
                Invest in fractions of pre-leased, active commercial properties.
              </p>
            </div>
          </div>

          {/* Strata Growth Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Strata Growth"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-blue-900 text-xl font-bold mb-2">
                Strata Growth
              </h3>
              <p className="text-gray-700">
                Invest in high value, off-market growth assets.
              </p>
            </div>
          </div>

          {/* Strata Edge Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Strata Edge"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-blue-900 text-xl font-bold mb-2">
                Strata Edge
              </h3>
              <p className="text-gray-700">
                Own assets outright and leverage our asset management services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











function HowItWorks() {
  return (
    <>
        <div className="how-it-works-section bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            {/* Text Section */}
            <div className="text-section lg:w-1/2">
            <h2 className="text-blue-900 text-3xl font-bold mb-4">How it works</h2>
            <p className="text-blue-900 text-lg mb-8">
                Investing with us is easy, transparent, & completely online!
            </p>
            <div className="steps">
                <div className="step mb-6">
                <h3 className="text-yellow-600 text-xl font-bold">INVEST</h3>
                <p className="text-blue-900">
                    Invest in high-yield, Grade-A commercial assets.
                </p>
                </div>
                <div className="step mb-6">
                <h3 className="text-blue-900 text-xl font-bold">EARN</h3>
                <p className="text-blue-900">
                    Earn a passive income while building long-term wealth.
                </p>
                </div>
                <div className="step mb-6">
                <h3 className="text-blue-900 text-xl font-bold">TRACK</h3>
                <p className="text-blue-900">
                    Track your portfolio performance and get regular updates.
                </p>
                </div>
                <div className="step">
                <h3 className="text-blue-900 text-xl font-bold">SELL</h3>
                <p className="text-blue-900">
                    Make a profitable exit with our liquidity options.
                </p>
                </div>
            </div>
            </div>

            {/* Image Section */}
            <div className="image-section lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="phone-mockup relative">
                <img
                src="https://via.placeholder.com/250x500"
                alt="Phone Mockup"
                className="w-60"
                />
                <p className="text-sm text-center text-blue-900 mt-4">
                All assets undergo a multi-level qualification process to get you
                the best return possible.
                </p>
            </div>
            </div>
        </div>
        </div>
        <InvestmentOptions/>
        <RecentOpportunities/>
        <OurBackers/>
    </>
  );
}

export default HowItWorks;
