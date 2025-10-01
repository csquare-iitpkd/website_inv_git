import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLocationDot, FaThumbtack, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // Main footer container with a dark background
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top section with centered text on mobile and left-aligned on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Section 2: Useful Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            {/* The list items are centered on mobile and left-aligned on larger screens */}
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <FaThumbtack className="text-yellow-400 mr-3" />
                <a href="https://cfbs.iitpkd.ac.in" className="hover:text-yellow-400 transition-colors duration-300">
                  Online Job Request
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400 mr-3" />
                <a href="mailto:csquare@iitpkd.ac.in" className="hover:text-yellow-400 transition-colors duration-300">
                  csquare@iitpkd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Us (Main Campus) */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p>Indian Institute of Technology Palakkad,</p>
            <p>Nila Campus, Kanjikode West P.O,</p>
            <p>Palakkad, Kerala - 678623</p>
            <a 
              href="https://maps.app.goo.gl/m7sA2tLSSEb4eUE76" // Using a real Google Maps link
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaLocationDot size="1.2em" />
            </a>
          </div>

          {/* Section 4: Contact Us (Innovation Centre) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Innovation Centre</h3>
            <p>C06/ Room No 003</p>
            <p>Permanent campus</p>
            <p>IIT Palakkad, Kerala - 678623</p>
            <a 
              href="https://maps.app.goo.gl/9DqjYkF6fL3aE8cQ9" // Using a real Google Maps link
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaLocationDot size="1.2em" />
            </a>
          </div>

        </div>

        {/* Divider and Centered Social Media Icons */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex justify-center items-center">
          <div className="flex space-x-6">
            <a href="mailto:csquare@iitpkd.ac.in" className="text-gray-400 hover:text-white transition-colors duration-300"><FaEnvelope size="1.4em" /></a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaInstagram size="1.4em" /></a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaYoutube size="1.4em" /></a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaLinkedin size="1.4em" /></a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300"><FaTwitter size="1.4em" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright info */}
      <div className="bg-black py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Indian Institute of Technology Palakkad. All Rights Reserved. Managed by ananthu@iitpkd.ac.in
        </p>
      </div>
    </footer>
  );
};

export default Footer;

