import { motion, useScroll, useTransform } from "framer-motion";
import { FaFlask, FaBoxOpen, FaAtom, FaShoppingBag } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import her11 from "../assets/her11.jpg";
import hero6 from "../assets/hero6.jpg";
import him1 from "../assets/him1.jpg";
import center from "../assets/center.jpg";
import creed1 from "../assets/creed1.jpeg";
import lv1 from "../assets/lv1.jpg";
import image from "../assets/image.png";
import sv1 from "../assets/sv1.jpg";
import banner1 from "../assets/banner1.jpg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [hero6, image]

  useEffect(() => {
    let lastScrollY = scrollY.get(); // Track last scroll position

    const handleScroll = () => {
      const currentScrollY = scrollY.get();

      if (currentScrollY > 500) {
        setAnimate(true);
      } else if (currentScrollY < 100 && lastScrollY > currentScrollY) {
        setAnimate(false); // Reset only when scrolling up beyond 90px
      }

      lastScrollY = currentScrollY;
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 20000); // Change image every 3 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">
      {/* Full-Screen Center Image (Main Hero) */}
      <motion.div className="relative top-0 w-[95%] h-[70vh] flex justify-center items-center bg-gray-100 overflow-hidden mt-5">
    <motion.img
      key={currentImage} // Helps Framer Motion animate between images
      src={images[currentImage]}
      alt="Main Fragrance"
      className="w-full h-screen object-cover cursor-pointer"
      transition={{ duration: 1 }}
      animate={{ opacity: [0.8, 1], scale: [1, 1] }} // Smooth fade-in & zoom effect
      onClick={() => navigate("../components/FeaturedProducts")}
    />
  </motion.div>


      {/* Three Images Section */}
<div
  ref={containerRef}
  className="relative w-full h-screen flex justify-center items-center bg-white overflow-hidden pt-40" // Top padding
>
  {/* Left Image (Slides Up & Fades In) */}
  <motion.div
    className={`absolute left-1 h-full w-1/3 transition-all duration-1000 ${
      animate ? "-translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }`}
    style={{ overflow: "hidden", paddingLeft: "2rem", paddingRight: "2rem" }} // Left padding for the left image
  >
    <motion.img
      src={her11}
      alt="Left"
      className="w-full h-full object-cover cursor-pointer"
      whileHover={{ scale: 1.03 }} // Scale and brighten on hover
      onClick={() => navigate("/collections/women")}
      transition={{ type: "spring", damping: 15, stiffness: 100 }} // Smoother hover animation
      style={{ transformOrigin: "center" }} // Scale from the center
    />
    <motion.span
      className="absolute bottom-20 left-12 text-white text-sm -translate-y-2 tracking-wide opacity-70 cursor-pointer transition-all font-montserrat"
      whileHover={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" }} // Glow effect on hover
      onClick={() => navigate("/collections/women")}
    >
      Shop for Her
    </motion.span>
  </motion.div>

  {/* Main Image (Shrinks Horizontally) */}
  <motion.div
    className={`absolute h-full transition-all duration-1000 mx-auto ${
      animate ? "w-1/3" : "w-[80%]"
    }`}
    style={{ overflow: "hidden", margin: "0 2rem" }} // Margin for spacing between images
  >
    <motion.img
      src={center}
      alt="Main"
      className="w-full h-full object-cover cursor-pointer"
      whileHover={{ scale: 1.03 }} // Scale and brighten on hover
      onClick={() => navigate("/collections/all")}
      transition={{ type: "spring", damping: 15, stiffness: 100 }} // Smoother hover animation
      style={{ transformOrigin: "center" }} // Scale from the center
    />
    <motion.span
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-2 cursor-pointer text-white text-sm tracking-wide opacity-100 transition-all font-montserrat"
      whileHover={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" }} // Glow effect on hover
      onClick={() => navigate("/collections/all")}
    >
      Discover Brands
    </motion.span>
  </motion.div>

  {/* Right Image (Slides Up & Fades In) */}
  <motion.div
    className={`absolute right-1 h-full w-1/3 transition-all duration-1000 ${
      animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
    style={{ paddingRight: "2rem", overflow: "hidden", paddingLeft:"2rem"}} // Right padding for the right image
  >
    <motion.img
      src={him1}
      alt="Right"
      className="w-full h-full object-cover cursor-pointer"
      whileHover={{ scale: 1.03 }} // Scale and brighten on hover
      onClick={() => navigate("/collections/men")}
      transition={{ type: "spring", damping: 15, stiffness: 100 }} // Smoother hover animation
      style={{ transformOrigin: "center" }} // Scale from the center
    />
    <motion.span
      className="absolute bottom-20 right-10  -translate-y-2 cursor-pointer text-white text-sm tracking-wide opacity-70 transition-all font-montserrat"
      whileHover={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" }} // Glow effect on hover
      onClick={() => navigate("/collections/men")}
    >
      Shop for Him
    </motion.span>
  </motion.div>
</div>
<section className="relative w-[100%] h-screen flex justify-center items-center overflow-hidden mt-[9vh]">
  <motion.img
    src={creed1}
    alt="New Arrival"
    className="w-4/5 h-4/5 object-cover shadow-lg cursor-pointer"
    onClick={() => navigate("/collections/new")}
  />
 <motion.span
  className="absolute bottom-20 text-white text-sm tracking-wide cursor-pointer font-montserrat px-7 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm shadow-md transition-all"
  whileHover={{
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/collections/new")}
>
  Explore Creed
</motion.span>
</section>
<section className="relative w-[100%] h-screen flex justify-center items-center overflow-hidden mt-[2vh]">
  <motion.img
    src={lv1}
    alt="New Arrival"
    className="w-4/5 h-4/5 object-cover shadow-lg cursor-pointer"
    onClick={() => navigate("/collections/new")}
  />
 <motion.span
  className="absolute bottom-20 text-white text-sm tracking-wide cursor-pointer font-montserrat px-7 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm shadow-md transition-all"
  whileHover={{
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate("/collections/new")}
>
  Explore Louis Vuitton
</motion.span>
</section>

{/* product-type */}
<motion.div 
      className="w-full px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl text-gray-900 font-montserrat">
          Explore Our Fragrance Collection
        </h2>
        <p className="text-gray-600 mt-2 text-xs sm:text-base font-montserrat">
          Find the perfect scent format that suits your needs.
        </p>
        <div className="w-16 h-1 bg-gray-400 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Product Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Partial */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105">
          <FaFlask className="text-3xl text-gray-700 mx-auto mb-3" />
          <h3 className="text-lg text-gray-900 font-montserrat">Partials</h3>
          <p className="text-gray-600 mt-2 text-xs font-montserrat">
            Bottles that have been used but still have a good amount of fragrance left.
          </p>
        </div>

        {/* Testers */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105">
          <FaBoxOpen className="text-3xl text-gray-700 mx-auto mb-3" />
          <h3 className="text-lg text-gray-900 font-montserrat">Testers</h3>
          <p className="text-gray-600 mt-2 text-xs font-montserrat">
          Factory-sealed promotional bottles, often without fancy packaging but the same fragrance.
          </p>
        </div>

        {/* Decants */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105">
          <FaAtom className="text-3xl text-gray-700 mx-auto mb-3" />
          <h3 className="text-lg text-gray-900 font-montserrat">Decants</h3>
          <p className="text-gray-600 mt-2 text-xs font-montserrat">
            Smaller amounts of fragrance transferred into separate atomizers - comes with 10ml/20ml/30ml bottles.
          </p>
        </div>

        {/* Retail */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105">
          <FaShoppingBag className="text-3xl text-gray-700 mx-auto mb-3" />
          <h3 className="text-lg text-gray-900 font-montserrat">Retail</h3>
          <p className="text-gray-600 mt-2 text-xs font-montserrat">
            Brand new, factory-sealed bottles with full packaging.
          </p>
        </div>

      </div>
    </motion.div>



    <footer className="w-full bg-gray-100 text-gray-800 font-montserrat py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Contact Us */}
        <div>
          <h3 className="text-sm font-semibold font-montserrat">Contact Us</h3>
          <p className="text-xs mt-2 font-montserrat">Email: support@galleriadp.com</p>
          <p className="text-xs font-montserrat">Phone: +1 (555) 123-4567</p>
        </div>

        {/* Delivery & Returns */}
        <div>
          <h3 className="text-sm font-semibold font-montserrat">Delivery & Returns</h3>
          <p className="text-xs mt-2 font-montserrat">Check our policies on fast shipping and easy returns.</p>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-sm font-semibold font-montserrat">FAQ</h3>
          <p className="text-xs mt-2 font-montserrat">Find answers to the most common questions.</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold font-montserrat">Follow Us</h3>
          <div className="flex items-center space-x-4 mt-3 font-montserrat">
            <FaInstagram className="text-2xl hover:text-gray-600 cursor-pointer" />
            <FaFacebook className="text-2xl hover:text-gray-600 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-600 mt-8 font-montserrat">
        &copy; {new Date().getFullYear()} Galleria Des Parfum. All rights reserved.
      </div>


    </footer>

</div>
  );
};

export default Home;