"use client";

import Image from "next/image";
import { Sparkles, Award, Layers, Clock } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Col: Why Choose Us */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#061224] mb-2">
                Why Choose <span className="text-[#D9531E]">M Design Studio?</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#061224]">Innovative & Functional Designs</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Creative solutions tailored to your lifestyle and business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#061224]">Experienced Team</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    15+ years of expertise in architecture, planning & design.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#061224]">End-to-End Services</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    From concept, design, approvals to execution and handover.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#061224]">On-Time & On-Budget</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    We respect your time and investment with transparent workflow.
                  </p>
                </div>
              </div>

            </div>

            {/* Living Room Interior Image */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/modern_interior.png"
                alt="Modern Living Room Interior Design"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* Right Col: Our Design Process (6 Steps Timeline) */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-black text-[#061224]">
                Our Design Process
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Structured 6-step architectural workflow from concept to completion
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { num: "01", name: "Consultation", desc: "Understanding your needs & vision" },
                { num: "02", name: "Planning", desc: "Concept layout & estimation" },
                { num: "03", name: "Design", desc: "2D/3D design & visualization" },
                { num: "04", name: "Approval", desc: "Municipal & statutory approvals" },
                { num: "05", name: "Execution", desc: "Construction with quality control" },
                { num: "06", name: "Handover", desc: "Timely delivery & after support" },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 text-center hover:border-[#D9531E] hover:shadow-md transition-all space-y-1.5"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-[#D9531E] font-black text-xs flex items-center justify-center mx-auto">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-xs text-[#061224]">{step.name}</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
