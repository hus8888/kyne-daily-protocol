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
            <Route path="/bundles" element={<Bundles />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
