"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  User,
  FileText,
  MessageSquare,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationModal from "@/components/ui/consultation-modal";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER BANNER                                                      */}
      {/* ========================================================================= */}
      <section className="relative bg-[#061224] text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_luxury_villa.png"
            alt="Contact Hero Background"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-[#D9531E] font-semibold">Contact</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Get In Touch
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-[#D9531E]">
              Let's Build Something Amazing Together
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We'd love to hear about your project. Reach out to us for consultations, collaborations, or any queries.
            </p>

            {/* 4 Pill Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-2.5 rounded-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D9531E]" />
                <span className="text-xs font-bold text-slate-200">Expert Guidance</span>
              </div>

              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-2.5 rounded-xl flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D9531E]" />
                <span className="text-xs font-bold text-slate-200">On-Time Delivery</span>
              </div>

              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-2.5 rounded-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9531E]" />
                <span className="text-xs font-bold text-slate-200">Transparent Process</span>
              </div>

              <div className="bg-[#0B192C]/80 border border-slate-700/80 p-2.5 rounded-xl flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D9531E]" />
                <span className="text-xs font-bold text-slate-200">Client Satisfaction</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SEND US A MESSAGE FORM & CONTACT INFORMATION                            */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#061224]">Send Us a Message</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Message Received!</h3>
                  <p className="text-xs text-emerald-700">
                    Thank you <span className="font-bold">{formData.name}</span>. Our architectural team will call you back on <span className="font-mono font-bold">{formData.phone}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D9531E]"
                      ></textarea>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="rounded text-[#D9531E] focus:ring-[#D9531E]"
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-[#D9531E] underline font-semibold">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-[#D9531E] underline font-semibold">
                        Terms & Conditions
                      </Link>
                      .
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg flex items-center gap-2 text-xs"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </Button>

                </form>
              )}
            </div>

            {/* Right Column: Contact Information & Interactive Map (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#061224] border-b border-slate-200 pb-2">
                  Contact Information
                </h3>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#061224]">Head Office</h4>
                      <p className="text-slate-500">Patna, Bihar, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#061224]">Branch Office</h4>
                      <p className="text-slate-500">Darbhanga, Bihar, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#061224]">Phone</h4>
                      <a href="tel:+917011733185" className="text-slate-700 hover:text-[#D9531E] font-bold block">
                        +91 85870 08925, 70117 33185
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#061224]">Email</h4>
                      <a href="mailto:mdesignstudio626@gmail.com" className="text-slate-700 hover:text-[#D9531E] font-semibold break-all">
                        mdesignstudio626@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#D9531E] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#061224]">Working Hours</h4>
                      <p className="text-slate-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-slate-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Visual Graphic */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-slate-300 shadow-inner bg-slate-200 mt-4 flex items-center justify-center">
                  {/* Street map style SVG graphic */}
                  <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center opacity-90">
                    <div className="w-full h-full p-4 flex flex-col justify-between text-[9px] font-sans text-slate-500">
                      <div className="flex justify-between font-bold">
                        <span>Patna Museum</span>
                        <span>Gandhi Maidan</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Boring Road</span>
                        <span>Danapur</span>
                      </div>
                    </div>
                  </div>

                  {/* Red Location Pin Badge */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#D9531E] text-white flex items-center justify-center shadow-xl animate-bounce">
                      <MapPin className="w-6 h-6 fill-white" />
                    </div>
                    <span className="bg-[#061224] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow mt-1">
                      M Design Studio Patna
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CONNECT WITH US?                                                   */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[#D9531E] font-extrabold text-xs uppercase tracking-wider">
                WHY CONNECT WITH US?
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#061224]">
                Your Vision, Our Expertise, Perfect Results
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From concept to completion, we ensure a seamless experience with creative solutions, quality designs, and dedicated support.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> Personalized Consultation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> Innovative & Functional Designs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> Sustainable & Cost-Effective Solutions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D9531E]" /> End-to-End Project Support</li>
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-[#D9531E] transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#061224]">Personalized Approach</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We listen, understand and create solutions tailored to your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-[#D9531E] transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#061224]">Innovative Designs</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Creative and functional designs that enhance beauty and efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-[#D9531E] transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#061224]">Timely Delivery</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We value your time and ensure on-time project completion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-[#D9531E] transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D9531E] flex items-center justify-center mb-2">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#061224]">End-to-End Support</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  From planning to execution, we're with you at every step.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DARK NAVY PRE-FOOTER BANNER WITH LIVING ROOM THUMBNAIL                  */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#061224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B192C] p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            
            <div className="flex items-center gap-4">
              <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-700 hidden sm:block">
                <Image src="/images/modern_interior.png" alt="Living Room" fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white">Ready to Start Your Project?</h2>
                <p className="text-xs text-slate-300">
                  Let's turn your ideas into reality. Schedule a  consultation with our experts today.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 text-xs"
              >
                <span>Book  Consultation</span>
              </Button>

              <div className="flex flex-col text-[10px] text-slate-400 space-y-1">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#D9531E]" /> No Obligation Consultation</span>
                <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-[#D9531E]" /> 100% Confidential Information</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
