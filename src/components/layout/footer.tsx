"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Award, 
  Clock, 
  Building2,
  ExternalLink
} from "lucide-react";
import { 
  FacebookIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon 
} from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-[#061224] text-slate-200 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div 
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D9531E]/5 blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8 relative z-10">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Profile & Overview (Desktop: 4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group focus:outline-none focus:ring-2 focus:ring-[#D9531E] rounded-lg">
              <div className="relative h-12 w-52 sm:h-14 sm:w-60 lg:h-16 lg:w-64 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="M Design Studio Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-300 max-w-md">
              Official Empaneled Architect of Patna & Madhubani Municipal Corporation. 
              Delivering innovative, sustainable, and functional Architectural & Interior Design 
              solutions across Bihar.
            </p>

            {/* Empaneled Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-lg border border-[#D9531E]/30 bg-[#D9531E]/10 px-3.5 py-2 text-xs font-semibold text-[#D9531E] backdrop-blur-sm">
              <Award className="h-4 w-4 shrink-0" />
              <span>Empaneled Architect • Govt. Certified</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Follow Us</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-[#D9531E] hover:bg-[#D9531E] hover:text-white hover:scale-110 shadow-sm"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-[#D9531E] hover:bg-[#D9531E] hover:text-white hover:scale-110 shadow-sm"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-[#D9531E] hover:bg-[#D9531E] hover:text-white hover:scale-110 shadow-sm"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all duration-300 hover:border-[#D9531E] hover:bg-[#D9531E] hover:text-white hover:scale-110 shadow-sm"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Desktop: 2 cols) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h3 className="relative inline-block text-base font-bold uppercase tracking-wider text-white pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-8 after:bg-[#D9531E]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#D9531E]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-[#D9531E]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (Desktop: 3 cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-4">
            <h3 className="relative inline-block text-base font-bold uppercase tracking-wider text-white pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-8 after:bg-[#D9531E]">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              {[
                { href: "/services#architectural", label: "Architectural Design" },
                { href: "/services#interior", label: "Interior Design" },
                { href: "/services#structural", label: "Structural Design" },
                { href: "/services#vastu", label: "Vastu Consulting" },
                { href: "/services#3d-visualization", label: "3D Visualisation" },
                { href: "/services#estimation", label: "Estimation & Costing" },
                { href: "/services#site-mgmt", label: "Site Management" },
                { href: "/services#drawing-approval", label: "Drawing Approval" },
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#D9531E]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-[#D9531E]" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch & Branches (Desktop: 3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-5">
            <h3 className="relative inline-block text-base font-bold uppercase tracking-wider text-white pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-8 after:bg-[#D9531E]">
              Get In Touch
            </h3>

            <div className="space-y-3.5 text-sm text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-[#D9531E] group-hover:border-[#D9531E]/40 group-hover:bg-[#D9531E]/10 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="leading-relaxed text-xs sm:text-sm pt-0.5">
                  Lakho Binda Campus Near Santu nagar chowk, Madhubani, Bihar - 847211
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-[#D9531E] group-hover:border-[#D9531E]/40 group-hover:bg-[#D9531E]/10 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm">
                  <a href="tel:+918587008925" className="transition-colors hover:text-white hover:underline">
                    +91 85870 08925
                  </a>
                  <span className="text-slate-600">|</span>
                  <a href="tel:+917011733185" className="transition-colors hover:text-white hover:underline">
                    +91 70117 33185
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-[#D9531E] group-hover:border-[#D9531E]/40 group-hover:bg-[#D9531E]/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <a 
                  href="mailto:ar.mahesh118@gmail.com" 
                  className="text-xs sm:text-sm transition-colors hover:text-white hover:underline break-all"
                >
                  ar.mahesh118@gmail.com
                </a>
              </div>
            </div>

            
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
          <p>© {new Date().getFullYear()} M Design Studio. All Rights Reserved.</p>
          
          <div className="flex items-center justify-center gap-4 text-xs">
            <Link href="/privacy" className="transition-colors hover:text-slate-200">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="transition-colors hover:text-slate-200">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            
          </div>
        </div>

      </div>
    </footer>
  );
}

