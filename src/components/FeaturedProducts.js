import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Sample product images (Replace with actual product data)
const products = [
  { id: 1, name: "Mystic Bloom", image: "/assets/perfume1.jpg" },
  { id: 2, name: "Ocean Breeze", image: "/assets/perfume2.jpg" },
  { id: 3, name: "Royal Oud", image: "/assets/perfume3.jpg" },
];

const FeaturedProducts = () => {
  return (
    <div className="mt-12 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Featured Fragrances</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <img src={product.image} alt={product.name} className="h-64 w-auto rounded-md shadow-lg" />
            <p className="text-xl font-semibold mt-4">{product.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
