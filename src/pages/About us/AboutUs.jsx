import React from "react";
import OurBackers from "../../components/OurBankers";



const AboutUsBanner = () => {
  return (
    <div className="relative bg-cover bg-center py-12" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Section */}
        <div className="text-white lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg font-light mb-6">
            Sanctum was born from the powerful idea to democratize commercial
            real estate investing and unlock value for investors, at scale.
          </p>
          <a
            href="/invest"
            className="bg-white text-blue-900 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200 transition"
          >
            sanctum Investing
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <iframe
            className="w-full h-64 lg:h-96 rounded-md shadow"
            src="https://www.youtube.com/embed/example" // Replace 'example' with actual YouTube video ID
            title="Sanctum's Amazing Journey"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const VisionMissionValues = () => {
    const cards = [
      {
        title: "Vision",
        description:
          "To be the premier realty investment platform in India. Simplify access to lucrative investment opportunities, and generate long term value for our investors and stakeholders.",
        backgroundImage: "url('https://via.placeholder.com/600x400')", // Replace with actual background URL
      },
      {
        title: "Mission",
        description:
          "To disrupt the real estate industry, usher in a data-driven, tech transformation towards a paperless, accessible, and transparent ecosystem.",
        backgroundImage: "url('https://via.placeholder.com/600x400')", // Replace with actual background URL
      },
      {
        title: "Values",
        description:
          "We are driven by the following values:\n\n" +
          "Ethics driven: Honesty and transparency at every stage.\n\n" +
          "Investor-centric: Create value for investors.\n\n" +
          "Quality focused: Our attention to detail and thoroughness define us.",
        backgroundImage: "url('https://via.placeholder.com/600x400')", // Replace with actual background URL
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-lg shadow-lg text-white"
              style={{
                backgroundImage: card.backgroundImage,
              }}
            >
              <div className="absolute inset-0 bg-blue-900 opacity-70 rounded-lg"></div>
              <div className="relative p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm whitespace-pre-line">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const GlimpseLifeStrata = () => {
    const glimpseData = [
      {
        title: "Offsite - 2022",
        imageUrl: "https://via.placeholder.com/600x400", // Replace with actual image URL
      },
      {
        title: "Women's Day - 2022",
        imageUrl: "https://via.placeholder.com/600x400", // Replace with actual image URL
      },
      {
        title: "Team Celebration",
        imageUrl: "https://via.placeholder.com/600x400", // Replace with actual image URL
      },
    ];
  
    return (
      <div className="bg-blue-900 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Section Title */}
          <h2 className="text-center text-white text-4xl font-bold mb-8">
            A Glimpse into Life<span className="text-orange-400">@Sanctum</span>
          </h2>
  
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {glimpseData.map((item, index) => (
              <div
                key={index}
                className="bg-blue-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const teamData = [
    {
      name: "Sudharshan Lodha",
      position: "Co-Founder and CEO",
      imageUrl: "https://via.placeholder.com/150", // Replace with the actual image URL
      linkedIn: "https://www.linkedin.com/in/sudharshanlodha", // Replace with actual LinkedIn URL
    },
    {
      name: "Priyanka Rathore",
      position: "Co-Founder and COO",
      imageUrl: "https://via.placeholder.com/150", // Replace with the actual image URL
      linkedIn: "https://www.linkedin.com/in/priyankarathore", // Replace with actual LinkedIn URL
    },
    {
      name: "Nihar Shah",
      position: "Head Of Investments",
      imageUrl: "https://via.placeholder.com/150", // Replace with the actual image URL
      linkedIn: "https://www.linkedin.com/in/niharshah", // Replace with actual LinkedIn URL
    },
    {
      name: "Ankit Shah",
      position: "Head Of Marketing",
      imageUrl: "https://via.placeholder.com/150", // Replace with the actual image URL
      linkedIn: "https://www.linkedin.com/in/ankitshah", // Replace with actual LinkedIn URL
    },
    {
      name: "Saloni Doshi",
      position: "Chief Of Staff",
      imageUrl: "https://via.placeholder.com/150", // Replace with the actual image URL
      linkedIn: "https://www.linkedin.com/in/salonidoshi", // Replace with actual LinkedIn URL
    },
  ];
  
  const OurTeam = () => {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Section Header */}
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
            Our Team
          </h2>
  
          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative"
              >
                {/* Profile Image */}
                <div className="w-full h-40 bg-gray-200">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
  
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4"
                >
                  <img
                    src="https://via.placeholder.com/20" // Replace with LinkedIn icon URL
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const JoinUsSection = () => {
    return (
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-20 relative">
          {/* Background */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-blue-900"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 0.9,
                backgroundImage: "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
  
          {/* Content */}
          <div className="relative bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between border-l-4 border-yellow-500">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Interested to join us?
              </h2>
              <p className="text-gray-600">
                Explore opportunities and be a part of our journey!
              </p>
            </div>
  
            <div className="lg:w-1/3 flex justify-end mt-6 lg:mt-0">
              <a
                href="#"
                className="bg-blue-900 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-800"
              >
                Explore Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
const AboutUs = () => {
  return (
    <>
    <AboutUsBanner />
    <VisionMissionValues/>
    <GlimpseLifeStrata/>
    <OurTeam/>
    <OurBackers/>
    <JoinUsSection/>
    </>
  )
};

export default AboutUs;
