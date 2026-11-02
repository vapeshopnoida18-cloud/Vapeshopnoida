"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, WHATSAPP_NUMBER, getProductUrl } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiStar,
  FiChevronRight,
  FiEye,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantities, setQuantities] = useState({});

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + delta;
      return { ...prev, [id]: next > 0 ? next : 1 };
    });
  };

  return (
    <section
      aria-label="Featured Vape Devices & Disposables in Noida"
      className="site-section site-container"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8">
        <div>
          <span className="text-[11px] sm:text-xs font-bold text-[#325f98] uppercase tracking-widest block mb-1">
            Bestsellers in Noida
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Featured Vape Devices & Disposables
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#325f98] hover:text-[#254977] transition-colors group"
        >
          <span>View All Products</span>
          <FiChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {products.map((product) => {
          const qty = quantities[product.id] || 1;
          const isFavorited = isInWishlist(product.id);
          const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hi *Vape Shop Noida*, I want to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price.toLocaleString("en-IN")}\n*Quantity:* ${qty}\n🔗 *Product Link:* ${getProductUrl(product.slug)}\n\nPlease confirm fast 60-90 mins express delivery in Noida.`
          )}`;

          return (
            <article
              key={product.id}
              className="bg-white rounded-xl border border-gray-200/80 hover:shadow-xl hover:shadow-[#325f98]/8 hover:border-[#325f98]/25 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Compact Image */}
              <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                <Link
                  href={`/products/${product.slug}`}
                  className="block relative w-full h-full"
                  aria-label={product.name}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-gray-900/85 backdrop-blur-sm text-white text-[8px] sm:text-[9px] font-bold px-2 py-[3px] rounded-md uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}

                {/* Discount */}
                {product.discount && (
                  <span className="absolute top-2 right-10 sm:right-11 bg-red-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-[3px] rounded-md">
                    {product.discount}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
                    isFavorited
                      ? "bg-red-500 text-white"
                      : "bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500"
                  }`}
                  aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                  <FiHeart className={`w-3.5 h-3.5 ${isFavorited ? "fill-current" : ""}`} />
                </button>

                {/* Quick View on hover */}
                <Link
                  href={`/products/${product.slug}`}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md"
                >
                  <FiEye className="w-3 h-3" />
                  <span>Quick View</span>
                </Link>
              </div>

              {/* Card Body — Compact */}
              <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
                {/* Top Info */}
                <div className="mb-2">
                  {/* Brand + Stars */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#325f98]">
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <FiStar className="w-2.5 h-2.5 text-amber-400 fill-current" />
                      <span className="text-[10px] font-bold text-gray-700">{product.rating}</span>
                      <span className="text-[9px] text-gray-400">({product.reviewsCount}+)</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="text-[12px] sm:text-[13px] font-bold text-gray-900 hover:text-[#325f98] transition-colors line-clamp-2 leading-[1.3] mb-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Specs */}
                  <p className="text-[9px] sm:text-[10px] text-gray-400 line-clamp-1">
                    {product.specs}
                  </p>
                </div>

                {/* Price + Actions */}
                <div>
                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-2.5">
                    <span className="text-[15px] sm:text-base font-black text-gray-950">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-gray-400 line-through">
                      ₹{product.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Qty + Add to Cart Row */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex items-center border border-gray-200 rounded-md bg-gray-50 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-5 sm:w-6 text-center text-[11px] font-bold text-gray-900 select-none">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <FiPlus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(product, qty)}
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-[#325f98] hover:bg-[#254977] text-white text-[10px] sm:text-[11px] font-bold py-[7px] sm:py-2 rounded-md shadow-sm hover:shadow transition-all active:scale-[0.97] cursor-pointer"
                    >
                      <FiShoppingCart className="w-3 h-3" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 py-[5px] rounded-md transition-colors cursor-pointer"
                  >
                    <FaWhatsapp className="w-3 h-3 text-[#25D366]" />
                    <span>Buy via WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
