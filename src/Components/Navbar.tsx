import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import LogoImg from "../assets/logo-text.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenuButton = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="relative sticky top-0 z-50 bg-white ">
      {/* Main Navbar */}
      <div className="flex items-center justify-between h-[74px] ">
        {/* Mobile Hamburger */}
        <button
          onClick={handleMenuButton}
          className="md:hidden text-3xl text-[#64748B]"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Logo */}
        <img src={LogoImg} alt="DevStack" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-[14px] text-[#475569] font-medium">
          <li className="text-[#DB2777]  cursor-pointer">Home</li>

          <li className="cursor-pointer">Technologies</li>

          <li className="cursor-pointer">Projects</li>

          <li className="cursor-pointer">About</li>

          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Sign In / Sign Up */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="font-medium text-[14px] text-[#334155]">
            Sign In
          </button>

          <button className="px-4 md:px-5 py-2 bg-[#D91B7E] rounded-2xl text-[14px] text-white font-semibold">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute w-full bg-white shadow-md  md:hidden">
          <ul className="flex flex-col items-center gap-5 py-6 text-[14px] text-[#475569] font-medium">
            <li className="text-[#DB2777] cursor-pointer">Home</li>

            <li className="cursor-pointer">Technologies</li>

            <li className="cursor-pointer">Projects</li>

            <li className="cursor-pointer">About</li>

            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
