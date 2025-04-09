
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DesignSystem from "./pages/DesignSystem";
import StyleGuide from "./pages/StyleGuide";
import StyleGuideCode from "./pages/StyleGuideCode";
import VanillaStyleGuide from "./pages/VanillaStyleGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/style-guide-code" element={<StyleGuideCode />} />
          <Route path="/vanilla-style-guide" element={<VanillaStyleGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
