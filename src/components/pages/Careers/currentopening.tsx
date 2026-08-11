// src/components/pages/Careers/currentopening.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  ChevronDown,
  Phone,
  Mail,
  Globe,
  MapPin as MapPinIcon,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Filter,
  Search,
  Users,
  Settings,
  Factory,
  Building,
  Award,
  Shield,
  ChevronRight
} from 'lucide-react';
import bannerImage from '../../../images/about-us_banner.jpeg';

// Job data interface
export interface Job {
  id: number;
  title: string;
  location: string;
  experience: string;
  education: string;
  role: string;
  jobDescription: string;
  salary: string;
  category: string;
  jobId: string;
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: 'Software Web Developer',
    location: 'Bangalore',
    experience: '1 Year',
    education: 'B.E',
    role: 'Proficiency with front-end development and scripting including: HTML5, CSS3, JavaScript, jQuery, JSON, Ajax, API handling.\nCandidates who is having good practical knowledge on programming skills in PHP, MySQL, MVC framework Concepts (Laravel Preferred).\nBackend development skills (good to have).\nKnowledge of databases MySQL.\nMust be willing to learn and explore new things in Web Development.\nAbility to work independently, as well as in a team environment.\nKnowledge of source code management tools git.\nWillingness to go the extra mile.',
    jobDescription: '1 or more years of strong experience in web standards, semantic markup, validation, including JavaScript, CSS & CSS3, HTML5 and cross-browser/ device development and strong experience with JavaScript libraries, such as jQuery, as well as pure JavaScript. experience in working with Photoshop comps/ designs and converting them into semantically valid HTML and CSS',
    salary: '10000 per month',
    category: 'Engineering',
    jobId: 'JD001'
  },
  {
    id: 2,
    title: 'Internship VLSI',
    location: 'Bangalore',
    experience: '1 Year',
    education: 'B.E, M.Tech, B.Tech',
    role: 'Should have knowledge in SystemVerilog, Verilog, UVM\nShould have knowledge in Testbench Architecture, Verification Plan\nKnowledge Protocol AHB/APB, I2C\nPython and Perl script knowledge\nmust be available to work from office',
    jobDescription: 'Testcase running and testplan development\nRun regression and coverage analysis.\nWork with RTL Team',
    salary: 'Unpaid',
    category: 'Engineering',
    jobId: 'JD002'
  },
  {
    id: 3,
    title: 'Design Verification Engineer',
    location: 'Bangalore',
    experience: '9 Years',
    education: 'B.E, M.E, M.Tech, B.Tech',
    role: 'Design and development of firmware code for NAND internal operations.\nDevelopment and maintenance of FW compiler.\nFull-chip functional validation on Micron\'s non-volatile memory design projects\nThoroughly understand NAND design specs and develop validation plans for various designs\nTestBench Development in Verilog targeting complete functionality coverage.\nWrite System Verilog assertions to check all the design transitions as per spec.\nUse a coverage driven methodology to create test cases.\nThink through design corner cases and be able to write relevant cover points\nCollaborate with digital design team to debug test cases and deliver functionally accurate designs\nClose coverage measures to identify validation holes and to show progress towards tape-out.',
    jobDescription: 'MS or BS degree in Electrical or Computer Engineering or equivalent\n2- 12 years of experience working in Verilog / System Verilog / C/C++\nHands on work experience with C/C++ or VB coding\nGood knowledge on scripting languages like TCL/PERL/Python\nGood knowledge on circuit design, digital logic, and logic verification methodology\nUnderstanding on Verilog RTL coding, SystemVerilog object-oriented language\nPreferred Skills:\nKnowledge of Non-volatile memory design is highly desired\nStrong communication skills both written and verbal\nStrong interpersonal skills and maintain positive relationships\nAmbitious and goal oriented\nCollaborate effectively in a dynamic team environment',
    salary: '20 lakhs',
    category: 'Engineering',
    jobId: 'JD003'
  },
  {
    id: 4,
    title: 'FPGA/RTL Engineer',
    location: 'Bangalore',
    experience: '9 Years',
    education: 'B.E, M.E, M.Tech, B.Tech',
    role: 'Sound knowledge of RTL frond end design principles.\nExcellent command over HDL Verilog/VHDL.\nSound knowledge of FPGA design principles. Working with Xilinx/Altera FPGA is preferable.\nMust have done RTL synthesis, constraints design, timing closure, RTL designs having CDC.\nMust have written test benches to verify the RTL design.\nMust have used the RTL development and debugging tools for FPGA (e.g. vivado for Xilinx).\nMust have implemented at least a few communication signal processing blocks in RTL (e.g. FFT/IFFT, AGC, Channel Estimation/Equalization, DPD, CFR, Turbo Enoder/Decoder).',
    jobDescription: 'Must have good understanding of PHY Layer of at least one OFDM based wireless technology (e.g. 5G/LTE/ WiFi/WiMAX). LTE experience is preferable.\nMust know where to use FIFO or RAM in the design. Must have used FIFOs/RAM in the design.\nShould know how to write configurable RTL.\nShould have used CPRI/OBSA IPs to interface with the RF unit in a wireless communication system.\nUnderstanding of RF fundamentals, RF components, RF chain and it\'s working is advantageous.\nAbility to learn quickly in a highly dynamic work environment.',
    salary: '15 LPA',
    category: 'Engineering',
    jobId: 'JD004'
  },
  {
    id: 5,
    title: 'Design and Verification',
    location: 'Bangalore',
    experience: '1 Year',
    education: 'B.E, M.Tech',
    role: 'Should have Experience in Verilog, SystemVerilog, UVM\nDesign and Develop Testplan\nDevelop Testcase in UVM/SV,C\nWilling to work as individual to develop Drive/Monitor code',
    jobDescription: 'Should have knowledge on APB/AXI/AHB protocol.\nMIPI protocol is added advantages\nKnowledge in Perl, Python',
    salary: '3 LPA',
    category: 'Engineering',
    jobId: 'JD005'
  },
  {
    id: 6,
    title: 'Design Verification Engineer (PCIe/USB IP Development)',
    location: 'Bangalore',
    experience: '5 Years',
    education: 'B.E, M.E, M.Tech, B.Tech',
    role: 'The candidate will be responsible for leading a team of engineers to verify design IP for PCIe/USB 3.X Device and Host Controller.\nStrong testbench development skills required to build a robust, scalable and efficient testbench to verify the IPs.\nUnderstand the design and come up with a detailed verification strategy and test plan.\nManage project execution, schedules and work assignments of engineers in the team.\nClearly communicate project status, issues, etc.\nThe strong background on functional verification fundamentals, environment planning, test plan generation, environment development is a must.\nDesign Verification experience verifying complex designs and leading projects from concept to verification closure.\nSystem Verilog experience and experience with UVM based functional verification environment development is required.\nExperience working on verifying USB/PCIe Host and device controllers.\nAXI3/4/5 experience is desirable.\nFamiliarity with using 3rd party VIPs.\nTeam player with strong communication skills, and ability to work independently on the verification of a portion of the design.\nPrior experience in IP development teams would be an added advantage.',
    jobDescription: '5+year Experience Verification DDR/Ethernet/PCIe/CXL',
    salary: 'Open',
    category: 'Engineering',
    jobId: 'JD006'
  },
  {
    id: 7,
    title: 'RTL Engineers (STA/Synthesis)',
    location: 'Bangalore',
    experience: '5 Years',
    education: 'B.E, M.E, M.Tech, B.Tech',
    role: 'RTL engineers having experience on STA/Synthesis\nHands on ownership of Synthesis / Constraints / STA / ECO flow.\nExpert in running Block level and Chip level STA in MCMM, DMSA environments.\nMust have worked on multiple timing closure and constraint development for high-speed interfaces like DDR , RGMII, SD, USB, SPI, NAND etc.\nMust have worked on ECO implementation cycles – functional, timing Interacting with RTL/PD/DFT teams to resolve all implementation issues.\nParticipate in design reviews and design closure discussions.\nDevelop or enhance scripts for various design closure activities.\nGood understanding of complete physical design flow.\nMust have gone through multiple tapeout cycles, revisions and ECOs.\nExpertise with Synthesis, STA tools (like DC, Primetime) is a must.\nStrong scripting skills using Perl, TCL, C-shell, Make and/or other scripting languages.\nTiming characterization and post silicon timing correlation experience a plus.\nExperience/ project work on critical path simulation, clock path simulation (jitter/duty cycle) with Spice a plus.\nExperience with CDC, Constraint verification, lint checks is a plus.',
    jobDescription: '5+ Year Experience RTL engineers having experience on STA/Synthesis',
    salary: 'Open',
    category: 'Engineering',
    jobId: 'JD007'
  }
];

// Technology tags
const techTags = [
  'RTL Design',
  'UVM Verification',
  'Physical Design',
  'DFT',
  'FPGA',
  'Tapeout'
];

// Quick links
const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers/current-openings' },
  { label: 'Contact', to: '/contact' }
];

// Social links
const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export default function CurrentOpenings() {
  const navigate = useNavigate();
  const [visibleJobs, setVisibleJobs] = useState(7);

  const displayedJobs = jobsData.slice(0, visibleJobs);
  const hasMore = visibleJobs < jobsData.length;

  const loadMore = () => {
    setVisibleJobs(prev => Math.min(prev + 3, jobsData.length));
  };

  const handleJobClick = (jobId: number) => {
    navigate(`/careers/job-details/${jobId}`);
  };

  return (
    <div className="bg-[#FAFAFA]">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerImage})`,
            height: '400px',
          }}
        >
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">
                <span className="text-[#0F172A]">CURRENT </span>
                <span className="text-[#e34115]">OPENINGS</span>
              </h1>

              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                Build the hardware that powers the next generation of global infrastructure.
                <br className="hidden sm:block" />
                Join a visionary team at Maxvy Technologies.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- FLOATING WHITE CONTAINER --- */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
          >
            {/* Jobs Section - Full Width */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Showing {displayedJobs.length} of {jobsData.length} positions
                </p>
              </div>

              <div className="space-y-4">
                {displayedJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => handleJobClick(job.id)}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e34115]/10 text-[#e34115]">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#0F172A] group-hover:text-[#e34115] transition-colors">
                          {job.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" /> {job.location}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" /> {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2">
                      <span className="text-sm text-[#e34115] font-medium group-hover:translate-x-1 transition-transform duration-300">
                        View Details →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-8 text-center">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#e34115]/10 text-[#0F172A] text-sm font-medium rounded-full hover:bg-[#e34115]/20 hover:text-[#e34115] transition-all duration-300 hover:shadow-md"
                  >
                    Load More Opportunities
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>

      
    </div>
  );
}