export const NAV_LINKS = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About Us" },
  { href: "#process", id: "process", label: "Process" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#quality", id: "quality", label: "Quality" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#faq", id: "faq", label: "FAQs" },
] as const;

export const FOOTER_LINKS = [
  { href: "#contact", label: "Contact" },
] as const;

export const DESIGN_CREDIT = {
  label: "Designed by",
  name: "DOT",
  href: "https://dot-site.vercel.app/",
  logoSrc: "/Dot.svg",
} as const;

export const CONTACT = {
  phone: "+91 95600 20713",
  phoneHref: "tel:+919560020713",
  whatsappHref: "https://wa.me/919560020713",
  smsHref: "sms:+919560020713",
  email: "info@gvtworld.com",
  emailHref: "mailto:info@gvtworld.com",
  office: "A801, Plot-5D, Dwarka, New Delhi-110077",
  hours: "10 am to 6 pm",
  region: "Delhi, UP, Haryana, Rajasthan, Uttarakhand, and Punjab",
} as const;

export const STATS = [
  { kicker: "Rooftop solar", label: "Homes & businesses" },
  { kicker: "Turnkey EPC", label: "Survey to AMC" },
  { kicker: "MNRE-aligned", label: "Net metering & subsidy" },
] as const;

export const HERO_SLIDES = [
  {
    image: "/images/hero.jpg",
    alt: "Solar panels under a bright Indian sky",
    title: "Build a Better Future with Solar Power",
    text: "Rooftop solar for homes and businesses across India. TopCon panels, net metering, and subsidy support — from first site visit to commissioning.",
  },
  {
    image: "/images/rooftop.jpg",
    alt: "Residential rooftop solar installation",
    title: "Turn Your Rooftop into a Green Powerhouse",
    text: "Designed for Indian heat, shade, and DISCOM rules — so your roof offsets daytime load and exports surplus through net metering.",
  },
  {
    image: "/images/solar-farm.jpg",
    alt: "Commercial solar array across an open field",
    title: "Solar EPC for Home, Society and Industrial",
    text: "From first site visit to commissioning — on-grid or hybrid — designed for Indian roofs, heat, and DISCOM rules.",
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
    title: "Daytime Power You Own",
    description:
      "Offset peak daytime use from your own roof. Surplus units go back through net metering under your DISCOM’s rules.",
  },
  {
    id: "independence",
    title: "Backup When the Grid Drops",
    description:
      "On-grid or hybrid layouts with optional storage so lights, Wi‑Fi, and critical loads stay up during outages.",
  },
  {
    id: "eco",
    title: "Lower Carbon, Clearer Numbers",
    description:
      "Generation you can track month to month — less grid draw, a cleaner footprint, and paperwork handled with you.",
  },
  {
    id: "value",
    title: "Sized to Your Roof",
    description:
      "We survey shade, structure, and sanctioned load first, then build a layout for your house, society, or plant.",
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
      "Shared solar for RWAs and apartment complexes — offset lifts, lights, and pumps with a clear layout for residents. End-to-end delivery typically takes 2–3 months.",
    image: "/images/city.jpg",
    alt: "Apartment buildings suitable for society solar",
  },
  {
    title: "Commercial & Industrial",
    description:
      "Turnkey EPC for offices, warehouses, and factories. Capex or RESCO models, designed around how you use power through the day.",
    image: "/images/factory.jpg",
    alt: "Industrial facility with energy infrastructure",
  },
  {
    title: "On-Grid, Off-Grid & Hybrid",
    description:
      "Net-metered on-grid plants, off-grid for remote sites, and hybrid systems with battery backup for 24/7 reliability.",
    image: "/images/technician.jpg",
    alt: "Technician inspecting a solar array",
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: "survey",
    title: "Rooftop Assessment",
    duration: "Site visit",
    description:
      "We visit your site, check roof strength, shade, sunlight hours, and sanctioned load, then talk through the right system size.",
  },
  {
    id: "design",
    title: "3D Design",
    duration: "Custom layout",
    description:
      "A custom 3D layout of how panels sit on your roof — so you see the plant before anything is ordered or installed.",
  },
  {
    id: "install",
    title: "Paperwork & Installation",
    duration: "Home 3–5 days · Society 2–3 months",
    description:
      "PM Surya Ghar / MNRE filing, DISCOM, and net metering are handled with you. A typical home rooftop is installed in 3–5 days. Housing society projects usually take 2–3 months end to end.",
  },
  {
    id: "care",
    title: "AMC, Cleaning & Monitoring",
    duration: "After handover",
    description:
      "Maintenance, panel cleaning, and generation tracking so the plant stays healthy long after commissioning.",
  },
] as const;

export type ProcessId = (typeof PROCESS_STEPS)[number]["id"];

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
    title: "Dedicated Project Team",
    description:
      "One team for design, installation, and paperwork — so you are not handed between vendors.",
  },
  {
    title: "Strict Quality Control",
    description:
      "From material selection to workmanship, every step follows documented quality checks.",
  },
  {
    title: "On-Time Handover",
    description:
      "Residential and commercial rooftops planned so installation and commissioning stay on schedule.",
  },
  {
    title: "True Turnkey Delivery",
    description:
      "Consultancy to AMC under one roof — MNRE-aligned processes and support after commissioning.",
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
    location: "Independent house",
    result: "Battery backup for essential loads on a typical family roof",
    image: "/images/rooftop.jpg",
    alt: "Hybrid residential solar rooftop",
  },
  {
    title: "10 kW On-Grid System",
    location: "Urban rooftop",
    result: "Custom sizing around sanctioned load and available shade-free area",
    image: "/images/house.jpg",
    alt: "On-grid solar rooftop",
  },
  {
    title: "Warehouse Roof",
    location: "Light industry",
    result: "Daytime generation matched to factory and warehouse loads",
    image: "/images/install.jpg",
    alt: "Commercial solar installation",
  },
  {
    title: "Society Common Area",
    location: "Housing society",
    result: "Shared plant for lifts, lights, and water pumps",
    image: "/images/solar-farm.jpg",
    alt: "Housing society rooftop solar",
  },
] as const;

export const FAQS = [
  {
    question: "Which solar system is best for Indian homes?",
    answer:
      "On-grid rooftop solar is the usual choice. It needs little maintenance and lets you export extra units to the grid through net metering.",
  },
  {
    question: "Can an AC run on solar panels?",
    answer:
      "Yes. With a 3 kW system or larger, an AC can run efficiently during the day on your own rooftop generation.",
  },
  {
    question: "How much roof space does a 10 kW system need?",
    answer:
      "Plan for about 550–650 sq. ft. of unshaded rooftop. Higher-efficiency TopCon modules can reduce the footprint slightly.",
  },
  {
    question: "How do I avail a solar subsidy?",
    answer:
      "If you have a valid domestic connection and have not claimed subsidy before, we file PM Surya Ghar / MNRE paperwork and DISCOM net-metering with you.",
  },
  {
    question: "What types of systems do you install?",
    answer:
      "On-grid, off-grid, and hybrid plants for homes, housing societies, and commercial or industrial rooftops across India.",
  },
  {
    question: "What warranties do panels and inverters carry?",
    answer:
      "Tier-1 / TopCon modules typically carry a 25–30 year performance warranty from the manufacturer. Smart inverters and BOS come with their own cover, often 10+ years on inverters.",
  },
  {
    question: "Do you help with subsidy and net metering?",
    answer:
      "Yes. We walk you through MNRE / PM Surya Ghar filing and DISCOM net-metering so you are not left chasing files alone.",
  },
  {
    question: "Do you provide AMC and panel cleaning?",
    answer:
      "We offer annual maintenance, audits, and cleaning so dust and soiling do not cut into generation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A typical residential rooftop takes 3–5 days on site. Housing society projects usually take 2–3 months end to end. Commercial and industrial plants take longer depending on capacity and grid approvals.",
  },
] as const;

export const PARTNERS = [
  { name: "Adani", src: "/partners/adani.svg" },
  { name: "Tata Power Solar", src: "/partners/tata-power-solar.png" },
  { name: "Waaree", src: "/partners/waaree.png" },
  { name: "Vikram Solar", src: "/partners/vikram-solar.svg" },
  { name: "Havells", src: "/partners/havells.svg" },
  { name: "Polycab", src: "/partners/polycab.png" },
  { name: "Hitachi", src: "/partners/hitachi.svg" },
  { name: "Jakson", src: "/partners/jakson.svg" },
] as const;

export const PROPERTY_TYPES = [
  "Independent house",
  "Villa",
  "Apartment / society",
  "Shop / office",
  "Factory / warehouse",
  "Other",
] as const;

export const CITIES = [
  "Delhi",
  "Noida",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Dehradun",
  "Ludhiana",
  "Other (UP / Haryana / Rajasthan / Uttarakhand / Punjab)",
] as const;
