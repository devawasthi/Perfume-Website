import { Link } from "react-router-dom";
import React from "react";
import perfumeLogo from "../assets/perfume-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-purple-900 to-cyan-400 p-6 shadow-md">
      <div className="container mx-auto flex flex-col items-center">

        {/* Logo & Title */}
        <div className="flex flex-col items-center">
          <img src={perfumeLogo} alt="Allure Perfumery Logo" className="h-16 mb-2" />
          <h1 className="text-white text-3xl font-bold font-[Playfair Display] tracking-wide">
            ALLURE PERFUMERY
          </h1>
          <p className="text-white text-sm uppercase tracking-wider">
            Every Scent Tells a Story
          </p>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4">
          <li><Link to="/" className="text-white uppercase tracking-widest hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-white uppercase tracking-widest hover:underline">About</Link></li>
          <li><Link to="/contact" className="text-white uppercase tracking-widest hover:underline">Contact</Link></li>
          <Link to="/cart" className="text-white uppercase tracking-widest hover:underline flex items-center">
              <AiOutlineShoppingCart className="text-2xl mr-1" /> CART
            </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
