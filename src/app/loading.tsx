"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#061224] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D9531E]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        
        {/* Animated Brand Emblem & Spinner Container */}
        <div className="relative flex items-center justify-center w-28 h-28 mb-8">
          
          {/* Outer Pulsing Glow Ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#D9531E] to-amber-500 opacity-20 blur-md animate-pulse" />

          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-[#D9531E] border-r-amber-500 animate-spin [animation-duration:1.5s]" />

          {/* Inner Counter-Spinning Ring */}
          <div className="absolute inset-2 rounded-xl border-2 border-transparent border-b-[#D9531E] border-l-slate-600 animate-spin [animation-direction:reverse] [animation-duration:1.2s]" />

          {/* Core Glass Card with Logo */}
          <div className="relative w-20 h-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-2xl p-2 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.webp"
              alt="M Design Studio Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full"
              priority
            />
          </div>

        </div>

        {/* Brand Title & Tagline */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase">
            MDesine <span className="text-[#D9531E]">Studio</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide max-w-xs flex items-center justify-center gap-1.5">
            <span>Crafting Architectural Excellence</span>
            <span className="inline-flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#D9531E] rounded-full animate-bounce [animation-delay:0ms]"></span>
              <span className="w-1.5 h-1.5 bg-[#D9531E] rounded-full animate-bounce [animation-delay:150ms]"></span>
              <span className="w-1.5 h-1.5 bg-[#D9531E] rounded-full animate-bounce [animation-delay:300ms]"></span>
            </span>
          </p>
        </div>

        {/* Progress Bar Loader */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full mt-6 overflow-hidden relative border border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D9531E] via-amber-500 to-[#D9531E] rounded-full animate-pulse"></div>
        </div>

      </div>
    </section>
  );
}