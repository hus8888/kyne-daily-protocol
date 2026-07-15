import ChapterLabel from "./ChapterLabel";

const PepiTechnology = () => {
  return (
    <section id="pepi" className="relative py-32 md:py-44">
      <div className="container">
        <ChapterLabel>03 — PEPI technology</ChapterLabel>

        {/* Hero statement */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-10 font-display text-4xl font-light leading-[1.05] tracking-tightest text-foreground md:text-6xl">
            not a supplement strip.<br />an engineered delivery system.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            Most oral strips are just thin films with ingredients sprinkled on top.
            PEPI is a three-layer pharmaceutical-grade matrix designed to solve the
            three problems that make sublingual delivery fail.
          </p>
        </div>

        {/* What is PEPI */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-1">
            <div className="bg-background/60 p-10 backdrop-blur">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                what is PEPI
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Permeation-Enhanced Protective Immunofilm
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                PEPI is kyne's proprietary oral strip technology. Each strip is a multi-layer
                thin film engineered with three distinct functional layers — a mucoadhesive matrix
                that bonds to tissue, permeation enhancers that open cellular pathways, and a
                protease shield that protects compounds from enzymatic degradation. The result:
                compounds reach your bloodstream intact, in minutes, not hours.
              </p>
            </div>
          </div>
        </div>

        {/* The three layers */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {[
              {
                layer: "layer 01",
                title: "mucoadhesive matrix",
                material: "thiolated chitosan + pullulan",
                body: "Thiolated polymers form disulfide bonds with sublingual mucosa — 5-10x stronger adhesion than standard films. The strip stays locked in place for complete absorption, not sliding around your mouth.",
              },
              {
                layer: "layer 02",
                title: "permeation enhancers",
                material: "sucrose laurate + sodium caprate (C10)",
                body: "GRAS-grade surfactants temporarily and reversibly open tight junctions between epithelial cells. This creates direct paracellular pathways for compounds to cross into the bloodstream without cellular damage.",
              },
              {
                layer: "layer 03",
                title: "protease shield",
                material: "Bowman-Birk inhibitor + EGCG",
                body: "Natural enzyme inhibitors protect bioactive compounds from degradation by salivary and mucosal proteases. What you place on your tongue is what reaches your blood — no enzymatic destruction.",
              },
            ].map((l) => (
              <div key={l.layer} className="group bg-background/60 p-8 backdrop-blur transition-colors hover:bg-surface">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {l.layer}
                </div>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-foreground">
                  {l.title}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  {l.material}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why sublingual */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                why sublingual
              </div>
              <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-foreground md:text-4xl">
                the route<br />changes everything.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                When you swallow a pill, it travels through your stomach acid, into your
                intestines, through your liver (first-pass metabolism), and finally into
                your bloodstream. At each stage, compounds are destroyed. For most
                supplements, 85-95% never reaches circulation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Sublingual delivery places compounds directly on the thin membrane under
                your tongue. From there, they absorb into the sublingual vein, which drains
                into the jugular — bypassing the entire GI tract and liver. The result is
                3-5x higher bioavailability and onset in minutes instead of 45-90 minutes.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-px overflow-hidden rounded-3xl border border-border">
                {[
                  {
                    route: "oral capsule",
                    path: "mouth → stomach → intestine → liver → blood",
                    bioavail: "5-15%",
                    onset: "45-90 min",
                    loss: "first-pass metabolism destroys 85-95%",
                    highlight: false,
                  },
                  {
                    route: "standard oral strip",
                    path: "mouth → partial sublingual → mostly swallowed",
                    bioavail: "15-30%",
                    onset: "20-40 min",
                    loss: "poor adhesion, no permeation enhancement",
                    highlight: false,
                  },
                  {
                    route: "kyne PEPI strip",
                    path: "sublingual membrane → sublingual vein → jugular → blood",
                    bioavail: "50-70%",
                    onset: "5-15 min",
                    loss: "three-layer protection prevents degradation",
                    highlight: true,
                  },
                ].map((r) => (
                  <div
                    key={r.route}
                    className={`flex flex-col gap-4 p-8 backdrop-blur transition-colors ${
                      r.highlight
                        ? "bg-surface"
                        : "bg-background/60 hover:bg-surface/40"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className={`font-display text-lg font-medium tracking-tight ${r.highlight ? "text-foreground" : "text-foreground/70"}`}>
                        {r.route}
                      </h4>
                      <span className={`font-mono text-sm font-medium ${r.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                        {r.bioavail}
                      </span>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {r.path}
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <span className={r.highlight ? "text-foreground/80" : "text-muted-foreground"}>
                        onset: {r.onset}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{r.loss}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PEPI vs generic strips */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              kyne vs. generic strips
            </div>
            <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-foreground md:text-4xl">
              the difference is in the engineering.
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Generic */}
            <div className="rounded-[28px] border border-border bg-background/60 p-8 backdrop-blur">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
                generic oral strips
              </div>
              <ul className="space-y-5">
                {[
                  "Single-layer film with ingredients mixed in",
                  "No mucoadhesive — strip slides, partially swallowed",
                  "No permeation enhancers — relies on passive diffusion",
                  "No protease protection — enzymes degrade compounds",
                  "Inconsistent dosing — uneven ingredient distribution",
                  "Marketing claims without delivery science",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PEPI */}
            <div className="rounded-[28px] border border-foreground/20 bg-surface-elevated p-8 shadow-elevated">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 mb-6">
                kyne PEPI strips
              </div>
              <ul className="space-y-5">
                {[
                  "Three-layer engineered matrix with distinct functional zones",
                  "Thiolated chitosan mucoadhesive — 5-10x tissue bonding",
                  "GRAS permeation enhancers open tight junctions actively",
                  "Bowman-Birk + EGCG protease shield prevents degradation",
                  "Precision dosing — uniform compound distribution per strip",
                  "Pharmaceutical-grade delivery backed by absorption science",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Melatonin proof point */}
        <div className="mt-24 mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-border bg-surface-elevated p-10 shadow-soft">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8">
              proof point — melatonin
            </div>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-muted-foreground">standard capsule · 3-10mg dose</span>
                  <span className="text-sm font-medium text-muted-foreground">~12% reaches blood</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/40 rounded-full" style={{ width: "12%" }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  85-90% destroyed by stomach acid and liver first-pass metabolism
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">kyne night PEPI strip · 0.3mg dose</span>
                  <span className="text-sm font-medium text-foreground">~65% reaches blood</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-foreground rounded-full" style={{ width: "65%" }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  sublingual bypass + PEPI permeation enhancement + protease shield
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground border-t border-border pt-6">
              0.3mg delivered sublingually via PEPI achieves equivalent peak plasma concentration
              to 3mg swallowed in a capsule — with faster onset, no GI side effects, and no
              next-morning grogginess from megadosing.
            </p>
          </div>
        </div>

        {/* Who engineered this */}
        <div className="mt-24 mx-auto max-w-3xl text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            who built this
          </div>
          <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-foreground md:text-4xl">
            built by scientists.<br />designed for daily life.
          </h3>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground md:text-lg">
            PEPI technology draws from decades of pharmaceutical research in oral
            mucosal drug delivery — adapted for nutraceutical compounds and
            engineered for the consistency and safety of daily use. Every material
            is GRAS-rated. Every formulation is designed for sublingual
            bioavailability, not label decoration.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            We don't put 10mg of melatonin in a strip because it looks impressive
            on the label. We put 0.3mg because that's what the science says works
            — when you actually deliver it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PepiTechnology;
