"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Kashmiri Walnuts",
    price: "21.00",
    oldPrice: "24.00",
    discount: "-12%",
    image: "/Img/walnuts.jpg", // Replace with your asset
    rating: 4,
  },
  {
    id: 2,
    name: "Kashmiri Dry Honey",
    price: "36.00",
    status: "New",
    image: "/Img/honey.jpeg",
    rating: 3,
  },
  {
    id: 3,
    name: "Kashmiri Almond",
    price: "44.00",
    status: "New",
    image: "/Img/almonds.jpg",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Kashmiri Blueberry",
    price: "36.00",
    status: "New",
    image: "/Img/blueberry.jpg",
    rating: 3,
  },
];

const ProductSec = () => {
  return (
    <section className="py-16 px-8 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-gray-900">
              Bestseller
            </h2>
            <p className="text-gray-500 mt-2 max-w-md text-sm md:text-lg leading-relaxed">
              Premium quality dry fruits and preserves sourced directly from the
              valleys of Kashmir.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 border rounded-full hover:bg-black hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-3 border rounded-full hover:bg-black hover:text-white transition-colors border-black">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm border border-transparent hover:border-gray-100 transition-all"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-[#f9f9f9] rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                {product.discount || product.status ? (
                  <span className="absolute top-3 left-3 bg-[#facc15] text-[12px] font-medium px-2 py-1 rounded uppercase z-10">
                    {product.discount || product.status}
                  </span>
                ) : null}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Price & Rating */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm md:text-lg font-bold text-gray-400">
                  From
                </span>
                <span className="text-sm md:text-lg font-black text-gray-900">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm md:text-lg text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <h3 className="text-sm md:text-lg font-bold text-gray-800 mt-4 mb-2 h-10 line-clamp-2 px-2 leading-tight">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <span key={i}>
                      {product.rating >= ratingValue ? (
                        <FaStar className="text-[#facc15] text-xs" />
                      ) : product.rating >= ratingValue - 0.5 ? (
                        <FaStarHalfAlt className="text-[#facc15] text-xs" />
                      ) : (
                        <FaRegStar className="text-gray-300 text-xs" />
                      )}
                    </span>
                  );
                })}
                <span className="text-[10px] font-bold text-gray-400 ml-1">
                  ({product.rating})
                </span>
              </div>

              {/* Action Button (Pill Style) */}
              <button className="w-full py-3 border-2 border-gray-900 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                Choose options
              </button>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="h-1.5 w-8 bg-gray-900 rounded-full" />
          <div className="h-1.5 w-1.5 bg-gray-300 rounded-full" />
          <div className="h-1.5 w-1.5 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProductSec;
