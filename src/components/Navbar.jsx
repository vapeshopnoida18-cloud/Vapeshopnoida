"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { products, WHATSAPP_NUMBER } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Real-time product search filter
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.specs && p.specs.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Click outside and ESC key listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(e.target)
      ) {
        setIsDesktopOpen(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target)
      ) {
        setIsMobileSearchOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDesktopOpen(false);
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsDesktopOpen(false);
      setIsMobileSearchOpen(false);
      setMobileMenuOpen(false);
      router.push(
        `/products?search=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setIsDesktopOpen(false);
    setIsMobileSearchOpen(false);
  };

  const handleSelectProduct = () => {
    setIsDesktopOpen(false);
    setIsMobileSearchOpen(false);
    setMobileMenuOpen(false);
    setSearchQuery("");
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Noida%2C%20I%20want%20to%20order%20vapes%20in%20Noida.`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)]">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#325f98] text-white text-[11px] sm:text-xs md:text-sm py-2 px-3 sm:px-6 text-center font-medium tracking-wide select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 text-white select-none">
          <span className="font-semibold">Vape Shop Noida</span>
          <span className="text-white/60 hidden sm:inline">|</span>
          <span>Express 60-90 Mins Delivery Across All Sectors</span>
          <span className="text-white/60 hidden md:inline">|</span>
          <span className="hidden md:inline">100% Authentic Products</span>
          <span className="text-white/60 hidden sm:inline">|</span>
          <span>Cash on Delivery Available</span>
        </div>
      </div>

      {/* 2. Main Capsule Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <nav
          aria-label="Main Navigation - Vape Shop Noida"
          className="bg-white rounded-full border border-gray-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.07)] px-4 sm:px-7 py-3 sm:py-3.5 md:py-4 flex items-center justify-between gap-3 md:gap-6"
        >
          {/* Brand Logo with Strict SEO Alt Tag */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="Vape Shop Noida Homepage"
          >
            <div className="relative h-9 sm:h-11 md:h-12 w-40 sm:w-48 md:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/logo.webp"
                alt="Vape Shop Noida - 100% Authentic Vapes & Fast Express Delivery"
                fill
                priority
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 transition-colors duration-150 ${
                    isActive
                      ? "text-[#325f98] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#325f98] after:rounded-full"
                      : "text-gray-800 hover:text-[#325f98]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Real-Time Desktop Search Bar with Live Dropdown */}
          <div
            ref={desktopSearchRef}
            className="hidden md:flex relative items-center flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-1"
          >
            <form onSubmit={handleSearchSubmit} role="search" className="w-full">
              <div className="relative w-full flex items-center bg-gray-100/70 hover:bg-gray-100/90 border border-gray-200/90 rounded-full pl-3.5 pr-1.5 py-1.5 focus-within:border-[#325f98] focus-within:ring-2 focus-within:ring-[#325f98]/20 focus-within:bg-white transition-all duration-200 shadow-2xs">
                <FiSearch className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                <input
                  type="text"
                  role="searchbox"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDesktopOpen(true);
                  }}
                  onFocus={() => {
                    if (searchQuery.trim()) setIsDesktopOpen(true);
                  }}
                  placeholder="Search vapes, pods, e-liquids..."
                  className="w-full bg-transparent text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none pr-1.5"
                  aria-label="Search vapes in Noida"
                />

                {/* Single Clear Button (Browser cancel icon removed) */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="mr-1.5 w-5 h-5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    aria-label="Clear search"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Submit Search Button */}
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[#325f98] hover:bg-[#254977] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-sm cursor-pointer"
                  aria-label="Submit search"
                >
                  <FiSearch className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </form>

            {/* Desktop Real-Time Live Search Dropdown */}
            {isDesktopOpen && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {searchResults.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50/80 border-b border-gray-100 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      <span>Matching Products ({searchResults.length})</span>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                        In Stock · Express Delivery
                      </span>
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                      {searchResults.slice(0, 5).map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={handleSelectProduct}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50/90 transition-colors group"
                        >
                          <div className="relative w-12 h-12 rounded-lg bg-gray-50 shrink-0 overflow-hidden border border-gray-200/60 p-0.5">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="48px"
                              className="object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-[10px] font-bold text-[#325f98] uppercase tracking-wider">
                                {product.brand}
                              </span>
                              <span className="text-gray-300">·</span>
                              <span className="text-[10px] text-gray-500 capitalize">
                                {product.category === "eliquids"
                                  ? "E-Liquid"
                                  : product.category}
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-gray-900 truncate group-hover:text-[#325f98] transition-colors">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-bold text-gray-900">
                                ₹{product.price.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] text-gray-400 line-through">
                                ₹{product.mrp.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                                {product.discount}
                              </span>
                            </div>
                          </div>
                          <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#325f98] group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/products?search=${encodeURIComponent(
                        searchQuery.trim()
                      )}`}
                      onClick={handleSelectProduct}
                      className="block w-full py-2.5 px-4 bg-gray-50 hover:bg-[#325f98] hover:text-white text-center text-xs font-semibold text-[#325f98] transition-colors border-t border-gray-100 cursor-pointer"
                    >
                      View all {searchResults.length} results in catalog &rarr;
                    </Link>
                  </>
                ) : (
                  <div className="p-5 text-center">
                    <p className="text-xs font-medium text-gray-600 mb-2">
                      No vapes found matching &quot;{searchQuery}&quot;
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi Vape Shop Noida, do you have ${searchQuery} in stock?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#325f98] hover:underline"
                    >
                      <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                      <span>Ask us on WhatsApp (Instant Reply)</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Action Icons & WhatsApp CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Wishlist Icon */}
            <Link
              href="/products"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 hover:border-[#325f98] flex items-center justify-center text-gray-700 hover:text-[#325f98] relative transition-colors duration-150 bg-white shadow-xs cursor-pointer"
              aria-label="Wishlist items"
            >
              <FiHeart className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 bg-[#325f98] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            </Link>

            {/* Cart Icon - Interactive Real-Time Drawer Trigger */}
            <button
              type="button"
              onClick={openCart}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 hover:border-[#325f98] flex items-center justify-center text-gray-700 hover:text-[#325f98] relative transition-colors duration-150 bg-white shadow-xs cursor-pointer focus:outline-none"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <FiShoppingCart className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 bg-[#325f98] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {cartCount}
              </span>
            </button>

            {/* Subtle Divider */}
            <div className="hidden sm:block h-7 w-px bg-gray-200 mx-0.5" />

            {/* WhatsApp Order Pill Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#325f98] hover:bg-[#254977] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow transition-all duration-150 active:scale-95 cursor-pointer"
              aria-label="Order on WhatsApp - Vape Shop Noida"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
              <span className="text-white">Order on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#325f98] hover:border-[#325f98] transition-colors duration-150 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-800" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl border border-gray-200/90 shadow-xl p-4 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            {/* Real-Time Mobile Search */}
            <div ref={mobileSearchRef} className="relative mb-4">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative flex items-center bg-gray-100/70 border border-gray-200 rounded-full pl-3.5 pr-1.5 py-1.5 focus-within:border-[#325f98] focus-within:ring-2 focus-within:ring-[#325f98]/20 focus-within:bg-white transition-all shadow-2xs">
                  <FiSearch className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    role="searchbox"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsMobileSearchOpen(true);
                    }}
                    onFocus={() => {
                      if (searchQuery.trim()) setIsMobileSearchOpen(true);
                    }}
                    placeholder="Search vapes, pods, e-liquids..."
                    className="w-full bg-transparent text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none pr-1"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="mr-1.5 w-5 h-5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                      aria-label="Clear mobile search"
                    >
                      <FiX className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#325f98] text-white flex items-center justify-center shrink-0 cursor-pointer active:scale-95 transition-transform"
                  >
                    <FiSearch className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </form>

              {/* Mobile Real-Time Results Dropdown */}
              {isMobileSearchOpen && searchQuery.trim() && (
                <div className="mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  {searchResults.length > 0 ? (
                    <>
                      <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                        <span>Found ({searchResults.length})</span>
                        <span className="text-emerald-600">In Stock</span>
                      </div>
                      <div className="max-h-60 overflow-y-auto divide-y divide-gray-50">
                        {searchResults.slice(0, 4).map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            onClick={handleSelectProduct}
                            className="flex items-center gap-2.5 p-2.5 hover:bg-gray-50 transition-colors"
                          >
                            <div className="relative w-10 h-10 rounded-md bg-gray-50 shrink-0 overflow-hidden border border-gray-200/60 p-0.5">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-900 truncate">
                                {product.name}
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-xs font-bold text-gray-900">
                                  ₹{product.price.toLocaleString("en-IN")}
                                </span>
                                <span className="text-[10px] text-rose-600 font-semibold">
                                  {product.discount}
                                </span>
                              </div>
                            </div>
                            <FiChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/products?search=${encodeURIComponent(
                          searchQuery.trim()
                        )}`}
                        onClick={handleSelectProduct}
                        className="block w-full py-2 px-3 bg-gray-50 hover:bg-[#325f98] hover:text-white text-center text-xs font-semibold text-[#325f98] transition-colors border-t border-gray-100"
                      >
                        View all {searchResults.length} results &rarr;
                      </Link>
                    </>
                  ) : (
                    <div className="p-3 text-center text-xs text-gray-500">
                      No results for &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2 pb-3 border-b border-gray-100">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-[#325f98]/10 text-[#325f98] font-semibold"
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#325f98]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile WhatsApp Button */}
            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#325f98] hover:bg-[#254977] text-white text-sm font-semibold py-2.5 rounded-full shadow transition-all duration-150 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span className="text-white">
                  Order on WhatsApp (60 Min Delivery)
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
