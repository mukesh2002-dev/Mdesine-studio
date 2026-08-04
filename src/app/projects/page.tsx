"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Heart,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  Home as HomeIcon,
  Search,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const projectsData = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Patna, Bihar",
      category: "Residential",
      img: "/images/hero_luxury_villa.png",
      desc: "A modern luxury villa designed with elegant architecture and premium comforts.",
      specs: "2-Story Villa | 4500 Sq.Ft | Swimming Pool & Smart Lighting",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Darbhanga, Bihar",
      category: "Residential",
      img: "/images/after_rendered.png",
      desc: "Contemporary apartment design with smart space planning & ventilation.",
      specs: "5-Story Complex | 12 Units | Underground Parking",
    },
    {
      id: 3,
      title: "Commercial Complex",
      location: "Madhubani, Bihar",
      category: "Commercial",
      img: "/images/commercial_complex.png",
      desc: "A fully functional commercial building designed for modern businesses.",
      specs: "4 Floors | Retail Showrooms | Glass Facade Architecture",
    },
    {
      id: 4,
      title: "School Building",
      location: "Khajauli, Bihar",
      category: "Institutional",
      img: "/images/commercial_complex.png",
      desc: "Spacious and safe school building designed for a better learning environment.",
      specs: "Campus Layout | 20 Classrooms | Outdoor Play Area",
    },
    {
      id: 5,
      title: "Modern Interior",
      location: "Patna, Bihar",
      category: "Interior",
      img: "/images/modern_interior.png",
      desc: "Luxury interior design with a perfect blend of aesthetics and functionality.",
      specs: "Modular Kitchen | Warm Ceiling Lighting | Italian Marble",
    },
    {
      id: 6,
      title: "Contemporary House",
      location: "Madhubani, Bihar",
      category: "Residential",
      img: "/images/after_rendered.png",
      desc: "Beautiful exterior design with modern materials and natural elements.",
      specs: "3000 Sq.Ft | Wood Accent Panels | Vastu Compliant",
    },
    {
      id: 7,
      title: "Landscape Design",
      location: "Patna, Bihar",
      category: "Landscape",
      img: "/images/after_rendered.png",
      desc: "A serene landscape design that brings nature and architecture together.",
      specs: "Garden Pathways | Outdoor Lighting | Water Feature",
    },
    {
      id: 8,
      title: "Office Building",
      location: "Patna, Bihar",
      category: "Commercial",
      img: "/images/commercial_complex.png",
      desc: "Modern office space designed for productivity and comfort.",
      specs: "Open Floor Plan | Executive Suites | Solar Energy System",
    },
  ];

  const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "Institutional",
    "Interior",
    "Landscape",
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER                                                             */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/after_rendered.png"
            alt="Our Projects Background"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-semibold">Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Our Projects
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
              Turning Ideas Into Iconic Spaces
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              A collection of our finest architectural, interior and construction projects that reflect our passion for design, attention to detail and commitment to excellence across Bihar.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-2">
              <div className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#D9531E]" /> Innovative Designs</div>
              <div className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#D9531E]" /> Quality Construction</div>
              <div className="flex items-center gap-1.5"><HomeIcon className="w-4 h-4 text-[#D9531E]" /> Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER TABS & LAYOUT TOGGLE                                             */}
      {/* ========================================================================= */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#D9531E] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode & Sort Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500">Sort by:</span>
              <select className="bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none">
                <option value="latest">Latest Projects</option>
                <option value="popular">Popular</option>
                <option value="oldest">Oldest</option>
              </select>

              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white shadow text-[#D9531E]" : "text-slate-500"}`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${viewMode === "list" ? "bg-white shadow text-[#D9531E]" : "text-slate-500"}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROJECT CARDS GRID / LIST VIEW                                          */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                : "space-y-6"
            }
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group ${
                  viewMode === "list" ? "flex flex-col md:flex-row items-center" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden ${
                    viewMode === "list" ? "w-full md:w-72 h-56 shrink-0" : "h-56 w-full"
                  }`}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Tag */}
                  <span className="absolute top-3 left-3 bg-[#061224] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                    {project.category}
                  </span>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(project.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-slate-700 hover:text-red-500 transition-colors shadow"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites[project.id] ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Details Section */}
                <div className="p-5 flex-1 space-y-3">
                  <div>
                    <h3 className="font-bold text-base text-[#061224] group-hover:text-[#D9531E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                      <span>{project.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#D9531E] hover:underline flex items-center gap-1 pt-1"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="w-9 h-9 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-lg bg-[#D9531E] text-white font-bold text-xs flex items-center justify-center shadow">
              1
            </button>
            <button className="w-9 h-9 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-100">
              2
            </button>
            <button className="w-9 h-9 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-100">
              3
            </button>
            <span className="text-slate-400 font-bold px-1">...</span>
            <button className="w-9 h-9 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center hover:bg-slate-100">
              8
            </button>
            <button className="w-9 h-9 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STATS COUNTER STRIP                                                    */}
      {/* ========================================================================= */}
      <section className="bg-white py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-2xl font-black text-[#061224]">100+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Projects Completed</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-2xl font-black text-[#061224]">75+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Happy Clients</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-2xl font-black text-[#061224]">15+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Years Experience</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-2xl font-black text-[#061224]">10+</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Expert Architects</div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Pre-Footer Banner */}
      <section className="py-12 bg-[#061224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black">Have a Project in Mind?</h2>
            <p className="text-xs text-slate-300 mt-1">Let's Build Something Amazing Together.</p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3 rounded-lg text-xs shrink-0"
          >
            Book  Consultation
          </Button>
        </div>
      </section>

      {/* Project Detail Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#061224] text-white rounded-2xl max-w-xl w-full overflow-hidden border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-[#D9531E]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-64 w-full">
              <Image src={selectedProject.img} alt={selectedProject.title} fill className="object-cover" />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs bg-[#D9531E] px-2.5 py-0.5 rounded font-bold uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.desc}</p>

              <div className="p-3 bg-[#1E2E45] rounded-xl text-xs text-amber-300 font-mono">
                {selectedProject.specs}
              </div>

              <Button
                onClick={() => {
                  setSelectedProject(null);
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold py-3 rounded-lg text-xs"
              >
                Inquire About Similar Project
              </Button>
            </div>
          </div>
        </div>
      )}

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
