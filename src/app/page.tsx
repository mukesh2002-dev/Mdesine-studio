"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

import HeroCarousel from "@/components/sections/hero-carousel";
import StatsCounter from "@/components/sections/stats-counter";
import TrustedClients from "@/components/sections/trusted-clients";
import ServicesGrid from "@/components/sections/services-grid";
import VisionToReality from "@/components/sections/vision-to-reality";
import FeaturedProjects from "@/components/sections/featured-projects";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ServiceFeatures from "@/components/sections/service-features";
import Testimonials from "@/components/sections/testimonials";
import LocationsMap from "@/components/sections/locations-map";
import AeoFaq from "@/components/sections/aeo-faq";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* 1. HERO CAROUSEL (3-4 Slides with Video & Image slides, Floating Form Removed!) */}
      <HeroCarousel onOpenConsultation={() => setIsModalOpen(true)} />

      {/* 2. STATS COUNTER & MUNICIPAL BADGES STRIP */}
      <StatsCounter />

      {/* 3. TRUSTED BY LEADING CLIENTS */}
      <TrustedClients />

      {/* 4. WE DESIGN FOR EVERY NEED */}
      <ServicesGrid />

      {/* 5. FROM VISION TO REALITY (BEFORE / AFTER INTERACTIVE SLIDER) */}
      <VisionToReality />

      {/* 6. FEATURED PROJECTS */}
      <FeaturedProjects />

      {/* 7. WHY CHOOSE M DESIGN STUDIO & OUR DESIGN PROCESS */}
      <WhyChooseUs />

      {/* 8. 4 FEATURED SERVICE CARDS */}
      <ServiceFeatures />

      {/* 9. TESTIMONIALS (REDESIGNED ULTRA-PREMIUM CAROUSEL) */}
      <Testimonials />

      {/* 10. AWARDS & RECOGNITIONS */}
      

      {/* 11. OUR PROJECT LOCATIONS (REDESIGNED INTERACTIVE BIHAR MAP & CITIES) */}
      <LocationsMap />

      {/* 12. FREQUENTLY ASKED QUESTIONS (AEO & FAQ SCHEMA) */}
      <AeoFaq />

      {/* 12. LATEST BLOG POSTS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061224]">
              Latest From <span className="text-[#D9531E]">Our Blog</span>
            </h2>
            <Link href="/blog" className="text-xs sm:text-sm font-bold text-[#D9531E] hover:underline flex items-center gap-1">
              <span>View All Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                date: "28 May, 2024",
                title: "Top Architecture Trends in 2024",
                img: "/images/hero_luxury_villa.png",
              },
              {
                date: "18 May, 2024",
                title: "How Vastu Can Improve Your Home",
                img: "/images/modern_interior.png",
              },
              {
                date: "10 May, 2024",
                title: "Interior Design Ideas for Modern Homes",
                img: "/images/after_rendered.png",
              },
              {
                date: "04 May, 2024",
                title: "Sustainable Architecture: Building a Better Future",
                img: "/images/commercial_complex.png",
              },
            ].map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-44 w-full">
                  <Image src={blog.img} alt={blog.title} fill className="object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block mb-1">
                      {blog.date}
                    </span>
                    <h3 className="font-bold text-xs text-[#061224] leading-snug">
                      {blog.title}
                    </h3>
                  </div>
                  <Link href="/blog" className="text-[11px] font-bold text-[#D9531E] hover:underline flex items-center gap-1">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PRE-FOOTER CTA BANNER */}
      <section className="py-16 bg-[#061224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B192C] p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Share your project idea with us and let our experts turn your dream into reality with creativity, precision and excellence.
              </p>
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm shrink-0"
            >
              <span>Get  Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/*  Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
