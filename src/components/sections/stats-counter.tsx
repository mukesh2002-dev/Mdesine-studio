"use client";

import { Building2, Award, Star, Clock, CheckCircle2 } from "lucide-react";
import CountUp from "@/components/ui/count-up";

export default function StatsCounter() {
  return (
    <div>
      {/* 4 Counter Cards */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-100 text-[#D9531E] flex items-center justify-center mx-auto mb-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#061224]">150+</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-snug">Projects Completed</div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-100 text-[#D9531E] flex items-center justify-center mx-auto mb-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#061224]">15+</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-snug">Years of Experience</div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-100 text-[#D9531E] flex items-center justify-center mx-auto mb-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#061224]">98%</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-snug">Client Satisfaction</div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-100 text-[#D9531E] flex items-center justify-center mx-auto mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#061224]">24x7</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider leading-snug">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Navy Badges Bar */}
      <div className="bg-[#061224] text-white py-3.5 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9531E]" />
              <span>Municipal Approved</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9531E]" />
              <span>Licensed Architect</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9531E]" />
              <span>Structural Safety</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9531E]" />
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/5 px-2 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9531E]" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
