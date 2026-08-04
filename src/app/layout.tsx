import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBanner from "@/components/layout/top-banner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "M Design Studio | Mahesh Kumar Choudhary - Architecture & Interior Design",
  description:
    "Empaneled Architect of Patna & Madhubani Municipal Corporation. Award-winning Architecture, Interior Design, Structural Engineering, 3D Visualization & Vastu Consulting in Patna, Darbhanga, Madhubani, Khajauli, Rajnagar.",
  keywords: [
    "M Design Studio",
    "Mahesh Kumar Choudhary Architect",
    "Patna Architect",
    "Madhubani Architect",
    "Darbhanga Architect",
    "Empaneled Architect Patna",
    "Interior Design Bihar",
    "3D Visualisation Architecture",
    "Vastu Consultant Bihar",
  ],
  authors: [{ name: "Mahesh Kumar Choudhary" }],
  creator: "M Design Studio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061224",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-[#0B192C] font-sans" suppressHydrationWarning>
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
