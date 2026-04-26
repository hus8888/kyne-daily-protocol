import Nav from "@/components/kyne/Nav";
import Hero from "@/components/kyne/Hero";
import Problem from "@/components/kyne/Problem";
import Solution from "@/components/kyne/Solution";
import ProductSystem from "@/components/kyne/ProductSystem";
import HowItWorks from "@/components/kyne/HowItWorks";
import Ingredients from "@/components/kyne/Ingredients";
import Pricing from "@/components/kyne/Pricing";
import Testimonials from "@/components/kyne/Testimonials";
import FinalCTA from "@/components/kyne/FinalCTA";
import Footer from "@/components/kyne/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <ProductSystem />
      <HowItWorks />
      <Ingredients />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
