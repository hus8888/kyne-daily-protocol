import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const GOLD = "#d4a574";

interface Paper {
  tag: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  doi: string;
  pmid: string;
  takeaway: string;
  relevance: string;
}

const PAPERS: Paper[] = [
  {
    tag: "Review · Clinical translation",
    title:
      "Buccal film drug delivery: linking formulation design with pharmacokinetic control and clinical translation",
    authors: "Joshi YN, et al.",
    journal: "Journal of Pharmaceutical Sciences",
    date: "July 2026 (ahead of print)",
    doi: "10.1016/j.xphs.2026.104411",
    pmid: "42437589",
    takeaway:
      "The first comprehensive review to tie multilayer film architectures and nanocarriers directly to measurable pharmacokinetic outcomes (Tmax, Cmax, systemic exposure). Concludes buccal films have evolved from experimental formulations into clinically relevant platforms.",
    relevance:
      "Validates that the multilayer approach behind PEPI is now mainstream pharmaceutical science, not a marketing idea. Also candidly notes that lab permeation data doesn't yet cleanly predict real-world bioavailability — which is why we label our absorption figures as illustrative.",
  },
  {
    tag: "Original research · Peptide delivery",
    title:
      "A QbD-informed study of permeation enhancer–octreotide nanoscale interactions in pullulan buccal films",
    authors: "Malhotra S, Brayden DJ, et al.",
    journal: "International Journal of Pharmaceutics",
    date: "April 2026",
    doi: "10.1016/j.ijpharm.2026.126730",
    pmid: "41771310",
    takeaway:
      "Octreotide — a peptide with only ~0.7% oral bioavailability — was delivered in a mucoadhesive pullulan film with a permeation enhancer, achieving enhanced tissue uptake via reversible, non-destructive epithelial modulation. The peptide stayed chemically intact (>90% recovery) after 60+ days of storage.",
    relevance:
      "This is the exact mechanism our Science page describes — enhancers transiently opening the epithelial barrier without damaging it. Part-funded by the EU BUCCAL-PEP consortium with Novo Nordisk (maker of Ozempic) as a partner. Serious pharma capital is now behind this architecture.",
  },
  {
    tag: "Review · Peptide formulation",
    title:
      "Oromucosal films for peptide delivery: formulation strategies using permeation enhancers and polymers",
    authors: "Karki S, Brayden DJ, et al.",
    journal: "Drug Delivery and Translational Research",
    date: "July 2026",
    doi: "10.1007/s13346-025-02004-6",
    pmid: "41354997",
    takeaway:
      "A dedicated review of the exact stack KYNE is built on: permeation enhancers + mucoadhesive polymers + multilayer film architectures + nanoparticle-integrated films. Names the three real barriers to mucosal absorption: salivary washout, enzymatic instability, and the lipid-rich epithelial structure.",
    relevance:
      "Our three-layer design targets all three barriers directly — adhesion (washout), the protease shield (enzymatic instability), and permeation enhancers (epithelial density). The architecture logic holds up against the current literature.",
  },
  {
    tag: "Original research · Next-gen structure",
    title:
      "Electrospun PLA/PVP K90 biphasic-release sublingual film for motion sickness treatment",
    authors: "Zhang W, et al.",
    journal: "Biomolecules",
    date: "February 2026",
    doi: "10.3390/biom16030363",
    pmid: "PMC13023739",
    takeaway:
      "A core-sheath nanofiber sublingual film that releases two drugs on different timelines from a single strip — a fast-release outer shell and a sustained-release core.",
    relevance:
      "Points to where the format is heading: timed, multi-phase release from one strip. This maps naturally onto KYNE's circadian morning/day/night model — a single strip could deliver an immediate lift plus a sustained tail.",
  },
  {
    tag: "Original research · Methodology",
    title:
      "QbD-guided development and optimization of a rapid-disintegrating sublingual film of olanzapine",
    authors: "Patil D, et al.",
    journal: "Therapeutic Delivery",
    date: "April 2026",
    doi: "10.1080/20415990.2026.2665559",
    pmid: "42059286",
    takeaway:
      "A Quality-by-Design (QbD) approach to a rapid-disintegrating sublingual film, showing reduced effective dosage through improved delivery.",
    relevance:
      "Confirms QbD is now the expected development methodology for these films — the same disciplined, spec-driven process any credible manufacturing partner should follow for KYNE.",
  },
];

const Research = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              Research &amp; Evidence
            </span>
            <h1 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">
              the science behind the strip
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              KYNE is built on multilayer oromucosal film technology — one of the most
              active areas in drug delivery research right now. Below is a living summary
              of the peer-reviewed literature that informs our approach, updated as the
              field moves. We link every source, and we're honest about what's proven
              versus what's still being studied.
            </p>
          </div>
        </div>
      </section>

      {/* State of the field */}
      <section className="border-t border-border py-16">
        <div className="container max-w-3xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              the state of the field · 2026
            </span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight">
              multilayer films went mainstream
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Through 2026, the biggest shift in this field has been the surge of
              serious pharmaceutical investment into buccal and sublingual peptide
              delivery. The oral GLP-1 and peptide gold rush — semaglutide, octreotide
              and others — has pulled major players into exactly the multilayer film
              architecture KYNE uses. What was recently experimental is now described
              in review literature as a clinically relevant platform.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That's the validation. The honest caveat, raised in the newest reviews:
              in-vitro permeation numbers still do not perfectly predict in-vivo
              bioavailability. So while the mechanism is well-established, precise
              absorption percentages for any given compound should be read as
              directional estimates until in-human data exists.
            </p>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="border-t border-border py-16">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              selected literature
            </span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-tight">
              what the newest papers say
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {PAPERS.map((p) => (
              <article
                key={p.pmid}
                data-reveal
                className="rounded-3xl border border-border bg-card p-8"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: GOLD }}>
                  {p.tag}
                </div>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.authors} · <em>{p.journal}</em> · {p.date}
                </p>

                <div className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      Finding
                    </span>
                    <p className="mt-1 text-muted-foreground">{p.takeaway}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      Why it matters for KYNE
                    </span>
                    <p className="mt-1 text-muted-foreground">{p.relevance}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-xs">
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid.replace("PMC", "")}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono uppercase tracking-[0.15em] text-foreground/70 underline decoration-dotted underline-offset-4 hover:text-foreground"
                  >
                    PubMed →
                  </a>
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono uppercase tracking-[0.15em] text-foreground/70 underline decoration-dotted underline-offset-4 hover:text-foreground"
                  >
                    DOI: {p.doi}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Honesty note */}
      <section className="border-t border-border py-16">
        <div className="container max-w-3xl">
          <div
            data-reveal
            className="rounded-3xl border border-border bg-gradient-to-br from-[#d4a574]/[0.08] to-transparent p-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              our standard of evidence
            </span>
            <h2 className="mt-3 font-display text-2xl font-light tracking-tight">
              what we claim, and what we don't
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The delivery science behind sublingual and buccal films — bypassing
              first-pass metabolism, mucosal absorption, permeation enhancement — is
              well-established in the peer-reviewed literature cited above. That's the
              foundation of PEPI.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              What we do not claim: exact clinical bioavailability figures for every
              KYNE compound. The absorption comparisons on our{" "}
              <Link to="/science" className="underline decoration-dotted underline-offset-4 hover:text-foreground">
                Science
              </Link>{" "}
              and{" "}
              <Link to="/compare" className="underline decoration-dotted underline-offset-4 hover:text-foreground">
                Compare
              </Link>{" "}
              pages are relative estimates drawn from published ranges and internal
              R&amp;D, presented to illustrate why format matters — not to state
              measured in-human results. As we complete our own bioequivalence work,
              we'll publish it here.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4" data-reveal>
            <Link
              to="/science"
              className="rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition"
              style={{ background: GOLD }}
            >
              the bioavailability problem →
            </Link>
            <Link
              to="/compare"
              className="rounded-full border border-border bg-background px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:border-[#d4a574]"
            >
              compare delivery methods →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Research;
