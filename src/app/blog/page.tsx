"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Send,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoriesList = [
    { name: "All Posts", count: 78 },
    { name: "Architecture", count: 18 },
    { name: "Interior Design", count: 16 },
    { name: "Construction", count: 14 },
    { name: "Design Trends", count: 12 },
    { name: "Sustainability", count: 10 },
  ];

  const popularPosts = [
    { id: 1, title: "Modern Architecture Trends Shaping the Future of Homes", date: "May 20, 2024", img: "/images/Gallery/Residential12.jpg" },
    { id: 2, title: "Minimalist Interior Design: Less is More", date: "May 14, 2024", img: "/images/modern_interior.png" },
    { id: 3, title: "Step-by-Step Construction Process", date: "May 08, 2024", img: "/images/before_sketch.png" },
    { id: 4, title: "Sustainable Architecture Principles", date: "Apr 30, 2024", img: "/images/Gallery/Landscape (1).jpeg" },
  ];

  const tagCloud = [
    "Modern Architecture",
    "Interior Design",
    "Sustainable Design",
    "Construction",
    "Vastu Tips",
    "3D Visualization",
    "Minimalist Design",
    "Home Design",
    "Commercial Spaces",
    "Green Building",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER BANNER WITH SEARCH BAR                                      */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_villa.png"
            alt="Blog Hero Background"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-semibold">Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Our Blog
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
              Ideas, Insights & Inspiration
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Explore our expert insights, design philosophies, and the latest trends in architecture, construction, and interior design across Bihar.
            </p>

            {/* Search Input Bar */}
            <div className="pt-2 max-w-lg">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-slate-800 text-xs rounded-xl pl-4 pr-12 py-3 focus:outline-none shadow-lg placeholder-slate-400"
                />
                <button
                  type="button"
                  className="absolute right-1 w-10 h-10 rounded-lg bg-[#D9531E] hover:bg-[#C84C1C] text-white flex items-center justify-center transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER PILLS                                                   */}
      {/* ========================================================================= */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categoriesList.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.name
                    ? "bg-[#D9531E] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT: 2 COLUMNS (LEFT FEED 70%, RIGHT SIDEBAR 30%)             */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Blog Feed (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center group"
                >
                  <Link href={`/blog/${post.id}`} className="relative h-60 w-full md:w-72 shrink-0 overflow-hidden block">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#D9531E] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                      {post.category}
                    </span>
                  </Link>

                  <div className="p-6 flex-1 space-y-3">
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D9531E]" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D9531E]" /> {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.id}`} className="block">
                      <h2 className="text-lg font-bold text-[#061224] group-hover:text-[#D9531E] transition-colors leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="text-xs font-bold text-[#D9531E] hover:underline inline-flex items-center gap-1 pt-1"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="mt-10 flex items-center justify-center gap-2 pt-6 border-t border-slate-200">
                <button className="w-9 h-9 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-lg bg-[#D9531E] text-white font-bold text-xs flex items-center justify-center shadow">
                  1
                </button>
                <button className="w-9 h-9 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-100">
                  2
                </button>
                <button className="w-9 h-9 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-100">
                  3
                </button>
                <span className="text-slate-400 font-bold px-1">...</span>
                <button className="w-9 h-9 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-100">
                  8
                </button>
                <button className="w-9 h-9 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Categories Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-base text-[#061224] border-b border-slate-100 pb-2">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categoriesList.slice(1).map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className="w-full flex items-center justify-between text-xs py-1.5 px-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#D9531E] transition-colors"
                    >
                      <span className="font-semibold">{cat.name}</span>
                      <span className="bg-orange-100 text-[#D9531E] font-bold px-2 py-0.5 rounded-full text-[10px]">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-base text-[#061224] border-b border-slate-100 pb-2">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((pop, idx) => (
                    <div key={pop.id} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-6 h-6 rounded-full bg-[#061224] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                        <Image src={pop.img} alt={pop.title} fill className="object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-xs text-[#061224] group-hover:text-[#D9531E] transition-colors leading-snug line-clamp-2">
                          {pop.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-semibold block">
                          {pop.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Inspired Newsletter Box */}
              <div className="bg-[#061224] text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-[#D9531E]" />
                  <h3 className="font-bold text-base text-white">Stay Inspired</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Subscribe to our newsletter and get the latest updates, insights & trends straight to your inbox.
                </p>

                {newsletterSubscribed ? (
                  <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-bold text-center">
                    Subscribed successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2.5">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-[#1E2E45] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold py-2.5 text-xs rounded-xl flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>Subscribe Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Tags Cloud */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-bold text-base text-[#061224] border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#D9531E]" />
                  <span>Tags</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tagCloud.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="text-[11px] font-semibold bg-slate-100 text-slate-700 hover:bg-[#D9531E] hover:text-white px-2.5 py-1 rounded-lg transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Pre-Footer Banner */}
      <section className="py-12 bg-[#061224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black">Have a Project in Mind?</h2>
            <p className="text-xs text-slate-300 mt-1">Let's Build Something Amazing Together.</p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3 rounded-lg text-xs shrink-0"
          >
            Book  Consultation
          </Button>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
