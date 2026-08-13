// src/AppRoutes.tsx

import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import CompanyOverview from '../components/pages/About/CompanyOverview';
import WhyUs from '../components/pages/About/WhyUs';
import TestimonialsPage from '../components/pages/About/Testimonials';
import Products from '../components/pages/Products/Products';
import ProductDetail from '../components/pages/Products/ProductDetail';
import KnowledgeSharing from '../components/pages/About/KnowledgeSharing';
import KnowledgeArticle from '../components/pages/KnowledgeSharing/KnowledgeArticle';
// Import the updated Services component
import Services from '../components/pages/Services/Services';
// Import Service detail pages (keep if you have individual service detail pages)
import {
  RTLDesign,
  Verification,
  PhysicalDesign,
  EngineeringServices,
  Consulting,
} from '../components/pages/Services/ServicePages';
import {
  LifeAtMaxvy,
  WorkCulture,
  InternshipProgram,
  TrainingProgram,
} from '../components/pages/Careers/CareerPages';
// Import the new CurrentOpenings component
import CurrentOpenings from '../components/pages/Careers/currentopening';
// Import JobDetails component
import JobDetails from '../components/pages/Careers/job_details';
import Contact from '../components/pages/Contact/Contact';
import NotFound from '../components/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about/company-overview" element={<CompanyOverview />} />
      <Route path="/about/why-us" element={<WhyUs />} />
      <Route path="/about/testimonials" element={<TestimonialsPage />} />
      <Route path="/about/knowledge-sharing" element={<KnowledgeSharing />} />
      <Route path="/about/knowledge-sharing/:slug" element={<KnowledgeArticle />} />

      {/* Products index */}
      <Route path="/products" element={<Products />} />

      {/* ==================== PRODUCT DETAIL ROUTES ==================== */}
      {/* All product detail routes use the same ProductDetail component */}
      {/* The component will determine which product to show based on the URL */}

      {/* DDR5 Solution */}
      <Route path="/products/ddr5/:slug" element={<ProductDetail />} />

      {/* Multimedia Solution */}
      <Route path="/products/multimedia/:slug" element={<ProductDetail />} />

      {/* Peripheral */}
      <Route path="/products/peripheral/:slug" element={<ProductDetail />} />

      {/* MIPI I3C Solution IP */}
      <Route path="/products/mipi-i3c/:slug" element={<ProductDetail />} />

      {/* I3C Support Protocol IP */}
      <Route path="/products/i3c-support/:slug" element={<ProductDetail />} />

      {/* Verification IP */}
      <Route path="/products/verification-ip/:slug" element={<ProductDetail />} />

      {/* MAXVY IP Integr. w/ Vega Processor */}
      <Route path="/products/maxvy-integration/:slug" element={<ProductDetail />} />

      {/* Other RTL IP */}
      <Route path="/products/other-rtl-ip/:slug" element={<ProductDetail />} />

      {/* RISC-V Solution */}
      <Route path="/products/riscv/:slug" element={<ProductDetail />} />

      {/* Embedded System */}
      <Route path="/products/embedded/:slug" element={<ProductDetail />} />

      {/* MAXVY IP in FPGA */}
      <Route path="/products/maxvy-fpga/:slug" element={<ProductDetail />} />

      {/* Services - Updated: Just the main Services page */}
      <Route path="/services" element={<Services />} />
      {/* Remove individual service detail routes if you don't need them */}
      {/* <Route path="/services/rtl-design" element={<RTLDesign />} />
      <Route path="/services/verification" element={<Verification />} />
      <Route path="/services/physical-design" element={<PhysicalDesign />} />
      <Route path="/services/engineering-services" element={<EngineeringServices />} />
      <Route path="/services/consulting" element={<Consulting />} /> */}

      {/* Careers */}
      <Route path="/careers/life-at-maxvy" element={<LifeAtMaxvy />} />
      <Route path="/careers/work-culture" element={<WorkCulture />} />
      <Route path="/careers/internship-program" element={<InternshipProgram />} />
      <Route path="/careers/training-program" element={<TrainingProgram />} />
      <Route path="/careers/current-openings" element={<CurrentOpenings />} />
      <Route path="/careers/job-details/:id" element={<JobDetails />} />

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}