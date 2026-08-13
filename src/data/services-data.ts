export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  heroImg: string;
  iconName: string;
  overview: string[];
  deliverables: string[];
  processSteps: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  sampleImages: string[];
  pricingNote?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "architectural",
    slug: "architectural",
    title: "Architectural Design",
    tagline: "Custom, Climate-Responsive & Iconic Building Architecture",
    shortDesc: "Innovative & functional architectural solutions for residential, commercial & institutional projects across Bihar and India.",
    heroImg: "/images/Gallery/Residential12.jpg",
    iconName: "Building2",
    overview: [
      "Architectural design is the soul of any building project. At M Design Studio, headed by Ar. Mahesh Kumar Choudhary (Empaneled Architect for Patna & Madhubani Municipal Corporations), we synthesize aesthetic grandeur with practical spatial utility.",
      "We design custom residential villas, multi-story apartment complexes, commercial plazas, and institutional campuses. Every design accounts for soil bearing capacity, climate conditions, natural light orientation, and Vastu principles.",
    ],
    deliverables: [
      "Conceptual 2D Floor Plans & Floor Layouts",
      "High-Resolution 3D Exterior Elevation Renders",
      "Structural Foundation & Column Grid Drawings",
      "Plumbing, Electrical & HVAC Working Drawings",
      "Municipal Corporation Map Submission Drawings",
      "BOQ (Bill of Quantities) & Construction Material Specifications",
    ],
    processSteps: [
      { step: "01", title: "Site Survey & Requirement Briefing", desc: "Detailed site measurement, plot orientation analysis, client lifestyle mapping, and budget target alignment." },
      { step: "02", title: "Conceptual Floor Plans", desc: "Drafting 2D floor layouts optimizing room space, circulation, Vastu compliance, and natural ventilation." },
      { step: "03", title: "3D Elevation & Material Selection", desc: "Creating realistic 3D exterior renders showcasing facade cladding, lighting, color schemes, and balcony treatments." },
      { step: "04", title: "Working & Structural Drawings", desc: "Generating precise technical blueprints for contractors, steel rebar schedules, and sanitary installations." },
      { step: "05", title: "On-Site Supervision & Final Handover", desc: "Periodic site inspection visits ensuring execution strictly adheres to approved architectural drawings." },
    ],
    benefits: [
      { title: "Empaneled Architectural Expertise", desc: "Official empanelment with Patna & Madhubani Municipal Corporations ensures fast drawing approvals." },
      { title: "Maximum Space Efficiency", desc: "Zero wasted square footage with intelligent room dimensions and seamless movement flow." },
      { title: "100% Vastu Compliant", desc: "Harnessing positive environmental energy according to traditional Vastu Shastra." },
    ],
    faqs: [
      { question: "How long does the architectural design process take?", answer: "Initial 2D concepts take 3-5 days. Complete 3D elevations and working drawings are delivered within 2-3 weeks." },
      { question: "Do you handle municipal map approval for Patna & Madhubani?", answer: "Yes! As empaneled architects, we handle map drafting, structural safety certification, and municipal approval end-to-end." },
    ],
    sampleImages: [
      "/images/Gallery/Residential2.jpg",
      "/images/Gallery/Residential10.jpg",
      "/images/Gallery/Residential13.jpg",
      "/images/Gallery/Residential14 (1).jpg",
    ],
  },
  {
    id: "interior",
    slug: "interior",
    title: "Interior Design",
    tagline: "Luxurious, Functionally Elegant & Tailor-Made Living Spaces",
    shortDesc: "Beautiful, modern and comfortable interior spaces tailored to your lifestyle and requirements.",
    heroImg: "/images/modern_interior.png",
    iconName: "Palette",
    overview: [
      "Interior design shapes how you experience living every single day. M Design Studio specializes in crafting warm, sophisticated, clutter-free interiors for living rooms, master bedrooms, modular kitchens, and luxury office suites.",
      "We select premium materials including Italian marble, warm veneer paneling, concealed LED accent lighting, and custom furniture tailored to your individual aesthetic preference.",
    ],
    deliverables: [
      "Custom 3D Interior Visualizations & Walkthroughs",
      "False Ceiling & Mood Lighting Layout Plans",
      "Modular Kitchen Detail Drawings & Hardware Specs",
      "Wardrobe & Custom Storage Unit Working Drawings",
      "Color Palette, Fabric & Texture Swatch Boards",
      "Loose Furniture & Fixture Procurement List",
    ],
    processSteps: [
      { step: "01", title: "Design Moodboard & Budgeting", desc: "Understanding design taste (Minimalist, Contemporary, Neo-Classical) and establishing material budget guidelines." },
      { step: "02", title: "3D Photorealistic Interior Views", desc: "Visualizing every corner in 3D before procuring a single piece of wood or tile." },
      { step: "03", title: "Material Selection & Execution Plan", desc: "Hands-on selection of laminates, quartz countertops, ambient lighting fixtures, and upholstery." },
      { step: "04", title: "Craftsman Supervision & Handover", desc: "Managing carpenters, electricians, and painters for immaculate execution." },
    ],
    benefits: [
      { title: "Bespoke Custom Furniture", desc: "Furniture engineered specifically to maximize your exact floor space and storage needs." },
      { title: "Ergonomic & Light-Filled", desc: "Illumination design combining task lighting, ambient ceiling coves, and highlight accents." },
    ],
    faqs: [
      { question: "Can you design interior for modular kitchens?", answer: "Yes, we design acrylic, lacquer, and wooden modular kitchens with Blum/Hettich soft-close fittings." },
      { question: "What is the cost estimation for full home interior?", answer: "Interior costs depend on material selection (commercial plywood vs HDMR, laminate vs veneer). We provide detailed line-item quotes before starting." },
    ],
    sampleImages: [
      "/images/modern_interior.png",
      "/images/Gallery/Residential21.jpg",
      "/images/Gallery/Residential14 (2).jpg",
    ],
  },
  {
    id: "structural",
    slug: "structural",
    title: "Structural Design",
    tagline: "Earthquake-Resistant & Heavy-Load Engineered Structures",
    shortDesc: "Safe, sustainable & cost-effective structural design solutions by expert structural engineers.",
    heroImg: "/images/before_sketch.png",
    iconName: "Layers",
    overview: [
      "A building's structural integrity is its foundation for safety. Our structural engineering team designs RCC framed structures, steel trusses, raft foundations, and multi-story structural layouts compliant with Bureau of Indian Standards (IS 456, IS 1893 seismic codes).",
      "We conduct rigorous load calculations (Dead load, Live load, Wind load, and Earthquake seismic forces) to ensure maximum safety with optimized steel rebar consumption.",
    ],
    deliverables: [
      "Column Layout & Foundation Footing Drawings",
      "Beam & Plinth Beam Structural Schedules",
      "Slab Reinforcement Detail Steel Schedules (BBS)",
      "Retaining Wall & Underground Tank Drawings",
      "Earthquake Seismic Zone Stability Analysis Report",
      "Structural Safety Certificate for Municipal Approval",
    ],
    processSteps: [
      { step: "01", title: "Soil Test Analysis & Load Calculations", desc: "Analyzing soil bearing capacity reports to select footing type (Isolated, Strip, or Raft foundation)." },
      { step: "02", title: "ETABS / STAAD.Pro Computer Modeling", desc: "Simulating seismic shockwaves and wind forces to test building structural stability." },
      { step: "03", title: "Bar Bending Schedule (BBS)", desc: "Optimizing steel rebar tonnage to reduce material wastage while maintaining maximum safety." },
      { step: "04", title: "Site Rebar Verification Inspection", desc: "Visiting construction site prior to concrete pouring to inspect steel tie-up alignment." },
    ],
    benefits: [
      { title: "Seismic Zone Safety", desc: "Designed according to IS 1893 seismic safety standard applicable for Bihar region." },
      { title: "Steel & Concrete Optimization", desc: "Prevents over-engineering, saving up to 15-20% on structural steel costs." },
    ],
    faqs: [
      { question: "Why is structural design necessary for home building?", answer: "Without structural calculations, houses risk column cracking, slab sagging, or foundation settlement during earthquakes." },
      { question: "Do you issue structural stability certificates?", answer: "Yes, our certified structural engineers issue official structural safety certificates required by municipal authorities." },
    ],
    sampleImages: [
      "/images/before_sketch.png",
      "/images/Gallery/Commercial2.jpg",
      "/images/Gallery/Residential10.jpg",
    ],
  },
  {
    id: "vastu",
    slug: "vastu",
    title: "Vastu Consulting",
    tagline: "Harmonizing Architecture with Natural Cosmic Energies",
    shortDesc: "Vastu-compliant designs for positive energy, health, wealth & long-term prosperity.",
    heroImg: "/images/Gallery/Residential11.jpg",
    iconName: "Compass",
    overview: [
      "Vastu Shastra balances five core natural elements (Earth, Water, Fire, Air, and Space). M Design Studio integrates traditional Vastu principles directly into modern architectural floor plans right from the sketching stage.",
      "We position the main entrance (Mahadwar), kitchen (Agneya corner), master bedroom (Nairutya corner), puja room (Eeshanya corner), and water tanks without compromising contemporary aesthetics.",
    ],
    deliverables: [
      "8-Direction & 16-Zone Vastu Energy Mapping Plot",
      "Vastu-Compliant 2D Floor Layout Plan",
      "Entrance Door Orientation & Energy Alignment Chart",
      "Remedial Vastu Plan for Existing Built Structures",
      "Brahmasthan & Solar Direction Alignment Blueprint",
    ],
    processSteps: [
      { step: "01", title: "Compass Plot Orientation", desc: "Accurate directional analysis using digital compass and solar trajectory mapping." },
      { step: "02", title: "Zonal Allocation & Room Positioning", desc: "Placing key household zones according to Vastu solar elements." },
      { step: "03", title: "Remedial Adjustments", desc: "Providing non-demolition remedies using pyramids, colors, and elemental placements for pre-built houses." },
    ],
    benefits: [
      { title: "Scientific Vastu Approach", desc: "Merging magnetic field principles with modern daylight and airflow engineering." },
      { title: "Peace & Well-Being", desc: "Fostering positive, harmonious living environments for all family members." },
    ],
    faqs: [
      { question: "Can Vastu be applied without compromising modern architectural design?", answer: "Absolutely! We design modern floor plans that seamlessly follow Vastu guidelines without sacrificing style." },
    ],
    sampleImages: [
      "/images/Gallery/Residential11.jpg",
      "/images/Gallery/Residential3.jpeg",
    ],
  },
  {
    id: "3d-visualization",
    slug: "3d-visualization",
    title: "3D Visualisation",
    tagline: "Photorealistic 3D Renders & Ultra-HD Architectural Walkthroughs",
    shortDesc: "Realistic 3D renders & walkthroughs to help you visualize your dream project before it's built.",
    heroImg: "/images/after_rendered.png",
    iconName: "Eye",
    overview: [
      "Seeing is believing. Our advanced 3D visualization studio generates hyper-realistic 3D exterior renders, interior 360-degree views, and cinematic 4K video walkthroughs.",
      "You can experiment with exterior wall cladding, lighting fixtures, landscape gardens, and glass facades before spending a single rupee on construction materials.",
    ],
    deliverables: [
      "High-Resolution 4K Exterior 3D Renders (Day & Night Views)",
      "3D Interior Room Views (Living, Bedroom, Kitchen, Bath)",
      "Cinematic 3D Video Architectural Walkthrough",
      "360-Degree Virtual Reality (VR) Room Panorama",
      "Material Texture & Lighting Simulation Renders",
    ],
    processSteps: [
      { step: "01", title: "2D Plan Import & 3D Geometry Modeling", desc: "Converting 2D architectural blueprints into exact 3D digital scale models." },
      { step: "02", title: "Material Texturing & Lighting Setup", desc: "Applying real-world materials (marble, granite, wood, glass) and sun angle lighting." },
      { step: "03", title: "4K Photorealistic Rendering", desc: "Producing ultra-HD 4K imagery and video animations for client review." },
    ],
    benefits: [
      { title: "Zero Guesswork", desc: "Eliminates design misunderstandings between client, architect, and contractor." },
      { title: "Material Cost Savings", desc: "Test multiple color combinations and tile textures virtually before purchasing." },
    ],
    faqs: [
      { question: "What formats do you provide for 3D walkthroughs?", answer: "We deliver MP4 video walkthroughs suitable for mobile viewing, social sharing, and high-res screen playback." },
    ],
    sampleImages: [
      "/images/after_rendered.png",
      "/images/hero_luxury_villa.png",
      "/images/Gallery/Commercial4.jpg",
    ],
  },
  {
    id: "estimation",
    slug: "estimation",
    title: "Estimation & Costing",
    tagline: "Transparent BOQ, Material Audits & Precision Budget Planning",
    shortDesc: "Accurate estimation & cost planning to ensure complete transparency & budget control.",
    heroImg: "/images/before_sketch.png",
    iconName: "Calculator",
    overview: [
      "Unexpected cost overruns ruin building projects. M Design Studio provides exhaustive Bill of Quantities (BOQ), material quantity audits, and phase-wise construction budget forecasts.",
      "We detail exact cement bags, steel rebar quintals, sand trucks, aggregate volume, tile square footage, and labor costs upfront.",
    ],
    deliverables: [
      "Detailed Item-Wise Bill of Quantities (BOQ)",
      "Civil Work Material Estimation (Cement, Steel, Sand, Bricks)",
      "Phase-Wise Milestone Construction Cost Breakdown",
      "Contractor Quote Comparison & Audit Report",
      "Bank Loan Valuation & Financial Estimate Certificates",
    ],
    processSteps: [
      { step: "01", title: "Drawing Measurement & Takeoff", desc: "Calculating exact volumes directly from 2D structural & architectural drawings." },
      { step: "02", title: "Local Market Rate Analysis", desc: "Applying current Bihar market material and labor rates." },
      { step: "03", title: "Milestone Payment Schedule", desc: "Creating stage-by-stage payment milestones (Plinth level, Slab level, Plaster stage)." },
    ],
    benefits: [
      { title: "Zero Hidden Costs", desc: "Know your exact total investment before starting foundation excavation." },
      { title: "Bank Loan Approval", desc: "Official estimate formats accepted by nationalized & private banks for home loans." },
    ],
    faqs: [
      { question: "Are your estimation reports accepted by banks for home loans?", answer: "Yes, our valuation and cost estimate certificates are standard formats accepted by SBI, HDFC, PNB, and major banks." },
    ],
    sampleImages: [
      "/images/before_sketch.png",
      "/images/Gallery/Commercial2.jpg",
    ],
  },
  {
    id: "site-mgmt",
    slug: "site-mgmt",
    title: "Site Management",
    tagline: "Rigorous Civil Supervision, Quality Assurance & On-Time Execution",
    shortDesc: "Professional site supervision to ensure quality construction & timely completion.",
    heroImg: "/images/commercial_complex.png",
    iconName: "HardHat",
    overview: [
      "Even the best drawing fails if site execution is careless. Our site management team conducts regular physical inspections to verify steel spacing, concrete slump, alignment plumblines, and plaster finishing.",
      "We act as your trusted technical representative on-site, ensuring contractors strictly follow approved blueprints and construction quality benchmarks.",
    ],
    deliverables: [
      "Periodic Physical Site Inspection Visits",
      "Steel Rebar Alignment & Footing Check Certificate",
      "Concrete Cube Strength Test Coordination",
      "Contractor Quality & Progress Audit Reports",
      "Material Quality Verification (Cement grade, Sand silt content)",
    ],
    processSteps: [
      { step: "01", title: "Pre-Poured Concrete Checklist", desc: "Checking beam depth, column ties, shuttering stability, and electrical conduit placements." },
      { step: "02", title: "Curing & Masonry Supervision", desc: "Monitoring 14-day water curing protocols and brick bond quality." },
      { step: "03", title: "Finishing & Plumbing Inspection", desc: "Verifying pipe slope, waterproofing chemical coatings, and tile alignment." },
    ],
    benefits: [
      { title: "Quality Guarantee", desc: "Prevents contractor shortcuts that cause future wall dampness or structural weakness." },
      { title: "On-Time Completion", desc: "Tracks milestone progress to avoid unnecessary construction delays." },
    ],
    faqs: [
      { question: "How often will the architect visit the site?", answer: "We conduct critical milestone visits (Layout stage, Footing pouring, Column casting, Slab casting, and Plastering stage)." },
    ],
    sampleImages: [
      "/images/commercial_complex.png",
      "/images/Gallery/Residential10.jpg",
    ],
  },
  {
    id: "drawing-approval",
    slug: "drawing-approval",
    title: "Drawing Approval",
    tagline: "Municipal Corporation Approval & Government Compliance",
    shortDesc: "Municipal drawing approval support & hassle-free documentation.",
    heroImg: "/images/before_sketch.png",
    iconName: "FileCheck",
    overview: [
      "Navigating municipal building bylaws can be tedious. As an empaneled architectural firm for Patna Municipal Corporation (PMC) and Madhubani Municipal Corporation, we streamline building map approval.",
      "We prepare official municipal submission drawings incorporating required setbacks, FAR (Floor Area Ratio), height restrictions, parking quotas, and fire safety provisions.",
    ],
    deliverables: [
      "Official Municipal Submission Map Blueprint",
      "FAR & Ground Coverage Calculation Sheet",
      "Architectural License Certification Seal",
      "Structural Stability Certificate",
      "NOC Coordination (Fire, Environment, Water Authority)",
      "Online Municipal Portal Application Submission",
    ],
    processSteps: [
      { step: "01", title: "Bylaw Verification & Map Drafting", desc: "Checking plot road width, setbacks, and FAR rules for your specific municipal zone." },
      { step: "02", title: "Official Stamp & Certificate Signing", desc: "Authorized signing by Empaneled Architect Ar. Mahesh Kumar Choudhary." },
      { step: "03", title: "Municipal Submission & Permit Approval", desc: "Filing application on government portal and obtaining official building permit sanction." },
    ],
    benefits: [
      { title: "Fast-Track Sanction", desc: "Direct empaneled architect access ensures quick clearance without hassle." },
      { title: "Legal Safety", desc: "Protects your property from future unauthorized construction notices or fines." },
    ],
    faqs: [
      { question: "Which municipal corporations are you empaneled with?", answer: "We are officially empaneled with Patna Municipal Corporation (PMC) and Madhubani Municipal Corporation." },
    ],
    sampleImages: [
      "/images/before_sketch.png",
      "/images/Gallery/Institutional.jpeg",
    ],
  },
  {
    id: "end-to-end",
    slug: "end-to-end",
    title: "End to End Turnkey Services",
    tagline: "Complete Design & Construction Turnkey Execution — Concept to Keys",
    shortDesc: "From concept, design, approvals to execution & handover - we manage it all for you.",
    heroImg: "/images/after_rendered.png",
    iconName: "CheckCircle2",
    overview: [
      "Want a completely hassle-free building experience? Our Turnkey Architectural & Construction service manages every single aspect of your project.",
      "From initial architectural drafting, soil testing, municipal approval, civil construction, plumbing/electrical, to luxury interiors and final key handover — we take single-point responsibility.",
    ],
    deliverables: [
      "Complete Architectural & Structural Design Package",
      "Full Municipal Map Sanction & Clearance",
      "Complete Material Procurement & Civil Construction",
      "Electrical, Plumbing & HVAC Installation",
      "Full Interior Fit-Out & Woodwork",
      "Final Cleaned Home Handover with Keys",
    ],
    processSteps: [
      { step: "01", title: "Turnkey Contract & Design Approval", desc: "Fixing design, material specifications, timeline, and total fixed contract budget." },
      { step: "02", title: "Foundation & Superstructure Construction", desc: "Full civil execution under strict architectural and engineering supervision." },
      { step: "03", title: "Interiors & Final Handover", desc: "Executing custom woodwork, painting, fixture installation, and delivering finished keys." },
    ],
    benefits: [
      { title: "Single Point Responsibility", desc: "No coordinating between separate architects, contractors, and carpenters." },
      { title: "Guaranteed Timeline & Budget", desc: "Fixed cost commitment protects you from unexpected price escalations." },
    ],
    faqs: [
      { question: "What is included in Turnkey construction?", answer: "Everything from excavation to interior painting and light fixtures. You receive a fully ready-to-move house." },
    ],
    sampleImages: [
      "/images/after_rendered.png",
      "/images/Gallery/Residential2.jpg",
      "/images/Gallery/Residential12.jpg",
    ],
  },
  {
    id: "landscape",
    slug: "landscape",
    title: "Landscape Design",
    tagline: "Eco-Friendly Outdoor Courtyards, Gardens & Water Features",
    shortDesc: "Green, sustainable & beautiful landscape designs that enhance your outdoor spaces.",
    heroImg: "/images/Gallery/Landscape (1).jpeg",
    iconName: "Trees",
    overview: [
      "Great outdoor spaces elevate modern architecture. M Design Studio designs lush garden lawns, outdoor patio seating, stone pathways, water cascades, and ambient garden lighting.",
      "We select low-maintenance native foliage and incorporate pervious paving blocks for rainwater percolation.",
    ],
    deliverables: [
      "2D Master Landscape Layout Plan",
      "3D Realistic Garden Elevation & Lighting Views",
      "Plant & Tree Species Selection Catalog",
      "Hardscape (Paving, Gazebos, Pergolas) Working Drawings",
      "Irrigation & Fountain Plumbing Drawings",
    ],
    processSteps: [
      { step: "01", title: "Outdoor Space Planning", desc: "Zoning gardens, barbecue patios, children play lawns, and driveways." },
      { step: "02", title: "Hardscape & Softscape Selection", desc: "Pairing natural stone pavers with native flowering plants." },
      { step: "03", title: "Execution & Lighting", desc: "Installing warm outdoor spotlights, drip irrigation, and water cascades." },
    ],
    benefits: [
      { title: "Natural Micro-Climate Cooling", desc: "Green lawns reduce surrounding heat by 3-5 degrees Celsius." },
      { title: "High Property Curb Appeal", desc: "Stunning outdoor entry gardens create an impressive first impression." },
    ],
    faqs: [
      { question: "Do you design small residential garden spaces?", answer: "Yes! We design courtyard gardens, rooftop terrace lawns, and villa grounds of all sizes." },
    ],
    sampleImages: [
      "/images/Gallery/Landscape (1).jpeg",
      "/images/Gallery/Landscape (2).jpg",
      "/images/Gallery/Landscape (1).jpg",
    ],
  },
];
