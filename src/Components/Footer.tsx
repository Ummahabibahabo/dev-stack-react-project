import React from "react";
import LogoImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-200 bg-white mt-10 py-5">
      <div className="container mx-auto px-20 py-10 ">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="md:col-span-2">
            <img src={LogoImg} alt="Dev Stack" className="w-28" />

            <p className="text-sm text-gray-400 leading-6 mt-4 max-w-md">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex gap-5 mt-5 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-pink-500">
                  GitHub
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500">
                  Twitter
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              PRODUCT
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Technologies</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-4">
              COMPANY
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-12 pt-7 flex justify-between">
          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
