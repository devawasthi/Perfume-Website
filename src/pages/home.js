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
  const containerRef = useRef(null);  useEffect(() => {

    const handleScroll = () => {
      setTriggered(scrollY.get() > 200);
    };
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const mainImageScale = useTransform(scrollY, [100, 600], [1, 0.92]);

  // **Left and Right Image Motion**
  const leftX = useTransform(scrollY, [100, 800], ["-50%", "0%"]);
  const rightX = useTransform(scrollY, [100, 800], ["50%", "0%"]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting); // Update state every time visibility changes
      },
      { threshold: 0.7 } // Trigger when 70% is visible
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, 
  []);
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[300vh] bg-white">
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

      <div
      ref={containerRef}
      className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden"
    >
      {/* Main Image (Shrinks Horizontally) */}
      <img
        src={center}
        alt="Main"
        className={`absolute object-cover h-full transition-all duration-1000 mx-auto ${
          animate ? "w-1/3" : "w-full"
        }`}
      />

      {/* Left Image (Slides Up & Fades In) */}
      <img
        src={her11}
        alt="Left"
        className={`absolute left-1 object-cover w-1/3 h-full transition-all duration-1000 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      />

      {/* Right Image (Slides Up & Fades In) */}
      <img
        src={him1}
        alt="Right"
        className={`absolute right-1 object-cover w-1/3 transition-all duration-1000 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      />
    </div>
    </div>
  );
};

export default Home;
