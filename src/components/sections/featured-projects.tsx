"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Luxury Villa",
      location: "Patna",
      img: "/images/Gallery/Residential2.jpg",
      tag: "Residential",
    },
    {
      title: "Commercial Complex",
      location: "Madhubani",
      img: "/images/Gallery/Commercial2.jpg",
      tag: "Commercial",
    },
    {
      title: "Modern Apartment",
      location: "Darbhanga",
      img: "/images/Gallery/Residential10.jpg",
      tag: "Apartment",
    },
    {
      title: "School Building",
      location: "Khajauli",
      img: "/images/Gallery/Institutional.jpeg",
      tag: "Institutional",
    },
    {
      title: "Hospital Building",
      location: "Patna",
      img: "/images/Gallery/Residential12.jpg",
      tag: "Hospital",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#061224]">
              Featured <span className="text-[#D9531E]">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-bold text-[#D9531E] hover:underline flex items-center gap-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] bg-[#D9531E] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-1 inline-block">
                    {project.tag}
                  </span>
                  <h3 className="font-bold text-sm text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D9531E]" />
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
