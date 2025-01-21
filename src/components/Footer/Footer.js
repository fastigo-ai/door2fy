import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-sora">
      <div className="container mx-auto flex flex-wrap justify-start items-start gap-6">
        {/* Company Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 text-left pb-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/aboutus" className="hover:text-cyan-500">About Us</Link></li>
            <li><Link to="/terms-of-services" className="hover:text-cyan-500">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-cyan-500">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-cyan-500">Anti-Discrimination Policy</Link></li>
            <li><Link to="/" className="hover:text-cyan-500">UC Impact</Link></li>
            <li><Link to="/" className="hover:text-cyan-500">Careers</Link></li>
          </ul>
        </div>

        {/* For Customers Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 text-left pb-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">For Customers</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/refundable-policy" className="hover:text-cyan-500">Refundable Policy</Link></li>
            <li><Link to="/" className="hover:text-cyan-500">Categories Near You</Link></li>
            <li><Link to="/blog" className="hover:text-cyan-500">Blog</Link></li>
            <li><Link to="/contactUs" className="hover:text-cyan-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* For Partners Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 text-left pb-8 border-b border-gray-100">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">For Partners</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/register-as-professional" className="hover:text-cyan-500">Register as a Professional</Link></li>
          </ul>
        </div>
        <div className=""></div>
        {/* Social Links and App Downloads Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mx-8 ">
          {/* <h3 className="text-lg font-bold text-cyan-500 mb-4 text-left">Social Links</h3> */}
          <div className="flex justify-center sm:justify-start gap-4 mb-6 ">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
              <CiFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500">
              <FiTwitter className="text-2xl" />
            </a>
          </div>

          <h3 className="text-lg font-bold text-cyan-500 mb-4">Download Our App</h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://appstore.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/Appstore.webp" alt="App Store" className="w-32 border-2 border-white rounded hover:scale-105 transition-transform" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/GooglePlay.webp" alt="Google Play" className="w-32 border-2 border-white rounded hover:scale-105 transition-transform" />
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
