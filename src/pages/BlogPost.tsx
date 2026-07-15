import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParams, Link } from "react-router-dom";

const blogContent: Record<string, { title: string; category: string; readTime: string; date: string; content: string[] }> = {
  "why-sublingual-beats-pills": {
    title: "Why Sublingual Beats Pills — The Science of Absorption",
    category: "Science",
    readTime: "5 min",
    date: "April 2026",
    content: [
      "When you swallow a supplement capsule, it enters your stomach — an acid bath designed to break down food. Most bioactive compounds aren't built to survive that environment. Enzymes tear them apart. Acid denatures them. What's left gets absorbed through your intestinal wall and sent straight to your liver, which filters out even more.",
      "This is called first-pass metabolism, and it's the reason most oral supplements have bioavailability between 5-20%. You're paying for 500mg but absorbing 50mg.",
      "The sublingual route bypasses all of this. The tissue under your tongue is thin, highly vascularized, and connects directly to your bloodstream. Compounds absorbed here skip the stomach, skip the liver, and enter systemic circulation within minutes.",
      "This isn't new science. Nitroglycerin has been administered sublingually since the 1800s. Hospitals use sublingual delivery for emergency medications because it's fast and reliable.",
      "The challenge has always been making it work for supplements. Most oral dissolving strips are basic — they dissolve too quickly, don't adhere to the tissue, and don't do anything to enhance absorption beyond passive diffusion.",
      "That's what PEPI technology changes. By combining mucoadhesive polymers (to keep the strip in place), permeation enhancers (to actively improve absorption), and protease inhibitors (to protect compounds from enzymatic breakdown), we've turned a simple strip into a genuine drug-delivery platform.",
      "The result: bioavailability that rivals injectable delivery, in a format you can use at your desk.",
    ],
  },
  "melatonin-dose-myth": {
    title: "The Melatonin Dose Myth: Why 0.3mg Outperforms 10mg",
    category: "Research",
    readTime: "4 min",
    date: "April 2026",
    content: [
      "Walk into any pharmacy and you'll find melatonin supplements ranging from 3mg to 10mg. Some go as high as 20mg. The assumption is simple: more is better.",
      "The research says otherwise.",
      "Your pineal gland naturally produces about 0.1-0.3mg of melatonin per night. That's the physiological dose — the amount your body is designed to work with. When you take 10mg, you're flooding your system with 30-100x the natural amount.",
      "A landmark MIT study found that 0.3mg of melatonin was more effective at improving sleep quality than 3mg. The higher dose actually caused plasma melatonin levels to remain elevated into the next day, leading to grogginess and disrupted circadian rhythm.",
      "So why does everyone sell high-dose melatonin? Because oral bioavailability is terrible. When you swallow a 3mg pill, your gut and liver destroy about 85-88% of it. You absorb roughly 0.36-0.45mg — accidentally close to the optimal dose, but inconsistently.",
      "KYNE takes a different approach. We start with the optimal 0.3mg dose and deliver it sublingually with PEPI technology. Our target bioavailability is ~65%, meaning you absorb approximately 0.2mg — right in the physiological sweet spot, every time.",
      "Less waste. No grogginess. Better sleep. Sometimes the answer isn't more — it's better delivery.",
    ],
  },
};

const BlogPost = () => {
  useScrollReveal();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <Nav />
        <section className="pt-32 pb-24">
          <div className="container max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tightest">Coming Soon</h1>
            <p className="mt-4 text-muted-foreground">This article is being written. Check back soon.</p>
            <Link to="/blog" className="mt-8 inline-block text-sm text-muted-foreground hover:text-foreground">
              ← Back to Journal
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <article className="pt-32 pb-24">
        <div className="container max-w-3xl">
          <div data-reveal>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to Journal
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                {post.category}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">{post.readTime}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="mt-6 text-3xl font-semibold tracking-tightest sm:text-4xl">
              {post.title}
            </h1>
          </div>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground" data-reveal>
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogPost;
