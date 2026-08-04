"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/+917011731195?text=Hi%2C%20I'm%20interested%20in%20your%20services.%20Please%20share%20more%20details.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group border border-white/20"
      title="Chat on WhatsApp"
    >
      <span className="relative flex h-2.5 w-2.5 absolute -top-0.5 -right-0.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300"></span>
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.142-1.087z" />
      </svg>
    </a>
  );
}
