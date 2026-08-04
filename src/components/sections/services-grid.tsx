"use client";

import { Home as HomeIcon, Hotel, Building2, GraduationCap, Briefcase, Layers, Palette, Trees } from "lucide-react";

export default function ServicesGrid() {
  const needs = [
    { icon: HomeIcon, label: "Residential" },
    { icon: Hotel, label: "Commercial" },
    { icon: Building2, label: "Hospital" },
    { icon: GraduationCap, label: "School" },
    { icon: Briefcase, label: "Office" },
    { icon: Layers, label: "Apartment" },
    { icon: Palette, label: "Interior" },
    { icon: Trees, label: "Landscape" },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-[#061224]">
            We Design For <span className="text-[#D9531E]">Every Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {needs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#D9531E] hover:bg-orange-50/40 hover:shadow-lg transition-all text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#061224] group-hover:bg-[#D9531E] group-hover:text-white flex items-center justify-center mx-auto mb-3 shadow-sm transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#061224] block">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
