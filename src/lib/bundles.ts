// KYNE Bundles + Tier Packs
// 7 archetype bundles (authoritative monthly price) + 3 tier packs (monthly/annual).
// Prices reconstructed from research notes; bundle price is the single source of
// truth added to cart (no per-SKU explosion).

export interface Bundle {
  id: string;
  name: string;
  blurb: string;
  lines: string[];       // line slugs included
  skus: string[];        // variant ids (for strip count)
  monthly: number;       // authoritative bundle price
  flagship?: boolean;
}

export const BUNDLES: Bundle[] = [
  {
    id: "foundation",
    name: "Foundation",
    blurb: "The everyday baseline — core protocol plus vitamin D3+K.",
    lines: ["signal", "d3k"],
    skus: ["signal", "shift", "rhythm", "d3k-morning", "d3k-day", "d3k-night"],
    monthly: 93,
  },
  {
    id: "sleep-architecture",
    name: "Sleep Architecture",
    blurb: "Deeper, more restorative sleep — core rhythm + nerve downshift.",
    lines: ["signal", "nerve"],
    skus: ["signal", "shift", "rhythm", "nerve-morning", "nerve-day", "nerve-night"],
    monthly: 147,
  },
  {
    id: "gut-brain",
    name: "Gut–Brain",
    blurb: "The microbiome-cognition axis — gut health + mental fitness.",
    lines: ["gut", "mind"],
    skus: ["gut-morning", "gut-day", "gut-night", "mind-morning", "mind-day", "mind-night"],
    monthly: 167,
  },
  {
    id: "stress",
    name: "Stress Resilience",
    blurb: "Steady under load — mind + nerve for calm, focused resilience.",
    lines: ["mind", "nerve"],
    skus: ["mind-morning", "mind-day", "mind-night", "nerve-morning", "nerve-day", "nerve-night"],
    monthly: 167,
  },
  {
    id: "performance",
    name: "Performance",
    blurb: "Peak output — core drive + mitochondrial energy.",
    lines: ["signal", "mito"],
    skus: ["signal", "shift", "rhythm", "mito-morning", "mito-day", "mito-night"],
    monthly: 177,
    flagship: true,
  },
  {
    id: "healthy-aging",
    name: "Healthy Aging",
    blurb: "Age well — longevity protocol + mitochondrial support.",
    lines: ["longevity", "mito"],
    skus: ["longevity-morning", "longevity-day", "longevity-night", "mito-morning", "mito-day", "mito-night"],
    monthly: 211,
  },
  {
    id: "longevity",
    name: "Longevity",
    blurb: "The full long-game stack — age + mito + core.",
    lines: ["longevity", "mito", "signal"],
    skus: [
      "longevity-morning", "longevity-day", "longevity-night",
      "mito-morning", "mito-day", "mito-night",
      "signal", "shift", "rhythm",
    ],
    monthly: 217,
    flagship: true,
  },
];

export interface TierPack {
  key: string;
  name: string;
  linesIncluded: number | "all"; // 1, 3, or all 7 specialty + core
  monthly: number;
  annual: number;   // 15% off 12 months
  blurb: string;
}

// Verified annual math (15% off): 49×12×.85=499, 129×12×.85=1316, 249×12×.85=2540
export const TIER_PACKS: TierPack[] = [
  {
    key: "starter",
    name: "Starter Pack",
    linesIncluded: 1,
    monthly: 49,
    annual: 499,
    blurb: "Pick any one line. Morning, day, night — 3 strips.",
  },
  {
    key: "essential",
    name: "Essential Pack",
    linesIncluded: 3,
    monthly: 129,
    annual: 1316,
    blurb: "Pick any three lines. 9 strips, your custom stack.",
  },
  {
    key: "complete",
    name: "Complete Pack",
    linesIncluded: "all",
    monthly: 249,
    annual: 2540,
    blurb: "Every line, every window. The full 21-strip protocol.",
  },
];
