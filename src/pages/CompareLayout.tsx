import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

type Row = { label: string; kyne: string; them: string; advantage: "kyne" | "them" | "tie" };

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  themName: string;
  rows: Row[];
  closing?: React.ReactNode;
}

export const CompareLayout = ({ eyebrow, title, subtitle, themName, rows, closing }: Props) => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4a574]">{eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-border" data-reveal>
            <table className="w-full text-sm">
              <thead className="bg-surface/60">
                <tr className="text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <th className="px-5 py-5 w-1/3"> </th>
                  <th className="px-5 py-5 text-[#d4a574]">KYNE</th>
                  <th className="px-5 py-5">{themName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="px-5 py-5 align-top text-foreground">{r.label}</td>
                    <td className={`px-5 py-5 align-top ${r.advantage==="kyne"?"text-foreground font-medium":"text-muted-foreground"}`}>{r.kyne}</td>
                    <td className={`px-5 py-5 align-top ${r.advantage==="them"?"text-foreground font-medium":"text-muted-foreground"}`}>{r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {closing && <div className="mt-12" data-reveal>{closing}</div>}

          <div className="mt-12 flex flex-wrap gap-4" data-reveal>
            <Link to="/stack" className="rounded-full bg-[#d4a574] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:bg-[#e0b888]">build a stack →</Link>
            <Link to="/science" className="rounded-full border border-border bg-background px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]">read the science →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
