// src/AppRoutes.tsx

import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import CompanyOverview from '../components/pages/About/CompanyOverview';
import WhyUs from '../components/pages/About/WhyUs';
import TestimonialsPage from '../components/pages/About/Testimonials';
import Products from '../components/pages/Products/Products';
import KnowledgeSharing from '../components/pages/About/KnowledgeSharing';
import KnowledgeArticle from '../components/pages/KnowledgeSharing/KnowledgeArticle';
import {
  SPD5HubInterfaceIP,
  TemperatureSensor,
  PMICI3CTargetController,
  DDR5RCD03,
  DDR5RCD01,
  CKR5RCD01,
  MIPIDSI2TransmitterIP,
  MIPIDSI2ReceiverIP,
  MIPICSI2V3TransmitterIP,
  MIPICSI2V3ReceiverIP,
  MIPIDPHYReceiverIP,
  MIPIDPHYTransmitterIP,
  QSPITargetIP,
  OSPITargetIP,
  XSpiTargetController,
  XSpiHostController,
  MIPII3CHostTargetIP,
  MIPII3CTargetIP,
  MIPII3CHostIP,
  MIPII3CBasicTargetController,
  MIPII3CBasicHostController,
  MIPII3CHostRISCVSubsystem,
  SPMIHostController,
  SPMITargetController,
  ETSISSPI3CInterfaceIP,
  UCIeVIP,
  MIPII3CUVMVIP,
  MIPIDSIVIP,
  MIPICSIVIP,
  AXIVIP,
  AHBLiteMasterSlaveVIP,
  APHYVIP,
  CPRIVerificationIP,
  JESD204BUVMVIP,
  LPCControllerVIP,
  MAXVYI3CHostIP,
  MAXVYI3CTargetIP,
  MAXVYXSPIHostIP,
  MAXVYDSI2TransmitterIP,
  MAXVYCSI2ReceiverIP,
  MAXVYUARTIP,
  MAXVYGPIOIP,
  MAXVYPWMIP,
  UCIeControllerIP,
  AVSBusHostIP,
  AVSBusTargetIP,
  GPIOControllerIP,
  InstructionSet,
  CoreDevelopment,
  ReferenceModel,
  CloudBasedDynamicQRCodeGenerator,
  MAXVYI3CHostControllerSoftware,
} from '../components/pages/Products/ProductPages';
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

      {/* DDR5 */}
      <Route path="/products/ddr5/spd5-hub-interface-ip" element={<SPD5HubInterfaceIP />} />
      <Route path="/products/ddr5/temperature-sensor" element={<TemperatureSensor />} />
      <Route path="/products/ddr5/pmic-i3c-target-controller" element={<PMICI3CTargetController />} />
      <Route path="/products/ddr5/ddr5-rcd03" element={<DDR5RCD03 />} />
      <Route path="/products/ddr5/ddr5-rcd01" element={<DDR5RCD01 />} />
      <Route path="/products/ddr5/ckr5-rcd01" element={<CKR5RCD01 />} />

      {/* Multimedia */}
      <Route path="/products/multimedia/mipi-dsi2-transmitter-ip" element={<MIPIDSI2TransmitterIP />} />
      <Route path="/products/multimedia/mipi-dsi2-receiver-ip" element={<MIPIDSI2ReceiverIP />} />
      <Route path="/products/multimedia/mipi-csi2-v3-transmitter-ip" element={<MIPICSI2V3TransmitterIP />} />
      <Route path="/products/multimedia/mipi-csi2-v3-receiver-ip" element={<MIPICSI2V3ReceiverIP />} />
      <Route path="/products/multimedia/mipi-dphy-receiver-ip" element={<MIPIDPHYReceiverIP />} />
      <Route path="/products/multimedia/mipi-dphy-transmitter-ip" element={<MIPIDPHYTransmitterIP />} />

      {/* Peripheral */}
      <Route path="/products/peripheral/qspi-target-ip" element={<QSPITargetIP />} />
      <Route path="/products/peripheral/ospi-target-ip" element={<OSPITargetIP />} />
      <Route path="/products/peripheral/xspi-target-controller" element={<XSpiTargetController />} />
      <Route path="/products/peripheral/xspi-host-controller" element={<XSpiHostController />} />

      {/* MIPI I3C */}
      <Route path="/products/mipi-i3c/mipi-i3c-host-target-ip" element={<MIPII3CHostTargetIP />} />
      <Route path="/products/mipi-i3c/mipi-i3c-target-ip" element={<MIPII3CTargetIP />} />
      <Route path="/products/mipi-i3c/mipi-i3c-host-ip" element={<MIPII3CHostIP />} />
      <Route path="/products/mipi-i3c/mipi-i3c-basic-target-controller" element={<MIPII3CBasicTargetController />} />
      <Route path="/products/mipi-i3c/mipi-i3c-basic-host-controller" element={<MIPII3CBasicHostController />} />
      <Route path="/products/mipi-i3c/mipi-i3c-host-riscv-subsystem" element={<MIPII3CHostRISCVSubsystem />} />

      {/* I3C Support */}
      <Route path="/products/i3c-support/spmi-host-controller" element={<SPMIHostController />} />
      <Route path="/products/i3c-support/spmi-target-controller" element={<SPMITargetController />} />
      <Route path="/products/i3c-support/etsi-ssp-i3c-interface-ip" element={<ETSISSPI3CInterfaceIP />} />

      {/* Verification IP */}
      <Route path="/products/verification-ip/ucie-vip" element={<UCIeVIP />} />
      <Route path="/products/verification-ip/mipi-i3c-uvm-vip" element={<MIPII3CUVMVIP />} />
      <Route path="/products/verification-ip/mipi-dsi-vip" element={<MIPIDSIVIP />} />
      <Route path="/products/verification-ip/mipi-csi-vip" element={<MIPICSIVIP />} />
      <Route path="/products/verification-ip/axi-vip" element={<AXIVIP />} />
      <Route path="/products/verification-ip/ahb-lite-master-slave-vip" element={<AHBLiteMasterSlaveVIP />} />
      <Route path="/products/verification-ip/aphy-vip" element={<APHYVIP />} />
      <Route path="/products/verification-ip/cpri-verification-ip" element={<CPRIVerificationIP />} />
      <Route path="/products/verification-ip/jesd204b-uvm-vip" element={<JESD204BUVMVIP />} />
      <Route path="/products/verification-ip/lpc-controller-vip" element={<LPCControllerVIP />} />

      {/* MAXVY Integration */}
      <Route path="/products/maxvy-integration/maxvy-i3c-host-ip" element={<MAXVYI3CHostIP />} />
      <Route path="/products/maxvy-integration/maxvy-i3c-target-ip" element={<MAXVYI3CTargetIP />} />
      <Route path="/products/maxvy-integration/maxvy-xspi-host-ip" element={<MAXVYXSPIHostIP />} />
      <Route path="/products/maxvy-integration/maxvy-dsi2-transmitter-ip" element={<MAXVYDSI2TransmitterIP />} />
      <Route path="/products/maxvy-integration/maxvy-csi2-receiver-ip" element={<MAXVYCSI2ReceiverIP />} />
      <Route path="/products/maxvy-integration/maxvy-uart-ip" element={<MAXVYUARTIP />} />
      <Route path="/products/maxvy-integration/maxvy-gpio-ip" element={<MAXVYGPIOIP />} />
      <Route path="/products/maxvy-integration/maxvy-pwm-ip" element={<MAXVYPWMIP />} />

      {/* Other RTL IP */}
      <Route path="/products/other-rtl-ip/ucie-controller-ip" element={<UCIeControllerIP />} />
      <Route path="/products/other-rtl-ip/avs-bus-host-ip" element={<AVSBusHostIP />} />
      <Route path="/products/other-rtl-ip/avs-bus-target-ip" element={<AVSBusTargetIP />} />
      <Route path="/products/other-rtl-ip/gpio-controller-ip" element={<GPIOControllerIP />} />

      {/* RISC-V */}
      <Route path="/products/riscv/instruction-set" element={<InstructionSet />} />
      <Route path="/products/riscv/core-development" element={<CoreDevelopment />} />
      <Route path="/products/riscv/reference-model" element={<ReferenceModel />} />

      {/* Embedded */}
      <Route path="/products/embedded/cloud-based-dynamic-qr-code-generator" element={<CloudBasedDynamicQRCodeGenerator />} />

      {/* MAXVY FPGA */}
      <Route path="/products/maxvy-fpga/maxvy-i3c-host-controller-software" element={<MAXVYI3CHostControllerSoftware />} />

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