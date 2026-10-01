import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, Eye, UserCheck, HelpCircle, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | M Design Studio - Ar. Mahesh Kumar Choudhary",
  description:
    "Privacy Policy for M Design Studio. Learn how we collect, use, and protect your personal information, architectural project data, and communications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#061224] text-white py-14 lg:py-20 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div 
          className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D9531E]/10 blur-3xl" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#D9531E] font-semibold">Privacy Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9531E]/10 border border-[#D9531E]/30 text-[#D9531E] text-xs font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Data Protection & Trust</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-300">
              Last updated: October 2024 • M Design Studio (Ar. Mahesh Kumar Choudhary)
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-10">
            
            {/* Introductory Callout */}
            <div className="p-5 rounded-xl bg-orange-50/60 border border-orange-200/70 text-slate-800 text-sm leading-relaxed flex gap-4">
              <Lock className="h-6 w-6 text-[#D9531E] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-bold mb-1">Our Privacy Commitment</strong>
                At <strong>M Design Studio</strong>, headed by <strong>Ar. Mahesh Kumar Choudhary</strong> (Empaneled Architect of Patna & Madhubani Municipal Corporation), we treat your privacy and client confidentiality with utmost care. This Privacy Policy outlines how your personal information and architectural project files are collected, utilized, and safeguarded.
              </div>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">1</span>
                Information We Collect
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When you interact with M Design Studio through our website, consultation forms, site visits, or WhatsApp inquiries, we may collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li><strong>Personal Identity Info:</strong> Name, phone number, email address, mailing address, and preferred contact mode.</li>
                <li><strong>Project Specifications:</strong> Plot measurements, site locations (Patna, Madhubani, Darbhanga, etc.), municipal approval details, budget preferences, and design vision.</li>
                <li><strong>Technical & Usage Data:</strong> IP addresses, browser type, device information, and site interaction data captured via cookies for analytical performance.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">2</span>
                How We Use Your Information
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your data is exclusively used to deliver high-quality architectural, structural, and interior design services:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li>Processing design consultation requests, 3D visualization, and cost estimations.</li>
                <li>Preparing structural drawings and submitting official house plan approvals to <strong>Patna Municipal Corporation (PMC)</strong> or <strong>Madhubani Municipal Corporation</strong>.</li>
                <li>Communicating project updates, site supervision schedules, and invoicing details.</li>
                <li>Enhancing user experience on our website and ensuring robust digital security.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">3</span>
                Information Sharing & Disclosure
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We strictly maintain confidentiality. We do not sell, rent, or trade your personal information to third parties. Disclosure only occurs under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li><strong>Government & Municipal Authorities:</strong> Necessary submission of architectural blueprints, soil reports, and owner details for municipal map approvals.</li>
                <li><strong>Subcontracted Engineers & Consultants:</strong> Sharing relevant structural or Vastu requirements with vetted team members strictly for project execution.</li>
                <li><strong>Legal Compliance:</strong> When required by Indian law, judicial court orders, or statutory regulatory bodies.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">4</span>
                Data Security & Protection
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We implement physical, technical, and administrative safeguards to protect your personal information and architectural CAD files against unauthorized access, loss, or alteration. All electronic communication and data stores are protected behind secure networks.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">5</span>
                Cookies & Web Analytics
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our website uses standard cookies to optimize your browsing experience and understand traffic patterns. You may choose to disable cookies in your web browser settings without affecting core website browsing functionality.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">6</span>
                Your Rights & Data Choices
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                You have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or ask for the deletion of non-statutory records. Contact us directly to exercise these rights.
              </p>
            </div>

            {/* Section 7 - Contact Box */}
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-[#061224] flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#D9531E]" />
                Contact Privacy Representative
              </h3>
              <p className="text-slate-600 text-sm">
                If you have any questions or concerns regarding this Privacy Policy, please reach out to us:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-100 bg-slate-50">
                  <MapPin className="h-5 w-5 text-[#D9531E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Head Office:</strong>
                    Lakho Binda Campus Near Santu nagar chowk, Madhubani Bihar - 847211
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-100 bg-slate-50">
                  <Mail className="h-5 w-5 text-[#D9531E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email & Support:</strong>
                    <a href="mailto:ar.mahesh118@gmail.com" className="text-[#D9531E] hover:underline">
                      ar.mahesh118@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
