"use client";

import { CheckCircle2 } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/before-after-slider";

export default function VisionToReality() {
  return (
    <section className="py-16 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            From Vision To <span className="text-[#D9531E]">Reality</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Drag the interactive handle to compare architectural 3D sketch vs finished photorealistic building
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left side: Interactive Slider */}
          <div className="lg:col-span-8">
            <BeforeAfterSlider
              beforeImage="/images/before_sketch.png"
              afterImage="/images/after_rendered.png"
            />
          </div>

          {/* Right side: Dark Navy Card */}
          <div className="lg:col-span-4 bg-[#061224] p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Transforming Ideas Into Landmarks
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                We blend creativity, technology & precision to deliver spaces that are aesthetic, functional and future-ready.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                <span>Concept to Completion</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                <span>Modern Technology</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                <span>Transparent Process</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9531E]" />
                <span>Unmatched Quality</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <div className="font-serif italic text-lg text-amber-400 font-bold tracking-wide">
                Ar. Mahesh Kumar Choudhary
              </div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                Chief Architect & Founder
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
