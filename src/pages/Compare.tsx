// KYNE Delivery-Method Comparison — 23 compounds × 4 delivery methods.
// Bars, line filter, sort, and PEPI advantage badges.
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  COMPOUNDS,
  DELIVERY_METHODS,
  DeliveryMethod,
  LINE_FILTERS,
  pepiAdvantage,
} from "@/lib/compare-data";
import { BRAND_GOLD } from "@/lib/products";
import { ArrowLeft, ArrowUpDown } from "lucide-react";

type SortKey = "compound" | DeliveryMethod | "advantage";

const METHOD_COLOR: Record<DeliveryMethod, string> = {
  "PEPI Film": BRAND_GOLD,
  Capsule: "#9CA3AF",
  Gummy: "#C4B5A0",
  Powder: "#D6C9B6",
};

export default function Compare() {
  const [lineFilter, setLineFilter] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("advantage");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    let r = COMPOUNDS.filter(
      (c) => lineFilter === "All" || c.line === lineFilter
    );
    r = [...r].sort((a, b) => {
      let av: number | string;
      let bv: number | string;
      if (sortKey === "compound") {
        av = a.compound;
        bv = b.compound;
      } else if (sortKey === "advantage") {
        av = pepiAdvantage(a);
        bv = pepiAdvantage(b);
      } else {
        av = a.scores[sortKey];
        bv = b.scores[sortKey];
      }
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sortDir === "asc"
        ? (av as number) - (bv as number)
        : (bv as number) - (av as number);
    });
    return r;
  }, [lineFilter, sortKey, sortDir]);

  const avgAdvantage = Math.round(
    COMPOUNDS.reduce((s, c) => s + pepiAdvantage(c), 0) / COMPOUNDS.length
  );

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <header className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest" style={{ color: BRAND_GOLD }}>
            The Science of Delivery
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Why the format matters as much as the formula
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Most supplements lose potency before they reach your bloodstream. KYNE's
            PEPI buccal film is absorbed through the mouth's mucosal lining, bypassing
            first-pass metabolism. Here's how {COMPOUNDS.length} key compounds absorb
            across four delivery methods.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3">
            <span className="text-3xl font-semibold" style={{ color: BRAND_GOLD }}>
              +{avgAdvantage}
            </span>
            <span className="text-sm text-muted-foreground">
              average PEPI absorption advantage<br />vs the next-best format (index points)
            </span>
          </div>
        </header>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {LINE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setLineFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                lineFilter === f
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
          {DELIVERY_METHODS.map((m) => (
            <span key={m} className="inline-flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded-sm"
                style={{ background: METHOD_COLOR[m] }}
              />
              {m}
            </span>
          ))}
        </div>

        {/* Sort controls */}
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted-foreground">Sort by:</span>
          {(["compound", ...DELIVERY_METHODS, "advantage"] as SortKey[]).map((k) => (
            <button
              key={k}
              onClick={() => toggleSort(k)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 ${
                sortKey === k ? "border-primary text-foreground" : "border-border text-muted-foreground"
              }`}
            >
              {k === "advantage" ? "PEPI advantage" : k}
              <ArrowUpDown className="h-3 w-3" />
            </button>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-3">
          {rows.map((row) => {
            const adv = pepiAdvantage(row);
            return (
              <div
                key={row.compound}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-medium">{row.compound}</h3>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {row.line} · {row.category}
                    </p>
                  </div>
                  {adv > 0 && (
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ background: `${BRAND_GOLD}22`, color: "#8a6d3b" }}
                    >
                      +{adv} vs next-best format
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {DELIVERY_METHODS.map((m) => (
                    <div key={m} className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs text-muted-foreground">{m}</span>
                      <div className="h-3 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${row.scores[m]}%`,
                            background: METHOD_COLOR[m],
                          }}
                        />
                      </div>
                      <span className="w-8 shrink-0 text-right text-xs tabular-nums">
                        {row.scores[m]}
                      </span>
                    </div>
                  ))}
                </div>
                {row.note && (
                  <p className="mt-3 text-xs italic text-muted-foreground">{row.note}</p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-xs text-muted-foreground">
          Absorption indices are relative estimates for illustration and formulation
          comparison, not clinical bioavailability measurements. Buccal delivery offers
          the largest advantage for compounds with poor oral bioavailability (B12, GABA,
          glutathione, resveratrol) and less advantage for compounds that act in the gut
          lumen (L-glutamine, zinc-carnosine, berberine).
        </p>
      </div>
    </div>
  );
}
