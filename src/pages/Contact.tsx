import { useState } from "react";
import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "general", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", topic: "general", message: "" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">Support</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">contact</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real humans, Toronto time. We respond within one business day — usually faster.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3" data-reveal>
            <div className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">support</div>
              <a href="mailto:hello@kyne.health" className="mt-3 block text-foreground hover:text-[#d4a574]">hello@kyne.health</a>
              <p className="mt-2 text-xs text-muted-foreground">Orders, account, returns.</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">science</div>
              <a href="mailto:science@kyne.health" className="mt-3 block text-foreground hover:text-[#d4a574]">science@kyne.health</a>
              <p className="mt-2 text-xs text-muted-foreground">Formulation questions, COA requests.</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">press</div>
              <a href="mailto:press@kyne.health" className="mt-3 block text-foreground hover:text-[#d4a574]">press@kyne.health</a>
              <p className="mt-2 text-xs text-muted-foreground">Media, partnerships, ambassador team.</p>
            </div>
          </div>

          <form onSubmit={submit} className="mt-16 space-y-5 rounded-3xl border border-border bg-surface/40 p-8 md:p-10" data-reveal>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">name</span>
                <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">email</span>
                <input type="email" required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">topic</span>
              <select value={form.topic} onChange={(e)=>setForm({...form,topic:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none">
                <option value="general">General question</option>
                <option value="order">Order issue</option>
                <option value="subscription">Subscription</option>
                <option value="science">Science / formulation</option>
                <option value="wholesale">Wholesale / B2B</option>
                <option value="press">Press</option>
              </select>
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">message</span>
              <textarea required rows={6} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#d4a574] focus:outline-none" />
            </label>
            <button type="submit" className="rounded-full bg-[#d4a574] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">
              {sent ? "✓ message received" : "send message"}
            </button>
          </form>

          <div className="mt-12 text-sm text-muted-foreground" data-reveal>
            <p><strong className="text-foreground">Mailing address:</strong></p>
            <p className="mt-2">KYNE Protocol Inc.<br/>Toronto, Ontario, Canada</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
