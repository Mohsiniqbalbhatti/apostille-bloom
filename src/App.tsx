import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActionButton from "@/components/FloatingActionButton";
import HomePage from "./pages/HomePage";
import HecPage from "./pages/HecPage";
import MofaPage from "./pages/MofaPage";
import IbccPage from "./pages/IbccPage";
import BtePage from "./pages/BtePage";
import EmbassyPage from "./pages/EmbassyPage";
import TranslationPage from "./pages/TranslationPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hec" element={<HecPage />} />
          <Route path="/mofa" element={<MofaPage />} />
          <Route path="/ibcc" element={<IbccPage />} />
          <Route path="/bte" element={<BtePage />} />
          <Route path="/embassy" element={<EmbassyPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingActionButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
