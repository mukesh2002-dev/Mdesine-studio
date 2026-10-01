"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, User, Mail, MapPin, Building, ArrowRight, CheckCircle2, X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Patna",
    projectType: "Residential",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-[#061224] text-white border border-slate-800 shadow-2xl rounded-[22px]">
        <DialogHeader className="p-5 bg-[#0B192C] border-b border-slate-800 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center justify-start gap-3 pb-4 border-b border-slate-700/80 mb-4">
            <div className="bg-white px-3 py-2.5 rounded-[14px] shadow-md border border-slate-100 flex items-center justify-start min-h-[62px] min-w-[180px]">
              <Image
                src="/logo.webp"
                alt="M Design Studio Logo"
                width={220}
                height={72}
                priority
                className="h-auto w-[200px] object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <DialogTitle className="text-[26px] font-black text-white flex items-center gap-3 leading-tight">
              <Calendar className="w-6 h-6 text-[#D9531E] shrink-0" />
              <span>Book Architectural Consultation</span>
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-sm leading-relaxed">
              Speak directly with Ar. Mahesh Kumar Choudhary &amp; Expert Architectural Team
            </DialogDescription>
          </div>
        </DialogHeader>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white">Consultation Requested!</h3>
            <p className="text-sm text-slate-300">
              Thank you, <span className="text-[#D9531E] font-semibold">{formData.name || "Valued Client"}</span>. Our architectural team will call you back shortly on <span className="font-mono text-white">{formData.phone}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-[0.12em] mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1E2E45]/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-[0.12em] mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="+91 Enter 10-digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1E2E45]/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                />
              </div>
            </div>

            {/* Location & Project Type */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-[0.12em] mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#1E2E45]/80 border border-slate-700 rounded-xl pl-9 pr-3 py-3 text-xs text-white focus:outline-none focus:border-[#D9531E]"
                  >
                    <option value="Patna">Patna</option>
                    <option value="Darbhanga">Darbhanga</option>
                    <option value="Madhubani">Madhubani</option>
                    <option value="Khajauli">Khajauli</option>
                    <option value="Rajnagar">Rajnagar (Bihar)</option>
                    <option value="Other">Other Location</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase tracking-[0.12em] mb-2">
                  Project Type
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#1E2E45]/80 border border-slate-700 rounded-xl pl-9 pr-3 py-3 text-xs text-white focus:outline-none focus:border-[#D9531E]"
                  >
                    <option value="Residential">Residential Villa/House</option>
                    <option value="Commercial">Commercial Building</option>
                    <option value="Apartment">Apartment Complex</option>
                    <option value="Hospital/School">School / Hospital</option>
                    <option value="Interior">Interior Design</option>
                    <option value="Landscape">Landscape Design</option>
                    <option value="Vastu">Vastu Consultation</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              type="submit"
              className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 mt-2 transition-all text-lg"
            >
              <span>Schedule Meeting</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
