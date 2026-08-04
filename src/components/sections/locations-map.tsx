"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Building2, CheckCircle2, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationsMap() {
  const [activeCity, setActiveCity] = useState("Patna");

  const locations = [
    {
      id: "Patna",
      name: "Patna",
      type: "Head Office",
      projects: "45+ Delivered",
      accreditation: "Patna Municipal Corporation Empaneled Architect",
      address: "Head Office: Patna, Bihar, India",
      phone: "+91 85870 08925, 70117 33185",
      email: "mdesignstudio626@gmail.com",
      highlights: ["Luxury Villas", "Commercial Complexes", "Drawing Approvals"],
    },
    {
      id: "Madhubani",
      name: "Madhubani",
      type: "Municipal Branch",
      projects: "30+ Delivered",
      accreditation: "Madhubani Municipal Corporation Authorized Architect",
      address: "Branch Office: Madhubani, Bihar, India",
      phone: "+91 85870 08925, 70117 33185",
      email: "mdesignstudio626@gmail.com",
      highlights: ["Commercial Buildings", "Residential Homes", "Vastu Consultation"],
    },
    {
      id: "Darbhanga",
      name: "Darbhanga",
      type: "Branch Office",
      projects: "25+ Delivered",
      accreditation: "Structural Engineering & 3D Visualization Hub",
      address: "Branch Office: Darbhanga, Bihar, India",
      phone: "+91 85870 08925, 70117 33185",
      email: "mdesignstudio626@gmail.com",
      highlights: ["Apartment Complexes", "Structural Design", "Interior Work"],
    },
    {
      id: "Khajauli",
      name: "Khajauli",
      type: "Project Location",
      projects: "15+ Delivered",
      accreditation: "School & Institutional Planning Hub",
      address: "Khajauli, Bihar, India",
      phone: "+91 85870 08925",
      email: "mdesignstudio626@gmail.com",
      highlights: ["School Buildings", "Institutional Planning", "Landscaping"],
    },
    {
      id: "Rajnagar",
      name: "Rajnagar",
      type: "Project Location",
      projects: "10+ Delivered",
      accreditation: "Heritage & Villa Design Projects",
      address: "Rajnagar (Bihar), India",
      phone: "+91 85870 08925",
      email: "mdesignstudio626@gmail.com",
      highlights: ["Heritage Architecture", "Luxury Residences", "Costing"],
    },
  ];

  const currentLoc = locations.find((l) => l.id === activeCity) || locations[0];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#D9531E] font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>BIHAR FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#061224] tracking-tight">
            Our Project <span className="text-[#D9531E]">Locations</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Empaneled architects operating across Patna, Madhubani, Darbhanga, Khajauli, and Rajnagar in Bihar.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {locations.map((loc) => {
            const isActive = loc.id === activeCity;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveCity(loc.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-extrabold text-xs transition-all shadow-sm ${
                  isActive
                    ? "bg-[#061224] text-white ring-2 ring-[#D9531E] shadow-xl scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <MapPin className={`w-4 h-4 ${isActive ? "text-[#D9531E]" : "text-slate-400"}`} />
                <span>{loc.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-[#D9531E] text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {loc.projects}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Location Visual & Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Map Visualization (7 Cols) */}
          <div className="lg:col-span-7 bg-[#061224] text-white rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#1E2E45_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#D9531E]" />
                <span className="text-xs font-bold text-slate-300">BIHAR REGIONAL NETWORK</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                ● Live Operations
              </span>
            </div>

            {/* Glowing Map Pins Display */}
            <div className="relative z-10 my-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {locations.map((loc) => {
                const isActive = loc.id === activeCity;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setActiveCity(loc.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                      isActive
                        ? "bg-[#D9531E] border-orange-400 text-white shadow-2xl scale-105"
                        : "bg-[#0B192C]/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#1E2E45]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="relative flex items-center justify-center">
                        {isActive && (
                          <span className="absolute w-6 h-6 rounded-full bg-white/40 animate-ping"></span>
                        )}
                        <MapPin className={`w-5 h-5 relative z-10 ${isActive ? "text-white" : "text-[#D9531E]"}`} />
                      </div>
                      <span className="text-[10px] font-bold opacity-80">{loc.type}</span>
                    </div>

                    <h4 className="font-extrabold text-sm text-white">{loc.name}</h4>
                    <p className="text-[11px] font-mono opacity-90 mt-0.5">{loc.projects}</p>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Empaneled Architect of Patna & Madhubani Corporations</span>
              <span className="text-white font-bold">100+ Total Projects</span>
            </div>

          </div>

          {/* Right: Selected Location Detail Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] bg-orange-100 text-[#D9531E] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {currentLoc.type}
                </span>
                <h3 className="text-2xl font-black text-[#061224] mt-2">
                  {currentLoc.name} Office
                </h3>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-[#D9531E]">{currentLoc.projects}</span>
              </div>
            </div>

            {/* Accreditation */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#061224] font-bold">
              <Award className="w-4 h-4 text-[#D9531E] shrink-0" />
              <span>{currentLoc.accreditation}</span>
            </div>

            {/* Address & Contact */}
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9531E] shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-800">{currentLoc.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D9531E] shrink-0" />
                <a href={`tel:${currentLoc.phone.split(',')[0].trim()}`} className="font-bold text-[#061224] hover:text-[#D9531E]">
                  {currentLoc.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D9531E] shrink-0" />
                <a href={`mailto:${currentLoc.email}`} className="font-medium text-slate-700 hover:text-[#D9531E]">
                  {currentLoc.email}
                </a>
              </div>
            </div>

            {/* Specialization Badges */}
            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Specializations</h5>
              <div className="flex flex-wrap gap-1.5">
                {currentLoc.highlights.map((h, i) => (
                  <span key={i} className="bg-slate-100 text-slate-800 text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#D9531E]" /> {h}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="tel:+917011733185"
              className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold py-3.5 rounded-xl shadow-md text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Connect With {currentLoc.name} Office</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
