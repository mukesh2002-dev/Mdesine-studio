"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import ConsultationModal from "@/components/ui/consultation-modal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { 
    href: "/services", 
    label: "Services", 
    hasDropdown: true,
    subLinks: [
      { href: "/services#architectural", label: "Architectural Design" },
      { href: "/services#interior", label: "Interior Design" },
      { href: "/services#structural", label: "Structural Design" },
      { href: "/services#vastu", label: "Vastu Consulting" },
      { href: "/services#3d-visualization", label: "3D Visualisation" },
      { href: "/services#estimation", label: "Estimation & Costing" },
      { href: "/services#site-mgmt", label: "Site Management" },
      { href: "/services#drawing-approval", label: "Drawing Approval" },
    ]
  },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-2 xl:gap-4 overflow-visible">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0 pr-6">
              <div className="relative h-14 sm:h-16 w-52 sm:w-64 scale-[1.45] origin-left transition-transform group-hover:scale-[1.5]">
                <Image
                  src="/logo.svg"
                  alt="M Design Studio Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-all rounded-md flex items-center gap-1 ${
                        isActive
                          ? "text-[#D9531E] border-b-2 border-[#D9531E] rounded-b-none"
                          : "text-slate-700 hover:text-[#D9531E] hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D9531E] transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Services Submenu Dropdown */}
                    {link.hasDropdown && (
                      <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-xs font-medium text-slate-700 hover:text-[#D9531E] hover:bg-slate-50 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold px-3.5 xl:px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-xs xl:text-sm"
              >
                <span>Get  Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer">
                  <Menu className="h-5 w-5 text-slate-800" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-white">
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                        <div className="relative h-16 sm:h-18 w-60 sm:w-72">
                          <Image
                            src="/logo.svg"
                            alt="M Design Studio Logo"
                            fill
                            className="object-contain object-left"
                            priority
                          />
                        </div>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5 text-slate-500" />
                      </Button>
                    </div>

                    {/* Nav Items */}
                    <div className="flex-1 py-6 space-y-2 overflow-y-auto">
                      {navLinks.map((link) => (
                        <div key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                              pathname === link.href
                                ? "bg-orange-50 text-[#D9531E]"
                                : "text-slate-800 hover:bg-slate-50"
                            }`}
                          >
                            <span>{link.label}</span>
                          </Link>

                          {link.hasDropdown && (
                            <div className="ml-4 pl-3 border-l-2 border-slate-100 my-1 space-y-1">
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#D9531E]"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA Bottom */}
                    <div className="pt-4 border-t border-slate-100">
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          setIsModalOpen(true);
                        }}
                        className="w-full bg-[#D9531E] hover:bg-[#C84C1C] text-white font-bold py-3 rounded-lg shadow"
                      >
                        Get  Consultation
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </header>

      {/* ree Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
