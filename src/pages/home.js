import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeaturedProducts from "../components/FeaturedProducts"; // Import carousel

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-charcoal-900 to-plum-800 min-h-screen flex flex-col items-center text-center text-ivory-200">
  {/* Tagline & Call to Action */}
  <motion.h1 
    className="text-5xl font-bold font-[Playfair Display] mt-24 text-gold-500"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    "Every Scent Tells a Story"
  </motion.h1>

  <motion.p 
    className="text-lg italic mt-2 text-ivory-200"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    Discover fragrances that define you.
  </motion.p>

  {/* CTA Button */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1, delay: 1 }}
  >
    <Link to="/products">
      <button className="mt-6 px-6 py-3 bg-gold-500 text-charcoal-900 rounded-full shadow-md hover:bg-gold-600 transition-all">
        Shop Now
      </button>
    </Link>
  </motion.div>

  {/* Featured Products Section */}
  <FeaturedProducts />
</div>
  );
};

export default Home;
