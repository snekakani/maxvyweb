import {
  Cpu,
  MonitorSmartphone,
  Spline,
  Spline as SplineIcon,
  ShieldCheck,
  Layers,
  CircuitBoard,
  Cloud,
  HardDrive,
  type LucideIcon,
} from 'lucide-react';

export type ProductItem = {
  name: string;
  path: string;
  blurb: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  items: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    id: 'ddr5',
    name: 'DDR5 Solution',
    description: 'Next-generation memory interface IP for DDR5 RCD, SPD5 and PMIC.',
    icon: Cpu,
    items: [
      { name: 'SPD5 Hub Interface IP', path: '/products/ddr5/spd5-hub-interface-ip', blurb: 'Hub interface for SPD5 EEPROM.' },
      { name: 'Temperature Sensor', path: '/products/ddr5/temperature-sensor', blurb: 'High-accuracy on-die temperature sensor.' },
      { name: 'PMIC I3C Target Controller', path: '/products/ddr5/pmic-i3c-target-controller', blurb: 'Power management I3C target.' },
      { name: 'DDR5 RCD03', path: '/products/ddr5/ddr5-rcd03', blurb: 'Registered clock driver 03.' },
      { name: 'DDR5 RCD01', path: '/products/ddr5/ddr5-rcd01', blurb: 'Registered clock driver 01.' },
      { name: 'CKR5 RCD01', path: '/products/ddr5/ckr5-rcd01', blurb: 'Clock redriver for CKR5.' },
    ],
  },
  {
    id: 'multimedia',
    name: 'Multimedia Solution',
    description: 'MIPI DSI2 / CSI2 transmitter and receiver IP for imaging and display.',
    icon: MonitorSmartphone,
    items: [
      { name: 'MIPI DSI2 Transmitter IP', path: '/products/multimedia/mipi-dsi2-transmitter-ip', blurb: 'Display serial interface 2 TX.' },
      { name: 'MIPI DSI2 Receiver IP', path: '/products/multimedia/mipi-dsi2-receiver-ip', blurb: 'Display serial interface 2 RX.' },
      { name: 'MIPI CSI2 V3 Transmitter IP', path: '/products/multimedia/mipi-csi2-v3-transmitter-ip', blurb: 'Camera serial interface v3 TX.' },
      { name: 'MIPI CSI2 V3 Receiver IP', path: '/products/multimedia/mipi-csi2-v3-receiver-ip', blurb: 'Camera serial interface v3 RX.' },
      { name: 'MIPI D-PHY Receiver IP', path: '/products/multimedia/mipi-dphy-receiver-ip', blurb: 'D-PHY receiver front-end.' },
      { name: 'MIPI D-PHY Transmitter IP', path: '/products/multimedia/mipi-dphy-transmitter-ip', blurb: 'D-PHY transmitter front-end.' },
    ],
  },
  {
    id: 'peripheral',
    name: 'Peripheral',
    description: 'High-performance SPI target and host controllers for storage peripherals.',
    icon: HardDrive,
    items: [
      { name: 'QSPI Target IP', path: '/products/peripheral/qspi-target-ip', blurb: 'Quad SPI target controller.' },
      { name: 'OSPI Target IP', path: '/products/peripheral/ospi-target-ip', blurb: 'Octal SPI target controller.' },
      { name: 'xSPI Target Controller', path: '/products/peripheral/xspi-target-controller', blurb: 'xSPI target with low pin count.' },
      { name: 'xSPI Host Controller', path: '/products/peripheral/xspi-host-controller', blurb: 'xSPI host controller.' },
    ],
  },
  {
    id: 'mipi-i3c',
    name: 'MIPI I3C Solution IP',
    description: 'Complete I3C host, target and basic controller IP portfolio.',
    icon: Spline,
    items: [
      { name: 'MIPI I3C Host/Target IP', path: '/products/mipi-i3c/mipi-i3c-host-target-ip', blurb: 'Dual-role host/target IP.' },
      { name: 'MIPI I3C Target IP', path: '/products/mipi-i3c/mipi-i3c-target-ip', blurb: 'I3C target controller.' },
      { name: 'MIPI I3C Host IP', path: '/products/mipi-i3c/mipi-i3c-host-ip', blurb: 'I3C main master.' },
      { name: 'MIPI I3C Basic Target Controller', path: '/products/mipi-i3c/mipi-i3c-basic-target-controller', blurb: 'Basic I3C target.' },
      { name: 'MIPI I3C Basic Host Controller', path: '/products/mipi-i3c/mipi-i3c-basic-host-controller', blurb: 'Basic I3C host.' },
      { name: 'MIPI I3C Host RISC-V Subsystem', path: '/products/mipi-i3c/mipi-i3c-host-riscv-subsystem', blurb: 'RISC-V based I3C host subsystem.' },
    ],
  },
  {
    id: 'i3c-support',
    name: 'I3C Support Protocol IP',
    description: 'Companion protocol controllers for SPMI and ETSI SSP I3C.',
    icon: SplineIcon,
    items: [
      { name: 'SPMI Host Controller', path: '/products/i3c-support/spmi-host-controller', blurb: 'System PMIC host.' },
      { name: 'SPMI Target Controller', path: '/products/i3c-support/spmi-target-controller', blurb: 'System PMIC target.' },
      { name: 'ETSI SSP I3C Interface IP', path: '/products/i3c-support/etsi-ssp-i3c-interface-ip', blurb: 'ETSI SSP I3C bridge.' },
    ],
  },
  {
    id: 'verification-ip',
    name: 'Verification IP',
    description: 'UVM and VIP libraries for protocol-aware verification.',
    icon: ShieldCheck,
    items: [
      { name: 'UCIe VIP', path: '/products/verification-ip/ucie-vip', blurb: 'Die-to-die UCIe verification IP.' },
      { name: 'MIPI-I3C UVM VIP', path: '/products/verification-ip/mipi-i3c-uvm-vip', blurb: 'I3C UVM VIP.' },
      { name: 'MIPI DSI VIP', path: '/products/verification-ip/mipi-dsi-vip', blurb: 'DSI verification IP.' },
      { name: 'MIPI CSI VIP', path: '/products/verification-ip/mipi-csi-vip', blurb: 'CSI verification IP.' },
      { name: 'AXI VIP', path: '/products/verification-ip/axi-vip', blurb: 'AXI4 verification IP.' },
      { name: 'AHB Lite Master/Slave VIP', path: '/products/verification-ip/ahb-lite-master-slave-vip', blurb: 'AHB-Lite master/slave VIP.' },
      { name: 'A-PHY VIP', path: '/products/verification-ip/aphy-vip', blurb: 'A-PHY verification IP.' },
      { name: 'CPRI Verification IP', path: '/products/verification-ip/cpri-verification-ip', blurb: 'CPRI front-haul VIP.' },
      { name: 'JESD204B UVM VIP', path: '/products/verification-ip/jesd204b-uvm-vip', blurb: 'JESD204B UVM VIP.' },
      { name: 'LPC Controller VIP', path: '/products/verification-ip/lpc-controller-vip', blurb: 'Low-pin-count controller VIP.' },
    ],
  },
  {
    id: 'maxvy-integration',
    name: 'MAXVY IP Integration with Vega Processor',
    description: 'Pre-integrated MAXVY IP portfolio for Vega-class RISC-V SoCs.',
    icon: Layers,
    items: [
      { name: 'MAXVY I3C Host IP', path: '/products/maxvy-integration/maxvy-i3c-host-ip', blurb: 'Integrated I3C host for Vega.' },
      { name: 'MAXVY I3C Target IP', path: '/products/maxvy-integration/maxvy-i3c-target-ip', blurb: 'Integrated I3C target for Vega.' },
      { name: 'MAXVY xSPI Host IP', path: '/products/maxvy-integration/maxvy-xspi-host-ip', blurb: 'xSPI host for Vega SoC.' },
      { name: 'MAXVY DSI-2 Transmitter IP', path: '/products/maxvy-integration/maxvy-dsi2-transmitter-ip', blurb: 'DSI-2 TX for Vega.' },
      { name: 'MAXVY CSI-2 Receiver IP', path: '/products/maxvy-integration/maxvy-csi2-receiver-ip', blurb: 'CSI-2 RX for Vega.' },
      { name: 'MAXVY UART IP', path: '/products/maxvy-integration/maxvy-uart-ip', blurb: 'UART for Vega SoC.' },
      { name: 'MAXVY GPIO IP', path: '/products/maxvy-integration/maxvy-gpio-ip', blurb: 'GPIO for Vega SoC.' },
      { name: 'MAXVY PWM IP', path: '/products/maxvy-integration/maxvy-pwm-ip', blurb: 'PWM for Vega SoC.' },
    ],
  },
  {
    id: 'other-rtl-ip',
    name: 'Other RTL IP',
    description: 'Controller IP for UCIe, AVS bus and GPIO subsystems.',
    icon: CircuitBoard,
    items: [
      { name: 'UCIe Controller IP', path: '/products/other-rtl-ip/ucie-controller-ip', blurb: 'UCIe die-to-die controller.' },
      { name: 'AVS Bus Host IP', path: '/products/other-rtl-ip/avs-bus-host-ip', blurb: 'AVS bus host controller.' },
      { name: 'AVS Bus Target IP', path: '/products/other-rtl-ip/avs-bus-target-ip', blurb: 'AVS bus target controller.' },
      { name: 'GPIO Controller IP', path: '/products/other-rtl-ip/gpio-controller-ip', blurb: 'General-purpose I/O controller.' },
    ],
  },
  {
    id: 'riscv',
    name: 'RISC-V Solution',
    description: 'Instruction set, core development and reference models for RISC-V.',
    icon: CircuitBoard,
    items: [
      { name: 'Instruction Set', path: '/products/riscv/instruction-set', blurb: 'RV32/RV64 ISA packages.' },
      { name: 'Core Development', path: '/products/riscv/core-development', blurb: 'Custom RISC-V core development.' },
      { name: 'Reference Model', path: '/products/riscv/reference-model', blurb: 'Golden reference model.' },
    ],
  },
  {
    id: 'embedded',
    name: 'Embedded System',
    description: 'Cloud-connected embedded solutions and dynamic services.',
    icon: Cloud,
    items: [
      { name: 'Cloud Based Dynamic QR Code Generator', path: '/products/embedded/cloud-based-dynamic-qr-code-generator', blurb: 'Cloud-managed QR code engine.' },
    ],
  },
  {
    id: 'maxvy-fpga',
    name: 'MAXVY IP in FPGA',
    description: 'FPGA-proven MAXVY IP with reference software stacks.',
    icon: CircuitBoard,
    items: [
      { name: 'MAXVY I3C Host Controller Software', path: '/products/maxvy-fpga/maxvy-i3c-host-controller-software', blurb: 'I3C host controller software stack.' },
    ],
  },
];

export const allProducts = productCategories.flatMap((c) =>
  c.items.map((i) => ({ ...i, category: c.name, categoryId: c.id }))
);

export function findProduct(path: string) {
  return allProducts.find((p) => p.path === path);
}
