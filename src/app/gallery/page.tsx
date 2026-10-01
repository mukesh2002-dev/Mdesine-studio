"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  List,
  Building2,
  Home as HomeIcon,
  Palette,
  Trees,
  GraduationCap,
  Sparkles,
  Award,
  Users,
  Trophy,
  RefreshCw,
  ArrowRight,
  ZoomIn,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const [isFiltering, setIsFiltering] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleCategoryChange = (catName: string) => {
    if (catName === activeCategory) return;
    setIsFiltering(true);
    setActiveCategory(catName);
    setVisibleCount(12);
    setTimeout(() => {
      setIsFiltering(false);
    }, 300);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setIsLoadingMore(false);
    }, 400);
  };

  const galleryCategories = [
    { name: "All Works", icon: Sparkles },
    { name: "Residential", icon: HomeIcon },
    { name: "Commercial", icon: Building2 },
    { name: "Interior", icon: Palette },
    { name: "Landscape", icon: Trees },
    { name: "Institutional", icon: GraduationCap },
    { name: "Video", icon: Play },
  ];

  const galleryItems = [
    { id: 1, title: "Modern Luxury Villa Exterior", cat: "Residential", img: "/images/Gallery/Residential.jpeg" },
    { id: 2, title: "Contemporary Duplex Front Elevation", cat: "Residential", img: "/images/Gallery/Residential2.jpg" },
    { id: 3, title: "Modern Minimalist Villa Exterior", cat: "Residential", img: "/images/Gallery/Residential3.jpeg" },
    { id: 4, title: "Urban House Architectural Design", cat: "Residential", img: "/images/Gallery/Residential4.jpg" },
    { id: 5, title: "Premium Corner Plot Villa Elevation", cat: "Residential", img: "/images/Gallery/Residential5.jpg" },
    { id: 6, title: "Contemporary Double Story Home", cat: "Residential", img: "/images/Gallery/Residential6.jpg" },
    { id: 7, title: "Modern Residential Architecture", cat: "Residential", img: "/images/Gallery/Residential7.jpeg" },
    { id: 8, title: "Custom Luxury Villa Facade", cat: "Residential", img: "/images/Gallery/Residential8.jpg" },
    { id: 9, title: "Residential Apartment Building", cat: "Residential", img: "/images/Gallery/Residential9.jpeg" },
    { id: 10, title: "Modern Multi-Story House", cat: "Residential", img: "/images/Gallery/Residential10.jpg" },
    { id: 11, title: "Premium Residential Villa Exterior", cat: "Residential", img: "/images/Gallery/Residential11.jpg" },
    { id: 12, title: "Architectural Exterior Residence", cat: "Residential", img: "/images/Gallery/Residential12.jpg" },
    { id: 13, title: "Luxury Family Bungalow Exterior", cat: "Residential", img: "/images/Gallery/Residential13.jpg" },
    { id: 14, title: "Urban Residence Front Elevation", cat: "Residential", img: "/images/Gallery/Residential14 (1).jpg" },
    { id: 15, title: "Modern Duplex House Architecture", cat: "Residential", img: "/images/Gallery/Residential14 (2).jpg" },
    { id: 16, title: "Modern Villa Night Elevation", cat: "Residential", img: "/images/Gallery/Residential14 (3).jpg" },
    { id: 17, title: "Elegant Residential Block", cat: "Residential", img: "/images/Gallery/Residential15.jpeg" },
    { id: 18, title: "Sleek Modern Home Facade", cat: "Residential", img: "/images/Gallery/Residential16.jpg" },
    { id: 19, title: "Minimalist Modern House Exterior", cat: "Residential", img: "/images/Gallery/Residential17.jpg" },
    { id: 20, title: "Custom Modern Villa Design", cat: "Residential", img: "/images/Gallery/Residential18.jpeg" },
    { id: 21, title: "Urban Residential Tower", cat: "Residential", img: "/images/Gallery/Residential19.jpeg" },
    { id: 22, title: "Grand Residential Mansion", cat: "Residential", img: "/images/Gallery/Residential20.jpeg" },
    { id: 23, title: "Contemporary Duplex Living Space", cat: "Residential", img: "/images/Gallery/Residential21.jpg" },
    { id: 24, title: "Modern Commercial Plaza Complex", cat: "Commercial", img: "/images/Gallery/Commercial2.jpg" },
    { id: 25, title: "Corporate Business Center Facade", cat: "Commercial", img: "/images/Gallery/Commercial3.jpeg" },
    { id: 26, title: "Glass Facade Commercial Building", cat: "Commercial", img: "/images/Gallery/Commercial4.jpg" },
    { id: 27, title: "Institutional Campus Main Block", cat: "Institutional", img: "/images/Gallery/Institutional.jpeg" },
    { id: 28, title: "Educational Institute Architecture", cat: "Institutional", img: "/images/Gallery/Institutional4 (1).jpeg" },
    { id: 29, title: "Academic & Administrative Building", cat: "Institutional", img: "/images/Gallery/Institutional4 (2).jpeg" },
    { id: 30, title: "School & College Campus Structure", cat: "Institutional", img: "/images/Gallery/Institutional4 (3).jpeg" },
    { id: 31, title: "Urban Landscape & Courtyard Garden", cat: "Landscape", img: "/images/Gallery/Landscape (1).jpeg" },
    { id: 32, title: "Modern Villa Garden & Pathway", cat: "Landscape", img: "/images/Gallery/Landscape (1).jpg" },
    { id: 33, title: "Architectural Exterior Landscaping", cat: "Landscape", img: "/images/Gallery/Landscape (2).jpg" },
    { id: 34, title: "Luxury Living Room Interior", cat: "Interior", img: "/images/modern_interior.png" },
    { id: 35, title: "Garden Landscape Detail", cat: "Landscape", img: "/images/Gallery/landscape_232.jpeg" },
    { id: 36, title: "Outdoor Landscape View", cat: "Landscape", img: "/images/Gallery/landscape_231.jpeg" },

  ];

  const filteredItems =
    activeCategory === "All Works"
      ? galleryItems
      : activeCategory === "Video"
        ? []
        : galleryItems.filter((item) => item.cat === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER BANNER                                                      */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_villa.png"
            alt="Gallery Hero Background"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-semibold">Gallery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Our Gallery
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
              Inspiration. Design. Perfection.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Explore our thoughtfully crafted spaces that blend creativity, functionality and aesthetics. Each project is a reflection of our commitment to excellence and client satisfaction.
            </p>

            {/* 4 Counter Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-3 rounded-xl flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#D9531E]" />
                <div>
                  <div className="text-lg font-black text-white">100+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Projects</div>
                </div>
              </div>

              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-3 rounded-xl flex items-center gap-3">
                <Award className="w-6 h-6 text-[#D9531E]" />
                <div>
                  <div className="text-lg font-black text-white">15+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Years Experience</div>
                </div>
              </div>

              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-3 rounded-xl flex items-center gap-3">
                <Users className="w-6 h-6 text-[#D9531E]" />
                <div>
                  <div className="text-lg font-black text-white">75+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Happy Clients</div>
                </div>
              </div>

              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-3 rounded-xl flex items-center gap-3">
                <Trophy className="w-6 h-6 text-[#D9531E]" />
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER PILLS & VIEW MODE CONTROLS                             */}
      {/* ========================================================================= */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {galleryCategories.map((cat) => {
                const IconComp = cat.icon;
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#D9531E] text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#D9531E]"}`} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <span>View as</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-[#D9531E] text-white shadow" : "text-slate-500"}`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${viewMode === "list" ? "bg-[#D9531E] text-white shadow" : "text-slate-500"}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      

      {/* ========================================================================= */}
      {/* 4. RICH GALLERY GRID                                                      */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeCategory === "Video" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="text-[#D9531E] font-extrabold text-[10px] tracking-[0.2em] uppercase">
                  Video Showcase
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#061224] leading-tight">
                  Architectural walkthrough in motion.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Explore our residential design story through an immersive presentation that combines space planning, material finishes, and overall atmosphere.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase bg-[#D9531E]/10 text-[#D9531E] px-2.5 py-1 rounded-full">Residential</span>
                  <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">Walkthrough</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-xl">
                <video
                  controls
                  autoPlay
                  className="w-full h-[360px] md:h-[420px] object-cover"
                  poster="/images/Gallery/Residential18.jpeg"
                >
                  <source src="/images/Gallery/Residentialvideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          ) : isFiltering ? (
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" : "space-y-6"}>
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 p-3 space-y-3 animate-pulse"
                >
                  <div className="h-64 bg-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-[#D9531E] animate-spin" />
                  </div>
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-3 bg-slate-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  : "space-y-6"
              }
            >
              {displayedItems.map((item) => (
                <GalleryCard key={item.id} item={item} viewMode={viewMode} onSelect={setSelectedImage} />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {activeCategory !== "Video" && visibleCount < filteredItems.length && (
            <div className="mt-12 text-center">
              <Button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg flex items-center gap-2 text-xs mx-auto transition-all"
              >
                {isLoadingMore ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    <span>Loading More...</span>
                  </>
                ) : (
                  <>
                    <span>Load More Images ({filteredItems.length - visibleCount} remaining)</span>
                    <RefreshCw className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRE-FOOTER BANNER WITH 4 FEATURE ICONS                                  */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#061224] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Have a Project in Mind?
              </h2>
              <h3 className="text-base font-bold text-[#D9531E]">
                Let's Build Something Amazing Together.
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Share your ideas with us and let our experts turn them into reality with creativity, precision and excellence.
              </p>
            </div>

            {/* 4 Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-[#0B192C] rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-orange-100/20 text-[#D9531E] flex items-center justify-center mx-auto mb-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-200 block"> Consultation</span>
              </div>

              <div className="p-3 bg-[#0B192C] rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-orange-100/20 text-[#D9531E] flex items-center justify-center mx-auto mb-1">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-200 block">Best Design Solutions</span>
              </div>

              <div className="p-3 bg-[#0B192C] rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-orange-100/20 text-[#D9531E] flex items-center justify-center mx-auto mb-1">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-200 block">On-Time Delivery</span>
              </div>

              <div className="p-3 bg-[#0B192C] rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-orange-100/20 text-[#D9531E] flex items-center justify-center mx-auto mb-1">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-slate-200 block">Transparent Process</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 text-xs shrink-0"
            >
              <span>Book  Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

          </div>
        </div>
      </section>

      {/* Lightbox Image Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full h-[80vh] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <Image src={selectedImage} alt="Gallery Full View" fill className="object-contain" />
          </div>
        </div>
      )}

      {isVideoOpen && (
        <div
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            <video
              controls
              autoPlay
              className="w-full h-[70vh] object-cover"
              poster="/images/modern_interior.png"
            >
              <source src="/images/Gallery/Residentialvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

function GalleryCard({
  item,
  viewMode,
  onSelect,
}: {
  item: { id: number; title: string; cat: string; img: string };
  viewMode: "grid" | "list";
  onSelect: (img: string) => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={() => onSelect(item.img)}
      className={`group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer ${
        viewMode === "list" ? "flex flex-col md:flex-row items-center" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          viewMode === "list" ? "w-full md:w-80 h-56 shrink-0" : "h-64 w-full"
        }`}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse z-10 flex flex-col items-center justify-center space-y-2">
            <div className="w-7 h-7 rounded-full border-2 border-slate-300 border-t-[#D9531E] animate-spin" />
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Loading...</span>
          </div>
        )}

        <Image
          src={item.img}
          alt={item.title}
          fill
          onLoad={() => setIsLoaded(true)}
          className={`object-cover group-hover:scale-105 transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center space-y-2 z-20">
          <div className="w-10 h-10 rounded-full bg-[#D9531E] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <ZoomIn className="w-5 h-5" />
          </div>
          <span className="text-xs bg-[#061224] text-white px-2.5 py-0.5 rounded font-bold uppercase">
            {item.cat}
          </span>
          <h3 className="font-bold text-xs text-white leading-snug">{item.title}</h3>
        </div>
      </div>

      {viewMode === "list" && (
        <div className="p-5 flex-1 space-y-2">
          <span className="text-[10px] bg-[#D9531E] text-white px-2 py-0.5 rounded font-bold uppercase">
            {item.cat}
          </span>
          <h3 className="font-bold text-base text-[#061224]">{item.title}</h3>
          <p className="text-xs text-slate-500">Click image to view high-resolution architectural photo</p>
        </div>
      )}
    </div>
  );
}
