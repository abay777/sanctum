import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h4 className="font-bold mb-4 text-yellow-500">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/properties" className="hover:text-yellow-300">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-yellow-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-300">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/strata-blue" className="hover:text-yellow-300">
                Blue
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="font-bold mb-4 text-yellow-500">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/faqs" className="hover:text-yellow-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/ebooks" className="hover:text-yellow-300">
                E-Books
              </Link>
            </li>
            <li>
              <Link to="/infographics" className="hover:text-yellow-300">
                Infographics
              </Link>
            </li>
          </ul>
        </div>

        {/* Investment Options Section */}
        <div>
          <h4 className="font-bold mb-4 text-yellow-500">Investment Options</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/strata-fip" className="hover:text-yellow-300">
                FIP
              </Link>
            </li>
            <li>
              <Link to="/strata-edge" className="hover:text-yellow-300">
                Edge
              </Link>
            </li>
            <li>
              <Link to="/strata-growth" className="hover:text-yellow-300">
                Growth
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-bold mb-4 text-yellow-500">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/terms-and-conditions" className="hover:text-yellow-300">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-yellow-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/risk-disclosure" className="hover:text-yellow-300">
                Risk Disclosure
              </Link>
            </li>
            <li>
              <Link to="/annual-return-fy-21-22" className="hover:text-yellow-300">
                Annual Return FY 21-22
              </Link>
            </li>
            <li>
              <Link to="/annual-return-fy-22-23" className="hover:text-yellow-300">
                Annual Return FY 22-23
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social and App Links */}
      <div className="container mx-auto mt-8 flex justify-between items-center">
        {/* Social Links */}
        <div className="flex space-x-4">
          <Link to="https://facebook.com" target="_blank">
            <i className="fab fa-facebook text-yellow-500"></i>
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <i className="fab fa-instagram text-yellow-500"></i>
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <i className="fab fa-twitter text-yellow-500"></i>
          </Link>
          <Link to="https://linkedin.com" target="_blank">
            <i className="fab fa-linkedin text-yellow-500"></i>
          </Link>
          <Link to="https://youtube.com" target="_blank">
            <i className="fab fa-youtube text-yellow-500"></i>
          </Link>
        </div>

        {/* App Links */}
        <div className="flex space-x-4">
          <img src="https://investor.strataprop.com/assets/Icons/apple_store.svg" alt="Download on the App Store" />
          <img src="https://investor.strataprop.com/assets/Icons/android_play_store.svg" alt="Get it on Google Play" />
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
