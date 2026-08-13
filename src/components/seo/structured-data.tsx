import Script from "next/script";

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ArchitecturalService", "ProfessionalService"],
    "@id": "https://mdesinestudio.com/#organization",
    "name": "M Design Studio | Ar. Mahesh Kumar Choudhary",
    "alternateName": ["MDesine Studio", "M Design Studio Madhubani", "M Design Studio Patna"],
    "url": "https://mdesinestudio.com",
    "logo": "https://mdesinestudio.com/logo.svg",
    "image": "https://mdesinestudio.com/images/hero_luxury_villa.png",
    "description": "Empaneled Architect of Patna & Madhubani Municipal Corporation. Premier Architectural Design, Interior Design, Structural Design, 3D Visualization, Estimation & Vastu Consulting in Bihar.",
    "telephone": ["+917011733185", "+918587008925"],
    "email": "ar.mahesh118@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lakho Binda Campus, Near Santu Nagar Chowk",
      "addressLocality": "Madhubani",
      "addressRegion": "Bihar",
      "postalCode": "847211",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.3534,
      "longitude": 86.0722
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Patna",
        "sameAs": "https://en.wikipedia.org/wiki/Patna"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Madhubani",
        "sameAs": "https://en.wikipedia.org/wiki/Madhubani,_India"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Darbhanga",
        "sameAs": "https://en.wikipedia.org/wiki/Darbhanga"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Khajauli"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Rajnagar"
      },
      {
        "@type": "State",
        "name": "Bihar",
        "sameAs": "https://en.wikipedia.org/wiki/Bihar"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Ar. Mahesh Kumar Choudhary",
      "jobTitle": "Principal Architect & Founder",
      "description": "Empaneled Architect of Patna & Madhubani Municipal Corporation with 15+ years experience."
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Architectural & Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architectural Design",
            "description": "Custom house elevations, floor plans, and building designs approved by Municipal Corporations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Design",
            "description": "Luxury residential & commercial interior design, modular kitchens, and lighting design."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Design",
            "description": "Earthquake-resistant structural engineering and RCC design calculation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vastu Consulting",
            "description": "Traditional & modern Vastu Shastra consultation for houses and commercial buildings."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3D Visualisation",
            "description": "Photorealistic 3D exterior & interior rendering and walk-through animation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drawing Approval",
            "description": "Official map approval & sanctioning from Patna and Madhubani Municipal Corporations."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://linkedin.com",
      "https://youtube.com"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the principal architect at M Design Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ar. Mahesh Kumar Choudhary is the founder and Principal Architect of M Design Studio, with over 15 years of experience in architectural, structural, and interior design across Bihar."
        }
      },
      {
        "@type": "Question",
        "name": "Is M Design Studio empaneled with Municipal Corporations in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ar. Mahesh Kumar Choudhary and M Design Studio are official Empaneled Architects of both Patna Municipal Corporation and Madhubani Municipal Corporation for map sanctioning and drawing approvals."
        }
      },
      {
        "@type": "Question",
        "name": "Which locations in Bihar are served by M Design Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M Design Studio provides architectural and interior design services across Patna, Madhubani, Darbhanga, Khajauli, Rajnagar, and surrounding districts in Bihar."
        }
      },
      {
        "@type": "Question",
        "name": "What services are provided by M Design Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M Design Studio specializes in Architectural Planning, Interior Design, Structural Engineering, Vastu Consulting, 3D Elevation & Walkthrough Visualizations, Cost Estimation, Site Supervision, and Municipal Map Sanction Approvals."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a free architectural consultation with M Design Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a consultation by calling +91 8587008925 or +91 7011733185, sending an email to ar.mahesh118@gmail.com, or filling out the online consultation form on mdesinestudio.com."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mdesinestudio.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://mdesinestudio.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://mdesinestudio.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://mdesinestudio.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://mdesinestudio.com/contact"
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
