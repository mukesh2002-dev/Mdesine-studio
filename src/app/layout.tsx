import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBanner from "@/components/layout/top-banner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import StructuredData from "@/components/seo/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdesinestudio.com"),
  title: {
    default: "M Design Studio | Ar. Mahesh Kumar Choudhary - Architecture & Interior Design Bihar",
    template: "%s | M Design Studio",
  },
  description:
    "Official Empaneled Architect of Patna & Madhubani Municipal Corporation. Award-winning Architectural Design, Interior Design, Structural Engineering, 3D Elevation & Walkthroughs, Cost Estimation, and Vastu Consulting in Patna, Madhubani, Darbhanga, Khajauli, Rajnagar, Bihar.",
  keywords: [
    "M Design Studio",
    "Ar. Mahesh Kumar Choudhary Architect",
    "Best Architect in Patna",
    "Best Architect in Madhubani",
    "Best Architect in Darbhanga",
    "Empaneled Architect Patna Municipal Corporation",
    "Empaneled Architect Madhubani Municipal Corporation",
    "Interior Design Bihar",
    "3D Visualisation Architecture Patna",
    "Vastu Consultant Bihar",
    "House Map Approval Patna",
    "Structural Engineer Bihar",
    "Rajnagar Architect",
    "Khajauli Architect",
  ],
  authors: [{ name: "Ar. Mahesh Kumar Choudhary", url: "https://mdesinestudio.com" }],
  creator: "M Design Studio",
  publisher: "M Design Studio",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M Design Studio | Ar. Mahesh Kumar Choudhary - Architect Bihar",
    description:
      "Empaneled Architect of Patna & Madhubani Municipal Corporation. Premier Architectural, Interior & Structural Design Services in Bihar.",
    url: "https://mdesinestudio.com",
    siteName: "M Design Studio",
    images: [
      {
        url: "/images/hero_luxury_villa.png",
        width: 1200,
        height: 630,
        alt: "M Design Studio Architecture & Interior Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Design Studio | Ar. Mahesh Kumar Choudhary - Architect Bihar",
    description:
      "Empaneled Architect of Patna & Madhubani Municipal Corporation. Premium Architectural & Interior Design in Bihar.",
    images: ["/images/hero_luxury_villa.png"],
    creator: "@mdesinestudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.webp",
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Madhubani, Patna, Bihar, India",
    "geo.position": "26.3534;86.0722",
    "ICBM": "26.3534, 86.0722",
  },
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
        <StructuredData />
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
