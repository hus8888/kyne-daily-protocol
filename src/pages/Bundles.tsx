// KYNE Bundles & Tier Packs page
import { Link } from "react-router-dom";
import { useState } from "react";
import { BUNDLES, TIER_PACKS } from "@/lib/bundles";
import { LINES, BRAND_GOLD } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ShoppingBag, ArrowLeft, Check } from "lucide-react";

export default function Bundles() {
  const { addBundle, setOpen, count } = useCart();
  const [added, setAdded] = useState<string | null>(null);
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");

  const flash = (id: string) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 1200);
  };

  const addArchetype = (b: (typeof BUNDLES)[number]) => {
    addBundle({
      id: `bundle-${b.id}`,
      name: `${b.name} Bundle`,
      time: "bundle",
      price: b.monthly,
      isBundle: true,
      bundleSkus: b.skus,
      selectedLines: b.lines,
    });
    flash(`bundle-${b.id}`);
  };

  const addTier = (t: (typeof TIER_PACKS)[number]) => {
    const strips =
      t.linesIncluded === "all"
        ? LINES.filter((l) => !l.intlOnly).length * 3
        : (t.linesIncluded as number) * 3;
    addBundle({
      id: `pack-${t.key}-${cycle}`,
      name: `${t.name}${cycle === "annual" ? " (Annual)" : ""}`,
      time: "pack",
      price: cycle === "annual" ? t.annual : t.monthly,
      isTierPack: true,
      tierKind: t.key,
      billingCycle: cycle,
      bundleSkus: Array.from({ length: strips }, (_, i) => `strip-${i}`),
    });
    flash(`pack-${t.key}-${cycle}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 py-4">
        <div className="container">
          <nav className="flex items-center justify-between rounded-full bg-background/60 px-5 py-2.5 backdrop-blur-md">
            <Link to="/" className="text-lg font-semibold tracking-tight">KYNE</Link>
            <div className="flex items-center gap-6">
              <Link to="/compare" className="text-sm text-muted-foreground hover:text-foreground">Compare</Link>
              <button onClick={() => setOpen(true)} className="relative rounded-full bg-foreground p-2 text-background" aria-label="cart">
                <ShoppingBag className="h-4 w-4" />
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">{count}</span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 pb-20 pt-28">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <header className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest" style={{ color: BRAND_GOLD }}>Bundles & Packs</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Stack your protocol, save more</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Seven expert-built bundles for common goals, or build your own with a tier pack.
            All KYNE lines are designed to pair safely.
          </p>
        </header>

        {/* Tier packs */}
        <section className="mb-14">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Build your own</h2>
            <div className="inline-flex rounded-full border border-border p-1 text-xs">
              <button onClick={() => setCycle("monthly")} className={`rounded-full px-3 py-1 ${cycle === "monthly" ? "bg-foreground text-background" : "text-muted-foreground"}`}>Monthly</button>
              <button onClick={() => setCycle("annual")} className={`rounded-full px-3 py-1 ${cycle === "annual" ? "bg-foreground text-background" : "text-muted-foreground"}`}>Annual · save 15%</button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {TIER_PACKS.map((t) => (
              <div key={t.key} className="flex flex-col rounded-3xl border border-border bg-card p-6">
                <h3 className="text-lg font-medium">{t.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{t.blurb}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold">${cycle === "annual" ? t.annual : t.monthly}</span>
                  <span className="text-sm text-muted-foreground">/{cycle === "annual" ? "yr" : "mo"}</span>
                </div>
                <button onClick={() => addTier(t)} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]">
                  {added === `pack-${t.key}-${cycle}` ? (<><Check className="h-4 w-4" /> Added</>) : "Add pack"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Archetype bundles */}
        <section>
          <h2 className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">Expert bundles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BUNDLES.map((b) => (
              <div
                key={b.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-6"
                style={b.flagship ? { background: `linear-gradient(135deg, ${BRAND_GOLD}14, transparent)`, borderColor: `${BRAND_GOLD}55` } : undefined}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{b.name}</h3>
                  {b.flagship && <span className="rounded-full px-2.5 py-0.5 text-[10px] font-medium" style={{ background: `${BRAND_GOLD}22`, color: "#8a6d3b" }}>Popular</span>}
                </div>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{b.blurb}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{b.skus.length} strips · {b.lines.length} lines</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold">${b.monthly}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                <button onClick={() => addArchetype(b)} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]">
                  {added === `bundle-${b.id}` ? (<><Check className="h-4 w-4" /> Added</>) : "Add bundle"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
