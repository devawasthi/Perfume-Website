import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Sample product images (Replace with actual product data)
const products = [
    { id: 1, name: "Creed Aventus", image: require("../assets/perfume1.png") },
    { id: 2, name: "Oud Maracuja", image: require("../assets/perfume2.png") },
    { id: 3, name: "Tuscan Leather", image: require("../assets/perfume3.png") },
    // { id: 4, name: "Bleu De Chanel", image: require("../assets/perfume4.png") },
  ];  

const FeaturedProducts = () => {
  return (
    <div className="mt-12 w-full max-w-4xl "> {/* Added pb-10 here */}
  <h2 className="text-3xl font-bold text-white text-center mb-6">Featured Fragrances</h2>
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true, el: ".swiper-pagination", dynamicBullets: true }}
    autoplay={{ delay: 3000 }}
    className="w-full"
  >
    {products.map((product) => (
      <SwiperSlide key={product.id} className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="h-64 w-auto rounded-md shadow-lg mx-auto" />
        <p className="text-xl font-semibold mt-4 mb-6">{product.name}</p> {/* Added mb-6 */}
      </SwiperSlide>
    ))}
  </Swiper>
  <div className="swiper-pagination mt-6"></div> {/* Moves dots down */}
</div>
  );
};

export default FeaturedProducts;
