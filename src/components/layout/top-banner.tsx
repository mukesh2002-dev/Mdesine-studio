"use client";

import { Award, Star, Clock, UserCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/social-icons";

export default function TopBanner() {
  const whatsappUrl =
    "https://wa.me/918587008925?text=Hello%20M%20Design%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20architectural%20and%20interior%20design%20services.";

  return (
    <div className="bg-[#061224] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left Side Highlights */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 font-medium text-slate-200">
            <Award className="w-3.5 h-3.5 text-[#D9531E]" />
            <span>Empaneled Architect of Patna & Madhubani Municipal Corporation</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>100+ Projects Delivered</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-[#D9531E]" />
            <span>15+ Years Experience</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D9531E]" />
            <span>24x7 Support</span>
          </div>
        </div>

        {/* Right Side Social & WhatsApp Links */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366] text-white px-2.5 py-0.5 rounded-full font-bold text-[11px] hover:bg-[#20bd5a] transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.142-1.087z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#D9531E] transition-colors p-1" aria-label="Facebook">
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D9531E] transition-colors p-1" aria-label="Instagram">
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#D9531E] transition-colors p-1" aria-label="LinkedIn">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#D9531E] transition-colors p-1" aria-label="YouTube">
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
