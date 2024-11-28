import React from "react";

function StrataAdvantage() {
  return (
    <div className="strata-advantage-section bg-blue-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Strata Advantage</h2>
        <p className="text-white text-lg mb-12">
          Strata investors get exclusive access to our curated opportunities and
          enjoy a range of advantages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Data-Driven */}
          <div className="advantage-item text-white">
            <div className="icon bg-yellow-400 rounded-lg mx-auto p-4 w-16 h-16 flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Data Driven Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Data-Driven</h3>
            <p className="text-sm">
              We leverage data and on-the-ground experience to identify and list
              only the best opportunities.
            </p>
          </div>

          {/* Complete Transparency */}
          <div className="advantage-item text-white">
            <div className="icon bg-yellow-400 rounded-lg mx-auto p-4 w-16 h-16 flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Transparency Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Complete Transparency</h3>
            <p className="text-sm">
              Our investment process is completely transparent and comes with
              detailed reporting at every step of the way.
            </p>
          </div>

          {/* End to End Management */}
          <div className="advantage-item text-white">
            <div className="icon bg-yellow-400 rounded-lg mx-auto p-4 w-16 h-16 flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="End to End Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">End to End Management</h3>
            <p className="text-sm">
              We manage the asset from acquisition to exit. Investors enjoy a
              hands-off investment experience.
            </p>
          </div>

          {/* Fully Digital Experience */}
          <div className="advantage-item text-white">
            <div className="icon bg-yellow-400 rounded-lg mx-auto p-4 w-16 h-16 flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Digital Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">Fully Digital Experience</h3>
            <p className="text-sm">
              Investing with Strata is completely online, no physical paperwork.
              Invest and track your portfolio anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrataAdvantage;
