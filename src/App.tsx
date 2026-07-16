import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/kyne/CartDrawer";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Rhythm from "./pages/Rhythm.tsx";
import Signal from "./pages/Signal.tsx";
import Shift from "./pages/Shift.tsx";
import Quiz from "./pages/Quiz.tsx";
import LinePage from "./pages/LinePage.tsx";
import Compare from "./pages/Compare.tsx";
import Bundles from "./pages/Bundles.tsx";
import About from "./pages/About.tsx";
import Science from "./pages/Science.tsx";
import Contact from "./pages/Contact.tsx";
import Quality from "./pages/Quality.tsx";
import Ingredients from "./pages/Ingredients.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import CompareCapsules from "./pages/CompareCapsules.tsx";
import CompareAG1 from "./pages/CompareAG1.tsx";
import CompareThorne from "./pages/CompareThorne.tsx";
import Reviews from "./pages/Reviews.tsx";
import Ambassador from "./pages/Ambassador.tsx";
import Refer from "./pages/Refer.tsx";
import Track from "./pages/Track.tsx";
import Returns from "./pages/Returns.tsx";
import Shipping from "./pages/Shipping.tsx";
import Impact from "./pages/Impact.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import Cookies from "./pages/Cookies.tsx";
import FAQ from "./pages/FAQ.tsx";
import Story from "./pages/Story.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Research from "./pages/Research.tsx";
import Signature from "./pages/Signature.tsx";
import OAuthCallback from "./pages/OAuthCallback.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <CartDrawer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signal" element={<Signal />} />
            <Route path="/shift" element={<Shift />} />
            <Route path="/rhythm" element={<Rhythm />} />
            <Route path="/quiz" element={<Quiz />} />
            {/* specialty product lines (data-driven) */}
            <Route path="/d3k" element={<LinePage />} />
            <Route path="/gut" element={<LinePage />} />
            <Route path="/mind" element={<LinePage />} />
            <Route path="/mito" element={<LinePage />} />
            <Route path="/nerve" element={<LinePage />} />
            <Route path="/longevity" element={<LinePage />} />
            <Route path="/peptide" element={<LinePage />} />
            {/* comparison + bundles */}
            <Route path="/compare" element={<Compare />} />
            <Route path="/compare/capsules" element={<CompareCapsules />} />
            <Route path="/compare/ag1" element={<CompareAG1 />} />
            <Route path="/compare/athletic-greens" element={<CompareAG1 />} />
            <Route path="/compare/thorne" element={<CompareThorne />} />
            <Route path="/bundles" element={<Bundles />} />
            {/* company + info */}
            <Route path="/about" element={<About />} />
            <Route path="/story" element={<Story />} />
            <Route path="/science" element={<Science />} />
            <Route path="/research" element={<Research />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* programs */}
            <Route path="/ambassador" element={<Ambassador />} />
            <Route path="/refer" element={<Refer />} />
            {/* operational */}
            <Route path="/track" element={<Track />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/impact" element={<Impact />} />
            {/* legal */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/signature" element={<Signature />} />
            <Route path="/oauth/callback" element={<OAuthCallback />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
