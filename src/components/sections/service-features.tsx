"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function ServiceFeatures() {
  const services = [
    {
      title: "Interior Design",
      sub: "Crafting Beautiful Interiors",
      img: "/images/modern_interior.png",
    },
    {
      title: "3D Visualization",
      sub: "Realistic 3D Renders",
      img: "/images/after_rendered.png",
    },
    {
      title: "Video Walkthrough",
      sub: "Experience Your Future Space",
      img: "/images/hero_luxury_villa.png",
      hasPlay: true,
    },
    {
      title: "Landscape Design",
      sub: "Green Spaces, Better Living",
      img: "/images/after_rendered.png",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden h-64 border border-slate-800 group shadow-lg cursor-pointer"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {service.hasPlay && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#D9531E] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="font-bold text-base text-white">{service.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5">{service.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
