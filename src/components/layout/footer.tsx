"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-[#061224] text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: About & Social */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center group">
              <div className="relative h-20 sm:h-24 w-[340px] sm:w-[480px] transition-transform group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="M Design Studio Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              We design and build spaces that inspire, innovate and stand the test of time. Empaneled architect for Patna & Madhubani Municipal Corporations.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#D9531E] flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#D9531E] flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              
              
              <a href="mailto:mdesignstudio626@gmail.com" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#D9531E] flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-[#D9531E]/40 pb-1.5 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D9531E] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D9531E] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D9531E] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#D9531E] transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D9531E] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D9531E] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D9531E] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-[#D9531E]/40 pb-1.5 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services#architectural" className="hover:text-[#D9531E] transition-colors">Architectural Design</Link>
              </li>
              <li>
                <Link href="/services#interior" className="hover:text-[#D9531E] transition-colors">Interior Design</Link>
              </li>
              <li>
                <Link href="/services#structural" className="hover:text-[#D9531E] transition-colors">Structural Design</Link>
              </li>
              <li>
                <Link href="/services#vastu" className="hover:text-[#D9531E] transition-colors">Vastu Consulting</Link>
              </li>
              <li>
                <Link href="/services#3d-visualization" className="hover:text-[#D9531E] transition-colors">3D Visualisation</Link>
              </li>
              <li>
                <Link href="/services#site-mgmt" className="hover:text-[#D9531E] transition-colors">Site Management</Link>
              </li>
              <li>
                <Link href="/services#drawing-approval" className="hover:text-[#D9531E] transition-colors">Drawing Approval</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Branches */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-[#D9531E]/40 pb-1.5 inline-block">
              Our Branches
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>Patna, Bihar</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>Darbhanga, Bihar</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>Madhubani, Bihar</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>Khajauli, Bihar</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>Rajnagar (Bihar)</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Get In Touch */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-[#D9531E]/40 pb-1.5 inline-block">
              Get In Touch
            </h3>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#D9531E] shrink-0 mt-0.5" />
              <div>
               
                <p className="text-slate-400">Lakho Binda Campus
Near Santu nagar chowk, Madhubani 
Bihar-847211</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#D9531E] shrink-0" />
              <a href="tel:+917011733185" className="hover:text-white transition-colors">
                +91 85870 08925, 70117 33185
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-[#D9531E] shrink-0" />
              <a href="mailto:ar.mahesh118@gmail.com" className="hover:text-white transition-colors break-all">
                ar.mahesh118@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2024 M Design Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
