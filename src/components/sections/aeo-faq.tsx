"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Empanelment & Approval",
    question: "Is Ar. Mahesh Kumar Choudhary an empaneled architect in Patna and Madhubani?",
    answer: "Yes, Ar. Mahesh Kumar Choudhary is an officially Empaneled Architect of both Patna Municipal Corporation and Madhubani Municipal Corporation. M Design Studio handles complete map sanctioning, drawing approvals, and regulatory compliance for residential and commercial projects in Bihar.",
  },
  {
    category: "Services",
    question: "What services does M Design Studio offer in Bihar?",
    answer: "M Design Studio offers end-to-end Architectural Design, Interior Planning & Decoration, Earthquake-resistant Structural Engineering, 3D Elevation & 360° Walkthrough Visualizations, Vastu Shastra Consulting, Project Cost Estimation, and On-site Construction Supervision.",
  },
  {
    category: "Locations Served",
    question: "Which locations and cities are covered by M Design Studio?",
    answer: "Our principal offices and active project sites span Patna, Madhubani, Darbhanga, Khajauli, Rajnagar, and neighboring regions across Bihar, India.",
  },
  {
    category: "Vastu & Design",
    question: "Does M Design Studio incorporate Vastu Shastra in house floor plans?",
    answer: "Absolutely. Every architectural plan and floor layout designed by Ar. Mahesh Kumar Choudhary combines modern aesthetic architecture with authentic Vastu Shastra principles to ensure harmony, light, ventilation, and prosperity.",
  },
  {
    category: "Consultation & Booking",
    question: "How can I schedule a consultation for my home or commercial project?",
    answer: "You can book a free consultation by clicking the 'Get Consultation' button on our website, calling +91 8587008925 / +91 7011733185, or visiting our office at Lakho Binda Campus, Near Santu Nagar Chowk, Madhubani, Bihar.",
  },
];

export default function AeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Badge & Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D9531E]/10 text-[#D9531E] border border-[#D9531E]/20 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#061224] tracking-tight">
            Have Questions? <span className="text-[#D9531E]">We Have Answers</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Everything you need to know about architectural planning, municipal map approvals, and interior design in Bihar.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#061224] hover:text-[#D9531E] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D9531E] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#D9531E]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                    <div className="mt-3">
                      <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded tracking-wide">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
