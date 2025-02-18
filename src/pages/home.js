import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import her11 from "../assets/her11.jpg";
import hero6 from "../assets/hero6.jpg";
import him1 from "../assets/him1.jpg";
import center from "../assets/center.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [triggered, setTriggered] = useState(false);

  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  const mainImageScale = useTransform(scrollY, [100, 800], [1, 0.92]);

  // **Left and Right Image Motion**
  const leftX = useTransform(scrollY, [100, 800], ["-50%", "0%"]);
  const rightX = useTransform(scrollY, [100, 800], ["50%", "0%"]);

  useEffect(() => {
    let lastScrollY = scrollY.get(); // Track last scroll position

    const handleScroll = () => {
      const currentScrollY = scrollY.get();

      if (currentScrollY > 600) {
        setAnimate(true);
      } else if (currentScrollY < 100 && lastScrollY > currentScrollY) {
        setAnimate(false); // Reset only when scrolling up beyond 90px
      }

      lastScrollY = currentScrollY;
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[230vh] bg-white">
      {/* Full-Screen Center Image (Main Hero) */}
      <motion.div className="absolute top-0 w-full h-screen flex justify-center items-center">
        <motion.img
          src={hero6}
          alt="Main Fragrance"
          className="w-full h-screen object-cover cursor-pointer"
          style={{ scale: mainImageScale }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onClick={() => navigate("../components/FeaturedProducts")}
        />
      </motion.div>

      {/* Three Images Section */}
<div
  ref={containerRef}
  className="relative w-full h-screen flex justify-center items-center bg-white overflow-hidden pt-24" // Top padding
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
      className="absolute bottom-12 left-12 text-white text-xl tracking-wide opacity-70 transition-all font-montserrat"
      whileHover={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" }} // Glow effect on hover
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
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-xl tracking-wide opacity-100 transition-all font-montserrat"
      whileHover={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" }} // Glow effect on hover
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
      className="absolute bottom-12 right-10 text-white text-xl tracking-wide opacity-70 transition-all font-montserrat"
      whileHover={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" }} // Glow effect on hover
    >
      Shop for Him
    </motion.span>
  </motion.div>
</div>
    </div>
  );
};

export default Home;