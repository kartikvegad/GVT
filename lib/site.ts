export const NAV_LINKS = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#solutions", id: "solutions", label: "Solutions" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#pricing", id: "pricing", label: "Pricing" },
] as const;

export const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Our process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 90, suffix: "%", label: "Bill Savings" },
  { value: 500, suffix: "+", label: "Installations" },
  { value: 25, suffix: "", label: "Year Warranty" },
] as const;

export const HERO_SLIDES = [
  {
    image: "/images/hero.jpg",
    alt: "Solar panels under a bright Indian sky",
    title: "Build a Better Future with Solar Power",
    text: "Cut electricity bills by up to 90% with MNRE-aligned rooftop solar for homes and businesses across India. TopCon panels, net metering, and subsidy support — handled end to end.",
  },
  {
    image: "/images/rooftop.jpg",
    alt: "Residential rooftop solar installation",
    title: "Turn Your Rooftop into a Green Powerhouse",
    text: "Each 10 kW plant is equal to planting 500+ trees a year. Stay cool on AC while your roof quietly earns through net metering.",
  },
  {
    image: "/images/solar-farm.jpg",
    alt: "Commercial solar array across an open field",
    title: "Solar EPC for Homes and Industry, Nationwide",
    text: "From consultancy to commissioning — on-grid, hybrid, Capex or RESCO — designed for Indian roofs, heat, and DISCOM rules.",
  },
] as const;

export const MARQUEE_TAGS = [
  "Go Solar",
  "Save Energy",
  "Green Future",
  "Solar Rooftop",
  "Clean Power",
  "Industrial Solar",
  "Smart Energy",
  "Energy Independence",
  "Net Metering",
  "Pan-India EPC",
] as const;

export const PRESENCE_CITIES = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Kochi",
  "Indore",
  "Surat",
] as const;

export const TRUST_IMAGES = [
  {
    src: "/images/solar-farm.jpg",
    alt: "Rows of solar panels under a blue sky",
  },
  {
    src: "/images/install.jpg",
    alt: "Technician securing a solar panel mount",
  },
  {
    src: "/images/panels-close.jpg",
    alt: "Close-up of solar panels catching sunlight",
  },
] as const;

export type FeatureId = "bills" | "independence" | "eco" | "value";

export const FEATURES: {
  id: FeatureId;
  title: string;
  description: string;
}[] = [
  {
    id: "bills",
    title: "Lower Electricity Bills",
    description:
      "Slash DISCOM charges by up to 90% with high-efficiency rooftop solar — and still run your AC and appliances.",
  },
  {
    id: "independence",
    title: "Energy Independence",
    description:
      "On-grid, off-grid, or hybrid systems with optional storage so essential loads stay on during load shedding.",
  },
  {
    id: "eco",
    title: "Eco Friendly",
    description:
      "A 10 kW rooftop plant is equal to planting 500+ trees a year — cutting carbon while India has 300+ sunny days.",
  },
  {
    id: "value",
    title: "Increase Property Value",
    description:
      "Homes with certified solar rooftops attract stronger resale interest and long-term energy savings for buyers.",
  },
];

export const SOLUTIONS = [
  {
    title: "Residential Rooftop",
    description:
      "3–10 kW systems for independent houses and villas. A 3 kW plant can run an AC efficiently. Designed around your sanctioned load, shade, and roof area.",
    image: "/images/house.jpg",
    alt: "House with rooftop solar panels",
  },
  {
    title: "Housing Societies",
    description:
      "Shared solar for RWAs and apartment complexes — offset lifts, lights, and pumps with clear billing for residents across India.",
    image: "/images/city.jpg",
    alt: "Apartment buildings suitable for society solar",
  },
  {
    title: "Commercial & Industrial",
    description:
      "Turnkey EPC for offices, warehouses, and factories. Capex or RESCO (OPEX) models so you own the plant — or pay only for the energy you use.",
    image: "/images/factory.jpg",
    alt: "Industrial facility with energy infrastructure",
  },
  {
    title: "On-Grid, Off-Grid & Hybrid",
    description:
      "Net-metered on-grid plants for bill credits, off-grid for remote sites, and hybrid systems with battery backup for 24/7 reliability.",
    image: "/images/technician.jpg",
    alt: "Technician inspecting a solar array",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Free Rooftop Assessment",
    description:
      "No-cost site visit covering roof strength, shade, sunlight hours, sanctioned load, and your last 12 months of bills.",
  },
  {
    title: "3D Design & Quote",
    description:
      "A custom 3D layout and transparent price. Pay upfront, take a solar loan, or choose RESCO and pay only for the power you use.",
  },
  {
    title: "Paperwork & Installation",
    description:
      "PM Surya Ghar / MNRE filing, DISCOM, and net metering are handled for you. Certified crews typically install a home rooftop in 3–5 days.",
  },
  {
    title: "AMC, Cleaning & Monitoring",
    description:
      "Annual maintenance, panel cleaning, and IoT monitoring so generation stays high for 25 years.",
  },
] as const;

export const EQUIPMENT = [
  {
    title: "TopCon Panels",
    detail: "30-year performance warranty",
    description:
      "High-efficiency cells with stronger output in Indian heat and low light — more units per square foot.",
  },
  {
    title: "Smart Inverters",
    detail: "10+ year warranty",
    description:
      "Remote tracking, surge protection, and safe shutdown during grid failure.",
  },
  {
    title: "Branded Cables",
    detail: "UV & flame rated",
    description:
      "Waterproof, UV-resistant, flame-retardant wiring to cut wastage and keep the plant safe.",
  },
  {
    title: "Rust-Free Structure",
    detail: "25+ year design life",
    description:
      "Galvanised, storm-resistant mounting with leak-proof anchoring for Indian weather.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Tier-1 Products",
    description:
      "High-performance modules and BOS that meet international standards and MNRE / BIS norms.",
  },
  {
    title: "Experienced EPC Team",
    description:
      "Engineers and consultants who design, commission, and hand over plants for peak generation.",
  },
  {
    title: "Strict Quality Control",
    description:
      "From material selection to workmanship, every step follows documented quality checks.",
  },
  {
    title: "On-Time Execution",
    description:
      "Optimised supply chain so residential and commercial projects finish without downtime.",
  },
  {
    title: "True Turnkey Delivery",
    description:
      "Consultancy to AMC under one roof — MNRE-aligned processes and lifetime support.",
  },
  {
    title: "Smart Monitoring",
    description:
      "Track generation from anywhere and keep output consistent through the year.",
  },
] as const;

export const PROJECTS = [
  {
    title: "5 kW Hybrid System",
    location: "Whitefield, Bengaluru",
    result: "Smooth handover with battery backup for essential loads",
    image: "/images/rooftop.jpg",
    alt: "Hybrid residential solar rooftop in Bengaluru",
  },
  {
    title: "10 kW On-Grid System",
    location: "Andheri, Mumbai",
    result: "Custom sizing around the home’s sanctioned load",
    image: "/images/house.jpg",
    alt: "On-grid solar rooftop in Mumbai",
  },
  {
    title: "80 kW Warehouse Roof",
    location: "Chakan, Pune",
    result: "Offsets daytime factory load year-round",
    image: "/images/install.jpg",
    alt: "Commercial solar installation in Pune",
  },
  {
    title: "12 kW Society Common Area",
    location: "Gachibowli, Hyderabad",
    result: "Powers lifts, lights, and water pumps",
    image: "/images/solar-farm.jpg",
    alt: "Housing society rooftop solar in Hyderabad",
  },
  {
    title: "15 kW Villa System",
    location: "Adyar, Chennai",
    result: "Strong daytime generation for a large independent house",
    image: "/images/panels-close.jpg",
    alt: "Large residential solar array in Chennai",
  },
  {
    title: "25 kW On-Grid System",
    location: "Vaishali Nagar, Jaipur",
    result: "Custom layout for a larger property in high-sunbelt India",
    image: "/images/hero.jpg",
    alt: "Larger solar array in Jaipur",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ankit Verma",
    location: "Bengaluru",
    quote:
      "The team was professional and responsive. We got a full site survey, custom design, subsidy help, and even cleaning after commissioning.",
  },
  {
    name: "Nilesh Agarwal",
    location: "Pune",
    quote:
      "I wasn’t sure solar would pay back. They explained long-term savings clearly and handled government approvals through to installation.",
  },
  {
    name: "Meenakshi Chauhan",
    location: "Delhi",
    quote:
      "After-sales stood out. Even after the plant was live, they followed up to make sure generation was on track. That kind of service is rare.",
  },
  {
    name: "Rahul Iyer",
    location: "Chennai",
    quote:
      "Installation finished on schedule despite summer heat. Generation in the first month beat the estimate they shared at design.",
  },
  {
    name: "Sneha Kapoor",
    location: "Mumbai",
    quote:
      "Clear pricing, no guesswork, and they handled net metering with our DISCOM so we did not have to chase files.",
  },
  {
    name: "Vikram Reddy",
    location: "Hyderabad",
    quote:
      "They sized a hybrid system for our villa. Lights and Wi-Fi stay on during outages, and the monitoring app is easy to read.",
  },
] as const;

export const PLANS = [
  {
    name: "Starter",
    size: "3 kW",
    price: "₹1,65,000",
    note: "Indicative, before subsidy",
    bestFor: "1–2 BHK homes — enough to run an AC efficiently",
    features: [
      "TopCon / tier-1 modules",
      "Smart inverter, hybrid-ready",
      "Galvanised mounting structure",
      "Net metering assistance",
      "PM Surya Ghar filing support",
    ],
    highlighted: false,
  },
  {
    name: "Home",
    size: "5 kW",
    price: "₹2.5–3 L",
    note: "Typical on-grid cost after subsidy in India",
    bestFor: "Most 3 BHK independent houses",
    features: [
      "High-efficiency TopCon panels",
      "Wi-Fi generation monitoring",
      "Hot-dip galvanised structure",
      "Subsidy + DISCOM paperwork",
      "25–30 year panel performance warranty",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    size: "10 kW+",
    price: "Custom",
    note: "Needs ~550–650 sq. ft. of clear roof",
    bestFor: "Villas, shops & light industry",
    features: [
      "Site-specific EPC engineering",
      "Optional hybrid + battery",
      "Capex or RESCO / PPA models",
      "Dedicated account manager",
      "AMC & cleaning from year one",
    ],
    highlighted: false,
  },
] as const;

export const FAQS = [
  {
    question: "Which solar system is best for Indian homes?",
    answer:
      "On-grid rooftop solar is the usual choice. It costs less, needs little maintenance, and lets you export extra units to the grid through net metering.",
  },
  {
    question: "What is the cost of a 5 kW solar system in India?",
    answer:
      "A 5 kW on-grid system typically lands around ₹2.5–3 lakh after subsidy, depending on roof, structure, and panel quality. We confirm the number after a free site survey.",
  },
  {
    question: "Can an AC run on solar panels?",
    answer:
      "Yes. With a 3 kW system or larger, an AC can run efficiently during the day — so you stay cool without a spike in the electricity bill.",
  },
  {
    question: "How much roof space does a 10 kW system need?",
    answer:
      "Plan for about 550–650 sq. ft. of unshaded rooftop. Higher-efficiency TopCon modules can reduce the footprint slightly.",
  },
  {
    question: "How do I avail a solar subsidy?",
    answer:
      "If you have a valid domestic connection and have not claimed subsidy before, we file PM Surya Ghar / MNRE paperwork and DISCOM net-metering for you.",
  },
  {
    question: "What types of systems do you install?",
    answer:
      "On-grid, off-grid, and hybrid plants for homes, housing societies, and commercial or industrial rooftops across India.",
  },
  {
    question: "What warranties do panels and inverters carry?",
    answer:
      "Tier-1 / TopCon modules typically carry a 25–30 year performance warranty. Smart inverters and BOS come with manufacturer cover, often 10+ years on inverters.",
  },
  {
    question: "Do you help with loans, leasing, or zero-investment models?",
    answer:
      "Yes. We assist with solar loans, EMIs, MNRE subsidy, and RESCO / PPA models where there is little or no upfront cost.",
  },
  {
    question: "Do you provide AMC and panel cleaning?",
    answer:
      "We offer annual maintenance, audits, and short- or long-term cleaning contracts so soiling does not eat into your ROI.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A typical residential rooftop takes 3–5 days on site. Larger commercial and industrial plants take longer depending on capacity and grid approvals.",
  },
] as const;

export const PARTNERS = [
  "Adani",
  "Tata Power Solar",
  "Waaree",
  "Vikram Solar",
  "Havells",
  "Polycab",
  "Hitachi",
  "Jakson",
] as const;

export const BILL_RANGES = [
  { id: "low", label: "Below ₹1,000", size: "2–3 kW", save: "₹8,000–12,000 / year" },
  { id: "mid", label: "₹1,000 – ₹3,000", size: "3 kW", save: "₹18,000–28,000 / year" },
  { id: "high", label: "₹3,000 – ₹5,000", size: "5 kW", save: "₹35,000–50,000 / year" },
  { id: "peak", label: "Above ₹5,000", size: "8–10 kW+", save: "₹60,000+ / year" },
] as const;

export const CITIES = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Kochi",
  "Indore",
  "Surat",
  "Other",
] as const;

export const AVATARS = [
  { src: "/images/avatar-1.jpg", alt: "GVT customer" },
  { src: "/images/avatar-2.jpg", alt: "GVT customer" },
  { src: "/images/avatar-3.jpg", alt: "GVT customer" },
] as const;
