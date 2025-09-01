import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProcess from "./pages/OurProcess";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
<<<<<<< HEAD
import WoodBurnersMultifuel from "./pages/WoodBurnersMultifuel";
import ChimneyLining from "./pages/ChimneyLining";
import ChimneySweeping from "./pages/ChimneySweeping";
import PackageDeal from "./pages/PackageDeal";
import OpenFires from "./pages/OpenFires";
import Services from "./pages/Services";
=======
>>>>>>> f41f0a6b79526de5b2a7066cf29a55a975ea35dd
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact-us" element={<ContactUs />} />
<<<<<<< HEAD
            <Route path="/services" element={<Services />} />
            <Route path="/services/wood-burners" element={<WoodBurnersMultifuel />} />
            <Route path="/services/chimney-lining" element={<ChimneyLining />} />
            <Route path="/services/chimney-sweeping" element={<ChimneySweeping />} />
            <Route path="/services/package-deal" element={<PackageDeal />} />
            <Route path="/services/open-fires" element={<OpenFires />} />
=======
>>>>>>> f41f0a6b79526de5b2a7066cf29a55a975ea35dd
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
