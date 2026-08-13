"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Building2,
  Palette,
  Layers,
  Compass,
  Eye,
  Calculator,
  HardHat,
  FileCheck,
  CheckCircle2,
  Trees,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";
import { servicesData, ServiceDetail } from "@/data/services-data";

const iconMap: Record<string, any> = {
  Building2,
  Palette,
  Layers,
  Compass,
  Eye,
  Calculator,
  HardHat,
  FileCheck,
  CheckCircle2,
  Trees,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPreviewImg, setSelectedPreviewImg] = useState<string | null>(null);

  const serviceId = (params?.id as string) || "architectural";
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const IconComp = iconMap[service.iconName] || Building2;

  // Next and Previous Service navigation
  const currentIndex = servicesData.findIndex((s) => s.id === service.id);
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                             */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-14 sm:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImg}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-25 blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between text-xs">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#D9531E] transition-colors font-bold bg-[#0B192C] px-3.5 py-1.5 rounded-xl border border-slate-700 shadow"
            >
              <ArrowLeft className="w-4 h-4 text-[#D9531E]" />
              <span>All Services</span>
            </Link>

            <div className="flex items-center gap-2 text-slate-400 font-semibold hidden sm:flex">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>&gt;</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-bold">{service.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-12 h-12 rounded-2xl bg-[#D9531E] text-white flex items-center justify-center shadow-lg shrink-0">
              <IconComp className="w-6 h-6" />
            </div>
            <span className="bg-orange-500/20 text-orange-300 text-xs font-black uppercase px-3 py-1 rounded-full border border-orange-500/30">
              Professional Service
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl">
            {service.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
            {service.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 text-xs"
            >
              <span>Inquire for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN DETAILED CONTENT GRID                                             */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Service Content (8 Cols) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Service Main Featured Image */}
            <div className="relative h-[300px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <Image
                src={service.heroImg}
                alt={service.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                <span className="font-semibold">{service.title} — M Design Studio</span>
                <span className="bg-[#D9531E] font-bold px-2.5 py-0.5 rounded text-[10px] uppercase">Empaneled Architect</span>
              </div>
            </div>

            {/* Detailed Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#061224] tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#D9531E] rounded-full inline-block"></span>
                <span>Service Overview</span>
              </h2>

              {service.overview.map((para, idx) => (
                <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Deliverables (What's Included) */}
            <div className="bg-gradient-to-br from-[#061224] to-[#0B192C] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#D9531E]" />
                  <span>Key Deliverables & Documentation</span>
                </h2>
                <span className="text-[10px] bg-[#D9531E] px-2.5 py-1 rounded font-bold uppercase">Included</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-[#1E2E45]/60 border border-slate-700/60 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9531E] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-semibold leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process (Step-by-Step Execution) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-[#061224] tracking-tight">
                  Our Step-by-Step Workflow
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  How we execute your project smoothly from start to finish
                </p>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div key={step.step} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#061224] text-[#D9531E] font-black text-lg flex items-center justify-center shrink-0 border border-slate-800 shadow">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#061224]">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits (Why Choose Us) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-[#061224] flex items-center gap-2">
                <Award className="w-6 h-6 text-[#D9531E]" />
                <span>Why Choose M Design Studio for {service.title}?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="p-5 bg-orange-50/60 rounded-xl border border-orange-200/60 space-y-2">
                    <h3 className="font-bold text-sm text-[#061224] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D9531E]" />
                      <span>{b.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Works Gallery */}
            {service.sampleImages && service.sampleImages.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black text-[#061224]">
                    Sample Projects & Visualizations
                  </h2>
                  <Link href="/gallery" className="text-xs font-bold text-[#D9531E] hover:underline flex items-center gap-1">
                    <span>View All Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.sampleImages.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPreviewImg(imgSrc)}
                      className="relative h-48 rounded-xl overflow-hidden border border-slate-200 cursor-pointer group shadow-sm"
                    >
                      <Image src={imgSrc} alt="Sample work" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                        Click to view full photo
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-black text-[#061224] flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#D9531E]" />
                  <span>Frequently Asked Questions</span>
                </h2>

                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-all">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#061224] bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#D9531E] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Next / Previous Service Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <Link
                href={`/services/${prevService.id}`}
                className="w-full sm:w-auto p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#D9531E] flex items-center gap-3 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 text-[#D9531E] group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Previous Service</span>
                  <span className="text-xs font-bold text-[#061224] group-hover:text-[#D9531E]">{prevService.title}</span>
                </div>
              </Link>

              <Link
                href={`/services/${nextService.id}`}
                className="w-full sm:w-auto p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#D9531E] flex items-center justify-end gap-3 transition-all group ml-auto"
              >
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Next Service</span>
                  <span className="text-xs font-bold text-[#061224] group-hover:text-[#D9531E]">{nextService.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#D9531E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </main>

          {/* Right Sticky Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Book Consultation Widget */}
            <div className="bg-[#061224] text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4 sticky top-24">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D9531E] text-white flex items-center justify-center shadow">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Require {service.title}?</h3>
                  <p className="text-[10px] text-slate-400">Get Free Consultation & Estimate</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with Ar. Mahesh Kumar Choudhary and our engineering team for customized solutions.
              </p>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold py-3 rounded-xl shadow text-xs flex items-center justify-center gap-2"
              >
                <span>Request {service.title} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <a href="tel:+917011733185" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#D9531E]" />
                  <span>+91 85870 08925 / 70117 33185</span>
                </a>
                <a href="mailto:ar.mahesh118@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#D9531E]" />
                  <span className="truncate">ar.mahesh118@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Quick Switch to All Services Menu */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-[#061224] border-b border-slate-100 pb-2">
                All Our Services
              </h3>
              <div className="space-y-1.5">
                {servicesData.map((s) => {
                  const isCurrent = s.id === service.id;
                  const IconComponent = iconMap[s.iconName] || Building2;
                  return (
                    <Link
                      key={s.id}
                      href={`/services/${s.id}`}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isCurrent
                          ? "bg-[#D9531E] text-white shadow"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#D9531E]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <IconComponent className={`w-4 h-4 ${isCurrent ? "text-white" : "text-[#D9531E]"}`} />
                        <span>{s.title}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 ${isCurrent ? "text-white" : "text-slate-400"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* Lightbox Image Preview */}
      {selectedPreviewImg && (
        <div
          onClick={() => setSelectedPreviewImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full h-[80vh] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <Image src={selectedPreviewImg} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
