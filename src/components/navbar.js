import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiShoppingBag, FiHeart, FiSearch } from "react-icons/fi"; 
import { FiCheckCircle, FiTruck } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

const bannerMessages = [
  { text: "Authentic Luxury Fragrances", icon: <FiCheckCircle /> },
  { text: "Free Shipping on orders over ₹1000", icon: <FiTruck /> }
];

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const cartItems = []; // Replace with actual data when integrating backend
  const [isFocused, setIsFocused] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % bannerMessages.length);
    }, 4000); // 3s visible + 1s transition

    return () => clearInterval(interval);
  }, []);
  return (
<div className="relative font-[Playfair Display]">
      {/* Sliding Banner */}
<div className="relative w-full bg-gray-900 text-white py-3 flex items-center justify-center overflow-hidden">
    <AnimatePresence mode="wait">
    <motion.div
      key={currentMessage}
      className="relative w-full flex items-center justify-center space-x-4 text-sm font-medium"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {bannerMessages[currentMessage].icon}
      <span>{bannerMessages[currentMessage].text}</span>
    </motion.div>
    </AnimatePresence>
</div>


      {/* Blurred Background */}
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg transition-opacity ${
          cartOpen || accountOpen || wishlistOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => {
          setCartOpen(false);
          setAccountOpen(false);
          setWishlistOpen(false);
        }}
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center py-5 px-8 bg-white shadow-md relative">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-semibold tracking-wide font-[Playfair Display]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Galleria Des Parfum
        </motion.h1>


          {/* Navigation Menu */}
          <motion.div
              className="flex justify-center items-center gap-8 py-3 bg-gray-30 w-[50%] max-w-1xl  my-1 -ml-9"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
          >
        {/* Brands */}
        <motion.div
          className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-black transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Brands
        </motion.div>

        {/* Fragrances (Dropdown) */}
<motion.div className="relative group">
  <motion.div
    className="flex items-center text-lg font-semibold text-gray-800 cursor-pointer hover:text-black transition transform hover:scale-105"
    whileHover={{ scale: 1.1 }}
  >
    Fragrances <FiChevronDown className="ml-2" />
  </motion.div>

  {/* Dropdown Menu (Now Truly Hidden) */}
  <motion.div
    className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300 z-50"
  >
    <ul className="py-2 text-gray-700">
      <motion.li
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        Men's Fragrances
      </motion.li>
      <motion.li
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        Women's Fragrances
      </motion.li>
      <motion.li
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        Unisex Fragrances
      </motion.li>
    </ul>
  </motion.div>
</motion.div>


        {/* Bath & Body */}
        <motion.div
          className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-black transition transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Bath & Body
        </motion.div>
      </motion.div>
      
{/* Search Bar */}
<motion.div className="relative w-1/4">
          <input
            type="text"
            placeholder="Search our Store..."
            className="w-half border border-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-gray-600 focus:shadow-md text-gray-800 normal-case transition-all duration-200"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Clickable Search Icon */}
          <div
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            onClick={() => document.querySelector("input").focus()}
          >
            <FiSearch size={18} />
          </div>
          </motion.div>


        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Wishlist */}
          <motion.div
            className="relative cursor-pointer flex items-center space-x-1"
            onMouseEnter={() => setWishlistOpen(true)}
            onMouseLeave={() => setWishlistOpen(false)}
          >
            <FiHeart size={24} className="text-black" />
            <span className="text-lg font-semibold"></span>
            {/* Wishlist Dropdown */}
            <AnimatePresence>
              {wishlistOpen && (
                <motion.div
                className="absolute right-0 top-full mt-6 w-64 bg-white shadow-xl rounded-lg border border-gray-200 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="p-4 text-center text-gray-500">
                  {wishlist.length === 0 ? "Your wishlist is empty" : "Wishlist items here"}
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>

          {/* Cart */}
          <motion.div
            className="relative cursor-pointer flex items-center space-x-1"
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}
          >
            <FiShoppingBag size={24} className="text-black" />
            <span className="text-lg font-semibold"></span>
            {/* Cart Dropdown */}
            <AnimatePresence>
              {cartOpen && (
                <motion.div
                className="absolute right-0 top-full mt-6 w-64 bg-white shadow-xl rounded-lg border border-gray-200 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 p-4">Your cart is empty</p>
                  ) : (
                    cartItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 border-b pb-2 mb-2 p-2">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500">${item.price}</p>
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Account */}
          <motion.div
            className="relative cursor-pointer flex items-center space-x-1"
            onMouseEnter={() => setAccountOpen(true)}
            onMouseLeave={() => setAccountOpen(false)}
          >
            <FiUser size={24} className="text-black" />
            <span className="text-lg font-semibold"></span>
            {/* Account Dropdown */}
            <AnimatePresence>
              {accountOpen && (
                <motion.div
                  className="absolute right-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="p-4 border-b border-gray-300">
                    <button className="w-full bg-black text-white uppercase font-bold py-2 rounded-md">
                      Login
                    </button>
                    <button className="w-full mt-2 border border-black text-black uppercase font-bold py-2 rounded-md">
                      Register
                    </button>
                  </div>
                  <div className="p-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
                    Your Orders
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
