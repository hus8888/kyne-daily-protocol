import Nav from "@/components/kyne/Nav";
import SectionNav from "@/components/kyne/SectionNav";
import ScrollHint from "@/components/kyne/ScrollHint";
import PageDropdown from "@/components/kyne/PageDropdown";
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
      <PageDropdown />
      <Nav />
      <SectionNav />
      <ScrollHint />
      <div id="hero"><Hero /></div>
      <div id="problem" data-reveal><Problem /></div>
      <div id="solution" data-reveal><Solution /></div>
      <div id="pepi" data-reveal><PepiTechnology /></div>
      <div id="system" data-reveal><ProductSystem /></div>
      <div id="how-it-works" data-reveal><HowItWorks /></div>
      <div id="ingredients" data-reveal><Ingredients /></div>
      <div id="testimonials" data-reveal><Testimonials /></div>
      <div id="pricing" data-reveal><Pricing /></div>
      <div data-reveal><FinalCTA /></div>
      <Footer />
      {import.meta.env.DEV && <DissolveDebugPanel />}
    </main>
  );
};

export default Index;
