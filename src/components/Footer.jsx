import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-5">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  " style={{marginTop:'10px'}}>
        {/* Company Section */}
        <div>
          <div className="space-y-2 flex flex-col items-start">
            <h4 className="font-bold mb-4 text-yellow-500">Company</h4>
            <Link to="/properties" className="hover:text-yellow-300">
              Properties
            </Link>
            <Link to="/about-us" className="hover:text-yellow-300">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-yellow-300">
              Contact Us
            </Link>
       
          </div>
        </div>

        {/* Resources Section */}
        {/* <div>
          <div className="space-y-2 flex flex-col items-start">
            <h4 className="font-bold mb-4 text-yellow-500">Resources</h4>
            <Link to="/faqs" className="hover:text-yellow-300">
              FAQs
            </Link>
          
          </div>
        </div> */}

        {/* Investment Options Section */}
        <div>
          <div className="space-y-2 flex flex-col items-start">
            <h4 className="font-bold mb-4 text-yellow-500">Investment Options</h4>
            <Link to="/strata-fip" className="hover:text-yellow-300">
              FIP
            </Link>
            <Link to="/strata-edge" className="hover:text-yellow-300">
              Edge
            </Link>
            <Link to="/strata-growth" className="hover:text-yellow-300">
              Growth
            </Link>
          </div>
        </div>

        {/* Legal Section */}
        <div>
          <div className="space-y-2 flex flex-col items-start">
            <h4 className="font-bold mb-4 text-yellow-500">Legal</h4>
            <Link to="/privacy-policy" className="hover:text-yellow-300">
              Terms and Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-yellow-300">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-yellow-300">
              Risk Disclosure
            </Link>
        
          </div>
        </div>
      </div>

      {/* Social and App Links */}
      <div className="container mx-auto mt-8 flex justify-between items-center">
        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="text-white hover:text-yellow-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-yellow-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-yellow-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:text-yellow-300" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-yellow-300" />
          </a>
        </div>

        {/* App Links */}
        <div className="flex space-x-4">
          <img
            src="https://investor.strataprop.com/assets/Icons/apple_store.svg"
            alt="Download on the App Store"
          />
          <img
            src="https://investor.strataprop.com/assets/Icons/android_play_store.svg"
            alt="Get it on Google Play"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-6 text-sm text-gray-400">
        <p>
          © 2019-2024 Property Management Private Limited. All Rights Reserved.
        </p>
        <p className="mt-2">
          Powered by <strong>AWS</strong> | RERA Registered
        </p>
      </div>
    </footer>
  );
};

export default Footer;
