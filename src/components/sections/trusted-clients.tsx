"use client";

import { Building2, Home as HomeIcon, Hotel, GraduationCap } from "lucide-react";

export default function TrustedClients() {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-black text-[#061224]">
            Trusted By Leading <span className="text-[#D9531E]">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow transition-shadow">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-[#061224] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#D9531E]" />
            </div>
            <span className="text-xs font-black text-[#061224] uppercase tracking-wider">PATNA</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">MUNICIPAL CORPORATION</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow transition-shadow">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-[#061224] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#D9531E]" />
            </div>
            <span className="text-xs font-black text-[#061224] uppercase tracking-wider">MADHUBANI</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">MUNICIPAL CORPORATION</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow transition-shadow">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-[#061224] flex items-center justify-center">
              <HomeIcon className="w-5 h-5 text-[#D9531E]" />
            </div>
            <span className="text-xs font-black text-[#061224] uppercase tracking-wider">Residential</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">CLIENTS</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow transition-shadow">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-[#061224] flex items-center justify-center">
              <Hotel className="w-5 h-5 text-[#D9531E]" />
            </div>
            <span className="text-xs font-black text-[#061224] uppercase tracking-wider">Commercial</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">DEVELOPERS</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow transition-shadow col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-[#061224] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#D9531E]" />
            </div>
            <span className="text-xs font-black text-[#061224] uppercase tracking-wider">Institutional</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">CLIENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
