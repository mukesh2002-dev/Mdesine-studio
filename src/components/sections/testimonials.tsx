"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MapPin } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "M Design Studio understood our vision perfectly and delivered beyond our expectations! Ar. Mahesh Kumar Choudhary and his architectural team designed our luxury villa in Patna with incredible attention to detail, Vastu compliance, and complete map approval handling.",
      author: "Rajesh Kumar",
      role: "Homeowner",
      location: "Patna, Bihar",
      rating: 5,
      project: "4500 Sq.Ft Luxury Villa",
      avatar: "RK",
      verified: true,
    },
    {
      id: 2,
      quote:
        "Their commercial complex design in Madhubani is modern, practical, and cost-effective. The 3D visualization helped us visualize every shop space before construction started. Highly professional and transparent workflow!",
      author: "Neha Singh",
      role: "Business Owner",
      location: "Madhubani, Bihar",
      rating: 5,
      project: "Commercial Shopping Complex",
      avatar: "NS",
      verified: true,
    },
    {
      id: 3,
      quote:
        "Outstanding structural design and site management for our residential apartment in Darbhanga. They completed the drawing approvals on time and guided us throughout the construction phase smoothly.",
      author: "Dr. Alok Verma",
      role: "Property Developer",
      location: "Darbhanga, Bihar",
      rating: 5,
      project: "5-Story Apartment Complex",
      avatar: "AV",
      verified: true,
    },
    {
      id: 4,
      quote:
        "Best architecture and interior design firm in Bihar! The team redesigned our school campus with spacious classrooms, safe playgrounds, and modern facades. Truly exceptional work.",
      author: "Sunita Choudhary",
      role: "School Director",
      location: "Khajauli, Bihar",
      rating: 5,
      project: "Institutional School Campus",
      avatar: "SC",
      verified: true,
    },
  ];

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#061224] to-[#0B192C] text-white relative overflow-hidden border-y border-slate-800">
      
      {/* Decorative Background Accent Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D9531E]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9531E]/20 text-[#D9531E] font-bold text-xs uppercase tracking-wider mb-2 border border-[#D9531E]/30">
              <Quote className="w-3.5 h-3.5" />
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Our <span className="text-[#D9531E]">Clients Say</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Read real feedback from homeowners, developers and business leaders across Bihar
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full bg-[#1E2E45] text-white hover:bg-[#D9531E] flex items-center justify-center transition-all border border-slate-700 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full bg-[#1E2E45] text-white hover:bg-[#D9531E] flex items-center justify-center transition-all border border-slate-700 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Featured Testimonial Card */}
        <div className="bg-[#0B192C]/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden mb-10">
          <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-800/40 pointer-events-none" />

          <div className="space-y-6 relative z-10 max-w-4xl">
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-amber-300 ml-2">5.0 / 5.0 Rating</span>
            </div>

            {/* Quote Text */}
            <p className="text-slate-200 text-base sm:text-xl font-medium leading-relaxed italic">
              "{testimonials[activeIndex].quote}"
            </p>

            {/* Author Profile Details */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#D9531E] text-white font-extrabold text-xl flex items-center justify-center shadow-lg border border-orange-400">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base text-white">{testimonials[activeIndex].author}</h4>
                    {testimonials[activeIndex].verified && (
                      <span className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" /> Verified Client
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{testimonials[activeIndex].role} • <span className="text-amber-300">{testimonials[activeIndex].project}</span></p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#1E2E45] px-4 py-2 rounded-full border border-slate-700 text-xs font-bold text-slate-300">
                <MapPin className="w-4 h-4 text-[#D9531E]" />
                <span>{testimonials[activeIndex].location}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Testimonial Thumbnail Switcher Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1E2E45] border-[#D9531E] shadow-xl scale-[1.02]"
                    : "bg-[#0B192C]/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#D9531E] uppercase">{t.location.split(",")[0]}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 italic mb-3">"{t.quote}"</p>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#061224] text-white text-xs font-bold flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-white">{t.author}</h5>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
