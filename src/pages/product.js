import { useParams } from "react-router-dom";
import React from "react";


export default function Product() {
  const { id } = useParams(); // Get Product ID from URL

  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-semibold">Perfume {id}</h2>
      <p className="text-gray-600">A luxurious fragrance for a perfect day.</p>
      <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg">
        Buy Now
      </button>
    </div>
  );
}
