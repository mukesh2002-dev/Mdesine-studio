"use client";

import { Trophy } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    { title: "Best Architect", sub: "Award 2022" },
    { title: "Excellence in", sub: "Design 2021" },
    { title: "Top 10 Architects", sub: "Patna 2020" },
    { title: "Innovation in", sub: "Architecture 2019" },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-[#061224] mb-10">
          Awards & <span className="text-[#D9531E]">Recognitions</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-3"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-xs text-[#061224] uppercase tracking-wider">{award.title}</h4>
                <p className="text-[11px] text-slate-500 font-semibold">{award.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
