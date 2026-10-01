import { Metadata } from "next";
import Link from "next/link";
import { Scale, CheckCircle2, AlertCircle, FileCheck2, HelpCircle, Mail, Phone, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | M Design Studio - Ar. Mahesh Kumar Choudhary",
  description:
    "Terms & Conditions governing architectural, structural, Vastu, and interior design services provided by M Design Studio (Empaneled Architect Patna & Madhubani).",
};

export default function TermsAndConditionsPage() {
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
              <span className="text-[#D9531E] font-semibold">Terms & Conditions</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9531E]/10 border border-[#D9531E]/30 text-[#D9531E] text-xs font-semibold">
              <Scale className="h-3.5 w-3.5" />
              <span>Legal Terms & Service Guidelines</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Terms & Conditions
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
            <div className="p-5 rounded-xl bg-slate-900 text-white text-sm leading-relaxed flex gap-4">
              <FileCheck2 className="h-6 w-6 text-[#D9531E] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-bold mb-1">Service Agreement Notice</strong>
                Welcome to <strong>M Design Studio</strong>. By engaging our architectural consultancy, interior design, structural drafting, Vastu solutions, or site management services, you agree to comply with the terms and conditions set forth below.
              </div>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">1</span>
                Scope of Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                M Design Studio provides architectural and engineering design services led by <strong>Ar. Mahesh Kumar Choudhary</strong> (Empaneled Architect of Patna Municipal Corporation & Madhubani Municipal Corporation). Our service offerings include:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li>Architectural floor plan drafting, elevation design, and 3D walkthrough rendering.</li>
                <li>Structural engineering calculations, foundation layouts, and soil report analysis.</li>
                <li>Preparation and filing of municipal house plan map approvals in Patna, Madhubani, Darbhanga, Khajauli, and Rajnagar.</li>
                <li>Interior layout design, material selection, and Vastu consultation.</li>
                <li>Periodic site supervision and construction quality checks.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">2</span>
                Consultation, Quotations & Payment Terms
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                All project cost estimates, design fees, and stage-wise payment schedules will be specified in the project quotation or formal service contract:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li>Initial advance payments are non-refundable once preliminary concept drafting has commenced.</li>
                <li>Stage payments (e.g., 2D Plan Approval, Structural Release, 3D Elevation Delivery) must be settled before proceeding to the subsequent project phase.</li>
                <li>Municipal map approval government fees, statutory duties, and sanction charges are separate from consultancy fees unless explicitly specified.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">3</span>
                Intellectual Property & Ownership Rights
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                All architectural concepts, CAD drawings, 3D elevation renders, structural designs, and documentation generated by M Design Studio remain the intellectual property of the studio until full contract payment is realized:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li>Upon full settlement of professional fees, the client is granted a non-exclusive license to use the drawings for construction on the specified plot site.</li>
                <li>Drawings or 3D models may not be resold, reused on secondary sites, or published without prior written consent from M Design Studio.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">4</span>
                Municipal Approval & Government Regulations
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                While Ar. Mahesh Kumar Choudhary is an official Empaneled Architect of Patna & Madhubani Municipal Corporations, map approval timelines depend on municipal department processing:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm pl-2">
                <li>Clients are responsible for providing authentic land ownership titles, LPC documents, and accurate site coordinates.</li>
                <li>M Design Studio is not liable for approval delays resulting from municipal policy shifts, land dispute litigations, or unverified client ownership records.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">5</span>
                Client Responsibilities & Site Access
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clients agree to facilitate timely site visits for structural inspection and supply clear project requirements. Any major design alterations requested after final drawing sign-off may incur additional drafting charges.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#061224] flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#D9531E] text-xs font-bold">6</span>
                Limitation of Liability & Governing Law
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                M Design Studio delivers engineering and architectural services adhering to standard Indian Building Codes (NBC) and IS Codes. We are not liable for construction flaws caused by third-party contractors failing to adhere to our approved structural specifications.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts located in <strong>Madhubani / Patna, Bihar</strong>.
              </p>
            </div>

            {/* Section 7 - Contact Box */}
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-[#061224] flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#D9531E]" />
                Questions Regarding Terms
              </h3>
              <p className="text-slate-600 text-sm">
                For questions or clarifications regarding our terms of service, please contact our administrative desk:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-100 bg-slate-50">
                  <Building2 className="h-5 w-5 text-[#D9531E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Studio Office:</strong>
                    Lakho Binda Campus Near Santu nagar chowk, Madhubani Bihar - 847211
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-100 bg-slate-50">
                  <Phone className="h-5 w-5 text-[#D9531E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Phone Support:</strong>
                    <a href="tel:+918587008925" className="text-[#D9531E] hover:underline">
                      +91 85870 08925 / 70117 33185
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
