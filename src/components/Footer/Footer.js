import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-sora">
      <div className="container md:w-3/4 mx-auto lg:w-full text-left text-wrap mb-8">
        <p className="text-md mb-4 ">100% Purely Bhartiya Brand 
          <ReactCountryFlag
                countryCode="IN"
                svg
                style={{
                    width: '1.5em',
                    height: '1.5em',
                }}
                className="mx-2 "
                title="US"
            /></p>
        <p className="text-2xl mb-4"> We Are Live In 48 Cities</p>
        <p className="text-sm flex flex-wrap justify-start items-start gap-2">
          <span className="px-2">Agra</span>|<span className="px-2">Ahmedabad</span>|<span className="px-2">Aligarh</span>|
          <span className="px-2">Amritsar</span>|<span className="px-2">Bareilly</span>|<span className="px-2">Bengaluru</span>|
          <span className="px-2">Bhagalpur</span>|<span className="px-2">Bhopal</span>|<span className="px-2">Bhubaneswar</span>|
          <span className="px-2">Chandigarh</span>|<span className="px-2">Cuttack</span>|<span className="px-2">Dehradun</span>|
          <span className="px-2">Delhi</span>|<span className="px-2">Faridabad</span>|<span className="px-2">Gandhi Nagar</span>|
          <span className="px-2">Ghaziabad</span>|<span className="px-2">Gorakhpur</span>|<span className="px-2">Greater Noida</span>|
          <span className="px-2">Gurugram</span>|<span className="px-2">Gwalior</span>|<span className="px-2">Haridwar</span>|
          <span className="px-2">Haldwani</span>|<span className="px-2">Hyderabad</span>|<span className="px-2">Indore</span>|
          <span className="px-2">Jabalpur</span>|<span className="px-2">Jaipur</span>|<span className="px-2">Jhansi</span>|
          <span className="px-2">Kanpur</span>|<span className="px-2">Lucknow</span>|<span className="px-2">Ludhiana</span>|
          <span className="px-2">Meerut</span>|<span className="px-2">Mohali</span>|<span className="px-2">Moradabad</span>|<span className="px-2">Mumbai</span>|
          <span className="px-2">Mysuru</span>|<span className="px-2">Nagpur</span>|<span className="px-2">Noida</span>|<span className="px-2">Patna</span>|
          <span className="px-2">Panchkula</span>|<span className="px-2">Prayagraj</span>|<span className="px-2">Pune</span>|<span className="px-2">Raipur</span>|
          <span className="px-2">Roorkee</span>|<span className="px-2">Rudrapur</span>|<span className="px-2">Tirupati</span>|<span className="px-2">Ujjain</span>|
          <span className="px-2">Varanasi</span>|<span className="px-2">Vijayawada</span>|<span className="px-2">Zirakpur</span>|<span className="px-2">New Delhi</span>
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-start items-start gap-6">
        {/* Company Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 text-left pb-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about-us" className="hover:text-cyan-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:text-cyan-500">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-cyan-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/anti-discrimation-policy"
                className="hover:text-cyan-500"
              >
                Anti-Discrimination Policy
              </Link>
            </li>
            {/* <li>
              <Link to="/ComingSoon" className="hover:text-cyan-500">
                UC Impact
              </Link>
            </li>
            <li>
              <Link to="/ComingSoon" className="hover:text-cyan-500">
                Careers
              </Link>
            </li> */}
          </ul>
        </div>

        {/* For Customers Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 text-left pb-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">
            For Customers
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/refund-policy" className="hover:text-cyan-500">
                Refundable Policy
              </Link>
            </li>
            {/* <li>
              <Link to="/" className="hover:text-cyan-500">
                Categories Near You
              </Link>
            </li> */}
            {/* <li>
              <Link to="/ComingSoon" className="hover:text-cyan-500">
                Blog
              </Link>
            </li> */}
            <li>
              <Link to="/contact-us" className="hover:text-cyan-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* For Partners Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 text-left pb-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">For Partners</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/ComingSoon" className="hover:text-cyan-500">
                Register as a Professional
              </Link>
            </li>
          </ul>
        </div>
        <div className=""></div>
        {/* Social Links and App Downloads Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 ">
          {/* <h3 className="text-lg font-bold text-cyan-500 mb-4 text-left">Social Links</h3> */}
          <div className="flex justify-center gap-4 mb-6 ">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <CiFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FiTwitter className="text-2xl" />
            </a>
          </div>

          <h3 className="text-lg font-bold text-cyan-500 mb-4">
            Download Our App
          </h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://appstore.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/Appstore.webp"
                alt="App Store"
                className="w-32 border-2 border-white rounded hover:scale-105 transition-transform"
              />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/GooglePlay.webp"
                alt="Google Play"
                className="w-32 border-2 border-white rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© Copyright 2024 Doorfy All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
