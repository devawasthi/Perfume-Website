import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturedProducts from "../components/FeaturedProducts";
import PerfumeDisplay from "../assets/perfume-shop.png"; // Import the image

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-charcoal-900 to-plum-800 min-h-screen flex flex-col items-center text-center text-ivory-200 overflow-hidden">
      {/* Background Layer for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-900 opacity-50"></div>

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 flex flex-col items-center mt-32"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-6xl font-bold font-[Inter] text-gold-500 mb-4">
          Every Scent Tells a Story
        </h1>
        <motion.p 
          className="text-xl text-ivory-200/80 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Discover fragrances that define you. Explore our curated collection of niche and designer perfumes, crafted to evoke emotion and elegance.
        </motion.p>
      </motion.div>

      {/* Perfume Display Image */}
      <motion.img
        src={PerfumeDisplay}
        alt="Luxury Perfume Collection"
        className="relative z-10 mt-12 w-full max-w-4xl rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />

      {/* CTA Button */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1 }}
      >
        <Link to="/products">
          <button className="mt-8 px-8 py-3 bg-gold-500 text-charcoal-900 rounded-full shadow-lg hover:bg-gold-600 transition-all transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </motion.div>

      {/* Featured Products Section */}
      <div className="relative z-10 w-full mt-24 flex justify-center">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
