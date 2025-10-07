import React from "react";
import { FaEnvelope, FaLocationDot, FaThumbtack, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // Main footer container with a darker gray background
    <footer className="bg-gray-400 text-gray-900 font-sans">
      {/* The "py-12" class was changed to "pt-12 pb-8" to reduce the bottom padding.
        This closes the gap above the copyright bar.
      */}
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Grid layout for the footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Section 2: Useful Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-black mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <FaThumbtack className="text-gray-800 mr-3" />
                <a href="https://cfbs.iitpkd.ac.in" className="hover:text-black transition-colors duration-300">
                  Online Job Request
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-gray-800 mr-3" />
                <a href="mailto:csquare@iitpkd.ac.in" className="hover:text-black transition-colors duration-300">
                  csquare@iitpkd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Us (Main Campus) */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-black mb-4">Innovation Centre</h3>
            <p>Agora Block</p>
            <p>Nila Campus, Kanjikode West P.O,</p>
            <p>IIT Palakkad, Kerala - 678623</p>
            <a 
              href="https://www.google.com/maps?q=Indian+Institute+of+Technology+Palakkad"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaLocationDot size="1.2em" />
            </a>
          </div>

          {/* Section 4: Contact Us (Innovation Centre) */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Innovation Centre</h3>
            <p>C06/ Room No 003</p>
            <p>Verghese Kurien Block (C06 Block)</p>
            <p>IIT Palakkad, Kerala - 678623</p>
            <a 
              href="https://www.google.com/maps?q=Indian+Institute+of+Technology+Palakkad"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaLocationDot size="1.2em" />
            </a>
          </div>

        </div>

        {/* Divider and Centered Social Media Icons */}
        <div className="mt-4 pt-3 border-t border-gray-500 flex justify-center items-center">
          <div className="flex space-x-6">
            <a href="mailto:csquare@iitpkd.ac.in" className="text-gray-700 hover:text-black transition-colors duration-300"><FaEnvelope size="1.4em" /></a>
            <a href="https://instagram.com" className="text-gray-700 hover:text-black transition-colors duration-300"><FaInstagram size="1.4em" /></a>
            <a href="https://youtube.com" className="text-gray-700 hover:text-black transition-colors duration-300"><FaYoutube size="1.4em" /></a>
            <a href="https://linkedin.com" className="text-gray-700 hover:text-black transition-colors duration-300"><FaLinkedin size="1.4em" /></a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-black transition-colors duration-300"><FaTwitter size="1.4em" /></a>
          </div>
        </div>
      </div>
      {/* Bottom bar with copyright info */}
      <div className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Indian Institute of Technology Palakkad. All Rights Reserved. Managed by ananthu@iitpkd.ac.in
        </p>
      </div>
    </footer>
  );
};

export default Footer;

