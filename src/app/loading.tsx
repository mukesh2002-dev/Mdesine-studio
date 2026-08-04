export default function Loading() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-[#061224]">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700/40" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D9531E] animate-spin" />
            <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-sky-400 animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
          </div>
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-400 animate-pulse">
          Building your space
        </p>
      </div>
    </section>
  );
}