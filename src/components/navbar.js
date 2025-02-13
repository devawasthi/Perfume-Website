import { Link } from "react-router-dom";
import React from "react";
import perfumeLogo from "../assets/perfume-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-charcoal-900 to-plum-800 p-6 shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo & Title */}
        <div className="flex flex-col items-center">
          <img src={perfumeLogo} alt="Allure Perfumery Logo" className="h-16 mb-2" />
          <h1 className="text-gold-500 text-3xl font-bold font-[Inter] tracking-wide">
            ALLURE PERFUMERY
          </h1>
          <p className="text-ivory-200 text-sm uppercase tracking-wider">
            Every Scent Tells a Story
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4">
          <li>
            <Link 
              to="/" 
              className="text-ivory-200 uppercase tracking-widest hover:text-gold-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-ivory-200 uppercase tracking-widest hover:text-gold-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-ivory-200 uppercase tracking-widest hover:text-gold-500 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="text-ivory-200 uppercase tracking-widest hover:text-gold-500 transition-colors flex items-center"
            >
              <AiOutlineShoppingCart className="text-2xl mr-1" /> Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;