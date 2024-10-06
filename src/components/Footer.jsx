import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <a href="/resume/123" className="text-white font-bold text-2xl">
              <span className="text-purple-500">NirmanAI</span>
            </a>
          </div>

          {/* About Us */}
          <div className="text-center md:text-left max-w-lg">
            <h4 className="text-xl font-semibold text-purple-500 mb-2">About Us</h4>
            <p className="text-sm text-gray-500">
              NirmanAI is a cutting-edge AI solutions provider, helping content writters harness the power of artificial intelligence to achieve innovation and excellence. Our team of experts is dedicated to creating transformative technology solutions.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} NirmanAI. All rights reserved by Priyanshu Valiya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
