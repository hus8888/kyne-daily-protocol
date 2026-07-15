// KYNE Delivery-Method Comparison Data
// 23 compounds × 4 delivery methods. Values are relative bioavailability /
// absorption index (0–100) reconstructed from the KYNE research notes.
// PEPI = KYNE's proprietary buccal film delivery.

export type DeliveryMethod = "PEPI Film" | "Capsule" | "Gummy" | "Powder";

export const DELIVERY_METHODS: DeliveryMethod[] = [
  "PEPI Film",
  "Capsule",
  "Gummy",
  "Powder",
];

export interface CompoundRow {
  compound: string;
  line: string;          // which KYNE line it belongs to
  category: string;
  // relative absorption / bioavailability index per delivery method (0–100)
  scores: Record<DeliveryMethod, number>;
  note?: string;         // honest caveat where relevant
}

// PEPI advantage comes from buccal/sublingual mucosal absorption that bypasses
// first-pass metabolism. It does NOT help compounds that need gut action.
export const COMPOUNDS: CompoundRow[] = [
  { compound: "Caffeine", line: "kyne core", category: "Stimulant", scores: { "PEPI Film": 96, Capsule: 80, Gummy: 78, Powder: 82 } },
  { compound: "L-theanine", line: "kyne core", category: "Amino acid", scores: { "PEPI Film": 94, Capsule: 74, Gummy: 70, Powder: 76 } },
  { compound: "Magnesium L-threonate", line: "kyne core", category: "Mineral", scores: { "PEPI Film": 88, Capsule: 70, Gummy: 58, Powder: 66 } },
  { compound: "Glycine", line: "kyne core", category: "Amino acid", scores: { "PEPI Film": 90, Capsule: 78, Gummy: 72, Powder: 80 } },
  { compound: "Vitamin D3", line: "kyne d3+k", category: "Fat-soluble vitamin", scores: { "PEPI Film": 92, Capsule: 82, Gummy: 74, Powder: 70 } },
  { compound: "Vitamin K2 (MK-7)", line: "kyne d3+k", category: "Fat-soluble vitamin", scores: { "PEPI Film": 90, Capsule: 80, Gummy: 72, Powder: 68 } },
  { compound: "Curcumin (Theracurmin®)", line: "kyne gut", category: "Polyphenol", scores: { "PEPI Film": 85, Capsule: 72, Gummy: 60, Powder: 55 }, note: "PEPI aids systemic delivery; gut-localized action still favors oral forms." },
  { compound: "Berberine", line: "kyne gut", category: "Alkaloid", scores: { "PEPI Film": 78, Capsule: 74, Gummy: 62, Powder: 68 }, note: "Acts partly in the gut lumen — oral forms retain value here." },
  { compound: "Zinc-carnosine", line: "kyne gut", category: "Mineral complex", scores: { "PEPI Film": 64, Capsule: 82, Gummy: 60, Powder: 70 }, note: "Mucosal gut barrier action favors swallowed forms over buccal film." },
  { compound: "L-glutamine", line: "kyne gut", category: "Amino acid", scores: { "PEPI Film": 60, Capsule: 80, Gummy: 66, Powder: 84 }, note: "Gut enterocyte fuel — powder/capsule reach the lumen better than buccal film." },
  { compound: "Lion's mane", line: "kyne mind", category: "Nootropic mushroom", scores: { "PEPI Film": 82, Capsule: 74, Gummy: 64, Powder: 70 } },
  { compound: "Alpha-GPC / Cognizin®", line: "kyne mind", category: "Choline", scores: { "PEPI Film": 93, Capsule: 78, Gummy: 68, Powder: 74 } },
  { compound: "Bacopa (Bacognize®)", line: "kyne mind", category: "Adaptogen", scores: { "PEPI Film": 84, Capsule: 76, Gummy: 66, Powder: 72 } },
  { compound: "Rhodiola", line: "kyne mind", category: "Adaptogen", scores: { "PEPI Film": 86, Capsule: 74, Gummy: 64, Powder: 70 } },
  { compound: "NMN / NR (Niagen®)", line: "kyne mito", category: "NAD+ precursor", scores: { "PEPI Film": 89, Capsule: 70, Gummy: 56, Powder: 64 }, note: "Hygroscopic — film stabilization is a formulation advantage." },
  { compound: "Urolithin A (Mitopure®)", line: "kyne mito", category: "Postbiotic", scores: { "PEPI Film": 80, Capsule: 76, Gummy: 62, Powder: 66 } },
  { compound: "PQQ", line: "kyne mito", category: "Cofactor", scores: { "PEPI Film": 87, Capsule: 74, Gummy: 62, Powder: 68 } },
  { compound: "ALCAR", line: "kyne mito", category: "Amino acid", scores: { "PEPI Film": 88, Capsule: 76, Gummy: 66, Powder: 74 } },
  { compound: "GABA", line: "kyne nerve", category: "Neurotransmitter", scores: { "PEPI Film": 91, Capsule: 66, Gummy: 58, Powder: 62 }, note: "Buccal delivery improves an otherwise poorly-absorbed molecule." },
  { compound: "PEA (Levagen+®)", line: "kyne nerve", category: "Lipid mediator", scores: { "PEPI Film": 85, Capsule: 78, Gummy: 66, Powder: 70 } },
  { compound: "Vitamin B12", line: "kyne nerve", category: "Water-soluble vitamin", scores: { "PEPI Film": 95, Capsule: 72, Gummy: 68, Powder: 70 }, note: "Sublingual B12 is well-established as superior to swallowed forms." },
  { compound: "Resveratrol (Resvida®)", line: "kyne age", category: "Polyphenol", scores: { "PEPI Film": 83, Capsule: 68, Gummy: 56, Powder: 60 }, note: "Notoriously low oral bioavailability — buccal route helps." },
  { compound: "Glutathione (Setria®)", line: "kyne age", category: "Antioxidant", scores: { "PEPI Film": 86, Capsule: 62, Gummy: 54, Powder: 58 }, note: "Degraded by stomach acid — buccal delivery preserves more." },
];

export const LINE_FILTERS = [
  "All",
  "kyne core",
  "kyne d3+k",
  "kyne gut",
  "kyne mind",
  "kyne mito",
  "kyne nerve",
  "kyne age",
];

// Average PEPI advantage vs best alternative — for the headline stat
export const pepiAdvantage = (row: CompoundRow): number => {
  const alt = Math.max(row.scores.Capsule, row.scores.Gummy, row.scores.Powder);
  return row.scores["PEPI Film"] - alt;
};
