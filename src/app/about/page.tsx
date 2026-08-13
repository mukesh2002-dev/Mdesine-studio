"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Users,
  Target,
  Eye,
  Diamond,
  Play,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="space-y-0">

      {/* ========================================================================= */}
      {/* 1. HERO HEADER WITH ANGULAR CUTOUT                                         */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_villa.png"
            alt="Architectural Building Background"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-semibold">About Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              About Us
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
              Designing Spaces. Building Trust.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              M Design Studio is a leading architecture and design firm committed to delivering innovative, functional and sustainable spaces that enhance lives and inspire communities across Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE                                                              */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[#D9531E] font-extrabold text-xs tracking-wider uppercase">
                WHO WE ARE
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#061224] leading-tight">
                Designing with Passion, Delivering with Pride
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Led by Empaneled Architect Ar. Mahesh Kumar Choudhary, our studio has been at the forefront of architectural excellence in Patna, Madhubani and across Bihar. We believe every space has the power to inspire, improve life and leave a lasting impact.
                </p>
                <p>
                  With a perfect blend of creativity, technology and expertise, we provide end-to-end architectural, interior and planning solutions for residential, commercial, institutional and industrial projects.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-4">
                <div className="font-serif italic text-2xl text-[#D9531E] font-bold">
                  Ar. Mahesh Kumar Choudhary
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                  Chief Architect & Founder
                </div>
              </div>
            </div>

            {/* Right Image + Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <div className="relative h-[360px] sm:h-[420px] w-full">
                  <Image
                    src="/images/after_rendered.png"
                    alt="Luxury Building by M Design Studio"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-[#061224] text-white p-5 rounded-xl border border-slate-700 shadow-xl space-y-3">
                  <div>
                    <div className="text-2xl font-black text-[#D9531E]">15+</div>
                    <div className="text-[10px] uppercase font-bold text-slate-300">Years of Experience</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <div className="text-2xl font-black text-amber-400">100+</div>
                    <div className="text-[10px] uppercase font-bold text-slate-300">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUICK STATS STRIP                                                       */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-[#061224]">100+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">Projects Completed</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-[#061224]">75+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">Happy Clients</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-[#061224]">15+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">Years Experience</div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-[#061224]">10+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase mt-1">Expert Architects</div>
            </div>

            

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MISSION, VISION, VALUES CARDS                                          */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Our Mission */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#061224]">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To create innovative, functional and sustainable architectural solutions that exceed client expectations and enhance the quality of life.
              </p>
            </div>

            {/* Our Vision */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#061224]">Our Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be a trusted name in architecture and design by transforming ideas into iconic spaces and contributing to a better built environment.
              </p>
            </div>

            {/* Our Values */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center">
                <Diamond className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#061224]">Our Values</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Client-Centric Approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Quality & Integrity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Innovation & Creativity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Timely Delivery</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CHOOSE US + WATCH OUR STORY VIDEO                                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[#D9531E] font-extrabold text-xs tracking-wider uppercase">
                WHY CHOOSE US?
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#061224] leading-tight">
                Creating Value Through Design Excellence
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We bring a unique combination of creativity, technical expertise and personalized service to every project.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Innovative & Functional Designs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>End-to-End Project Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>On-Time & On-Budget Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Sustainable & Cost-Effective Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                  <span>Transparent Communication</span>
                </li>
              </ul>

              <Link
                href="/services"
                className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3 rounded-lg text-xs inline-flex items-center gap-2 transition-colors"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Video Thumbnail Overlay */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setIsVideoOpen(true)}
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border-4 border-white"
              >
                <Image
                  src="/images/modern_interior.png"
                  alt="M Design Studio Living Room Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#D9531E] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <span className="text-white font-bold text-sm bg-black/60 px-4 py-1.5 rounded-full border border-white/20">
                    Watch Our Story
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* ========================================================================= */}
      {/* 7. OUR JOURNEY TIMELINE (2009 to 2024)                                     */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-2xl sm:text-3xl font-black text-[#061224] mb-10">
            Our <span className="text-[#D9531E]">Journey</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
            {[
              { year: "2009", text: "Studio Established" },
              { year: "2011", text: "First Major Project Completed" },
              { year: "2014", text: "Expanded Team & New Office" },
              { year: "2017", text: "100+ Projects Milestone" },
              { year: "2020", text: "Award for Excellence in Architecture" },
              { year: "2024", text: "Continuing to Create Iconic Spaces" },
            ].map((milestone, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#D9531E] transition-all space-y-1">
                <div className="text-base font-black text-[#D9531E]">{milestone.year}</div>
                <div className="text-[11px] text-slate-600 font-semibold">{milestone.text}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pre-Footer Banner */}
      <section className="py-12 bg-[#061224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl font-black">Have a Project in Mind?</h2>
          <p className="text-xs text-slate-300">Let's work together to turn your ideas into reality.</p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3 rounded-lg text-xs"
          >
            Get  Consultation
          </Button>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
