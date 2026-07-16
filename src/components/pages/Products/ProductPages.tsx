import ProductDetail from './ProductDetail';

type ProductProps = {
  name: string;
  tagline: string;
  overview: string[];
  features: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
  benefits: string[];
};

const defaultSpecs = [
  { label: 'Interface', value: 'Synthesizable RTL' },
  { label: 'Language', value: 'SystemVerilog' },
  { label: 'License', value: 'Source + Binary' },
  { label: 'Verification', value: 'UVM testbench included' },
  { label: 'Foundry support', value: '3nm – 28nm' },
  { label: 'EDA tools', value: 'VCS, Xcelium, Vivado' },
];

const defaultBenefits = [
  'Silicon-proven across multiple tape-outs',
  'Full UVM testbench and coverage model included',
  'Lint-clean, CDC-clean hand-off',
  'Parameterizable for your specific requirements',
  'First-pass integration support by MAXVY architects',
  'Evaluation license available for qualified customers',
];

const defaultApplications = [
  'Data Center & Cloud',
  'Mobile SoC',
  'Automotive ADAS',
  'AI / ML Accelerators',
];

function makeProduct(name: string, tagline: string, extra?: Partial<ProductProps>): ProductProps {
  return {
    name,
    tagline,
    overview: [
      `${name} is a silicon-proven, synthesizable RTL IP core from MAXVY Technologies. Designed for integration into production SoCs, it delivers industry-leading performance, area efficiency and standards compliance.`,
      `Every MAXVY IP ships with a complete UVM testbench, functional coverage model, assertions and an integration guide — so your team can go from RTL drop to simulation closure in days, not weeks.`,
    ],
    features: [
      `Full compliance with the latest specification`,
      'Lint-clean and CDC-clean RTL hand-off',
      'UVM testbench with 100% functional coverage hooks',
      'Parameterizable bus width and frequency',
      'Low-power clock gating and retention modes',
      'Formal property verification coverage',
      'Silicon-proven on leading FinFET nodes',
      'EDA-independent RTL — works with major simulators',
    ],
    applications: defaultApplications,
    specifications: defaultSpecs,
    benefits: defaultBenefits,
    ...extra,
  };
}

// ─── DDR5 ────────────────────────────────────────────────────────────────────

export function SPD5HubInterfaceIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'SPD5 Hub Interface IP',
        'Silicon-proven SPD5 hub interface IP for DDR5 EEPROM access and thermal management.',
        {
          specifications: [
            { label: 'Standard', value: 'JEDEC SPD5' },
            { label: 'Interface', value: 'I3C v1.1.1 + I2C' },
            { label: 'Channels', value: 'Up to 8 EEPROM' },
            { label: 'Frequency', value: 'Up to 12.5 MHz' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function TemperatureSensor() {
  return (
    <ProductDetail
      {...makeProduct(
        'Temperature Sensor IP',
        'High-accuracy on-die temperature sensor for DDR5 thermal monitoring and compliance.',
        {
          specifications: [
            { label: 'Standard', value: 'JEDEC JEP106 / SPD5' },
            { label: 'Accuracy', value: '±1°C' },
            { label: 'Range', value: '0°C – 85°C' },
            { label: 'Interface', value: 'Digital readout' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function PMICI3CTargetController() {
  return (
    <ProductDetail
      {...makeProduct(
        'PMIC I3C Target Controller',
        'I3C target controller for power management ICs in DDR5 and mobile SoC subsystems.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI I3C v1.1.1' },
            { label: 'Role', value: 'Target / Secondary Master' },
            { label: 'Max freq', value: '12.5 MHz' },
            { label: 'Features', value: 'IBI, HotJoin, SETMWL/SETMRL' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function DDR5RCD03() {
  return (
    <ProductDetail
      {...makeProduct(
        'DDR5 RCD03',
        'JEDEC-compliant DDR5 RCD03 registered clock driver IP for next-generation RDIMM and LRDIMM.',
        {
          specifications: [
            { label: 'Standard', value: 'JEDEC DDR5 RCD03' },
            { label: 'Speed', value: 'DDR5-4400 to DDR5-8800' },
            { label: 'Interface', value: 'DRAM command bus + SPD5 I3C' },
            { label: 'DIMM types', value: 'RDIMM, LRDIMM' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function DDR5RCD01() {
  return (
    <ProductDetail
      {...makeProduct(
        'DDR5 RCD01',
        'JEDEC-compliant DDR5 RCD01 registered clock driver IP.',
        {
          specifications: [
            { label: 'Standard', value: 'JEDEC DDR5 RCD01' },
            { label: 'Speed', value: 'DDR5-4400 to DDR5-6400' },
            { label: 'Interface', value: 'DRAM command bus' },
            { label: 'DIMM types', value: 'RDIMM' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function CKR5RCD01() {
  return (
    <ProductDetail
      {...makeProduct(
        'CKR5 RCD01',
        'Clock redriver IP for CKR5 DDR5 server memory systems.',
        {
          specifications: [
            { label: 'Standard', value: 'JEDEC CKR5' },
            { label: 'Speed', value: 'Up to DDR5-8800' },
            { label: 'Interface', value: 'Differential CK' },
            { label: 'DIMM types', value: 'RDIMM, MRDIMM' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

// ─── Multimedia ──────────────────────────────────────────────────────────────

export function MIPIDSI2TransmitterIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI DSI2 Transmitter IP',
        'MIPI D-PHY and C-PHY DSI-2 transmitter IP for high-resolution display interfaces.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI DSI-2 v1.0' },
            { label: 'PHY', value: 'D-PHY v2.5 / C-PHY v1.1' },
            { label: 'Bandwidth', value: 'Up to 4.5 Gbps/lane' },
            { label: 'Lanes', value: '1–4 data lanes' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function MIPIDSI2ReceiverIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI DSI2 Receiver IP',
        'MIPI DSI-2 receiver IP for display bridge and panel controllers.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI DSI-2 v1.0' },
            { label: 'PHY', value: 'D-PHY v2.5 / C-PHY v1.1' },
            { label: 'Bandwidth', value: 'Up to 4.5 Gbps/lane' },
            { label: 'Lanes', value: '1–4 data lanes' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function MIPICSI2V3TransmitterIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI CSI2 V3 Transmitter IP',
        'MIPI CSI-2 v3 camera transmitter IP for imaging SoCs and ISP pipelines.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI CSI-2 v3.0' },
            { label: 'PHY', value: 'D-PHY v2.5 / C-PHY v1.1' },
            { label: 'Bandwidth', value: 'Up to 4.5 Gbps/lane' },
            { label: 'Lanes', value: '1–4 data lanes' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function MIPICSI2V3ReceiverIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI CSI2 V3 Receiver IP',
        'MIPI CSI-2 v3 receiver IP for camera sensor interfaces and imaging processors.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI CSI-2 v3.0' },
            { label: 'PHY', value: 'D-PHY v2.5 / C-PHY v1.1' },
            { label: 'Bandwidth', value: 'Up to 4.5 Gbps/lane' },
            { label: 'Lanes', value: '1–4 data lanes' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function MIPIDPHYReceiverIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI D-PHY Receiver IP',
        'MIPI D-PHY v2.5 receiver front-end IP for camera and display interfaces.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI D-PHY v2.5' },
            { label: 'Rate', value: 'Up to 4.5 Gbps/lane' },
            { label: 'Lanes', value: 'Configurable 1–8' },
            { label: 'Features', value: 'HS + LP modes, ULPS' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

export function MIPIDPHYTransmitterIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI D-PHY Transmitter IP',
        'MIPI D-PHY v2.5 transmitter front-end IP for camera and display interfaces.',
        {
          specifications: [
            { label: 'Standard', value: 'MIPI D-PHY v2.5' },
            { label: 'Rate', value: 'Up to 4.5 Gbps/lane' },
            { label: 'Lanes', value: 'Configurable 1–8' },
            { label: 'Features', value: 'HS + LP modes, ULPS' },
            ...defaultSpecs.slice(3),
          ],
        }
      )}
    />
  );
}

// ─── Peripheral ──────────────────────────────────────────────────────────────

export function QSPITargetIP() {
  return (
    <ProductDetail
      {...makeProduct('QSPI Target IP', 'Quad SPI target controller IP for flash memory and peripheral interfaces.')}
    />
  );
}

export function OSPITargetIP() {
  return (
    <ProductDetail
      {...makeProduct('OSPI Target IP', 'Octal SPI target controller IP for high-bandwidth flash memory access.')}
    />
  );
}

export function XSpiTargetController() {
  return (
    <ProductDetail
      {...makeProduct('xSPI Target Controller', 'xSPI target controller IP for next-generation serial flash interfaces.')}
    />
  );
}

export function XSpiHostController() {
  return (
    <ProductDetail
      {...makeProduct('xSPI Host Controller', 'xSPI host controller IP for memory-mapped flash and eMMC access.')}
    />
  );
}

// ─── MIPI I3C ────────────────────────────────────────────────────────────────

export function MIPII3CHostTargetIP() {
  return (
    <ProductDetail
      {...makeProduct('MIPI I3C Host/Target IP', 'Dual-role MIPI I3C v1.1.1 host and target IP for multi-drop sensor buses.')}
    />
  );
}

export function MIPII3CTargetIP() {
  return (
    <ProductDetail
      {...makeProduct('MIPI I3C Target IP', 'MIPI I3C v1.1.1 target controller IP for sensor and PMIC integration.')}
    />
  );
}

export function MIPII3CHostIP() {
  return (
    <ProductDetail
      {...makeProduct('MIPI I3C Host IP', 'MIPI I3C v1.1.1 main master IP for SoC sensor hub integration.')}
    />
  );
}

export function MIPII3CBasicTargetController() {
  return (
    <ProductDetail
      {...makeProduct('MIPI I3C Basic Target Controller', 'Compact MIPI I3C Basic target controller for cost-sensitive designs.')}
    />
  );
}

export function MIPII3CBasicHostController() {
  return (
    <ProductDetail
      {...makeProduct('MIPI I3C Basic Host Controller', 'Compact MIPI I3C Basic host controller for simple sensor buses.')}
    />
  );
}

export function MIPII3CHostRISCVSubsystem() {
  return (
    <ProductDetail
      {...makeProduct('MIPI I3C Host RISC-V Subsystem', 'RISC-V based MIPI I3C host subsystem with embedded firmware for complex I3C bus management.')}
    />
  );
}

// ─── I3C Support ─────────────────────────────────────────────────────────────

export function SPMIHostController() {
  return (
    <ProductDetail
      {...makeProduct('SPMI Host Controller', 'System PMIC management interface host controller for mobile SoC power management.')}
    />
  );
}

export function SPMITargetController() {
  return (
    <ProductDetail
      {...makeProduct('SPMI Target Controller', 'System PMIC management interface target controller for PMIC ICs.')}
    />
  );
}

export function ETSISSPI3CInterfaceIP() {
  return (
    <ProductDetail
      {...makeProduct('ETSI SSP I3C Interface IP', 'ETSI Smart Sensor Protocol over I3C interface IP for IoT and smart sensor applications.')}
    />
  );
}

// ─── Verification IP ─────────────────────────────────────────────────────────

export function UCIeVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'UCIe VIP',
        'UCIe die-to-die verification IP for chiplet protocol compliance and SoC integration verification.'
      )}
    />
  );
}

export function MIPII3CUVMVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI-I3C UVM VIP',
        'MIPI I3C v1.1.1 UVM verification IP with full protocol coverage and constrained-random stimulus.'
      )}
    />
  );
}

export function MIPIDSIVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI DSI VIP',
        'MIPI DSI/DSI-2 verification IP with D-PHY and C-PHY support.'
      )}
    />
  );
}

export function MIPICSIVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'MIPI CSI VIP',
        'MIPI CSI-2/CSI-3 verification IP for camera interface compliance verification.'
      )}
    />
  );
}

export function AXIVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'AXI VIP',
        'AXI4 / AXI4-Lite / AXI4-Stream UVM verification IP with full protocol coverage.'
      )}
    />
  );
}

export function AHBLiteMasterSlaveVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'AHB Lite Master/Slave VIP',
        'AMBA AHB-Lite master and slave verification IP for bus fabric verification.'
      )}
    />
  );
}

export function APHYVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'A-PHY VIP',
        'MIPI A-PHY v2.0 verification IP for automotive SerDes compliance.'
      )}
    />
  );
}

export function CPRIVerificationIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'CPRI Verification IP',
        'CPRI front-haul interface verification IP for 4G/5G radio unit testing.'
      )}
    />
  );
}

export function JESD204BUVMVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'JESD204B UVM VIP',
        'JESD204B high-speed ADC/DAC serial interface UVM VIP for data converter verification.'
      )}
    />
  );
}

export function LPCControllerVIP() {
  return (
    <ProductDetail
      {...makeProduct(
        'LPC Controller VIP',
        'Low Pin Count bus controller verification IP for legacy interface compliance.'
      )}
    />
  );
}

// ─── MAXVY Integration ───────────────────────────────────────────────────────

export function MAXVYI3CHostIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY I3C Host IP', 'Pre-integrated MAXVY I3C Host IP for Vega-class RISC-V SoCs.')}
    />
  );
}

export function MAXVYI3CTargetIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY I3C Target IP', 'Pre-integrated MAXVY I3C Target IP for Vega-class RISC-V SoCs.')}
    />
  );
}

export function MAXVYXSPIHostIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY xSPI Host IP', 'Pre-integrated xSPI Host IP for Vega SoC flash memory access.')}
    />
  );
}

export function MAXVYDSI2TransmitterIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY DSI-2 Transmitter IP', 'Pre-integrated DSI-2 transmitter IP for Vega SoC display subsystem.')}
    />
  );
}

export function MAXVYCSI2ReceiverIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY CSI-2 Receiver IP', 'Pre-integrated CSI-2 receiver IP for Vega SoC camera subsystem.')}
    />
  );
}

export function MAXVYUARTIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY UART IP', 'Pre-integrated UART IP for Vega SoC serial communication.')}
    />
  );
}

export function MAXVYGPIOIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY GPIO IP', 'Pre-integrated GPIO IP for Vega SoC general-purpose I/O.')}
    />
  );
}

export function MAXVYPWMIP() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY PWM IP', 'Pre-integrated PWM IP for Vega SoC motor and LED control.')}
    />
  );
}

// ─── Other RTL IP ────────────────────────────────────────────────────────────

export function UCIeControllerIP() {
  return (
    <ProductDetail
      {...makeProduct('UCIe Controller IP', 'UCIe die-to-die controller IP for advanced packaging and chiplet integration.')}
    />
  );
}

export function AVSBusHostIP() {
  return (
    <ProductDetail
      {...makeProduct('AVS Bus Host IP', 'Adaptive Voltage Scaling bus host controller IP for SoC power management.')}
    />
  );
}

export function AVSBusTargetIP() {
  return (
    <ProductDetail
      {...makeProduct('AVS Bus Target IP', 'Adaptive Voltage Scaling bus target controller IP for voltage regulator interfaces.')}
    />
  );
}

export function GPIOControllerIP() {
  return (
    <ProductDetail
      {...makeProduct('GPIO Controller IP', 'Configurable GPIO controller IP with interrupt, drive strength and mux support.')}
    />
  );
}

// ─── RISC-V ──────────────────────────────────────────────────────────────────

export function InstructionSet() {
  return (
    <ProductDetail
      {...makeProduct('RISC-V Instruction Set', 'RV32 and RV64 instruction set architecture packages with custom extension support.')}
    />
  );
}

export function CoreDevelopment() {
  return (
    <ProductDetail
      {...makeProduct('RISC-V Core Development', 'Custom RISC-V core development services — pipeline, cache hierarchy and system bus integration.')}
    />
  );
}

export function ReferenceModel() {
  return (
    <ProductDetail
      {...makeProduct('RISC-V Reference Model', 'Golden reference model for RISC-V instruction-accurate simulation and verification sign-off.')}
    />
  );
}

// ─── Embedded ────────────────────────────────────────────────────────────────

export function CloudBasedDynamicQRCodeGenerator() {
  return (
    <ProductDetail
      {...makeProduct('Cloud Based Dynamic QR Code Generator', 'Cloud-managed dynamic QR code generation engine for embedded and IoT applications.')}
    />
  );
}

// ─── MAXVY FPGA ──────────────────────────────────────────────────────────────

export function MAXVYI3CHostControllerSoftware() {
  return (
    <ProductDetail
      {...makeProduct('MAXVY I3C Host Controller Software', 'FPGA-proven I3C host controller software stack with Linux driver and bare-metal reference.')}
    />
  );
}

// ─── Re-export Products and ProductDetail ──────────────────────────────────

export { default as Products } from './Products';
export { default as ProductDetail } from './ProductDetail';