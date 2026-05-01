// Content constants for Green Gold Agro Farm.

export const BRAND = {
  name: "Green Gold",
  fullName: "Green Gold Agro Farm",
  tagline: "L'Or Vert du Cameroun",
  established: "Cameroon",
} as const;

export const LOCATION = {
  short: "Douala — Edéa, Cameroon",
  long: "Cameroon · Douala — Edéa corridor",
  country: "Republic of Cameroon",
  // Approx. mid-point of the Douala–Edéa corridor (Littoral region)
  coords: "3°48′N · 10°08′E",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sectors", label: "Sectors" },
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

// Operational sectors beyond the crop catalogue — the wider Green Gold operation.
export const SECTORS = [
  {
    n: "01",
    key: "livestock",
    name: "Livestock",
    summary: "Cattle, goats and poultry raised on rotational pasture along the Sanaga floodplain.",
    body: "Free-range herds and pens managed under veterinary protocol. Feed sourced from our own cereal harvest where possible, animals tracked from birth, and slaughter coordinated through partner abattoirs to retail and HORECA channels.",
    facts: [
      ["Stock", "Cattle · Goats · Poultry"],
      ["Method", "Rotational pasture"],
      ["Channel", "Retail · HORECA"],
    ],
  },
  {
    n: "02",
    key: "fish",
    name: "Fish farming",
    summary: "Freshwater aquaculture ponds along the Edéa basin — tilapia and African catfish.",
    body: "Earthen and lined ponds operated under continuous water-quality monitoring. Fingerlings sourced from accredited hatcheries, feed protocols documented per pond, and harvest scheduled to match wholesale demand cycles in Douala and Yaoundé.",
    facts: [
      ["Species", "Tilapia · Catfish"],
      ["System", "Earthen · lined ponds"],
      ["Cycle", "Continuous harvest"],
    ],
  },
  {
    n: "03",
    key: "cold-house",
    name: "Cold house",
    summary: "Temperature-controlled storage between Douala and Edéa, sized for export pre-staging.",
    body: "Multi-zone cold rooms holding produce at the temperature each crop demands — pineapple at one set point, leafy garden produce at another, animal protein at a third. Power is grid-with-backup, and every pallet carries a temperature log from intake to dispatch.",
    facts: [
      ["Zones", "Multi-temperature"],
      ["Backup", "Grid + generator"],
      ["Logging", "Per-pallet record"],
    ],
  },
  {
    n: "04",
    key: "package-house",
    name: "Package house",
    summary: "Sorting, calibration and packing facility, sized for container-grade export lots.",
    body: "Hand-sorting tables, weight calibration, moisture checks and ISPM-15 pallet preparation under one roof. Crops are graded against the buyer's specification, packed in jute, carton or vacuum as required, and labelled in French and English before container loading.",
    facts: [
      ["Operations", "Sort · Calibrate · Pack"],
      ["Pallets", "ISPM-15 compliant"],
      ["Labels", "FR · EN"],
    ],
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
  { k: "Origin", v: "Cameroon · Douala — Edéa" },
  { k: "Documentation", v: "Phytosanitary, COO, ISPM-15" },
  { k: "Containers", v: "20' / 40' / 40'HC" },
  { k: "Incoterms", v: "FOB Douala · CIF on request" },
] as const;
