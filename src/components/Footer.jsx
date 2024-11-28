import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 - Company */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Company</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Properties</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Strata Blue</a></li>
            </ul>
          </div>

          {/* Column 2 - Resources */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Resources</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">E-Books</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Infographics</a></li>
            </ul>
          </div>

          {/* Column 3 - Investment Options */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Investment Options</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Strata FIP</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Strata Edge</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Strata Growth</a></li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500">Legal</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Risk Disclosure</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Annual Return FY 21-22</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Annual Return FY 22-23</a></li>
            </ul>
          </div>

          {/* Social & Apps */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4 space-x-4">
              <a href="#" className="hover:opacity-75"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="hover:opacity-75"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="hover:opacity-75"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="hover:opacity-75"><i className="fab fa-linkedin-in text-xl"></i></a>
              <a href="#" className="hover:opacity-75"><i className="fab fa-youtube text-xl"></i></a>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <img src="https://via.placeholder.com/150x50" alt="App Store" className="h-10" />
              <img src="https://via.placeholder.com/150x50" alt="Google Play" className="h-10" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white opacity-50 my-6"></div>

        {/* Bottom Section */}
        <div className="text-sm text-center md:text-left">
          <p className="mb-2">
            Strataprop.com is a website operated by Strata Property Management Private Limited ("Strata")...
          </p>
          <p className="mb-0">
            &copy; 2019-2024 Strata Property Management Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
