"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, WHATSAPP_NUMBER, getProductUrl } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import {
  FiSearch,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiStar,
  FiEye,
  FiChevronRight,
  FiChevronDown,
  FiCheck,
  FiClock,
  FiShield,
  FiCreditCard,
  FiInfo,
  FiX,
  FiCheckCircle,
  FiSliders,
  FiAward,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
];

export default function ProductsCatalogClient() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const searchParams = useSearchParams();
  const urlSearch = searchParams?.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [quantities, setQuantities] = useState({});

  const sortDropdownRef = useRef(null);

  useEffect(() => {
    if (urlSearch !== undefined) {
      setSearchQuery(urlSearch);
    }
  }, [urlSearch]);

  // Handle click outside to close custom sort dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Compute live category counts
  const categoryCounts = useMemo(() => {
    return {
      all: products.length,
      disposable: products.filter((p) => p.category === "disposable").length,
      pods: products.filter((p) => p.category === "pods").length,
      eliquids: products.filter(
        (p) => p.category === "eliquids" || p.category === "nic-salts"
      ).length,
    };
  }, []);

  const categories = [
    { id: "all", label: "All Products", count: categoryCounts.all },
    {
      id: "disposable",
      label: "Disposable Vapes",
      count: categoryCounts.disposable,
    },
    { id: "pods", label: "Pod Systems & Kits", count: categoryCounts.pods },
    {
      id: "eliquids",
      label: "Nic Salts & E-Liquids",
      count: categoryCounts.eliquids,
    },
  ];

  // Distinct popular brands
  const popularBrands = [
    "All Brands",
    "Geek Bar",
    "Lost Mary",
    "Yuoto",
    "Elf Bar",
    "Crown Bar",
    "IGET",
    "Voopoo",
    "Vaporesso",
    "Uwell",
  ];

  // Filtering & Sorting
  const { filteredProducts, isInformationalQuery } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const infoKeywords = [
      "law",
      "legal",
      "risk",
      "health",
      "ban",
      "quit",
      "act",
      "nicotine addiction",
      "peca",
      "safety",
      "guidance",
    ];
    const isInfo = q ? infoKeywords.some((k) => q.includes(k)) : false;

    const matchCategory = (p) => {
      if (selectedCategory === "all") return true;
      if (selectedCategory === "eliquids") {
        return p.category === "eliquids" || p.category === "nic-salts";
      }
      return p.category === selectedCategory;
    };

    const matchBrand = (p) => {
      if (selectedBrand === "all" || selectedBrand === "All Brands") return true;
      return (
        p.brand.toLowerCase().includes(selectedBrand.toLowerCase()) ||
        p.name.toLowerCase().includes(selectedBrand.toLowerCase())
      );
    };

    let list = products.filter((p) => matchCategory(p) && matchBrand(p));

    if (q) {
      let matches = list.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          (p.specs && p.specs.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q))
        );
      });

      if (matches.length === 0) {
        const words = q.split(/\s+/).filter((w) => w.length >= 3);
        if (words.length > 0) {
          matches = list.filter((p) => {
            const text = `${p.name} ${p.brand} ${p.specs} ${p.category} ${
              p.description || ""
            }`.toLowerCase();
            return words.some((w) => text.includes(w));
          });
        }
      }

      const isServiceOrLocality = [
        "sector",
        "noida",
        "expressway",
        "delivery",
        "atta",
        "market",
        "ncr",
        "cash",
        "cod",
      ].some((term) => q.includes(term));

      if (matches.length === 0 && isServiceOrLocality) {
        matches = list;
      }

      list = matches;
    }

    // Sorting
    const sorted = [...list];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return {
      filteredProducts: sorted,
      isInformationalQuery: isInfo,
    };
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + delta;
      return { ...prev, [id]: next > 0 ? next : 1 };
    });
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSortBy("featured");
    setIsSortOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-12">
      {/* ========================================================= */}
      {/* 1. TOP HEADER (Standard Global Typography & Responsive Fit) */}
      {/* ========================================================= */}
      <div className="pt-4 sm:pt-7 pb-4 sm:pb-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-2 sm:mb-2.5"
          >
            <Link href="/" className="hover:text-[#325f98] transition-colors">
              Home
            </Link>
            <FiChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-gray-900 font-semibold">All Products</span>
          </nav>

          {/* Sub-label tag */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#325f98] uppercase tracking-wider mb-1">
            <FiAward className="w-3.5 h-3.5 text-[#325f98] shrink-0" />
            <span>100% GENUINE NOIDA CATALOG</span>
          </div>

          {/* Global Standard Heading Size (Matches ServiceAreas & HomeFaq) */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-1.5 sm:mb-2">
            All Vape Devices &amp; Disposables in Noida
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 max-w-3xl leading-relaxed">
            Instant 60-90 minute express doorstep delivery across Sector 76, Sector 18, Sector 62, Noida Expressway &amp; all sectors of Noida with Cash on Delivery (COD).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6 space-y-4 sm:space-y-5">
        {/* ========================================================= */}
        {/* 2. CATEGORY PILL TABS (Clean Mobile-Friendly Row) */}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer border ${
                  isActive
                    ? "bg-[#325f98] text-white border-[#325f98] shadow-md shadow-[#325f98]/20"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50/80 shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-extrabold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. UNIFIED SEARCH & CUSTOM SORT BAR (Mobile-Optimized) */}
        {/* ========================================================= */}
        <div className="bg-white border border-gray-200/90 rounded-2xl p-2.5 sm:p-3 shadow-xs space-y-2.5 md:space-y-0 md:flex md:items-center md:justify-between md:gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              role="searchbox"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by device name, brand (e.g. Geek Bar, Lost Mary, Yuoto)..."
              className="w-full pl-9 pr-9 py-2 rounded-xl bg-gray-50/70 hover:bg-gray-50 border border-gray-200/80 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#325f98] focus:bg-white focus:ring-2 focus:ring-[#325f98]/15 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Tools: Custom Sort Dropdown (No native OS blue popup) + Product Counter */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-0.5 md:pt-0">
            {/* Custom Styled Sort Dropdown Menu matching website theme */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 bg-gray-50/90 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-800 transition-colors cursor-pointer select-none"
                aria-haspopup="listbox"
                aria-expanded={isSortOpen}
              >
                <FiSliders className="w-3.5 h-3.5 text-[#325f98] shrink-0" />
                <span>
                  {sortOptions.find((o) => o.id === sortBy)?.label || "Featured"}
                </span>
                <FiChevronDown
                  className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-150 ${
                    isSortOpen ? "rotate-180 text-[#325f98]" : ""
                  }`}
                />
              </button>

              {/* Bespoke Custom Dropdown Popover */}
              {isSortOpen && (
                <div
                  role="listbox"
                  className="absolute left-0 md:left-auto md:right-0 top-full mt-1.5 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-1.5 z-40 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-2.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                    Sort Products
                  </div>
                  {sortOptions.map((opt) => {
                    const isCurrent = sortBy === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        role="option"
                        aria-selected={isCurrent}
                        onClick={() => {
                          setSortBy(opt.id);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                          isCurrent
                            ? "bg-blue-50/80 text-[#325f98] font-bold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isCurrent && (
                          <FiCheck className="w-3.5 h-3.5 text-[#325f98] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Total Count */}
            <span className="text-xs text-gray-500 font-semibold whitespace-nowrap">
              <strong className="text-gray-900">{filteredProducts.length}</strong> of{" "}
              {products.length} Products
            </span>
          </div>
        </div>

        {/* Brand Quick-Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">
            Brands:
          </span>
          {popularBrands.map((brand, idx) => {
            const isActive =
              (brand === "All Brands" && selectedBrand === "all") ||
              selectedBrand === brand;
            return (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setSelectedBrand(brand === "All Brands" ? "all" : brand)
                }
                className={`px-3 py-1 rounded-xl text-[11px] font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#325f98] text-white shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>

        {/* Active Filter Chips If Filtered */}
        {(searchQuery || selectedCategory !== "all" || selectedBrand !== "all") && (
          <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap pt-0.5">
            <span className="font-semibold text-gray-400">Active Filters:</span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#325f98] font-bold border border-blue-100 text-[11px]">
                <span>
                  {categories.find((c) => c.id === selectedCategory)?.label}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-blue-900 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedBrand !== "all" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#325f98] text-white font-bold text-[11px]">
                <span>{selectedBrand}</span>
                <button
                  type="button"
                  onClick={() => setSelectedBrand("all")}
                  className="hover:text-blue-200 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#325f98] font-bold border border-blue-100 text-[11px]">
                <span>&quot;{searchQuery}&quot;</span>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="hover:text-blue-900 cursor-pointer"
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              type="button"
              onClick={handleClearSearch}
              className="text-[11px] font-bold text-rose-600 hover:underline ml-1 cursor-pointer"
            >
              Reset All Filters ✕
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. PRODUCT CARDS GRID (Compact & High-Converting) */}
        {/* ========================================================= */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 px-4 bg-gray-50/70 rounded-3xl border border-gray-200/80">
            <div className="w-14 h-14 rounded-2xl bg-gray-200/60 text-gray-500 flex items-center justify-center mx-auto mb-3">
              <FiSearch className="w-7 h-7" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              No products found for &quot;{searchQuery || selectedBrand}&quot;
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-5 leading-relaxed">
              We may still have this vape model or an alternative flavor available in our Sector 76 dispatch hub.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              <button
                type="button"
                onClick={handleClearSearch}
                className="px-5 py-2.5 bg-[#325f98] text-white text-xs font-bold rounded-xl hover:bg-[#254977] shadow-xs cursor-pointer"
              >
                Show All {products.length} Products
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hi Vape Shop Noida, do you have ${searchQuery || selectedBrand} in stock for express delivery?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 shadow-xs cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Inquire on WhatsApp (+91 80531 17437)</span>
              </a>
            </div>

            {/* Recommended Bestsellers */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-left">
              <div className="mb-4">
                <span className="text-[11px] font-bold text-[#325f98] uppercase tracking-wider block">
                  RECOMMENDED NOIDA BESTSELLERS
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-gray-900">
                  Popular Vapes In Stock for Express Delivery
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
                {products.slice(0, 4).map((product) => renderProductCard(product))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5">
            {filteredProducts.map((product) => renderProductCard(product))}
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. BOTTOM AUTHORITY SEO & LOCAL DISPATCH GUIDE */}
        {/* ========================================================= */}
        <div className="mt-12 bg-gray-50/70 rounded-3xl border border-gray-200/80 p-5 sm:p-8 md:p-10">
          <div className="max-w-3xl mb-6">
            <span className="text-[11px] font-bold text-[#325f98] uppercase tracking-widest block mb-1">
              BUY VAPES IN NOIDA &middot; FAST DISPATCH GUARANTEE
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-gray-950 tracking-tight mb-2">
              Why Order Vapes from Vape Shop Noida?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We offer the fastest and most dependable localized vape delivery network in Gautam Buddha Nagar. Every single unit in our catalog is 100% factory-sealed with verifiable anti-counterfeit QR scratch panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/70">
              <h3 className="font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                <span>60-90 Mins Express Noida Delivery</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Stationed couriers deliver quickly to Sector 76, Sector 18 (Atta Market), Sector 50, Sector 62, Sector 137, Noida Expressway, and Greater Noida Pari Chowk.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/70">
              <h3 className="font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                <FiShield className="w-4 h-4 text-[#325f98]" />
                <span>Authentic QR Code Guaranteed</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Zero fake or clone devices. Authenticate your Geek Bar, Lost Mary, Yuoto, Elf Bar, Voopoo, or Uwell unit directly on the manufacturer&apos;s official portal upon arrival.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/70">
              <h3 className="font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                <FiCreditCard className="w-4 h-4 text-amber-600" />
                <span>Cash on Delivery &amp; Doorstep UPI</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Inspect your sealed tamper-evident packaging before payment. Pay conveniently in cash or via GPay, PhonePe, or Paytm scanner at your doorstep.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  function renderProductCard(product) {
    const qty = quantities[product.id] || 1;
    const isFavorited = isInWishlist(product.id);
    const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi *Vape Shop Noida*, I want to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price.toLocaleString("en-IN")}\n*Quantity:* ${qty}\n🔗 *Product Link:* ${getProductUrl(product.slug)}\n\nPlease confirm fast 60-90 mins express delivery in Noida.`
    )}`;

    return (
      <article
        key={product.id}
        className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#325f98]/40 shadow-2xs hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden group"
      >
        {/* Card Image */}
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
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10 pointer-events-none">
            <span className="bg-gray-900/90 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs">
              {product.badge}
            </span>
            <span className="bg-rose-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full">
              {product.discount}
            </span>
          </div>

          {/* Wishlist */}
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-gray-500 hover:text-red-500 shadow-sm transition-all duration-150 z-10 cursor-pointer"
          >
            <FiHeart
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                isFavorited ? "text-red-500 fill-red-500" : "hover:text-red-500"
              }`}
            />
          </button>

          {/* Quick View Hover */}
          <Link
            href={`/products/${product.slug}`}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white/95 hover:bg-[#325f98] hover:text-white text-gray-800 text-[11px] font-semibold px-3 py-1 rounded-full shadow-md transition-all duration-150 opacity-0 group-hover:opacity-100 flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <FiEye className="w-3 h-3" />
            <span>Quick View</span>
          </Link>
        </div>

        {/* Card Body */}
        <div className="p-2.5 sm:p-3.5 flex-1 flex flex-col justify-between">
          <div>
            {/* Brand & Rating */}
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#325f98] tracking-wider uppercase truncate">
                {product.brand}
              </span>
              <div className="flex items-center gap-0.5 shrink-0">
                <FiStar className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-[11px] font-bold text-gray-800">
                  {product.rating}
                </span>
                <span className="text-[10px] text-gray-400">
                  ({product.reviewsCount}+)
                </span>
              </div>
            </div>

            {/* Title */}
            <Link
              href={`/products/${product.slug}`}
              className="block group-hover:text-[#325f98] transition-colors"
            >
              <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 line-clamp-2 leading-snug">
                {product.name}
              </h3>
            </Link>

            {/* Specs */}
            <p className="text-[10px] sm:text-[11px] text-gray-500 line-clamp-1 mt-1 font-normal">
              {product.specs}
            </p>
          </div>

          <div className="mt-2.5 pt-2 border-t border-gray-100 space-y-2">
            {/* Price & Stock */}
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm sm:text-base font-extrabold text-gray-950 tracking-tight">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">
                In Stock
              </span>
            </div>

            {/* Stepper + WhatsApp + Cart */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/80 p-0.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleQtyChange(product.id, -1)}
                  className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-gray-600 hover:text-black rounded transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <FiMinus className="w-2.5 h-2.5" />
                </button>
                <span className="w-4 sm:w-5 text-center text-xs font-bold text-gray-800">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => handleQtyChange(product.id, 1)}
                  className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-gray-600 hover:text-black rounded transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <FiPlus className="w-2.5 h-2.5" />
                </button>
              </div>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-1.5 px-2 flex items-center justify-center gap-1 text-[11px] font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap active:scale-95"
                title="Order on WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => addToCart(product, qty)}
                className="bg-[#325f98] hover:bg-[#254977] text-white p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg flex items-center justify-center transition-colors cursor-pointer shrink-0 active:scale-95"
                aria-label={`Add ${product.name} to cart`}
                title="Add to cart"
              >
                <FiShoppingCart className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
