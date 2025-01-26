import { products } from "@/lib/navigate-link";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDropdown: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  return (
    <div
      className={`absolute ${
        isMobile
          ? "top-full left-0 w-full bg-[#0F0D0E]"
          : "md:top-12 md:w-[700px]"
      } bg-[#000] text-[#F9F4DA] rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-6 z-50 shadow-lg`}
      role="menu"
      aria-label="Product navigation"
    >
      {products.map((product, index) => (
        <Link
          href={product.link}
          key={index}
          className="group flex items-start space-x-4 hover:bg-[#1a1819]  p-3 rounded-lg transition duration-200"
          aria-label={`Navigate to ${product.title}`}
        >
          <Image
            src={product.icon}
            alt={`${product.title} icon`}
            width={24}
            height={24}
            className="w-6 h-6 text-xl  transition-transform  bg-transparent duration-200"
          />
          <div className="group">
            <h2 className="text-[#F9F4DA] font-semibold text-base md:text-lg group-hover:text-[#FC7428] transition-colors">
              {product.title}
            </h2>
            <p className="text-gray-500 group-hover:text-[#FC7428] text-sm">
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductDropdown;
