"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroCarouselProps {
  onOpenConsultation: () => void;
}

// Wave Text Animation Component
function WaveText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap gap-x-3 gap-y-1 text-white ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="inline-block text-white"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

export default function HeroCarousel({ onOpenConsultation }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    {
      id: 1,
      type: "image",
      src: "/images/hero_luxury_villa.png",
      tagline: "WELCOME TO M DESIGN STUDIO",
      title: "Designing Iconic Spaces, Building Timeless Experiences.",
      desc: "Award-winning Architecture, Interior Design, Structural Engineering, 3D Visualization & Project Management for Luxury Villas, Commercial Buildings and Modern Homes.",
      badge: "Empaneled Architect of Patna & Madhubani Municipal Corporation",
    },
    {
      id: 2,
      type: "video",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-modern-villa-with-a-swimming-pool-41484-large.mp4",
      poster: "/images/after_rendered.png",
      tagline: "CINEMATIC 3D WALKTHROUGH",
      title: "Experience Your Dream Space Before It Is Built.",
      desc: "Immersive photorealistic 3D video walkthroughs and architectural visualisations that bring blueprints to vibrant life.",
      badge: "State-of-the-Art 3D Animation & Virtual Reality",
    },
    {
      id: 3,
      type: "image",
      src: "/images/modern_interior.png",
      tagline: "LUXURY INTERIOR & VASTU DESIGN",
      title: "Crafting Sophisticated Living Spaces Tailored to You.",
      desc: "Harmonizing aesthetics, modern space planning, ambient lighting, and Vastu compliance for comfortable luxury living.",
      badge: "Vastu Compliant & Bespoke Modular Furniture",
    },
    {
      id: 4,
      type: "image",
      src: "/images/commercial_complex.png",
      tagline: "COMMERCIAL & INSTITUTIONAL",
      title: "Transforming Visionary Ideas Into Modern Landmarks.",
      desc: "Comprehensive engineering, drawing approvals, estimation and site supervision for commercial complexes & schools.",
      badge: "Patna & Madhubani Municipal Map Approval Support",
    },
  ];

  // Auto slide interval (6 seconds)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] bg-[#061224] text-white overflow-hidden border-b border-slate-800">
      
      {/* Slides Stack */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Media */}
            {slide.type === "video" ? (
              <div className="absolute inset-0 w-full h-full">
                <video
                  ref={videoRef}
                  src={slide.videoSrc}
                  poster={slide.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/80 to-transparent"></div>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.src || "/images/hero_luxury_villa.png"}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  className="object-cover scale-105 transition-transform duration-10000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/85 to-black/40"></div>
              </div>
            )}

            {/* Slide Animated Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              {isActive && (
                <div className="max-w-3xl space-y-5">
                  
                  {/* Animated Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9531E]/90 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.tagline}</span>
                  </motion.div>

                  {/* Wave Text Title Animation */}
                  <WaveText
                    key={`wave-${slide.id}`}
                    text={slide.title}
                    className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
                  />

                  {/* Animated Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl"
                  >
                    {slide.desc}
                  </motion.p>

                  {/* Animated Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap items-center gap-4 pt-2"
                  >
                    <Button
                      onClick={onOpenConsultation}
                      className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 text-sm sm:text-base"
                    >
                      <span>Get  Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <Link
                      href="/projects"
                      className="border-2 border-white/60 text-white hover:bg-white hover:text-[#061224] font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all flex items-center gap-2"
                    >
                      <span>View Our Portfolio</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  {/* Animated Contact Ribbon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-semibold"
                  >
                    <a href="tel:+918587008925" className="flex items-center gap-2 hover:text-[#D9531E] transition-colors">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5 text-[#D9531E]" />
                      </div>
                      <span>Call: +91 85870 08925</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                        <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                      </div>
                      <span>Patna | Darbhanga | Madhubani | Khajauli</span>
                    </div>
                  </motion.div>

                </div>
              )}
            </div>

          </div>
        );
      })}

      {/* Slide Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 text-white border border-white/20 hover:bg-[#D9531E] hover:border-[#D9531E] flex items-center justify-center transition-all shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 text-white border border-white/20 hover:bg-[#D9531E] hover:border-[#D9531E] flex items-center justify-center transition-all shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls Bar (Pagination Dots + Play/Pause/Mute) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-2xl">
        
        {/* Play / Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-slate-[#300] text-slate-300 hover:text-white transition-colors"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Video Mute Toggle (visible if current slide is video) */}
        {slides[currentSlide].type === "video" && (
          <button
            onClick={toggleVideoMute}
            className="text-slate-300 hover:text-[#D9531E] transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D9531E]" />}
          </button>
        )}

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "w-8 bg-[#D9531E]" : "w-2 bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <span className="text-[11px] font-mono font-bold text-slate-300">
          0{currentSlide + 1} / 0{slides.length}
        </span>
      </div>

    </section>
  );
}
