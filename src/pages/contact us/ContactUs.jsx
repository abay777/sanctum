const ContactUsBanner = () => {
    return (
      <div className="contact-us-banner bg-blue-900 text-white flex items-center justify-between px-12 py-16">
        {/* Text Section */}
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have some questions or feedback you wish to share? Want to partner
            with us? Reach out!
          </p>
        </div>
  
        {/* Illustration Section */}
        <div>
          <img
            src="https://via.placeholder.com/500x300" // Replace with the actual illustration link
            alt="Contact Us Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  };

  import React from "react";
import OtherComponents from "./OtherComponents";
  
  const ContactUs = () => {
    return (
        <>
        <ContactUsBanner />
        <OtherComponents/>
        </>
    )
  };
  
  export default ContactUs;
  