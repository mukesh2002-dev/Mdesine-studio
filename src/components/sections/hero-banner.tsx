"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  breadcrumb: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export default function HeroBanner({
  breadcrumb,
  title,
  subtitle,
  description,
  bgImage = "/images/hero_luxury_villa.png",
  children,
}: HeroBannerProps) {
  return (
    <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-[#D9531E] font-semibold">{breadcrumb}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {title}
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
            {subtitle}
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>

          {children}

        </div>
      </div>
    </section>
  );
}
