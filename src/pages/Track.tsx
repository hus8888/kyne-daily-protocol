import { useState } from "react";
import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Track = () => {
  useScrollReveal();
  const [form, setForm] = useState({ order: "", email: "" });
  const [state, setState] = useState<"idle"|"searching"|"notfound">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.order || !form.email) return;
    setState("searching");
    setTimeout(()=>setState("notfound"), 1200);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-2xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Support</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">track your order</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Enter your order number and the email used at checkout. We'll show live tracking and ETA.
            </p>
          </div>

          <form onSubmit={submit} className="mt-12 space-y-5 rounded-3xl border border-border bg-surface/40 p-8" data-reveal>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">order number</span>
              <input value={form.order} onChange={(e)=>setForm({...form,order:e.target.value})} placeholder="KYN-000000" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">email at checkout</span>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
            </label>
            <button type="submit" className="rounded-full bg-[#d4a574] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">
              {state==="searching" ? "searching…" : "look up order"}
            </button>
          </form>

          {state==="notfound" && (
            <div className="mt-6 rounded-2xl border border-border bg-white/60 p-6 text-sm text-muted-foreground" data-reveal>
              We couldn't find an order matching that combination. Double-check the order number on your confirmation email, or contact <a href="mailto:hello@kyne.health" className="text-[#d4a574]">hello@kyne.health</a> with your email and we'll dig it up manually.
            </div>
          )}

          <div className="mt-12 space-y-4 text-sm text-muted-foreground" data-reveal>
            <h2 className="font-display text-xl font-light tracking-tight text-foreground">when to expect updates</h2>
            <ul className="space-y-2">
              <li>• <strong className="text-foreground">Within 4h:</strong> Order confirmation email.</li>
              <li>• <strong className="text-foreground">1–2 business days:</strong> Shipping confirmation with tracking number.</li>
              <li>• <strong className="text-foreground">Canada:</strong> 2–5 business days after dispatch.</li>
              <li>• <strong className="text-foreground">USA:</strong> 4–8 business days after dispatch.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Track;
