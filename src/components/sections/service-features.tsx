"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export default function ServiceFeatures() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
      img: "/images/Gallery/Residential18.jpeg",
      hasPlay: true,
    },
    {
      title: "Landscape Design",
      sub: "Green Spaces, Better Living",
      img: "/images/after_rendered.png",
    },
  ];

  return (
    <>
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => service.hasPlay && setIsVideoOpen(true)}
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

      {isVideoOpen && (
        <div
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-black shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              controls
              autoPlay
              className="h-[70vh] w-full object-cover"
              poster="/images/Gallery/Residential18.jpeg"
            >
              <source src="/images/Gallery/Residentialvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
