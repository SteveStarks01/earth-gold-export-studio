// Content constants for Green Gold Agro Farm.

export const BRAND = {
  name: "Green Gold",
  fullName: "Green Gold Agro Farm",
  tagline: "L'Or Vert du Cameroun",
  established: "Cameroon",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/export", label: "Export" },
  { to: "/commitment", label: "Commitment" },
  { to: "/contact", label: "Contact" },
] as const;

export const PRODUCTS = [
  {
    code: "01",
    category: "Cocoa",
    name: "Fermented Cocoa Beans",
    origin: "South & Centre regions",
    note: "Sun-dried, sortable to grade A",
  },
  {
    code: "02",
    category: "Tubers",
    name: "Yam & Cassava",
    origin: "West & Adamawa highlands",
    note: "Field-cured, calibrated lots",
  },
  {
    code: "03",
    category: "Cereals",
    name: "Maize & Beans",
    origin: "North-West plateaux",
    note: "Moisture-controlled storage",
  },
  {
    code: "04",
    category: "Spices",
    name: "Pepper, Ginger, Garlic",
    origin: "Littoral & West",
    note: "Hand-sorted, aroma-graded",
  },
  {
    code: "05",
    category: "Garden",
    name: "Tomato & Pepper",
    origin: "Cool-season belts",
    note: "Cold-chain ready",
  },
  {
    code: "06",
    category: "Orchard",
    name: "Pear & Pineapple",
    origin: "Volcanic foothills",
    note: "Export-grade calibration",
  },
] as const;

export const COMMITMENTS = [
  {
    n: "i.",
    word: "Quality",
    body: "A single standard, applied from seedbed to seal. Lots are sampled, calibrated, and documented before any shipment leaves our hands.",
  },
  {
    n: "ii.",
    word: "Integrity",
    body: "Honest pricing, traceable origin, and commercial relationships built on what we can prove — not on what we can promise.",
  },
  {
    n: "iii.",
    word: "Sustainability",
    body: "Soil rotation, agroforestry corridors, and a refusal to scale faster than the land can recover. Yield is the consequence of patience.",
  },
  {
    n: "iv.",
    word: "Responsibility",
    body: "Fair compensation for the cooperatives we source with, and the operational discipline our partners abroad require.",
  },
] as const;

export const EXPORT_FACTS = [
  { k: "Origin", v: "Cameroon" },
  { k: "Documentation", v: "Phytosanitary, COO, ISPM-15" },
  { k: "Containers", v: "20' / 40' / 40'HC" },
  { k: "Incoterms", v: "FOB Douala · CIF on request" },
] as const;
