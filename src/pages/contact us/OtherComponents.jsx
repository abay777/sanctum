import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faInfoCircle ,faEnvelope,
   faTicketAlt , faHandshake, faBuilding 
  ,faArrowRight, faUsers 
  , faQuestionCircle} from "@fortawesome/free-solid-svg-icons";


const NotAnInvestor = () => {
  return (
    <div className="bg-blue-900 text-white py-10">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Not an Investor?</h2>
        <p className="text-lg font-light">Our teams stand ready to help!</p>
      </div>

      {/* Options */}
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Become A Partner */}
        <div className="bg-white text-center text-blue-900 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-yellow-500 text-4xl"
            />
          </div>
          <h3 className="text-xl font-bold">Become A Partner</h3>
          <p className="text-sm mt-2">
            If you are a distributor/financial advisor/broker etc., and you
            would like to partner with us.
          </p>
          <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Sign up
          </button>
        </div>

        {/* Become A Seller */}
        <div className="bg-white text-center text-blue-900 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-yellow-500 text-4xl"
            />
          </div>
          <h3 className="text-xl font-bold">Become A Seller</h3>
          <p className="text-sm mt-2">
            If you are a developer interested in liquidating your property.
          </p>
          <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};






  
  const HelpWithInvestment = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-white via-white to-yellow-100 p-6 rounded-lg shadow-lg space-y-6 md:space-y-0">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-900">
          Need help with your investment?
        </h2>
        
        {/* Support and Contact Options */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {/* Raise a Support Ticket */}
          <div className="flex items-center bg-white border border-yellow-400 rounded-md px-6 py-4 shadow-md">
            <FontAwesomeIcon icon={faTicketAlt} className="text-yellow-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Raise a support ticket
              </h3>
            </div>
          </div>
          
          {/* Contact Us on Email */}
          <div className="flex items-center bg-white border border-yellow-400 rounded-md px-6 py-4 shadow-md">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Contact us on Email
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  


const locations = [
    {
      city: "Bengaluru (HQ)",
      address:
        "6/1-1, Museum Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      icon: "https://via.placeholder.com/50", // Replace with actual icon URL
    },
    {
      city: "Mumbai",
      address:
        "Parinee Crescenzo 10th Floor - B Wing Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      icon: "https://via.placeholder.com/50", // Replace with actual icon URL
    },
    {
      city: "Pune",
      address:
        "6th Floor, The Kode, Baner-Pashan Link Road, Pune, Maharashtra 411021",
      icon: "https://via.placeholder.com/50", // Replace with actual icon URL
    },
    {
      city: "Gurgaon",
      address:
        "06th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram 122002",
      icon: "https://via.placeholder.com/50", // Replace with actual icon URL
    },
  ];
  
  const OurLocations = () => {
    return (
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Locations
          </h2>
  
          {/* Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md border border-gray-200 rounded-lg p-6"
                style={{
                  borderTop: "4px solid #FFC107", // Golden border
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mr-6">
                  <img
                    src={location.icon}
                    alt={`${location.city} Icon`}
                    className="w-16 h-16 rounded-full border-2 border-yellow-400"
                  />
                </div>
  
                {/* Details */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {location.city}
                  </h3>
                  <p className="text-gray-600 text-sm">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  const LookingForSomethingElse = () => {
    return (
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Looking for something else?
          </h2>
  
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 rounded-full p-4 px-5 mb-4 h-auto w-auto">
                <FontAwesomeIcon icon={faArrowRight} className="text-white text-1xl" />
              </div>
              <p className="text-blue-900 mb-4">
                Start your investment journey by signing-up.
              </p>
              <a
                href="/signup"
                className="px-6 py-2 bg-white text-blue-900 border border-blue-900 rounded shadow hover:bg-blue-900 hover:text-white transition"
              >
                Sign Up
              </a>
            </div>
  
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 rounded-full p-3 px-4 w-auto h-auto mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-white text-2xl" />
              </div>
              <p className="text-blue-900 mb-4">
                Read our FAQs to learn more about how Sanctum works.
              </p>
              <a
                href="/faqs"
                className="px-6 py-2 bg-white text-blue-900 border border-blue-900 rounded shadow hover:bg-blue-900 hover:text-white transition"
              >
                FAQs
              </a>
            </div>
  
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 rounded-full p-4 mb-4">
                <FontAwesomeIcon icon={faHandshake} className="text-white text-2xl" />
              </div>
              <p className="text-blue-900 mb-4">
                Visit the 'About Us' page to learn more about our story and our people.
              </p>
              <a
                href="/about-us"
                className="px-6 py-2 bg-white text-blue-900 border border-blue-900 rounded shadow hover:bg-blue-900 hover:text-white transition"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
 
  
  


  
const OtherComponents = () => {
  return (
    <>
    <HelpWithInvestment/>
    <NotAnInvestor/>
    <OurLocations/>
    <LookingForSomethingElse/>
    </>
  )
};

export default OtherComponents;
