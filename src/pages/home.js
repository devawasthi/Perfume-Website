import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import her11 from "../assets/her11.jpg";
import hero6 from "../assets/hero6.jpg";
import him1 from "../assets/him1.jpg";
import center from "../assets/center.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTriggered(scrollY.get() > 200);
    };
    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  // **Main Image Scale (Parallax Effect)**
  const mainImageScale = useTransform(scrollY, [100, 600], [1, 0.92]);

  // **Left and Right Image Motion**
  const leftX = useTransform(scrollY, [100, 800], ["-50%", "0%"]);
  const rightX = useTransform(scrollY, [100, 800], ["50%", "0%"]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[250vh] bg-white">
      {/* Full-Screen Center Image (Main Hero) */}
      <motion.div className="absolute top-0 w-full h-screen flex justify-center items-center">
        <motion.img
          src={hero6}
          alt="Main Fragrance"
          className="w-full h-screen object-cover cursor-pointer"
          style={{ scale: mainImageScale }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          onClick={() => navigate("/collections/all")}
        />
      </motion.div>

      {/* Flex Container for Left, Center, Right Images */}
      <motion.div className="absolute top-[110vh] flex w-full justify-center items-center gap-8">
        {/* Left Section - Shop for Her */}
        <motion.div
          className="w-1/3 h-[90vh] flex items-center justify-center group relative cursor-pointer overflow-hidden"
          style={{ x: leftX, opacity: triggered ? 1 : 0.5 }}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
          onClick={() => navigate("/collections/women")}
        >
          <motion.img
            src={her11}
            alt="Shop for Her"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.span className="absolute bottom-10 left-15 text-white text-xl tracking-wide opacity-70 group-hover:opacity-100 transition-all font-montserrat">
            Shop for Her
          </motion.span>
        </motion.div>

        {/* Center Section - Discover All Brands */}
        <motion.div className="w-[40%] h-[90vh] flex justify-center cursor-pointer relative overflow-hidden">
          <motion.img
            src={center}
            alt="Main Fragrance"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => navigate("/collections/all")}
          />
          <motion.span className="absolute bottom-10 text-white text-xl tracking-wide opacity-100 group-hover:opacity-100 transition-all font-montserrat">
            Discover Brands
          </motion.span>
        </motion.div>

        {/* Right Section - Shop for Him */}
        <motion.div
          className="w-1/3 h-[90vh] flex items-center justify-center group relative cursor-pointer overflow-hidden"
          style={{ x: rightX, opacity: triggered ? 1 : 0.5 }}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
          onClick={() => navigate("/collections/men")}
        >
          <><motion.img
                src={him1}
                alt="Shop for Him"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }} /><motion.span className="absolute bottom-10 right-15 text-white text-xl tracking-wide opacity-70 group-hover:opacity-100 transition-all font-montserrat">
                    Shop for Him
                </motion.span></>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
