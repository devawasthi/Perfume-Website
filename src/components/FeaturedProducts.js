import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import hero14 from "../assets/hero14.jpg";
import him1 from "../assets/him1.jpg";
import hero5 from "../assets/hero5.jpeg";

export default function AnimatedImages() {
  const controls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ width: "400px", height: "400px" }); // Ensure consistent size
      leftControls.start({ opacity: 1, x: 0 });
      rightControls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls, leftControls, rightControls]);

  return (
    <div ref={ref} className="relative w-[100%] h-screen flex items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        {/* Left Image */}
        <motion.img
          src={him1}
          initial={{ opacity: 0, x: "-150px" }}
          animate={leftControls}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[350px] h-[400px] object-cover"
        />

        {/* Center Image (Shrinks to same size) */}
        <motion.img
          src={hero14}
          initial={{ width: "80vw", height: "80vh" }}
          animate={controls}
          transition={{ duration: 1 }}
          className="object-contain"
        />

        {/* Right Image */}
        <motion.img
          src={hero5}
          initial={{ opacity: 0, x: "150px" }}
          animate={rightControls}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[350px] h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
