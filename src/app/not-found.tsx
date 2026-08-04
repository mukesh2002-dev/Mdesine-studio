import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#061224]">
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-12 gap-4 p-8 opacity-[0.06] pointer-events-none select-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="border border-slate-400 rounded-lg aspect-[3/4] self-end"
          />
        ))}
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D9531E]/20 blur-3xl" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-xl px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
          <Compass className="w-3.5 h-3.5 text-[#D9531E]" />
          Page Not Found
        </div>

        <div className="font-black leading-none tracking-tight">
          <span className="text-8xl sm:text-9xl bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            404
          </span>
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl font-bold">
          Looks like this wall is missing a blueprint.
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          The page you&apos;re looking for was either moved, renamed, or never built.
          Let&apos;s get you back to solid ground.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#D9531E] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#D9531E]/30 transition-all hover:bg-[#c4461a] hover:shadow-[#D9531E]/50"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}