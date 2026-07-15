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
      "Morning: caffeine + L-theanine + B-complex",
      "Day: adaptogen + electrolyte blend",
      "Night: magnesium L-threonate + L-theanine + glycine",
    ],
    variants: [
      {
        id: "signal",
        lineSlug: "signal",
        line: "kyne core",
        window: "morning",
        name: "Signal",
        focus: "Clean activation to start the day",
        ingredients: ["Caffeine (natural)", "L-theanine", "B-complex", "Tyrosine"],
      },
      {
        id: "shift",
        lineSlug: "signal",
        line: "kyne core",
        window: "day",
        name: "Shift",
        focus: "Sustained focus without the crash",
        ingredients: ["Rhodiola", "Electrolytes", "Panax ginseng", "B12"],
      },
      {
        id: "rhythm",
        lineSlug: "signal",
        line: "kyne core",
        window: "night",
        name: "Rhythm",
        focus: "Wind down and deepen sleep",
        ingredients: ["Magnesium L-threonate", "L-theanine", "Glycine", "Apigenin"],
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
    actives: ["Vitamin D3 5000 IU", "Vitamin K2 (MK-7) 200µg"],
    variants: [
      {
        id: "d3k-morning",
        lineSlug: "d3k",
        line: "kyne d3+k",
        window: "morning",
        name: "D3+K — Morning",
        focus: "Fat-soluble uptake with your first meal",
        ingredients: ["Vitamin D3 5000 IU", "Vitamin K2 MK-7 200µg"],
      },
      {
        id: "d3k-day",
        lineSlug: "d3k",
        line: "kyne d3+k",
        window: "day",
        name: "D3+K — Day",
        focus: "Midday top-up",
        ingredients: ["Vitamin D3 2000 IU", "Vitamin K2 MK-7 100µg"],
      },
      {
        id: "d3k-night",
        lineSlug: "d3k",
        line: "kyne d3+k",
        window: "night",
        name: "D3+K — Night",
        focus: "Evening maintenance dose",
        ingredients: ["Vitamin D3 2000 IU", "Vitamin K2 MK-7 100µg"],
      },
    ],
  },
  {
    slug: "gut",
    name: "kyne gut",
    category: "Gut Health / Microbiome",
    tagline: "Systemic anti-inflammatory and glycemic support.",
    description:
      "Curcumin and berberine at bioavailable multiples, with zinc-carnosine and L-glutamine. Positioned as systemic anti-inflammatory + glycemic support via mucosal delivery.",
    color: "#EA580C",
    pricePerMonth: 54,
    actives: [
      "Theracurmin® curcumin (6× bioavailability)",
      "Berberine (11×)",
      "Zinc-carnosine",
      "L-glutamine",
    ],
    variants: [
      {
        id: "gut-morning",
        lineSlug: "gut",
        line: "kyne gut",
        window: "morning",
        name: "Gut — Morning",
        focus: "Glycemic control before your first meal",
        ingredients: ["Berberine", "Theracurmin® curcumin"],
      },
      {
        id: "gut-day",
        lineSlug: "gut",
        line: "kyne gut",
        window: "day",
        name: "Gut — Day",
        focus: "Anti-inflammatory support",
        ingredients: ["Theracurmin® curcumin", "Zinc-carnosine"],
      },
      {
        id: "gut-night",
        lineSlug: "gut",
        line: "kyne gut",
        window: "night",
        name: "Gut — Night",
        focus: "Overnight repair support",
        ingredients: ["L-glutamine", "Zinc-carnosine"],
      },
    ],
  },
  {
    slug: "mind",
    name: "kyne mind",
    category: "Mental Fitness",
    tagline: "Focus, memory, and cognitive drive.",
    description:
      "Lion's mane, Cognizin® citicoline (alpha-GPC), Bacognize® bacopa, and rhodiola for focus, memory consolidation, and stress-resilient cognition.",
    color: "#0891B2",
    pricePerMonth: 59,
    actives: [
      "Lion's mane (2–3×)",
      "Cognizin® / Alpha-GPC",
      "Bacognize® bacopa (2×)",
      "Rhodiola (SHR-5)",
    ],
    variants: [
      {
        id: "mind-morning",
        lineSlug: "mind",
        line: "kyne mind",
        window: "morning",
        name: "Mind — Morning",
        focus: "Sharp focus and drive",
        ingredients: ["Alpha-GPC", "Rhodiola", "Lion's mane"],
      },
      {
        id: "mind-day",
        lineSlug: "mind",
        line: "kyne mind",
        window: "day",
        name: "Mind — Day",
        focus: "Sustained cognition",
        ingredients: ["Cognizin® citicoline", "Bacopa"],
      },
      {
        id: "mind-night",
        lineSlug: "mind",
        line: "kyne mind",
        window: "night",
        name: "Mind — Night",
        focus: "Memory consolidation overnight",
        ingredients: ["Bacognize® bacopa", "Lion's mane"],
      },
    ],
  },
  {
    slug: "mito",
    name: "kyne mito",
    category: "Mitochondrial Health",
    tagline: "Cellular energy at the source.",
    description:
      "Niagen® NR/NMN, Mitopure® urolithin A, PQQ, and ALCAR to support mitochondrial biogenesis and cellular energy. Urolithin A is dose-stacked with the age line (mito 50mg + age 25mg = 75mg, within AMAZ-02 trial range).",
    color: "#7C3AED",
    pricePerMonth: 64,
    actives: [
      "Niagen® NR / NMN (1.7×)",
      "Mitopure® urolithin A (3×)",
      "PQQ",
      "ALCAR (2.3×)",
    ],
    variants: [
      {
        id: "mito-morning",
        lineSlug: "mito",
        line: "kyne mito",
        window: "morning",
        name: "Mito — Morning",
        focus: "NAD+ precursor to start the day",
        ingredients: ["Niagen® NR", "ALCAR"],
      },
      {
        id: "mito-day",
        lineSlug: "mito",
        line: "kyne mito",
        window: "day",
        name: "Mito — Day",
        focus: "Sustained cellular energy",
        ingredients: ["Mitopure® urolithin A 50mg", "PQQ"],
      },
      {
        id: "mito-night",
        lineSlug: "mito",
        line: "kyne mito",
        window: "night",
        name: "Mito — Night",
        focus: "Overnight mitochondrial repair",
        ingredients: ["PQQ", "ALCAR"],
      },
    ],
  },
  {
    slug: "nerve",
    name: "kyne nerve",
    category: "Nervous System",
    tagline: "Calm, resilient, well-regulated.",
    description:
      "GABA, magnesium L-threonate, Levagen+® PEA, and high-dose B12 to support nervous-system regulation, calm, and nerve health.",
    color: "#3B82F6",
    pricePerMonth: 54,
    actives: [
      "GABA (3×)",
      "Magnesium L-threonate (2×)",
      "Levagen+® PEA (3×)",
      "Vitamin B12 (5×)",
    ],
    variants: [
      {
        id: "nerve-morning",
        lineSlug: "nerve",
        line: "kyne nerve",
        window: "morning",
        name: "Nerve — Morning",
        focus: "Steady, regulated start",
        ingredients: ["Vitamin B12", "Levagen+® PEA"],
      },
      {
        id: "nerve-day",
        lineSlug: "nerve",
        line: "kyne nerve",
        window: "day",
        name: "Nerve — Day",
        focus: "Calm focus under load",
        ingredients: ["Magnesium L-threonate", "PEA"],
      },
      {
        id: "nerve-night",
        lineSlug: "nerve",
        line: "kyne nerve",
        window: "night",
        name: "Nerve — Night",
        focus: "Deep nervous-system downshift",
        ingredients: ["GABA", "Magnesium L-threonate"],
      },
    ],
  },
  {
    slug: "longevity",
    name: "kyne age",
    category: "Longevity",
    tagline: "Play the long game.",
    description:
      "Resvida® resveratrol, berberine, Setria® glutathione, and quercetin — a senescence and healthspan protocol. Honest framing: no supplement has demonstrated human lifespan extension; this complements sleep, exercise, and diet.",
    color: "#059669",
    pricePerMonth: 64,
    actives: [
      "Resvida® resveratrol (15×)",
      "Berberine (11×)",
      "Setria® glutathione (9×)",
      "Quercetin (6×)",
    ],
    variants: [
      {
        id: "longevity-morning",
        lineSlug: "longevity",
        line: "kyne age",
        window: "morning",
        name: "Age — Morning",
        focus: "Antioxidant and glycemic support",
        ingredients: ["Resvida® resveratrol", "Berberine"],
      },
      {
        id: "longevity-day",
        lineSlug: "longevity",
        line: "kyne age",
        window: "day",
        name: "Age — Day",
        focus: "Senolytic support + urolithin A stack",
        ingredients: ["Quercetin", "Mitopure® urolithin A 25mg"],
      },
      {
        id: "longevity-night",
        lineSlug: "longevity",
        line: "kyne age",
        window: "night",
        name: "Age — Night",
        focus: "Glutathione recycling overnight",
        ingredients: ["Setria® glutathione", "Quercetin"],
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
