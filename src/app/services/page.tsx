"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Palette,
  Layers,
  Compass,
  Eye,
  Calculator,
  HardHat,
  FileCheck,
  CheckCircle2,
  Trees,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesList = [
    {
      id: "architectural",
      title: "Architectural Design",
      desc: "Innovative & functional architectural solutions for residential, commercial & institutional projects.",
      img: "/images/hero_luxury_villa.png",
      icon: Building2,
    },
    {
      id: "interior",
      title: "Interior Design",
      desc: "Beautiful, modern and comfortable interior spaces tailored to your lifestyle and requirements.",
      img: "/images/modern_interior.png",
      icon: Palette,
    },
    {
      id: "structural",
      title: "Structural Design",
      desc: "Safe, sustainable & cost-effective structural design solutions by expert engineers.",
      img: "/images/before_sketch.png",
      icon: Layers,
    },
    {
      id: "vastu",
      title: "Vastu Consulting",
      desc: "Vastu-compliant designs for positive energy, health, wealth & happiness.",
      img: "/images/before_sketch.png",
      icon: Compass,
    },
    {
      id: "3d-visualization",
      title: "3D Visualisation",
      desc: "Realistic 3D renders & walkthroughs to help you visualize your dream project before it's built.",
      img: "/images/after_rendered.png",
      icon: Eye,
    },
    {
      id: "estimation",
      title: "Estimation & Costing",
      desc: "Accurate estimation & cost planning to ensure transparency & budget control.",
      img: "/images/before_sketch.png",
      icon: Calculator,
    },
    {
      id: "site-mgmt",
      title: "Site Management",
      desc: "Professional site supervision to ensure quality construction & timely completion.",
      img: "/images/commercial_complex.png",
      icon: HardHat,
    },
    {
      id: "drawing-approval",
      title: "Drawing Approval",
      desc: "Municipal drawing approval support & documentation made hassle.",
      img: "/images/before_sketch.png",
      icon: FileCheck,
    },
    {
      id: "end-to-end",
      title: "End to End Services",
      desc: "From concept, design, approvals to execution & handover - we manage it all for you.",
      img: "/images/after_rendered.png",
      icon: CheckCircle2,
    },
    {
      id: "landscape",
      title: "Landscape Design",
      desc: "Green, sustainable & beautiful landscape designs that enhance your spaces.",
      img: "/images/after_rendered.png",
      icon: Trees,
    },
  ];

  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER                                                             */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_villa.png"
            alt="Architecture Services Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-semibold">Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Our Services
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
              End-to-end Architecture & Design Solutions
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We offer a complete range of architectural, interior and planning services tailored to your needs. From concept to completion, we design spaces that inspire and stand the test of time.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3 rounded-lg text-xs"
              >
                Explore Services
              </Button>
              <Link
                href="/projects"
                className="border border-slate-600 text-white hover:bg-slate-800 font-bold px-6 py-3 rounded-lg text-xs inline-flex items-center gap-2 transition-colors"
              >
                View Projects &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMPREHENSIVE ARCHITECTURE & DESIGN SERVICES GRID (10 CARDS)           */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="text-[#D9531E] font-extrabold text-xs uppercase tracking-wider">
              WHAT WE DO
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#061224]">
              Comprehensive Architecture & Design Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D9531E] transition-all flex flex-col justify-between group"
                >
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sm text-[#061224] leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">
                      {service.desc}
                    </p>
                  </div>

                  {/* Card Image */}
                  <div className="relative h-36 w-full">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="absolute bottom-3 left-3 text-xs font-bold text-white hover:text-[#D9531E] flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR DESIGN & DELIVERY PROCESS                                          */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-black text-[#061224] mb-10">
            Our Design & Delivery <span className="text-[#D9531E]">Process</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { num: "01", name: "Consultation", desc: "Understanding your needs, ideas & vision" },
              { num: "02", name: "Concept & Planning", desc: "Conceptual planning & design development" },
              { num: "03", name: "Design & Development", desc: "Detailed drawings, 3D views & technical development" },
              { num: "04", name: "Approvals", desc: "Municipal & statutory approvals handling" },
              { num: "05", name: "Execution", desc: "Quality construction with strict site management" },
              { num: "06", name: "Handover", desc: "Timely delivery & complete handover" },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2 hover:border-[#D9531E] transition-all">
                <div className="w-9 h-9 rounded-full bg-[#D9531E] text-white font-extrabold text-xs flex items-center justify-center mx-auto shadow">
                  {step.num}
                </div>
                <h4 className="font-bold text-xs text-[#061224]">{step.name}</h4>
                <p className="text-[10px] text-slate-500 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE M DESIGN STUDIO SUMMARY & STATS STRIP                        */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#061224]">
                Why Choose M Design Studio?
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> 15+ Years of Experience in Architecture & Design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> 100+ Successfully Completed Projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> Client-Centric Approach with Personalized Solutions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> On-Time Delivery with Transparent Workflow</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> Expert Team of Architects, Designers & Engineers</li>
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-3 sm:grid-cols-5 gap-3 text-center">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xl font-black text-[#061224]">100+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Projects</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xl font-black text-[#061224]">75+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Clients</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xl font-black text-[#061224]">15+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Years</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xl font-black text-[#061224]">10+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Architects</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 col-span-3 sm:col-span-1">
                <div className="text-xl font-black text-[#061224]">5+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Awards</div>
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
            <p className="text-xs text-slate-300 mt-1">Let's Design Something Amazing Together.</p>
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
