import React from "react";




const NotAnInvestor = () => {
    return (
      <div className="bg-blue-900 text-white py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Not an Investor?</h2>
          <p className="text-lg font-light">
            Our teams stand ready to help!
          </p>
        </div>
        <div className="flex justify-center space-x-10">
          <div className="bg-white text-center text-blue-900 rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Partner Icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold">Become A Partner</h3>
            <p className="text-sm mt-2">
              If you are a distributor/financial advisor/broker etc., and you
              would like to partner with us.
            </p>
            <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md">
              Sign up
            </button>
          </div>
          <div className="bg-white text-center text-blue-900 rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Seller Icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold">Become A Seller</h3>
            <p className="text-sm mt-2">
              If you are a developer interested in liquidating your property.
            </p>
            <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  };

  const HelpWithInvestment = () => {
    return (
      <div className="flex justify-between items-center bg-gradient-to-r from-white via-white to-yellow-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900">
          Need help with your investment?
        </h2>
        <div className="flex space-x-6">
          <div className="flex items-center bg-white border border-yellow-400 rounded-md px-6 py-4 shadow-md">
            <img
              src="https://via.placeholder.com/40"
              alt="Support Icon"
              className="mr-4"
            />
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Raise a support ticket
              </h3>
            </div>
          </div>
          <div className="flex items-center bg-white border border-yellow-400 rounded-md px-6 py-4 shadow-md">
            <img
              src="https://via.placeholder.com/40"
              alt="Email Icon"
              className="mr-4"
            />
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


const features = [
  {
    id: 1,
    title: "Start your investment journey by signing-up.",
    buttonText: "Sign Up",
    icon: "https://via.placeholder.com/50", // Replace with the golden arrow icon URL
    link: "/signup", // Update with actual URL
  },
  {
    id: 2,
    title: "Read our FAQs to learn more about how Strata works.",
    buttonText: "FAQs",
    icon: "https://via.placeholder.com/50", // Replace with the golden question mark icon URL
    link: "/faqs", // Update with actual URL
  },
  {
    id: 3,
    title: "Visit the 'About Us' page to learn more about our story and our people.",
    buttonText: "About Us",
    icon: "https://via.placeholder.com/50", // Replace with the golden handshake icon URL
    link: "/about-us", // Update with actual URL
  },
];

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
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="bg-yellow-400 rounded-full p-4 mb-4">
                <img
                  src={feature.icon}
                  alt="Feature Icon"
                  className="w-10 h-10"
                />
              </div>
              {/* Title */}
              <p className="text-blue-900 mb-4">{feature.title}</p>
              {/* Button */}
              <a
                href={feature.link}
                className="px-6 py-2 bg-white text-blue-900 border border-blue-900 rounded shadow hover:bg-blue-900 hover:text-white transition"
              >
                {feature.buttonText}
              </a>
            </div>
          ))}
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
