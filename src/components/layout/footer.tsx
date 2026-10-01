"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Menu } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-[#061224] text-slate-200">
      <div className="mx-auto max-w-[480px] px-4 pb-8 pt-5 sm:max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 pb-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-[170px] sm:h-14 sm:w-[220px] lg:w-[230px]">
              <Image
                src="/logo.webp"
                alt="M Design Studio Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          <button
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-200"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-4 pb-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-[#0b2235] text-slate-100 transition-colors hover:bg-[#D9531E]"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-[#0b2235] text-slate-100 transition-colors hover:bg-[#D9531E]"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          <a
            href="mailto:mdesignstudio626@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-[#0b2235] text-slate-100 transition-colors hover:bg-[#D9531E]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="space-y-7 border-t border-slate-700/70 pt-6">
          <div>
            <h3 className="mb-3 inline-block border-b border-[#D9531E]/80 pb-1 text-base font-black uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-base font-medium text-slate-200">
              <li><Link href="/" className="transition-colors hover:text-[#D9531E]">Home</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-[#D9531E]">About Us</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-[#D9531E]">Services</Link></li>
              <li><Link href="/projects" className="transition-colors hover:text-[#D9531E]">Projects</Link></li>
              <li><Link href="/gallery" className="transition-colors hover:text-[#D9531E]">Gallery</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-[#D9531E]">Blog</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-[#D9531E]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 inline-block border-b border-[#D9531E]/80 pb-1 text-base font-black uppercase tracking-wide text-white">
              Our Services
            </h3>
            <ul className="space-y-2 text-base font-medium text-slate-200">
              <li><Link href="/services#architectural" className="transition-colors hover:text-[#D9531E]">Architectural Design</Link></li>
              <li><Link href="/services#interior" className="transition-colors hover:text-[#D9531E]">Interior Design</Link></li>
              <li><Link href="/services#structural" className="transition-colors hover:text-[#D9531E]">Structural Design</Link></li>
              <li><Link href="/services#vastu" className="transition-colors hover:text-[#D9531E]">Vastu Consulting</Link></li>
              <li><Link href="/services#3d-visualization" className="transition-colors hover:text-[#D9531E]">3D Visualisation</Link></li>
              <li><Link href="/services#site-mgmt" className="transition-colors hover:text-[#D9531E]">Site Management</Link></li>
              <li><Link href="/services#drawing-approval" className="transition-colors hover:text-[#D9531E]">Drawing Approval</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 inline-block border-b border-[#D9531E]/80 pb-1 text-base font-black uppercase tracking-wide text-white">
              Our Branches
            </h3>
            <ul className="space-y-3 text-base font-medium text-slate-200">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <span>Patna, Bihar</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <span>Darbhanga, Bihar</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <span>Madhubani, Bihar</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <span>Khajauli, Bihar</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <span>Rajnagar (Bihar)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 inline-block border-b border-[#D9531E]/80 pb-1 text-base font-black uppercase tracking-wide text-white">
              Get In Touch
            </h3>

            <div className="space-y-3 text-base text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#D9531E]" />
                <p className="leading-relaxed">Lakho Binda Campus Near Santu nagar chowk, Madhubani Bihar-847211</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <a href="tel:+917011733185" className="transition-colors hover:text-white">+91 85870 08925, 70117 33185</a>
              </div>

              <div className="flex items-center gap-3 break-all">
                <Mail className="h-4 w-4 shrink-0 text-[#D9531E]" />
                <a href="mailto:ar.mahesh118@gmail.com" className="transition-colors hover:text-white">ar.mahesh118@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t border-slate-700/70 pt-4 text-center text-xs text-slate-400">
          <p>© 2024 M Design Studio. All Rights Reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-slate-200">Privacy Policy</Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms" className="transition-colors hover:text-slate-200">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
