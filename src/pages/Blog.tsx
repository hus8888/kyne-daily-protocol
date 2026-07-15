import Nav from "@/components/kyne/Nav";
import Footer from "@/components/kyne/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: "why-sublingual-beats-pills",
    title: "Why Sublingual Beats Pills — The Science of Absorption",
    excerpt:
      "Your gut destroys up to 90% of what you swallow. Here's why the space under your tongue is the most efficient delivery route in your body.",
    date: "April 2026",
    readTime: "5 min",
    category: "Science",
  },
  {
    slug: "melatonin-dose-myth",
    title: "The Melatonin Dose Myth: Why 0.3mg Outperforms 10mg",
    excerpt:
      "Most melatonin supplements overdose you by 10-30x. Research shows the physiological dose — 0.3mg — actually works better. The trick is getting it into your blood.",
    date: "April 2026",
    readTime: "4 min",
    category: "Research",
  },
  {
    slug: "what-is-pepi-technology",
    title: "What Is PEPI? The Technology Behind KYNE Strips",
    excerpt:
      "Mucoadhesive polymers, permeation enhancers, and protease inhibitors — how three layers of science turn a simple strip into a drug-delivery platform.",
    date: "April 2026",
    readTime: "6 min",
    category: "Technology",
  },
  {
    slug: "morning-protocol-stack",
    title: "The Morning Protocol: What's In Your Strip and Why",
    excerpt:
      "L-carnosine, PQQ, saffron, B12 — every ingredient in kyne morning is there for a reason. Here's the evidence behind the stack.",
    date: "April 2026",
    readTime: "7 min",
    category: "Ingredients",
  },
  {
    slug: "supplement-industry-problem",
    title: "The Supplement Industry Has a Dirty Secret",
    excerpt:
      "Most supplements are expensive urine. Low bioavailability, proprietary blends that hide underdosing, and zero accountability. It's time for a different approach.",
    date: "April 2026",
    readTime: "5 min",
    category: "Opinion",
  },
  {
    slug: "l-theanine-without-caffeine",
    title: "L-Theanine Without Caffeine: Calm Focus on Its Own Terms",
    excerpt:
      "Everyone pairs L-theanine with caffeine. But at 100mg delivered sublingually, it produces a clean, calm focus state without any stimulant. Here's how.",
    date: "April 2026",
    readTime: "4 min",
    category: "Ingredients",
  },
];

const Blog = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24">
        <div className="container max-w-4xl">
          <div data-reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Journal
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tightest sm:text-5xl">
              The KYNE Journal
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Science, ingredients, and the thinking behind the protocol.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-surface/70 hover:-translate-y-0.5"
                data-reveal
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-medium tracking-tight text-foreground group-hover:text-foreground/90">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60 transition-transform group-hover:translate-x-0.5">
                    read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
