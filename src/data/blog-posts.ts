export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  img: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  content: {
    intro: string;
    takeaways: string[];
    sections: {
      heading: string;
      body: string;
      subHeading?: string;
      subBody?: string;
      quote?: string;
      image?: string;
      bullets?: string[];
    }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "modern-architecture-trends-future-homes",
    category: "Architecture",
    date: "May 20, 2024",
    readTime: "5 min read",
    title: "Modern Architecture Trends Shaping the Future of Homes",
    excerpt: "Discover the latest architectural trends that are redefining modern homes. From sustainable materials to smart design concepts, explore what's shaping the future across Bihar and India.",
    img: "/images/Gallery/Residential12.jpg",
    author: {
      name: "Ar. Ar. Mahesh Kumar Choudhary",
      role: "Chief Architect & Founder, M Design Studio",
      avatar: "/logo.webp",
      bio: "Empaneled Architect for Patna & Madhubani Municipal Corporations with over 15+ years of architectural & structural design excellence.",
    },
    tags: ["Modern Architecture", "Home Design", "Sustainable Design", "3D Visualization", "Bihar Real Estate"],
    content: {
      intro: "Residential architecture is undergoing a remarkable evolution. Today's homeowners demand spaces that are not only visually breathtaking but also functionally versatile, energy-efficient, and deeply connected with natural elements. At M Design Studio, we integrate modern aesthetics with climate-responsive planning to build homes that stand out.",
      takeaways: [
        "Open-concept indoor-outdoor spaces maximizing natural light and ventilation.",
        "Integration of eco-friendly sustainable materials like fly-ash bricks and solar roof panels.",
        "Smart space utilization designed according to modern Vastu Principles.",
        "Seamless fusion of contemporary minimalist facades with traditional Indian courtyard concepts.",
      ],
      sections: [
        {
          heading: "1. Biophilic Integration and Natural Lighting",
          body: "One of the most prominent trends in 2024 architecture is biophilic design—connecting building occupants with natural light, green spaces, and fresh ventilation. By installing strategically positioned skylights, floor-to-ceiling glass windows, and internal garden courtyards, we create homes that reduce artificial lighting costs while improving overall wellness.",
          quote: "Architecture is not just about creating structures; it is about creating atmospheres where light, space, and life harmoniously interact.",
          image: "/images/Gallery/Residential2.jpg",
        },
        {
          heading: "2. Energy Efficiency & Smart Material Selection",
          body: "With rising energy costs and climate considerations in regional areas like Patna and Madhubani, sustainable insulation and thermal comfort are top priorities. Utilizing high thermal-mass concrete, double-glazed windows, and natural stone cladding helps maintain comfortable indoor temperatures round the year.",
          bullets: [
            "Solar Panel Integration: Designing roofs with optimal orientation for maximum solar harvesting.",
            "Rainwater Harvesting Systems: Built-in drainage channels connected to subterranean storage pits.",
            "Local Sourcing: Using locally crafted tiles, stone, and timber to reduce carbon footprint.",
          ],
        },
        {
          heading: "3. Smart Modular Spaces & Multi-Generational Layouts",
          body: "Modern Indian families require adaptable layouts. Living spaces are engineered with flexible partition systems that easily transform into home offices, guest rooms, or entertainment hubs.",
        },
      ],
      conclusion: "Whether you are planning a duplex villa in Patna or a contemporary house in Madhubani, incorporating these forward-thinking architectural trends ensures high property value, sustainability, and long-lasting elegance.",
    },
  },
  {
    id: 2,
    slug: "minimalist-interior-design-less-is-more",
    category: "Interior Design",
    date: "May 14, 2024",
    readTime: "4 min read",
    title: "Minimalist Interior Design: Less is More",
    excerpt: "Learn how minimalist interior design creates serene, functional spaces with elegance and simplicity while maximizing space and natural light.",
    img: "/images/modern_interior.png",
    author: {
      name: "Ar. Ar. Mahesh Kumar Choudhary",
      role: "Chief Architect & Founder, M Design Studio",
      avatar: "/logo.webp",
      bio: "Empaneled Architect for Patna & Madhubani Municipal Corporations with over 15+ years of architectural & structural design excellence.",
    },
    tags: ["Interior Design", "Minimalism", "Living Room", "Modular Kitchen", "Vastu Interior"],
    content: {
      intro: "Minimalist interior design goes beyond clean aesthetics—it is a philosophy of intentional living. By stripping away clutter and focusing on high-quality materials, warm neutral palettes, and sleek custom cabinetry, minimalist interiors transform crowded spaces into serene sanctuaries.",
      takeaways: [
        "Neutral color palettes paired with textured wood and stone accents.",
        "Concealed modular storage to maintain clutter-free surfaces.",
        "Strategic ambient & accent lighting to highlight key architectural features.",
      ],
      sections: [
        {
          heading: "1. The Power of Neutral Palettes & Texture",
          body: "Minimalism does not mean cold or sterile. By pairing warm beige, off-white, and warm gray backdrops with natural timber cladding, brass fixtures, and soft textiles, we craft cozy yet spacious interiors.",
          quote: "Simplicity is the ultimate sophistication in modern luxury interior design.",
          image: "/images/modern_interior.png",
        },
        {
          heading: "2. Modular Kitchens & Smart Storage",
          body: "Clutter-free countertops are achievable with custom pull-out larders, hidden appliance garages, and handleless acrylic cabinetry.",
        },
      ],
      conclusion: "Minimalism brings balance and calm to daily life. Contact M Design Studio to craft tailor-made minimalist interiors for your home or apartment.",
    },
  },
  {
    id: 3,
    slug: "step-by-step-construction-process-guide",
    category: "Construction",
    date: "May 08, 2024",
    readTime: "6 min read",
    title: "Step-by-Step Construction Process: From Concept to Creation",
    excerpt: "A detailed guide on our construction process that ensures quality, transparency, and timely delivery for every project we undertake.",
    img: "/images/before_sketch.png",
    author: {
      name: "Ar. Ar. Mahesh Kumar Choudhary",
      role: "Chief Architect & Founder, M Design Studio",
      avatar: "/logo.webp",
      bio: "Empaneled Architect for Patna & Madhubani Municipal Corporations with over 15+ years of architectural & structural design excellence.",
    },
    tags: ["Construction", "Site Management", "Drawing Approval", "Structural Integrity"],
    content: {
      intro: "Building your dream space should be an exciting journey, not a stressful ordeal. Understanding the step-by-step construction workflow helps homeowners plan budgets, timelines, and municipal approvals smoothly.",
      takeaways: [
        "Comprehensive site survey, soil testing & structural analysis.",
        "Municipal map approval and statutory clearances.",
        "Precision execution from foundation layout to superstructure completion.",
      ],
      sections: [
        {
          heading: "Phase 1: Planning, Site Soil Analysis & Architectural Drawings",
          body: "Before turning a single shovel of earth, precise 2D floor plans, 3D elevations, and structural calculation drawings are finalized. Soil bearing capacity is tested to determine foundation depth.",
          image: "/images/Gallery/Commercial2.jpg",
        },
        {
          heading: "Phase 2: Municipal Approvals & Excavation",
          body: "As an empaneled architectural firm for Patna & Madhubani Municipal Corporations, M Design Studio handles drawing approvals and structural safety certificates directly, avoiding project delays.",
        },
      ],
      conclusion: "With structured site management and transparent cost estimation, your construction project is delivered on schedule and within budget.",
    },
  },
  {
    id: 4,
    slug: "sustainable-architecture-building-for-tomorrow",
    category: "Sustainability",
    date: "Apr 30, 2024",
    readTime: "5 min read",
    title: "Sustainable Architecture: Building for a Better Tomorrow",
    excerpt: "Sustainable architecture is the need of the hour. Explore how eco-friendly design and green building practices help create a better future.",
    img: "/images/Gallery/Landscape (1).jpeg",
    author: {
      name: "Ar. Ar. Mahesh Kumar Choudhary",
      role: "Chief Architect & Founder, M Design Studio",
      avatar: "/logo.webp",
      bio: "Empaneled Architect for Patna & Madhubani Municipal Corporations with over 15+ years of architectural & structural design excellence.",
    },
    tags: ["Sustainability", "Green Building", "Landscape", "Solar Energy"],
    content: {
      intro: "Sustainable building is no longer optional—it is essential. Green architecture reduces operational energy consumption, saves water, and creates healthier indoor environments.",
      takeaways: [
        "Passive cooling through cross-ventilation and shading fins.",
        "Greywater recycling for garden landscaping.",
        "Use of non-toxic low-VOC paints and sustainable insulation.",
      ],
      sections: [
        {
          heading: "Eco-Friendly Landscape Integration",
          body: "Integrating local native plants, pervious paving blocks, and decorative water features creates a micro-climate that reduces exterior ambient temperatures.",
          image: "/images/Gallery/Landscape (2).jpg",
        },
      ],
      conclusion: "Invest in sustainable architectural design today to ensure a greener, healthier tomorrow.",
    },
  },
  {
    id: 5,
    slug: "designing-commercial-spaces-inspire-productivity",
    category: "Commercial",
    date: "Apr 22, 2024",
    readTime: "4 min read",
    title: "Designing Commercial Spaces That Inspire Productivity",
    excerpt: "Learn how well-designed commercial spaces can boost productivity, enhance employee well-being, and reflect your brand identity.",
    img: "/images/Gallery/Commercial3.jpeg",
    author: {
      name: "Ar. Ar. Mahesh Kumar Choudhary",
      role: "Chief Architect & Founder, M Design Studio",
      avatar: "/logo.webp",
      bio: "Empaneled Architect for Patna & Madhubani Municipal Corporations with over 15+ years of architectural & structural design excellence.",
    },
    tags: ["Commercial", "Office Design", "Retail Complex", "Glass Facade"],
    content: {
      intro: "A commercial building's architecture is a physical statement of your brand. Modern corporate centers require high functionality, efficient traffic flow, and impressive glass facades.",
      takeaways: [
        "Iconic exterior facades that command street attention.",
        "Flexible office floor plates for scalability.",
        "Acoustic treatment and ergonomic lighting design.",
      ],
      sections: [
        {
          heading: "Maximizing Commercial Retail Value",
          body: "Proper vertical circulation (elevators, escalators), spacious lobby design, and glass shopfronts maximize footfall and rental yield.",
          image: "/images/Gallery/Commercial4.jpg",
        },
      ],
      conclusion: "Transform your business presence with iconic commercial architectural solutions from M Design Studio.",
    },
  },
];
