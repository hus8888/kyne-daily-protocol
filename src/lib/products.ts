// KYNE Product Catalog — single source of truth
// Reconstructed from research notes (2026-04-26 → 2026-04-29).
// 8 lines (core + 7 specialty) × 3 circadian windows (morning/day/night).
// Pricing = reformulated US catalog (therapeutic doses, branded ingredients).

export type TimeWindow = "morning" | "day" | "night";

export interface ProductVariant {
  id: string;            // e.g. "mind-morning"
  lineSlug: string;      // groups the 3 variants of a line (core uses "signal")
  line: string;          // display line name e.g. "kyne mind"
  window: TimeWindow;
  name: string;          // variant display name e.g. "Signal", "Mind — Morning"
  focus: string;         // one-line benefit for this window
  ingredients: string[]; // key actives for this window
}

export interface ProductLine {
  slug: string;          // route slug e.g. "mind" (core = "signal")
  name: string;          // "kyne mind"
  category: string;      // "Mental Fitness"
  tagline: string;
  description: string;
  color: string;         // hex accent for the line
  pricePerMonth: number; // per-line monthly subscription
  flagship?: boolean;
  intlOnly?: boolean;    // peptide line — geo-blocked for US
  legalFlag?: string;    // compliance note surfaced in UI, never hidden
  actives: string[];     // headline formulation (with multipliers vs capsule)
  variants: ProductVariant[];
}

// Circadian brand colors (core line)
export const WINDOW_COLORS: Record<TimeWindow, string> = {
  morning: "#F59E0B", // warm amber/gold
  day: "#06B6D4",     // teal/cyan
  night: "#6366F1",   // deep indigo/purple
};

export const WINDOW_LABEL: Record<TimeWindow, string> = {
  morning: "Morning",
  day: "Day",
  night: "Night",
};

export const BRAND_GOLD = "#d4a574";

export const LINES: ProductLine[] = [
  {
    slug: "signal",
    name: "kyne core",
    category: "Daily Protocol",
    tagline: "Morning, day, night — your body runs on a clock.",
    description:
      "The flagship circadian protocol. Three strips timed to your body's natural rhythm: Signal to start, Shift to sustain, Rhythm to wind down.",
    color: "#F59E0B",
    pricePerMonth: 54,
    flagship: true,
    actives: [
      "Morning: KSM-66 Ashwagandha 300mg + L-tyrosine 200mg + Methylcobalamin 500mcg",
      "Day: SHR-5 Rhodiola 200mg + L-theanine 150mg + Phosphatidylserine 100mg",
      "Night: Magnesium glycinate 200mg + Apigenin 50mg + L-theanine 100mg",
    ],
    variants: [
      {
        id: "signal",
        lineSlug: "signal",
        line: "kyne core",
        window: "morning",
        name: "Signal",
        focus: "Clean activation to start the day",
        ingredients: ["KSM-66 Ashwagandha 300mg", "L-tyrosine 200mg", "Methylcobalamin B12 500mcg", "Riboflavin (B2) 1.6mg"],
      },
      {
        id: "shift",
        lineSlug: "signal",
        line: "kyne core",
        window: "day",
        name: "Shift",
        focus: "Sustained focus without the crash",
        ingredients: ["SHR-5 Rhodiola rosea 200mg", "L-theanine 150mg", "Phosphatidylserine 100mg"],
      },
      {
        id: "rhythm",
        lineSlug: "signal",
        line: "kyne core",
        window: "night",
        name: "Rhythm",
        focus: "Wind down and deepen sleep",
        ingredients: ["Magnesium glycinate 200mg", "Apigenin 50mg", "L-theanine 100mg", "Glycine 100mg"],
      },
    ],
  },
  {
    slug: "d3k",
    name: "kyne d3+k",
    category: "Foundational",
    tagline: "The vitamin most people are short on — dialed in.",
    description:
      "Clinical-dose vitamin D3 paired with K2 (MK-7) for calcium routing and immune, bone, and cardiovascular support.",
    color: "#EAB308",
    pricePerMonth: 39,
    actives: ["Vitamin D3 5000 IU", "Vitamin K2-MK7 (MenaQ7) 200mcg"],
    variants: [
      {
        id: "d3k-morning",
        lineSlug: "d3k",
        line: "kyne d3+k",
        window: "morning",
        name: "D3+K — Morning",
        focus: "Fat-soluble uptake with your first meal",
        ingredients: ["Vitamin D3 5000 IU", "Vitamin K2-MK7 (MenaQ7) 200mcg"],
      },
      {
        id: "d3k-day",
        lineSlug: "d3k",
        line: "kyne d3+k",
        window: "day",
        name: "D3+K — Day",
        focus: "Midday top-up",
        ingredients: ["Vitamin D3 2500 IU", "Vitamin K2-MK7 (MenaQ7) 100mcg"],
      },
      {
        id: "d3k-night",
        lineSlug: "d3k",
        line: "kyne d3+k",
        window: "night",
        name: "D3+K — Night",
        focus: "Evening maintenance with sleep support",
        ingredients: ["Vitamin D3 2500 IU", "Vitamin K2-MK7 (MenaQ7) 100mcg", "Magnesium glycinate 200mg"],
      },
    ],
  },
  {
    slug: "gut",
    name: "kyne gut",
    category: "Gut Health / Microbiome",
    tagline: "Systemic anti-inflammatory and glycemic support.",
    description:
      "Theracurmin curcumin and dihydroberberine at bioavailable multiples, with zinc-carnosine, DGL licorice, and quercetin for systemic anti-inflammatory, glycemic, and mucosal support via buccal delivery.",
    color: "#EA580C",
    pricePerMonth: 54,
    actives: [
      "Theracurmin® curcumin 90mg (nano-emulsion, 6× bioavailability)",
      "Dihydroberberine (DHB) 200mg — strip-native replacement for berberine",
      "Zinc carnosine 75mg",
      "DGL licorice extract 150mg + Quercetin 150mg",
    ],
    variants: [
      {
        id: "gut-morning",
        lineSlug: "gut",
        line: "kyne gut",
        window: "morning",
        name: "Gut — Morning",
        focus: "Mucosal protection and anti-inflammation",
        ingredients: ["Theracurmin® curcumin 90mg", "Zinc carnosine 75mg"],
      },
      {
        id: "gut-day",
        lineSlug: "gut",
        line: "kyne gut",
        window: "day",
        name: "Gut — Day",
        focus: "Glycemic and metabolic support",
        ingredients: ["Dihydroberberine (DHB) 200mg"],
      },
      {
        id: "gut-night",
        lineSlug: "gut",
        line: "kyne gut",
        window: "night",
        name: "Gut — Night",
        focus: "Overnight mucosal repair",
        ingredients: ["DGL licorice extract 150mg", "Zinc carnosine 37.5mg", "Quercetin 150mg"],
      },
    ],
  },
  {
    slug: "mind",
    name: "kyne mind",
    category: "Mental Fitness",
    tagline: "Focus, memory, and cognitive drive.",
    description:
      "Lion's mane 8:1 extract, Alpha-GPC (Cognizin), Bacognize® bacopa, and rhodiola for focus, memory consolidation, and stress-resilient cognition. Standardized extracts keep every active within strip payload limits.",
    color: "#0891B2",
    pricePerMonth: 59,
    actives: [
      "Lion's mane 8:1 extract 150mg (equiv ~1.2g raw)",
      "Alpha-GPC (Cognizin) 300mg",
      "Bacognize® Bacopa 300mg",
      "SHR-5 Rhodiola 200mg",
    ],
    variants: [
      {
        id: "mind-morning",
        lineSlug: "mind",
        line: "kyne mind",
        window: "morning",
        name: "Mind — Morning",
        focus: "Sharp focus and drive",
        ingredients: ["Alpha-GPC (Cognizin) 300mg", "Lion's mane 8:1 extract 150mg"],
      },
      {
        id: "mind-day",
        lineSlug: "mind",
        line: "kyne mind",
        window: "day",
        name: "Mind — Day",
        focus: "Sustained cognition and memory",
        ingredients: ["Bacognize® Bacopa 300mg", "Phosphatidylserine 100mg", "L-theanine 100mg"],
      },
      {
        id: "mind-night",
        lineSlug: "mind",
        line: "kyne mind",
        window: "night",
        name: "Mind — Night",
        focus: "Neural recovery and memory consolidation",
        ingredients: ["Lion's mane 8:1 extract 150mg", "Magnesium glycinate 200mg", "Apigenin 50mg"],
      },
    ],
  },
  {
    slug: "mito",
    name: "kyne mito",
    category: "Mitochondrial Health",
    tagline: "Cellular energy at the source.",
    description:
      "NMN 300mg, Mitopure® urolithin A 500mg, PQQ, and ALCAR for mitochondrial biogenesis and cellular energy. Buccal NMN bypasses hepatic first-pass for superior NAD+ delivery. Mitopure is dosed at the clinical evidence floor of 500mg.",
    color: "#7C3AED",
    pricePerMonth: 64,
    actives: [
      "NMN 300mg (buccal — hepatic first-pass bypass)",
      "Mitopure® Urolithin A 500mg (clinical evidence dose)",
      "PQQ 20mg",
      "ALCAR 200mg",
    ],
    variants: [
      {
        id: "mito-morning",
        lineSlug: "mito",
        line: "kyne mito",
        window: "morning",
        name: "Mito — Morning",
        focus: "NAD+ stack to power the day",
        ingredients: ["NMN 300mg", "PQQ 20mg", "CoQ10 (Kaneka QH) 100mg"],
      },
      {
        id: "mito-day",
        lineSlug: "mito",
        line: "kyne mito",
        window: "day",
        name: "Mito — Day",
        focus: "Mitophagy and cellular cleanup",
        ingredients: ["Mitopure® Urolithin A 500mg"],
      },
      {
        id: "mito-night",
        lineSlug: "mito",
        line: "kyne mito",
        window: "night",
        name: "Mito — Night",
        focus: "Overnight mitochondrial repair",
        ingredients: ["CoQ10 (Kaneka QH) 100mg", "ALCAR 200mg", "Glycine 100mg"],
      },
    ],
  },
  {
    slug: "nerve",
    name: "kyne nerve",
    category: "Nervous System",
    tagline: "Calm, resilient, well-regulated.",
    description:
      "Pharma-GABA 100mg, magnesium glycinate, Levagen+® PEA, Alpha-GPC, and high-dose B12 to support nervous-system regulation, calm, and nerve health. All doses calibrated for strip payload and evidence-based ranges.",
    color: "#3B82F6",
    pricePerMonth: 54,
    actives: [
      "Pharma-GABA® 100mg (fermented — buccal effective)",
      "Magnesium glycinate 200mg",
      "Levagen+® PEA 300mg",
      "Methylcobalamin B12 1000mcg",
    ],
    variants: [
      {
        id: "nerve-morning",
        lineSlug: "nerve",
        line: "kyne nerve",
        window: "morning",
        name: "Nerve — Morning",
        focus: "Steady, regulated start",
        ingredients: ["Alpha-GPC 150mg", "Methylcobalamin B12 1000mcg"],
      },
      {
        id: "nerve-day",
        lineSlug: "nerve",
        line: "kyne nerve",
        window: "day",
        name: "Nerve — Day",
        focus: "Calm focus under load",
        ingredients: ["Levagen+® PEA 300mg", "Magnesium glycinate 200mg"],
      },
      {
        id: "nerve-night",
        lineSlug: "nerve",
        line: "kyne nerve",
        window: "night",
        name: "Nerve — Night",
        focus: "Deep nervous-system downshift",
        ingredients: ["Pharma-GABA® 100mg", "Magnesium glycinate 200mg", "P5P (active B6) 50mg", "L-theanine 100mg"],
      },
    ],
  },
  {
    slug: "longevity",
    name: "kyne age",
    category: "Longevity",
    tagline: "Play the long game.",
    description:
      "Resvida® resveratrol, dihydroberberine (DHB), Setria® glutathione 250mg, and quercetin — a senescence and healthspan protocol. Glutathione via buccal route achieves >80% absorption vs <10% oral. Honest framing: no supplement has demonstrated human lifespan extension; this complements sleep, exercise, and diet.",
    color: "#059669",
    pricePerMonth: 64,
    actives: [
      "Resvida® resveratrol 150mg (buccal — first-pass bypass)",
      "Dihydroberberine (DHB) 200mg",
      "Setria® Glutathione 250mg (>80% buccal absorption)",
      "Quercetin 150mg",
    ],
    variants: [
      {
        id: "longevity-morning",
        lineSlug: "longevity",
        line: "kyne age",
        window: "morning",
        name: "Age — Morning",
        focus: "Sirtuin activation and antioxidant defense",
        ingredients: ["Resvida® resveratrol 150mg", "Quercetin 150mg"],
      },
      {
        id: "longevity-day",
        lineSlug: "longevity",
        line: "kyne age",
        window: "day",
        name: "Age — Day",
        focus: "Metabolic longevity support",
        ingredients: ["Dihydroberberine (DHB) 200mg", "Theracurmin® curcumin 90mg"],
      },
      {
        id: "longevity-night",
        lineSlug: "longevity",
        line: "kyne age",
        window: "night",
        name: "Age — Night",
        focus: "Master antioxidant reset + autophagy",
        ingredients: ["Setria® Glutathione 250mg", "Spermidine 1mg"],
      },
    ],
  },
  {
    slug: "peptide",
    name: "kyne peptide",
    category: "Peptides & Biohacking",
    tagline: "The frontier line.",
    description:
      "An advanced peptide protocol for tissue repair and recovery.",
    color: "#DB2777",
    pricePerMonth: 79,
    intlOnly: true,
    legalFlag:
      "International only. These peptides are not available for sale in the United States pending regulatory review. Shown for informational purposes.",
    actives: [
      "BPC-157 (2.5×)",
      "GHK-Cu (3.6×)",
      "KPV (3×)",
      "Epithalon (3.6×)",
    ],
    variants: [
      {
        id: "peptide-morning",
        lineSlug: "peptide",
        line: "kyne peptide",
        window: "morning",
        name: "Peptide — Morning",
        focus: "Recovery and tissue support",
        ingredients: ["BPC-157", "KPV"],
      },
      {
        id: "peptide-day",
        lineSlug: "peptide",
        line: "kyne peptide",
        window: "day",
        name: "Peptide — Day",
        focus: "Systemic repair",
        ingredients: ["GHK-Cu", "BPC-157"],
      },
      {
        id: "peptide-night",
        lineSlug: "peptide",
        line: "kyne peptide",
        window: "night",
        name: "Peptide — Night",
        focus: "Overnight regeneration",
        ingredients: ["Epithalon", "GHK-Cu"],
      },
    ],
  },
];

// Helpers
export const getLine = (slug: string): ProductLine | undefined =>
  LINES.find((l) => l.slug === slug);

export const getLineVariants = (lineSlug: string): ProductVariant[] => {
  const line = LINES.find((l) => l.slug === lineSlug);
  return line ? line.variants : [];
};

export const ALL_VARIANTS: ProductVariant[] = LINES.flatMap((l) => l.variants);

export const priceForLine = (slug: string): number =>
  getLine(slug)?.pricePerMonth ?? 0;
