"use client";

import { Award, Star, Clock, UserCheck } from "lucide-react";

const highlights = [
  { icon: Award, label: "Empaneled Architect of Patna & Madhubani Municipal Corporation", color: "text-[#D9531E]" },
  { icon: Star, label: "100+ Projects Delivered", color: "text-amber-400 fill-amber-400" },
  { icon: UserCheck, label: "15+ Years Experience", color: "text-[#D9531E]" },
  { icon: Clock, label: "24x7 Support", color: "text-[#D9531E]" },
];

export default function TopBanner() {
  return (
    <div className="overflow-hidden border-b border-slate-800/80 bg-[#061224] text-slate-200">
      <div className="marquee-track flex w-max min-w-full items-center gap-6 py-2.5 pl-4 pr-4 text-[11px] font-medium sm:text-xs">
        {[...highlights, ...highlights, ...highlights].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.label}-${index}`}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-slate-200"
            >
              <Icon className={`h-3.5 w-3.5 ${item.color}`} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 18s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
