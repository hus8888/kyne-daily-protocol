// KYNE data-driven product line page (specialty lines).
// Renders any line from the catalog: hero, formulation, 3 circadian variants
// with add-to-cart, and compliance flags surfaced honestly.
import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { getLine, WINDOW_LABEL, WINDOW_COLORS, BRAND_GOLD } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ShoppingBag, ArrowLeft, Check, AlertTriangle } from "lucide-react";

export default function LinePage() {
  const { slug } = useParams<{ slug: string }>();
  const line = slug ? getLine(slug) : undefined;
  const { add, setOpen, count } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  if (!line) return <Navigate to="/" replace />;

  const handleAdd = (variantId: string, name: string) => {
    add({
      id: variantId,
      name: `${line.name} — ${name}`,
      line: line.name,
      time:
        line.variants.find((v) => v.id === variantId)?.window ?? "morning",
      price: Math.round(line.pricePerMonth / 3),
    });
    setAdded(variantId);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* nav */}
      <header className="fixed inset-x-0 top-0 z-50 py-4">
        <div className="container">
          <nav className="flex items-center justify-between rounded-full bg-background/60 px-5 py-2.5 backdrop-blur-md">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">KYNE</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/compare" className="text-sm text-muted-foreground hover:text-foreground">
                Compare
              </Link>
              <Link to="/bundles" className="text-sm text-muted-foreground hover:text-foreground">
                Bundles
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="relative rounded-full bg-foreground p-2 text-background"
                aria-label="cart"
              >
                <ShoppingBag className="h-4 w-4" />
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-4 pb-20 pt-28">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All protocols
        </Link>

        {/* hero */}
        <div
          className="mb-8 rounded-3xl border border-border p-8 sm:p-12"
          style={{ background: `linear-gradient(135deg, ${line.color}14, transparent)` }}
        >
          <div className="flex items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest"
              style={{ background: `${line.color}22`, color: line.color }}
            >
              {line.category}
            </span>
            {line.flagship && (
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: `${BRAND_GOLD}22`, color: "#8a6d3b" }}
              >
                Flagship
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {line.name}
          </h1>
          <p className="mt-3 text-xl text-foreground/80">{line.tagline}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{line.description}</p>
        </div>

        {/* compliance flag */}
        {line.legalFlag && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{line.legalFlag}</p>
          </div>
        )}

        {/* formulation */}
        <section className="mb-10">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The formulation
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {line.actives.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: line.color }}
                />
                <span className="text-sm">{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* variants */}
        <section id="variants" className="mb-10">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Morning · Day · Night
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {line.variants.map((v) => (
              <div
                key={v.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-6"
              >
                <span
                  className="mb-3 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: `${WINDOW_COLORS[v.window]}1e`,
                    color: WINDOW_COLORS[v.window],
                  }}
                >
                  {WINDOW_LABEL[v.window]}
                </span>
                <h3 className="font-medium">{v.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{v.focus}</p>
                <ul className="mt-4 space-y-1.5">
                  {v.ingredients.map((ing) => (
                    <li key={ing} className="text-xs text-foreground/70">
                      · {ing}
                    </li>
                  ))}
                </ul>
                <button
                  disabled={line.intlOnly}
                  onClick={() => handleAdd(v.id, v.name)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {line.intlOnly ? (
                    "Intl only"
                  ) : added === v.id ? (
                    <>
                      <Check className="h-4 w-4" /> Added
                    </>
                  ) : (
                    "Add to protocol"
                  )}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Full {line.name} protocol · ${line.pricePerMonth}/mo · all three strips
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/compare"
            className="rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent"
          >
            See the delivery science →
          </Link>
          <Link
            to="/bundles"
            className="rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent"
          >
            Build a bundle →
          </Link>
        </div>
      </div>
    </div>
  );
}
