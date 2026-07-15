import Nav from "@/components/kyne/Nav";
import Hero from "@/components/kyne/Hero";
import Problem from "@/components/kyne/Problem";
import Solution from "@/components/kyne/Solution";
import PepiTechnology from "@/components/kyne/PepiTechnology";
import ProductSystem from "@/components/kyne/ProductSystem";
import HowItWorks from "@/components/kyne/HowItWorks";
import Ingredients from "@/components/kyne/Ingredients";
import Pricing from "@/components/kyne/Pricing";
import Testimonials from "@/components/kyne/Testimonials";
import FinalCTA from "@/components/kyne/FinalCTA";
import Footer from "@/components/kyne/Footer";
import DissolveDebugPanel from "@/components/kyne/DissolveDebugPanel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <div data-reveal><Problem /></div>
      <div data-reveal><Solution /></div>
      <div data-reveal><PepiTechnology /></div>
      <div data-reveal><ProductSystem /></div>
      <div data-reveal><HowItWorks /></div>
      <div data-reveal><Ingredients /></div>
      <div data-reveal><Testimonials /></div>
      <div data-reveal><Pricing /></div>
      <div data-reveal><FinalCTA /></div>
      <Footer />
      {import.meta.env.DEV && <DissolveDebugPanel />}
    </main>
  );
};

export default Index;
