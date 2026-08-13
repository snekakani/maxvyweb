export const productContent = {
  // ==================== DDR5 SOLUTION ====================
  'spd5-hub-interface-ip': {
    slug: 'spd5-hub-interface-ip',
    category: 'ddr5',
    heroTitle: 'SPD5 HUB INTERFACE IP',
    heroDescription: 'Accelerating next-generation memory communication with secure and reliable SPD5 connectivity.',
    title: 'DDR5 Serial Presence Detect (SPD) Hub Interface',
    overview: 'The SPD5 Hub Function IP has been developed to interface I3C/I2C Host Bus and it allows an isolation of local devices like Temperature Sensor(TS), from master host bus. This SPD5 has Two wire serial interface like SCL, SDA.',
    features: [
      'Compliance as per JEDEC\'s JESD300-5',
      'Upto 12.5MHz speed supported',
      'Bus Reset',
      'SDA arbitration',
      'Parity Check is enabled',
      'Packet Error Check is supported (PEC)',
      'Supported Switch from I2C to I3C Basic Mode and vice versa',
      'Default Read address pointer Mode supported',
      'Support SPD5 Hub write and read operations with or without PEC enabled',
      'In-band Interrupt (IBI)',
      'Support Write Protection for each block of NVM memory',
      'Clearing Device Status and IBI Status Registers',
      'Packet Error Check & Parity Error Handling',
      'CCC Packet Error Handling',
      'Dynamic IO Operation Mode Switching',
      'Bus Clear and Bus Reset',
      'SPD5 Command',
      'NVM memory: W1M, R1M, W2M, R2M, W4M, R4M, W16M, R16M',
      'Register Space: W1R, R1R, W2R, R2R, W16R, R16R',
      'NVM memory Write and Read access',
      'Offline Tester operation is supported'
    ],
    applications: [
      'DDR5 DIMM Application Environment',
      'DDR5 NVDIMM Application Environment',
      'Automotive Devices',
      'Memory Devices',
      'Power Management Devices',
      'Defense / Aerospace / Customer Electronics'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'cocotb Verification Environment',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [
      { title: 'SPD5 Hub Overview', thumbnail: '', youtubeId: '4_LrC_f6xPo' },
      { title: 'SPD5 Hub Deep Dive', thumbnail: '', youtubeId: 'NPEyHEnn6lA' }
    ],
    blockDiagram: '/images/block_diagram_spd5_hub_slave.png',
    downloadFiles: []
  },

  'temperature-sensor': {
    slug: 'temperature-sensor',
    category: 'ddr5',
    heroTitle: 'TEMPERATURE SENSOR',
    heroDescription: 'High-accuracy on-die temperature sensing for next-generation memory modules.',
    title: 'Temperature Sensor',
    overview: 'The TS5111 and TS5110 device incorporate thermal sensing capability which is controlled and read over two wire bus. These device operate on I2C and I3C two wire serial bus interface. The TS5 designed for Memory Module Applications. The TS5 device intended to operate up to 12.5 MHz on a I3C Basic Bus or up to 1 MHz on a I2C Bus. All TS5 devices respond to specific pre-defined device select code on the I2C/I3C Bus.',
    features: [
      'Two wire bus serial interface (I2C and I3C Basic operation modes)',
      'Up to 12.5 MHz transfer rate',
      'Packet Error Check (PEC) Function',
      'Parity Error Check Function',
      'Bus Reset Function',
      'Two unique addresses selected by SA pin',
      'In-band Interrupt (IBI)',
      'Supported I3C Basic Common Command Codes (CCC): ENEC, DISEC, RSTDAA, SETAASA, GETSTATUS, DEVCAP, SETHID, DEVCTRL'
    ],
    applications: [
      'DDR5 DIMM Application Environment',
      'Memory Module Application'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'cocotb Verification Environment',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/ddr5_ts_block_Diagram.png',
    downloadFiles: []
  },

  'pmic-i3c-target-controller': {
    slug: 'pmic-i3c-target-controller',
    category: 'ddr5',
    heroTitle: 'PMIC I3C TARGET CONTROLLER',
    heroDescription: 'Power Management IC I3C interface for DDR5 applications with robust control and monitoring.',
    title: 'Power Management IC - I3C Basic Interface IP',
    overview: 'Power Management IC (PMIC) is designed for DDR5 RDIMM, DDR5 LRDIMM, DDR5 NVDIMM application. PMIC is used for switching and LDO regulators. PMIC-I3C Interface used to select suitable power fit for various application environment. PMIC device is intended to operate up to 12.5MHz.',
    features: [
      'Compliance as per JEDEC\'s JESD301-1',
      'Maximum Operating speed 12.5MHz',
      'Flexible Open Drain IO (I2C) and Push Pull (I3C Basic) IO Support',
      'Multi Time Programmable Non-Volatile Memory',
      'Programmable and DIMM specific registers for customization',
      'Error log registers',
      'Input and output power good status reporting mechanism',
      'Packet Error Check (PEC) Function',
      'Parity Error Check Function',
      'Bus Reset Function',
      'I3C Basic mode Supports: Write Mode, Read Mode, Packet Error Code (PEC) Supported, Default Read Operation',
      'Support In Band Interrupt (IBI)',
      'Support 3 types of LID',
      'I2C mode Supports write, read and default read operation',
      'PEC and Parity error Handling',
      'CCC error Handling',
      'PMIC Command',
      'Register Space: W1R, R1R, W2R, R2R, W4R, R4R, W16R, R16R'
    ],
    applications: [
      'DDR5 DIMM Application Environment',
      'DDR5 NVDIMM Application Environment',
      'Automotive Devices',
      'Memory Devices',
      'Power Management Devices',
      'Defense / Aerospace / Customer Electronics'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'cocotb Verification Environment',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/pmic_i3c_slave_block_diagram.png',
    downloadFiles: []
  },

  'ddr5-rcd03': {
    slug: 'ddr5-rcd03',
    category: 'ddr5',
    heroTitle: 'DDR5 RCD03',
    heroDescription: 'Advanced registering clock driver for DDR5 RDIMM and LRDIMM with high-speed I3C interface.',
    title: 'DDR5 REGISTERING CLOCK DRIVER (RCD) IP - (DDR5RCD03)',
    overview: 'The DDR5RCD03 is a registering clock driver used on DDR5 RDIMMs and LRDIMMs. Its primary function is to buffer the Command/Address (CA) bus, chip selects, and clock between the host controller and the DRAMs. It also creates a BCOM bus which controls the data buffers for LRDIMMs.',
    features: [
      'Compliance as per JEDEC\'s JESD82-513',
      'In I3C mode, SCL Operating speed 12.5MHz as Maximum',
      'DDR5 server speeds up to 6000MT/s',
      'Dual channel with each channel being 32 bits wide for data',
      'Supports power saving mechanisms',
      'Supports rank 0 & rank 1 DIMM configurations',
      'Loopback and pass-through modes',
      'BCOM sideband bus for LRDIMM data buffer control',
      'Support In-band Interrupt',
      'Packet Error check(PEC)',
      'CCC Packet Error Handling',
      'Error log register',
      'Parity Error Handling Support',
      'Interrupt Arbitration',
      'I2C Fast-mode Plus (FM+) and I3C Basic supported',
      'Support switch from I2C mode to I3C Basic',
      'Clearing Status Registers',
      'JESD82-513 specification compliance'
    ],
    applications: [
      'RDIMM',
      'LRDIMM',
      'AI (Artificial Intelligence)',
      'HPC (High-Performance Computing)',
      'data-intensive applications'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'cocotb Verification Environment',
      'Basic Test-suite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/block_diagram_DDR5RCD01.jpg',
    downloadFiles: []
  },

  'ddr5-rcd01': {
    slug: 'ddr5-rcd01',
    category: 'ddr5',
    heroTitle: 'DDR5 RCD01',
    heroDescription: 'High-performance registering clock driver for DDR5 RDIMM and LRDIMM applications.',
    title: 'DDR5 REGISTERING CLOCK DRIVER (RCD) IP - (DDR5RCD01)',
    overview: 'The DDR5RCD01 is a registering clock driver used on DDR5 RDIMMs and LRDIMMs. Its primary function is to buffer the Command/Address (CA) bus, chip selects, and clock between the host controller and the DRAMs. It also creates a BCOM bus which controls the data buffers for LRDIMMs.',
    features: [
      'Compliance as per JEDEC\'s JESD82-511',
      'In I3C mode, SCL Operating speed 12.5MHz as Maximum',
      'DDR5 server speeds up to 4800MT/s',
      'Dual channel with each channel being 32 bits wide for data',
      'Supports power saving mechanisms',
      'Supports rank 0 & rank 1 DIMM configurations',
      'Loopback and pass-through modes',
      'BCOM sideband bus for LRDIMM data buffer control',
      'Support In-band Interrupt',
      'Packet Error check(PEC)',
      'CCC Packet Error Handling',
      'Error log register',
      'Parity Error Handling Support',
      'Interrupt Arbitration',
      'I2C Fast-mode Plus (FM+) and I3C Basic supported',
      'Support switch from I2C mode to I3C Basic',
      'Clearing Status Registers',
      'JESD82-511 specification compliance'
    ],
    applications: [
      'RDIMM',
      'LRDIMM',
      'AI (Artificial Intelligence)',
      'HPC (High-Performance Computing)',
      'data-intensive applications'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'cocotb Verification Environment',
      'Basic Test-suite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/block_diagram_DDR5RCD01.jpg',
    downloadFiles: []
  },

  'ckr5-rcd01': {
    slug: 'ckr5-rcd01',
    category: 'ddr5',
    heroTitle: 'CKR5 RCD01',
    heroDescription: 'Clock redriver for CKR5 with advanced PLL and I3C interface for DDR5 modules.',
    title: 'MAXVY DDR5CKD01 Clock Driver',
    overview: 'MAXVY DDR5CKD01 is a registering clock driver used on DDR5 CUDIMMs, CSODIMMs, and CAMM. Its primary function is to buffer the DDR clock between the Host controller and the DRAMs.',
    features: [
      'Compliance as per JEDEC\'s JESD82-531B - Version 1.21',
      'CKD PLL modes: PLL ByPass Mode, Single PLL Mode, Dual PLL Mode',
      'Clock Stop Operation',
      'PLL Modes output frequency range 1000 MHz to 4600 MHz supported',
      'PLL Modes Frequency change supported',
      'LID\'s determination based on ZQCAL RL value',
      'Sideband Interface I3C mode up to 12.5 MHz and I2C mode up to 1 MHz speed supported',
      'Parity Check is enabled',
      'Packet Error Check is supported (PEC)',
      'Supported Switch from I2C to I3C Basic Mode and vice versa',
      'Support CKD write and read operations with or without PEC enabled',
      'In-band Interrupt (IBI)',
      'Interrupt Arbitration',
      'Bus Reset, Bus clear supported',
      'Clearing Status Register',
      'Packet Error Check & Parity Error Handling',
      'CCC Packet Error Handling'
    ],
    applications: [
      'DDR5 CUDIMM',
      'CSODIMM',
      'CAMM'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'cocotb Verification Environment',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/ckd01_block_diagram.png',
    downloadFiles: []
  },

  // ==================== MULTIMEDIA SOLUTION ====================
  'mipi-dsi2-transmitter-ip': {
    slug: 'mipi-dsi2-transmitter-ip',
    category: 'multimedia',
    heroTitle: 'MIPI DSI2 TRANSMITTER IP',
    heroDescription: 'High-performance display serial interface transmitter for advanced imaging and display applications.',
    title: 'MAXVY MIPI DSI2 Display Transmitter IP',
    overview: 'MAXVY MIPI DSI Transmitter IP is designed to transmit the data to the host processor. The MIPI DSI-2 provides the mobile industry a standard, robust, scalable, low-power, high-speed, cost-effective interface that supports a wide range of imaging solutions for mobile devices.',
    features: [
      'Compliance as per MIPI-DSI-2 version2.0',
      'Compliance with C-PHY version 2.0 for DSI-2 Version-2',
      'Compliance with D-PHY version 1.2, 2.0, and 3.0 for DSI-2 Version-2.0',
      'Compliance with MIPI SDF specification',
      'Compliance with DBI-2 and DPI-2',
      'DSI-2 Transmitter supports Pixel to Byte conversion from Application layer to LLP layer',
      'DSI-2 Transmitter compliant peripherals support either Command Mode and Video Mode',
      'DSI-2 operates in continuous clock behaviour in clock lane when implemented in D-PHY physical layer',
      'DSI-2 Transmitter provides the de-skew sequence pattern for video mode support',
      'DSI-2 Transmitter supports Lane Distribution Function across N-Lanes',
      'DSI-2 Transmitter can connect two, three, or four DSI Receivers by splitting the DSI Link',
      'DSI-2 Transmitter supports HS mode and Escape mode in both C-PHY and D-PHY',
      'DSI-2 Transmitter supports symbol slip detection code and sync symbol insertion in C-PHY',
      'DSI-2 Transmitter supports scrambling of data payload and packet footer',
      'DSI-2 Transmitter supports C-PHY/D-PHY. Only one PHY layer can be configured at a time',
      'Processor Interfaces: AHB-Lite/APB/AXI for configuration'
    ],
    applications: [
      'Imaging',
      'Surveillance',
      'Gaming',
      'Sensor devices',
      'Internet of Things (IoT)',
      'Wearable devices',
      'Virtual Reality',
      'Augmented Reality',
      'Automotive Systems'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'Basic Test-suite'
    ],
    videos: [
      { title: 'MIPI DSI2 Overview', thumbnail: '', youtubeId: 'XoBdq1M5T9c' },
      { title: 'MIPI DSI2 Deep Dive', thumbnail: '', youtubeId: 'twqzZMjSh6k' }
    ],
    blockDiagram: '/images/block_diagram_mipi_dsi_2_transmitter_ip.jpg',
    downloadFiles: []
  },

  'mipi-dsi2-receiver-ip': {
    slug: 'mipi-dsi2-receiver-ip',
    category: 'multimedia',
    heroTitle: 'MIPI DSI2 RECEIVER IP',
    heroDescription: 'Robust display serial interface receiver for seamless video data integration into SoC subsystems.',
    title: 'MAXVY MIPI DSI-2 RX Controller IP',
    overview: "The MAXVY's MIPI DSI-2 RX Controller IP is a fully compliant receive solution designed to interface with MIPI DSI-2 transmitters and deliver display data to SoC video subsystems. The IP supports multi-lane DSI-2 reception over D-PHY and/or C-PHY interfaces through a standard PHY-Protocol Interface (PPI), enabling seamless integration with industry-standard PHY implementations.",
    features: [
      'DSI-2 protocol support - Fully compatible with MIPI DSI-2 V2.2 specification',
      'Command mode - Supports DSI command mode packet reception',
      'Video mode - Supports continuous and non-continuous video mode reception',
      'PPI interface - Standard PHY-Protocol Interface (PPI) support. Compliant to DPHY V3.5 and CPHY V2.1',
      'Multi-lane reception - Supports 1-lane to 4-lane data reception',
      'Error detection - Detects ECC, CRC, and protocol violations',
      'Processor Interface - Supports AXI-4 Lite/ APB V2.0 Interfaces',
      'Pixel unpacking - Support for all primary and secondary data formats',
      'Data Interleaving - Supports Data ID, VC interleaving',
      'Pixel Modes - Supports single, dual, and quad pixels per sample',
      'AXI4-Stream video output - Standard AXI-Stream interface V1.0 for video data (Optional)'
    ],
    applications: [
      'Imaging',
      'Surveillance',
      'Gaming',
      'Sensor devices',
      'Internet of Things (IoT)',
      'Wearable devices',
      'Virtual Reality',
      'Augmented Reality',
      'Automotive Systems'
    ],
    deliverables: [
      'Verilog Source code',
      'IP Datasheet',
      'IP integration Guide',
      'Run and Synthesis Script',
      'Encrypted UVM Verification Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/MAXVY_MIPI_DSI_2_RX_Controller_IP.png',
    downloadFiles: []
  },

  'mipi-csi2-v3-transmitter-ip': {
    slug: 'mipi-csi2-v3-transmitter-ip',
    category: 'multimedia',
    heroTitle: 'MIPI CSI2 V3 TRANSMITTER IP',
    heroDescription: 'Next-generation camera serial interface transmitter for high-bandwidth imaging applications.',
    title: 'MIPI CSI -2 TRANSMITTER IP -V3',
    overview: 'MIPI CSI-2 (Camera Serial Interface) Transmitter IP defines an interface between a peripheral device (camera) and host processor (application engine) for mobile applications. The MIPI CSI-2 Transmitter IP provides the mobile industry a standard, robust, scalable, low-power, high-speed, cost-effective interface that supports a wide range of imaging solutions for mobile devices.',
    features: [
      'Compliance as per MIPI-CSI-2 version3.0',
      'Compliance with C-PHY 2.0 and D-PHY 2.5 for MIPI CSI-2 Version3.0',
      'Compatibility with I2C and I3C(SDR,DDR) for CCI interface',
      'CSI-2 Transmitter supports Pixel to Byte conversion from Application layer to LLP layer',
      'CSI-2 Transmitter supports continuous clock behavior in clock lane when implemented in D-PHY physical layer',
      'CSI-2 Transmitter provides the de-skew sequence pattern in Data Lane Module',
      'CSI-2 Transmitter supports Lane Distribution Function across N-Lanes',
      'CSI-2 Transmitter supports sync word insertion through PPI command in C-PHY',
      'CSI-2 Transmitter will insert Filler bytes in LLP layer in C-PHY',
      'CSI-2 Transmitter supports scrambling and descrambling',
      'Data Format supported: YUV (422), RGB (888/565), RAW (8/10), Generic 8-bit long Packet data type, User defined byte based data',
      'CSI-2 Transmitter supports C-PHY/D-PHY/A-PHY/M-PHY. Only one PHY layer at a time',
      'Processor Interfaces: AHB-Lite/APB/AXI for configuration',
      'Supports 16 Virtual channels for D-PHY and 32 Virtual channels for C-PHY'
    ],
    applications: [
      'Imaging',
      'Surveillance',
      'Gaming',
      'Sensor devices',
      'Internet of Things (IoT)',
      'Wearable devices',
      'Virtual Reality',
      'Augmented Reality',
      'Automotive Systems'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'Basic Test-suite'
    ],
    videos: [],
    blockDiagram: '/images/block_diagram_mipi_csi_2_v3_transmitter_ip.png',
    downloadFiles: []
  },

  'mipi-csi2-v3-receiver-ip': {
    slug: 'mipi-csi2-v3-receiver-ip',
    category: 'multimedia',
    heroTitle: 'MIPI CSI2 V3 RECEIVER IP',
    heroDescription: 'High-performance camera serial interface receiver for advanced imaging and vision systems.',
    title: 'MIPI CSI-2 V3 RECEIVER INTERFACE IP',
    overview: 'The MIPI CSI-2 (Camera Serial Interface) defines an interface between a peripheral device (camera) and host processor (application engine) for mobile applications. The MIPI CSI-2 provides the mobile industry a standard, robust, scalable, low-power, high-speed, cost-effective interface that supports a wide range of imaging solutions for mobile devices.',
    features: [
      'Compliance as per MIPI-CSI-2 version3.0',
      'Compliance with C-PHY 2.0 and D-PHY 2.5 for MIPI CSI-2 Version3.0',
      'Compatibility with I2C and I3C(SDR,DDR) for CCI interface',
      'CSI-2 Receiver supports C-PHY 2.0/ D-PHY 2.5/ A-PHY/ M-PHY. Only one PHY layer at a time',
      'Processor Interfaces: AHB Lite/APB/AXI for configuration',
      'CSI-2 Receiver Supports Lane merging Function from N-Lanes',
      'In D-PHY, CSI-2 Receiver will detect the de-skew pattern',
      'In C-PHY, CSI-2 Receiver supports the sync word detection during payload reception',
      'Pixel format supported: YUV (420/422), RGB (888/666/565/555/444), RAW (6/7/8/10/12/14/16/20/24), Generic 8-bit long packet data types, user defined byte based data',
      'Supports 16 Virtual channels for D-PHY and 32 Virtual channels for C-PHY',
      'Supports error detection in data payload, data interleaving, scrambling and descrambling',
      'Supports byte to pixel conversion in LLP layer'
    ],
    applications: [
      'Imaging',
      'Surveillance',
      'Gaming',
      'Sensor devices',
      'Internet of Things (IoT)',
      'Wearable devices',
      'Virtual Reality',
      'Augmented Reality',
      'Automotive Systems'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'Basic Test-suite'
    ],
    videos: [],
    blockDiagram: '/images/block_diagram_mipi_csi_2_v3_receiver_ip.png',
    downloadFiles: []
  },

  'mipi-dphy-receiver-ip': {
    slug: 'mipi-dphy-receiver-ip',
    category: 'multimedia',
    heroTitle: 'MIPI D-PHY RECEIVER IP',
    heroDescription: 'High-speed, low-power MIPI physical layer receiver solution for advanced imaging applications.',
    title: 'MAXVY MIPI D-PHY Receiver IP',
    overview: 'The MAXVY MIPI D-PHY Receiver IP is a robust high-speed PHY solution designed for receiving MIPI data streams in advanced imaging, display, automotive, and embedded applications. The IP supports reliable reception for MIPI CSI-2 and MIPI DSI-2 interfaces with optimized low-power operation, high signal integrity, and seamless SoC integration.',
    features: [
      'Compliant with MIPI D-PHY Specification v3.6',
      'Fully Integrated Hard Macro',
      'Supports MIPI CSI-2 / DSI-2 RX Applications',
      'Up to 2.5 Gbps per lane',
      'Aggregate throughput up to 10 Gbps',
      'Configurable: 1 Clock Lane, 1 to 4 Data Lanes',
      'Supports PHY Protocol Interface (PPI)',
      'High-Speed (HS) and Low-Power (LP) receive modes',
      'Ultra-low-power state modes',
      'Low-power escape mode support',
      'Shutdown mode support',
      'Flexible reference clock support',
      'SCAN and Loopback BIST modes',
      'Extensive internal programmability registers',
      'RX-only and Secondary PHY configurations',
      'Low EMI architecture',
      'High Signal Integrity',
      'Optimized for Low Power Operation'
    ],
    applications: [
      'Mobile Devices',
      'Automotive Camera Systems',
      'ADAS Platforms',
      'Smart Displays',
      'AR/VR Devices',
      'Industrial Vision Systems',
      'AI Edge Cameras',
      'Embedded Vision Platforms'
    ],
    deliverables: [
      'RTL / Netlist',
      'Verification Environment',
      'Testbench',
      'Integration Guide',
      'Timing Constraints',
      'User Manual',
      'Technical Support'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'mipi-dphy-transmitter-ip': {
    slug: 'mipi-dphy-transmitter-ip',
    category: 'multimedia',
    heroTitle: 'MIPI D-PHY TRANSMITTER IP',
    heroDescription: 'High-performance MIPI physical layer transmitter solution with ultra-low power operation.',
    title: 'MAXVY MIPI D-PHY Transmitter IP',
    overview: 'The MAXVY MIPI D-PHY Transmitter IP is a high-performance PHY solution designed for transmitting highspeed data in modern display, camera, automotive, and embedded applications. The IP enables seamless integration with MIPI DSI-2 and MIPI CSI-2 based systems while delivering optimized power, performance, and signal integrity.',
    features: [
      'Compliant with MIPI D-PHY Specification v3.6',
      'Fully Integrated Hard Macro',
      'Supports MIPI DSI-2 / CSI-2 TX Applications',
      'Up to 2.5 Gbps per lane',
      'Aggregate throughput up to 10 Gbps',
      'Configurable: 1 Clock Lane, 1 to 4 Data Lanes',
      'Supports PHY Protocol Interface (PPI)',
      'High-Speed (HS) and Low-Power (LP) transmission modes',
      'Low-power escape mode support',
      'Ultra-low-power state modes',
      'Shutdown mode support',
      'Flexible input reference clock',
      '50% DDR output clock duty cycle',
      'Attachable PLL support',
      'SCAN and Loopback BIST modes',
      'Extensive programmable control registers',
      'Low EMI architecture',
      'High Signal Integrity',
      'Optimized for Low Power and High Performance'
    ],
    applications: [
      'Mobile Devices',
      'Automotive Camera Systems',
      'ADAS Platforms',
      'Smart Displays',
      'AR/VR Devices',
      'Industrial Vision Systems',
      'AI Edge Cameras',
      'Embedded Vision Platforms'
    ],
    deliverables: [
      'RTL / Netlist',
      'Verification Environment',
      'Testbench',
      'Integration Guide',
      'Timing Constraints',
      'User Manual',
      'Technical Support'
    ],
    videos: [],
    blockDiagram: '/images/dphytx_block.png',
    downloadFiles: []
  },

  // ==================== PERIPHERAL ====================
  'qspi-target-ip': {
    slug: 'qspi-target-ip',
    category: 'peripheral',
    heroTitle: 'QSPI TARGET IP',
    heroDescription: 'Quad Serial Peripheral Interface target controller for non-volatile memory devices.',
    title: 'MAXVY\'S Quad Serial Peripheral Interface (QSPI) Target IP',
    overview: 'MAXVY Quad Serial Peripheral Interface (QSPI) for Non Volatile Memory Devices, which provides high data throughput, low signal count, and limited backward compatibility with legacy Serial Peripheral Interface (SPI) devices.',
    features: [
      'Support Single Data Rate (SDR) and Double Data Rate (DDR)',
      'Supports Quad modes: 4S-4S-4S, 1S-4S-4S, 1S-1S-4S, 4D-4D-4D, 1D-4D-4D, 1D-1D-4D',
      'Supports XIP mode and software reset operations',
      'Supports Program Memory Operations and Read Memory Operations',
      'Supports volatile and Non volatile Registers write/read operations',
      'Supports Memory Erase Operations',
      'Supports Flag status register, Protection Management register, Clear Flag status, Status register, Global freeze bit register operations',
      'Supports Program/Erase Suspend and Resume Operations',
      'Supports One Time Programmable Operations',
      'Supports 4 Byte Address Mode entry and Exit operations',
      'Supports Deep Power Down Entry and Exit Operations',
      'Supports all advanced sector protection operations',
      'Supports Enter Default Protocol Mode switching and Soft Reset',
      'Support Eight IO ports in standard. Possible to increase IO ports',
      'Optional support for Data Strobe (DS) for timing reference'
    ],
    applications: [
      'Consumer Electronics',
      'Embedded Systems',
      'Biometrics (Finger prints, etc)',
      'Internet of Things (IoT)',
      'Automotive Devices',
      'Sensor Devices',
      'Mobile Systems'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'Basic Test-suite',
      'cocotb Verification Environment',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/qspi_block_diag.png',
    downloadFiles: []
  },

  'ospi-target-ip': {
    slug: 'ospi-target-ip',
    category: 'peripheral',
    heroTitle: 'OSPI TARGET IP',
    heroDescription: 'Octal Serial Peripheral Interface target controller with high data throughput for memory devices.',
    title: 'MAXVY\'S Octal Serial Peripheral Interface (OSPI) Target IP',
    overview: 'Octal Serial Peripheral Interface (OSPI) for Non Volatile Memory Devices, which provides high data throughput, low signal count, and limited backward compatibility with legacy Serial Peripheral Interface (SPI) devices.',
    features: [
      'Support Single Data Rate (SDR) and Double Data Rate (DDR)',
      'Support Data transfer rates up to 400MT/s (200MHz Clock), 333MT/s (167MHz Clock), 266MT/s (133MHz Clock), 200MT/s (100MHz Clock)',
      'Supports software reset operations',
      'Supports Program Memory Operations and Read Memory Operations',
      'Supports volatile and Non volatile Registers write/read operations',
      'Supports Memory Erase Operations',
      'Supports Flag status register, Protection Management register, Clear Flag status, Status register, Global freeze bit register operations',
      'Supports Program/Erase Suspend and Resume Operations',
      'Supports One Time Programmable Operations',
      'Supports 4 Byte Address Mode entry and Exit operations',
      'Supports Deep Power Down Entry and Exit Operations',
      'Supports all advanced sector protection operations',
      'Supports Enter Default Protocol Mode switching and Soft Reset',
      'Support Eight IO ports in standard',
      'Supports Data Strobe (DS) for timing reference'
    ],
    applications: [
      'Consumer Electronics',
      'Embedded Systems',
      'Biometrics (Finger prints, etc)',
      'Internet of Things (IoT)',
      'Automotive Devices',
      'Sensor Devices',
      'Mobile Systems'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'Basic Test-suite',
      'cocotb Verification Environment',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/ospi_block_diag.png',
    downloadFiles: []
  },

  'xspi-target-controller': {
    slug: 'xspi-target-controller',
    category: 'peripheral',
    heroTitle: 'xSPI TARGET CONTROLLER',
    heroDescription: 'Expanded Serial Peripheral Interface target controller with JEDEC compliance for high-performance storage.',
    title: 'Expanded Serial Peripheral Interface (xSPI) Slave Controller',
    overview: "The MAXVY's JESD251 Expanded Serial Peripheral Interface Slave controller provides high data throughput, low signal count, and limited backward compatibility with legacy Serial Peripheral Interface(SPI) devices. It is used to connect xSPI Master devices in computing, automotive, Internet of Things, Embedded system and mobile system processor to non-volatile memories, graphics peripherals, networking peripherals, FPGAs, sensors devices.",
    features: [
      'Compliance of JEDEC standard JESD251 eXpanded Serial Peripheral Interface (xSPI) for Non Volatile Memory Devices, Version1.0',
      'Support Single Data Rate (SDR) and Double Data Rate (DDR)',
      'Support Source synchronous clocking',
      'Support Data transfer rates up to 400MT/s, 333MT/s, 266MT/s, 200MT/s',
      'Support Deep Power Down (DPD) enter and exit commands',
      'Support Eight IO ports in standard. Possible to increase IO port',
      'Optional support for Data Strobe (DS) for timing reference',
      'Support 1-bit wide SDR transfer',
      'Support Profile 1.0 Commands to manage a non-volatile memory device',
      'Support Profile 2.0 Commands to support read or write data',
      'Non-volatile memory arrays like NOR Flash, NAND Flash, FRAM, nvSRAM',
      'Volatile memory arrays such as SRAM, PSRAM, DRAM',
      'Register mapped Input/Output function',
      'Programmable function devices such as FPGA'
    ],
    applications: [
      'Consumer Electronics',
      'Defense & Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/xSPI_Slave_Controller.jpg',
    downloadFiles: []
  },

  'xspi-host-controller': {
    slug: 'xspi-host-controller',
    category: 'peripheral',
    heroTitle: 'xSPI HOST CONTROLLER',
    heroDescription: 'Expanded Serial Peripheral Interface host controller for connecting multiple SPI slave devices.',
    title: 'Expanded Serial Peripheral Interface (xSPI) Master Controller',
    overview: "The MAXVY's Expanded Serial Peripheral Interface (JESD251) Master controller is low signal count, high data bandwidth, primarily for use in computing, automotive, Internet of Things, Embedded system and mobile system processor to connect multiple source of Serial Peripheral Interface (xSPI) slave devices like non-volatile memories, graphics peripherals, networking peripherals, FPGAs, sensors devices.",
    features: [
      'Compliance of JEDEC standard JESD251 eXpanded Serial Peripheral Interface (xSPI) for Non Volatile Memory Devices, Version1.0',
      'Support Single master, multiple slaves per interface port',
      'Support Single Data Rate (SDR) and Double Data Rate (DDR)',
      'Support Source synchronous clocking',
      'Support Data transfer rates up to 400MT/s, 333MT/s, 266MT/s, 200MT/s',
      'Support Deep Power Down (DPD) enter and exit commands',
      'Support Eight IO ports in standard. Possible to increase IO port',
      'Optional support for Data Strobe (DS) for write masking',
      'Support 1-bit wide SDR transfer',
      'Support Profile 1.0 and 2.0 Commands',
      'Non-volatile memory arrays like NOR Flash, NAND Flash, FRAM, nvSRAM',
      'Volatile memory arrays such as SRAM, PSRAM, DRAM',
      'Register mapped Input/Output function',
      'Programmable function devices such as FPGA'
    ],
    applications: [
      'Consumer electronics',
      'Defense & Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/xSPI_master_controller.jpg',
    downloadFiles: []
  },

  // ==================== MIPI I3C SOLUTION IP ====================
  'mipi-i3c-host-target-ip': {
    slug: 'mipi-i3c-host-target-ip',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C HOST/TARGET IP',
    heroDescription: 'Complete MIPI I3C controller with dual-role host and target capabilities for sensor integration.',
    title: 'MIPI I3C Controller Host/Target IP',
    overview: 'MIPI I3C Controller IP Core is fully compliant with the latest I3C specification and delivers high bandwidth and scalability for integration of multiple sensors into mobile, automotive and IoT system-on-chips (SoCs). The MIPI I3C Controller supports in-band interrupts within the 2-wire interface provides significantly lower pin count, simplifying board design and reducing power and cost of the system.',
    features: [
      'Compliance as per MIPI-I3C Basic v1.1.1',
      'Backward compatibility with I2C',
      'Two wire serial interface up to 12.5MHz using Push-Pull',
      'Dynamic Addressing while supporting Static Addressing for Legacy I2C Devices',
      'Support Single Data Rate messaging(SDR)',
      'Supports Broadcast and Direct Common Command Code (CCC) Messages',
      'In-Band Interrupt',
      'Hot-Join Support'
    ],
    applications: [
      'Consumer Electronics',
      'Defense',
      'Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis Script',
      'Encrypted Verification Test-bench Environment',
      'Basic Test-suite'
    ],
    videos: [{ title: 'MIPI I3C Overview', thumbnail: '', youtubeId: 'k5fT-jtyUyI' }],
    blockDiagram: '/images/Rtl_I3C_master_slave.png',
    downloadFiles: []
  },

  'mipi-i3c-target-ip': {
    slug: 'mipi-i3c-target-ip',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C TARGET IP',
    heroDescription: 'Single-role MIPI I3C target controller with high-performance sensor interface capabilities.',
    title: 'MIPI-I3C Slave (SDR) RTL Design IP',
    overview: 'MIPI I3C slave Controller IP Core is fully compliant with the latest I3C specification and delivers high bandwidth and scalability for integration of multiple sensors into mobile, automotive and IoT system-on-chips (SoCs). The MIPI I3C slave Controller supports in-band interrupts within the 2-wire interface provides significantly lower pin count, simplifying board design and reducing power and cost of the system.',
    features: [
      'Compliance as per Public Release Edition',
      'Two wire serial interface up to 12.5 MHz using Push-Pull',
      'Dynamic Addressing while supporting Static Addressing for Legacy I2C Devices',
      'Support Single Data Rate messaging(SDR)',
      'Support Broadcast and Direct Common Command Code (CCC) Messages',
      'In-Band Interrupt support',
      'Hot-Join support',
      'Synchronous Timing Support and Asynchronous Time Stamping'
    ],
    applications: [
      'Consumer Electronics',
      'Defense',
      'Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/rtl_mipi_i3c.jpg',
    downloadFiles: []
  },

  'mipi-i3c-host-ip': {
    slug: 'mipi-i3c-host-ip',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C HOST IP',
    heroDescription: 'High-performance MIPI I3C host controller for multi-sensor systems and peripheral management.',
    title: 'MIPI-I3C Master (SDR) RTL Design IP',
    overview: 'MIPI I3C master Controller IP Core is fully compliant with the latest I3C specification and delivers high bandwidth and scalability for integration of multiple sensors into mobile, automotive and IoT system-on-chips (SoCs). The MIPI I3C master Controller supports in-band interrupts within the 2-wire interface provides significantly lower pin count, simplifying board design and reducing power and cost of the system.',
    features: [
      'Compliance as per Public Release Edition',
      'Two wire serial interface up to 12.5 MHz using Push-Pull',
      'Dynamic Addressing while supporting Static Addressing for Legacy I2C Devices',
      'Support Single Data Rate messaging(SDR)',
      'Support Broadcast and Direct Common Command Code (CCC) Messages',
      'In-Band Interrupt support',
      'Hot-Join support',
      'Synchronous Timing Support and Asynchronous Time Stamping'
    ],
    applications: [
      'Consumer Electronics',
      'Defense',
      'Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [
      { title: 'MIPI I3C Master Overview', thumbnail: '', youtubeId: 'jPZgjdixXBk' },
      { title: 'MIPI I3C Master Deep Dive', thumbnail: '', youtubeId: '8PDbysQUhXA' }
    ],
    blockDiagram: '/images/rtl_mipi_i3c_master.png',
    downloadFiles: []
  },

  'mipi-i3c-basic-target-controller': {
    slug: 'mipi-i3c-basic-target-controller',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C BASIC TARGET CONTROLLER',
    heroDescription: 'Lightweight MIPI I3C basic target controller for legacy and low-power sensor integration.',
    title: 'MIPI I3C Basic Slave Controller',
    overview: 'MIPI I3C(Improved Inter Integrated Circuit) is a two-wire bidirectional serial Bus for sensors communication. The MIPI I3C interface has been developed to ease sensor system design architectures in mobile sensor and IoT / automotive sensor wireless products by providing a fast, low cost, low power.',
    features: [
      'Compliance as per MIPI I3C Basic v1.0',
      'Backward compatibility with I2C',
      'Two wire serial interface up to 12.5 MHz using Push-Pull',
      'Dynamic Addressing while supporting Static Addressing for Legacy I2C Devices',
      'Support Single Data Rate messaging(SDR)',
      'Support Broadcast and Direct Common Command Code (CCC) Messages',
      'In-Band Interrupt support',
      'Hot-Join support'
    ],
    applications: [
      'Consumer Electronics',
      'Defense',
      'Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/rtl_mipi_i3c.jpg',
    downloadFiles: []
  },

  'mipi-i3c-basic-host-controller': {
    slug: 'mipi-i3c-basic-host-controller',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C BASIC HOST CONTROLLER',
    heroDescription: 'Lightweight MIPI I3C basic host controller for simple sensor bus management.',
    title: 'MIPI I3C Basic Master Controller',
    overview: 'MIPI I3C(Improved Inter Integrated Circuit) is a two-wire bidirectional serial Bus for sensors communication. The MIPI I3C interface has been developed to ease sensor system design architectures in mobile sensor and IoT / automotive sensor wireless products by providing a fast, low cost, low power.',
    features: [
      'Compliance as per MIPI I3C Basic v1.0',
      'Backward compatibility with I2C',
      'Two wire serial interface up to 12.5 MHz using Push-Pull',
      'Dynamic Addressing while supporting Static Addressing for Legacy I2C Devices',
      'Support Single Data Rate messaging(SDR)',
      'Support Broadcast and Direct Common Command Code (CCC) Messages',
      'In-Band Interrupt support',
      'Hot-Join support'
    ],
    applications: [
      'Consumer Electronics',
      'Defense',
      'Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/rtl_mipi_i3c.jpg',
    downloadFiles: []
  },

  'mipi-i3c-host-riscv-subsystem': {
    slug: 'mipi-i3c-host-riscv-subsystem',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C HOST RISC-V SUBSYSTEM',
    heroDescription: 'Complete MIPI I3C host subsystem with integrated RISC-V processor for autonomous sensor management.',
    title: 'MIPI I3C Master RISC-V based subsystem',
    overview: 'RISC-V based MAXVY MIPI I3C master interface has been developed to ease sensor system design architectures in mobile wireless products by providing a fast, low cost, low power, two-wire digital interface for sensors. All the basic functionalities of MIPI I3C master has been proved with Microsemi smart fusion 2 creative development board. In addition MAXVY MIPI I3C master supports for both AHB lite and APB Interface.',
    features: [
      'Dynamic address assignment',
      'Host controller compliance',
      'SDA arbitration',
      'Data transfer with and without broadcast',
      'All basic CCC command features',
      'Both push-pull and open drain mode transaction',
      'Private write and read operations'
    ],
    applications: [
      'Mechanical sensing (Gyroscopes, MEMS, etc.)',
      'Environmental sensing (Light, pressure, temperature, humidity, etc.)',
      'Biometrics (Fingerprinting, glucose, heart rate, breathalyzer, etc.)',
      'Communication (Near-field sensors, infrared remotes, etc.)'
    ],
    deliverables: [
      'Verilog Source Code',
      'User Guide',
      'IP Integration Guide',
      'Run and Synthesis Script',
      'Encrypted Verification Testbench Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: '/images/risc_v_based_i3c.jpg',
    downloadFiles: []
  },

  // ==================== I3C SUPPORT PROTOCOL IP ====================
  'spmi-host-controller': {
    slug: 'spmi-host-controller',
    category: 'i3c-support',
    heroTitle: 'SPMI HOST CONTROLLER',
    heroDescription: 'System Power Management Interface host controller for efficient power management communication.',
    title: 'SPMI Host Controller',
    overview: 'SPMI (System Power Management Interface) Host Controller provides a high-speed, low-latency interface for communication between power management ICs and system processors.',
    features: [
      'Compliance with MIPI SPMI Specification',
      'High-speed serial interface',
      'Support for multiple PMIC devices',
      'Low-power operation',
      'Configurable transaction timing',
      'Error detection and handling',
      'Priority-based command handling'
    ],
    applications: [
      'Mobile Devices',
      'Automotive Systems',
      'Power Management Systems',
      'Battery Management Systems',
      'Industrial Power Control'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Synthesis Script',
      'Verification Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'spmi-target-controller': {
    slug: 'spmi-target-controller',
    category: 'i3c-support',
    heroTitle: 'SPMI TARGET CONTROLLER',
    heroDescription: 'System Power Management Interface target controller for PMIC and power management devices.',
    title: 'SPMI Target Controller',
    overview: 'SPMI (System Power Management Interface) Target Controller enables power management ICs and devices to communicate with system processors over the SPMI bus.',
    features: [
      'Compliance with MIPI SPMI Specification',
      'Low-power operation',
      'Configurable device addressing',
      'Support for command and data transactions',
      'Status and interrupt reporting',
      'Error detection and handling'
    ],
    applications: [
      'PMIC Devices',
      'Battery Management ICs',
      'Power Management Systems',
      'Automotive Power Control',
      'Industrial Power Management'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Synthesis Script',
      'Verification Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'etsi-ssp-i3c-interface-ip': {
    slug: 'etsi-ssp-i3c-interface-ip',
    category: 'i3c-support',
    heroTitle: 'ETSI SSP I3C INTERFACE IP',
    heroDescription: 'ETSI Secure Service Provider I3C interface for secure sensor and peripheral communication.',
    title: 'ETSI SSP I3C Interface IP',
    overview: 'The ETSI SSP I3C Interface IP enables secure communication between ETSI Secure Service Provider (SSP) devices and I3C-based sensor networks.',
    features: [
      'Compliance with ETSI SSP specification',
      'Secure I3C communication',
      'Support for secure boot and update',
      'Device authentication',
      'Secure key management',
      'I3C/I2C protocol bridging'
    ],
    applications: [
      'Secure IoT Devices',
      'Mobile Payments',
      'Secure Access Systems',
      'Authentication Systems',
      'Security Module Integration'
    ],
    deliverables: [
      'Verilog Source code',
      'Integration Guide',
      'Security Application Guide',
      'User Guide',
      'Verification Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  // ==================== VERIFICATION IP ====================
  'ucie-vip': {
    slug: 'ucie-vip',
    category: 'verification-ip',
    heroTitle: 'UCIE VIP',
    heroDescription: 'Universal Chiplet Interconnect Express verification IP for die-to-die communication verification.',
    title: 'UCIe VIP',
    overview: 'UCIe (Universal Chiplet Interconnect Express) Verification IP provides comprehensive verification of die-to-die interfaces in multi-chiplet designs.',
    features: [
      'Compliant with UCIe Specification',
      'Support for all UCIe protocol layers',
      'Configurable link parameters',
      'Error injection and recovery testing',
      'Coverage-driven verification',
      'Performance monitoring',
      'Debug and logging capabilities'
    ],
    applications: [
      'Multi-Chiplet SoCs',
      'HPC Systems',
      'AI/ML Accelerators',
      'High-performance Computing',
      'Heterogeneous Integration'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Assertions',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'mipi-i3c-uvm-vip': {
    slug: 'mipi-i3c-uvm-vip',
    category: 'verification-ip',
    heroTitle: 'MIPI-I3C UVM VIP',
    heroDescription: 'MIPI I3C Universal Verification Methodology VIP for comprehensive I3C protocol verification.',
    title: 'MIPI-I3C UVM VIP',
    overview: 'MIPI I3C UVM VIP provides a complete verification environment for I3C interfaces, enabling thorough functional verification of I3C host and target designs.',
    features: [
      'UVM-based verification environment',
      'Compliant with MIPI I3C Specification',
      'Support for I3C and I2C modes',
      'Configurable parameterization',
      'Complete verification sequence library',
      'Coverage-driven verification',
      'Error injection capabilities',
      'Protocol checking'
    ],
    applications: [
      'SoC Verification',
      'I3C Controller Verification',
      'IP Qualification',
      'System-Level Verification'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library',
      'Assertions'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'mipi-dsi-vip': {
    slug: 'mipi-dsi-vip',
    category: 'verification-ip',
    heroTitle: 'MIPI DSI VIP',
    heroDescription: 'MIPI Display Serial Interface verification IP for comprehensive display interface verification.',
    title: 'MIPI DSI VIP',
    overview: 'MIPI DSI (Display Serial Interface) Verification IP provides comprehensive verification of display interfaces in multimedia and mobile SoC designs.',
    features: [
      'Compliant with MIPI DSI Specification',
      'Support for D-PHY and C-PHY',
      'Video and Command modes',
      'Multi-lane support',
      'Coverage-driven verification',
      'Error injection',
      'Protocol checking'
    ],
    applications: [
      'Display Controller Verification',
      'Mobile SoC Verification',
      'Automotive Display Systems',
      'AR/VR Display Verification'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'mipi-csi-vip': {
    slug: 'mipi-csi-vip',
    category: 'verification-ip',
    heroTitle: 'MIPI CSI VIP',
    heroDescription: 'MIPI Camera Serial Interface verification IP for camera and imaging subsystem verification.',
    title: 'MIPI CSI VIP',
    overview: 'MIPI CSI (Camera Serial Interface) Verification IP provides comprehensive verification of camera interfaces in imaging and vision SoC designs.',
    features: [
      'Compliant with MIPI CSI Specification',
      'Support for D-PHY and C-PHY',
      'Virtual channel support',
      'Multi-lane support',
      'Coverage-driven verification',
      'Error injection',
      'Protocol checking'
    ],
    applications: [
      'Camera Controller Verification',
      'Mobile SoC Verification',
      'Automotive Vision Systems',
      'Industrial Imaging',
      'AI Vision Systems'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'axi-vip': {
    slug: 'axi-vip',
    category: 'verification-ip',
    heroTitle: 'AXI VIP',
    heroDescription: 'AXI4 protocol verification IP for comprehensive SoC interconnect verification.',
    title: 'AXI VIP',
    overview: 'AXI (Advanced eXtensible Interface) Verification IP provides comprehensive verification of AXI4 protocol interfaces in SoC and FPGA designs.',
    features: [
      'Compliant with AMBA AXI4 Specification',
      'Support for AXI4, AXI4-Lite, and AXI4-Stream',
      'Coverage-driven verification',
      'Protocol checking',
      'Performance monitoring',
      'Error injection'
    ],
    applications: [
      'SoC Verification',
      'Interconnect Verification',
      'Memory Controller Verification',
      'IP Qualification'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'ahb-lite-master-slave-vip': {
    slug: 'ahb-lite-master-slave-vip',
    category: 'verification-ip',
    heroTitle: 'AHB LITE MASTER/SLAVE VIP',
    heroDescription: 'AHB-Lite verification IP for low-power SoC bus protocol verification.',
    title: 'AHB Lite Master/Slave VIP',
    overview: 'AHB-Lite Verification IP provides comprehensive verification of AHB-Lite protocol interfaces in low-power SoC and microcontroller designs.',
    features: [
      'Compliant with AMBA AHB-Lite Specification',
      'Support for master and slave verification',
      'Configurable address and data widths',
      'Protocol checking',
      'Coverage-driven verification',
      'Transaction logging'
    ],
    applications: [
      'SoC Verification',
      'Microcontroller Verification',
      'Peripheral Verification',
      'IP Qualification'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'aphy-vip': {
    slug: 'aphy-vip',
    category: 'verification-ip',
    heroTitle: 'A-PHY VIP',
    heroDescription: 'Automotive A-PHY verification IP for high-speed automotive communication verification.',
    title: 'A-PHY VIP',
    overview: 'A-PHY Verification IP provides comprehensive verification of automotive A-PHY interfaces in automotive and ADAS designs.',
    features: [
      'Compliant with MIPI A-PHY Specification',
      'Support for automotive communication',
      'High-speed data verification',
      'Coverage-driven verification',
      'Error injection',
      'Protocol checking'
    ],
    applications: [
      'Automotive SoC Verification',
      'ADAS System Verification',
      'Sensor Interface Verification',
      'Autonomous Driving Systems'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'cpri-verification-ip': {
    slug: 'cpri-verification-ip',
    category: 'verification-ip',
    heroTitle: 'CPRI VERIFICATION IP',
    heroDescription: 'Common Public Radio Interface verification IP for telecom and front-haul applications.',
    title: 'CPRI Verification IP',
    overview: 'CPRI (Common Public Radio Interface) Verification IP provides comprehensive verification of CPRI interfaces in telecom and communications systems.',
    features: [
      'Compliant with CPRI Specification',
      'Support for front-haul applications',
      'High-speed serial verification',
      'Coverage-driven verification',
      'Error injection',
      'Protocol checking'
    ],
    applications: [
      'Telecom System Verification',
      'Front-haul Interface Verification',
      'Communications SoC Verification',
      '5G Infrastructure'
    ],
    deliverables: [
      'UVM Environment',
      'VIP Datasheet',
      'User Guide',
      'Verification Test Plan',
      'Coverage Model',
      'Sequence Library'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'jesd204b-uvm-vip': {
    slug: 'jesd204b-uvm-vip',
    category: 'verification-ip',
    heroTitle: 'JESD204B UVM VIP',
    heroDescription: 'JESD204B verification IP for high-speed ADC/DAC interface verification.',
    title: 'JESD204B UVM VIP',
    overview: 'MAXVY\'s provides configurable JESD204B TX/RX verification IP. JESD204B is a Serial Interface for Data Converters which are defined by JEDEC SOLID STATE TECHNOLOGY ASSOCIATION. Our VIP covers Transport and Data link layer functionality of JESD204B. MAXVY\'s VIP provides more flexible configuration to user to select their needs like lane,device configuration, data width.',
    features: [
      'ADC - TX/RX DAC - TX/RX',
      'Support up to 12.5 Gbps data rate',
      'Support configurable device classification',
      'Support configurable subclass 0/1/2',
      'Support Frame alignment monitor and correction',
      'Support lane synchronization',
      'Support Lane alignment monitor and correction',
      'Support Link configuration',
      'Support Link re-initialization',
      'Support Deterministic Latency',
      'Support 8B/10B encode/decode',
      'Support Application specific control interface (user specific)'
    ],
    advantages: [
      'Configurable Option like lane,frame,TX/RX',
      'Supports both multi device configuration',
      'Simple steps to integrate into customer environment'
    ],
    applications: [
      'Wireless Infrastructure Transceiver',
      'Software defined Radios',
      'Medical Imaging Systems',
      'Radar and Secure Communications'
    ],
    deliverables: [
      'Basic Test Suite',
      'Random Testbench Environment',
      'Encrypted Source Code of VIP',
      'VIP user guide'
    ],
    videos: [],
    blockDiagram: '/images/jesd204b-uvm-vip.jpg',
    downloadFiles: []
  },

  'lpc-controller-vip': {
    slug: 'lpc-controller-vip',
    category: 'verification-ip',
    heroTitle: 'LPC CONTROLLER VIP',
    heroDescription: 'Low Pin Count controller verification IP for legacy bus protocol verification.',
    title: 'Low Pin Count (LPC) controller verification IP',
    overview: 'The Low Pin Count (LPC) interface is a low bandwidth bus with up to 33 MHz performance. It is used to connect peripherals around the CPU and to replace the Industry Standard Architecture (ISA) bus which can only run up to 8 MHz. The primary benefit is that signals can be transmitted across a minimum of seven traces for an LPC bus versus 52 traces for an ISA bus. This relieves the pressure of routing on the often-congested motherboard and at the same time improves the overall system integrity.',
    features: [
      'LPC Interface Increase the memory space from 16MB on the X-bus to 4GB to allow BIOS sizes much greater than 1MB, and other memory devices outside of the traditional 16MB range.',
      'Synchronous design. Much of the challenge of an X-bus design is meeting the different, and in some cases conflicting, ISA timings. Make the timings synchronous to a reference well known to component designers, such as PCI.',
      'Perform the same cycle types as the X-bus: Memory, I/O, DMA, and Bus Master.',
      'Reduce the cost of traditional X-bus devices.',
      'Support desktop and mobile implementations.',
      'Ability to support a variable number of wait-states.',
      'Supports following operations: Memory Read/Write, I/O Read/Write, DMA Read/Write, Bus Master Memory Read/Write, Bus Master I/O Read/Write, Firmware Memory Read/Write'
    ],
    applications: [
      'Desktop Systems',
      'Mobile Systems',
      'Embedded Systems',
      'Legacy Bus Replacement'
    ],
    deliverables: [
      'LPC VIP – UVM Environment',
      'Userguide',
      'Regression Script'
    ],
    videos: [],
    blockDiagram: '/images/lpc.jpg',
    downloadFiles: []
  },

  // ==================== MAXVY IP INTEGR. W/ VEGA PROCESSOR ====================
  'maxvy-i3c-host-ip-vega': {
    slug: 'maxvy-i3c-host-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY I3C HOST IP',
    heroDescription: 'Powering Next-Gen Sensor Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI I3C Integrated with VEGA processor',
    overview: 'MAXVY Technologies brings advanced connectivity to embedded systems with the successful integration of MIPI I3C Host IP into the VEGA SoC (AT1051). This solution bridges next‑generation I3C protocols and legacy I2C devices — enabling faster data transfer, reduced latency, and scalable system design. It is validated on the Arty A7 100T FPGA platform with real‑time I2C/I3C sensors.',
    features: [
      'Fully compliant with MIPI I3C Basic v1.2 specification',
      'Supports Host, Secondary Controller, and Target roles',
      'Backward compatible with I2C devices for mixed I3C/I2C bus operation',
      'Supports dynamic and static addressing for I3C and I2C devices',
      '2-wire interface up to 12.5 MHz with push-pull signaling',
      'Supports Single Data Rate (SDR) messaging',
      'Real-time event-driven communication with In-Band Interrupts (IBI)',
      'Supports standard CCC commands for device management',
      'Optimized for reduced power consumption',
      'Designed to support multiple devices on a single bus'
    ],
    applications: [
      'IoT & Smart Devices — efficient multi-sensor communication with reduced latency',
      'Automotive Electronics — reliable high-speed communication for vehicle systems',
      'Consumer Electronics — compact, low-power comms for mobile and wearable devices',
      'Industrial Systems — robust data exchange for automation and control'
    ],
    deliverables: [
      'MIPI I3C Host Controller IP',
      'Software tool for I3C validation',
      'FPGA bitfile and test environment',
      'Architecture documentation',
      'Integration and user guides'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-i3c-target-ip-vega': {
    slug: 'maxvy-i3c-target-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY I3C TARGET IP',
    heroDescription: 'Powering Next-Gen Sensor Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI I3C Host/Target Controller integrated with VEGA processor',
    overview: 'MAXVY Technologies delivers a high-performance MIPI I3C Host/Target Controller integrated with the VEGA SoC (AT1051), enabling scalable and efficient communication for modern embedded systems. Fully compliant with the latest MIPI I3C Basic v1.1.1 specification, the controller provides high bandwidth, low latency, and reduced pin count, making it ideal for connecting multiple sensors and peripherals on a single bus.',
    features: [
      'Fully compliant with MIPI I3C Basic v1.2 specification',
      'Supports both Host and Target modes',
      'Fully compatible with legacy I2C devices',
      'Supports dynamic and static addressing',
      '2-wire interface up to 12.5 MHz (push-pull)',
      'Supports Single Data Rate (SDR) messaging',
      'In-Band Interrupts (IBI) for event-driven communication',
      'Supports broadcast and direct CCC commands',
      'Hot-Join Support allows dynamic device addition to the bus',
      'Optimized for efficient and compact designs',
      'AHB interface for seamless SoC integration'
    ],
    applications: [
      'IoT & Smart Devices - Efficient multi-sensor communication with reduced wiring',
      'Automotive Systems — High-speed communication for advanced driver systems',
      'Consumer Electronics — Compact and power-efficient device connectivity',
      'Industrial Automation — Reliable real-time communication across multiple devices',
      'AI & Edge Systems - Fast sensor data acquisition for intelligent processing'
    ],
    deliverables: [
      'MIPI I3C Host/Target Controller RTL IP',
      'Software drivers and APIs',
      'FPGA bitfile for validation',
      'Testbench and verification environment',
      'Integration and user guides',
      'Example applications and reference designs'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-xspi-host-ip-vega': {
    slug: 'maxvy-xspi-host-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY xSPI HOST IP',
    heroDescription: 'Powering High-Speed Memory Connectivity with VEGA processor integration.',
    title: 'MAXVY XSPI Host Controller Integrated with VEGA Processor',
    overview: 'MAXVY Technologies brings high-performance memory and peripheral connectivity to embedded systems with the integration of its XSPI (eXpanded Serial Peripheral Interface) Host Controller into the VEGA SoC (AT1051). The MAXVY XSPI Host, compliant with JEDEC JESD251 standard, is designed to deliver high data bandwidth with minimal signal count, making it ideal for next-generation embedded and computing applications.',
    features: [
      'Compliant with JEDEC JESD251 (xSPI) Version 1.0',
      'Single master supporting multiple slave devices per interface',
      'Supports SDR (Single Data Rate) and DDR (Double Data Rate)',
      'Data rates up to 400 MT/s (200 MHz clock)',
      'Source Synchronous Clocking ensures reliable high-speed data transfer',
      'Low Pin Count Interface optimized for reduced signal complexity',
      'Supports up to 8 IO lines, scalable based on system needs',
      'Supports NOR Flash, NAND Flash, FRAM, nvSRAM',
      'Compatible with SRAM, PSRAM, DRAM',
      'Profile 1.0 & 2.0 commands for flexible device control',
      'Deep Power Down (DPD) for energy-efficient designs',
      'Interfaces with FPGAs and register-mapped I/O devices'
    ],
    applications: [
      'Memory‑Intensive Systems — High‑speed interfacing with NOR/NAND Flash and advanced memory devices',
      'IoT & Embedded Systems — Efficient communication with sensors and peripheral devices',
      'Automotive Electronics — Reliable, high‑bandwidth communication for real‑time processing',
      'Consumer Electronics — Optimized performance for compact and high‑speed devices',
      'Industrial Automation — Robust connectivity for control systems and data acquisition'
    ],
    deliverables: [
      'XSPI Host Controller RTL IP',
      'Software drivers and configuration support',
      'FPGA bitfile for validation',
      'Testbench and verification environment',
      'Integration documentation and user guide'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-dsi2-transmitter-ip-vega': {
    slug: 'maxvy-dsi2-transmitter-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY DSI-2 TRANSMITTER IP',
    heroDescription: 'Powering High-Speed Sensor Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI DSI-2 Tx Integrated with VEGA Processor',
    overview: 'MAXVY Technologies offers a high-performance MIPI DSI-2 Transmitter (TX) Controller integrated with the VEGA SoC (AT1051), enabling seamless high-speed data transmission from the processor to display devices. Compliant with MIPI DSI-2 v2.0, the controller provides a robust, scalable, low-power, and cost-effective interface for modern display systems.',
    features: [
      'Compliant with MIPI DSI-2 v2.0',
      'Supports C-PHY 2.0 and D-PHY (v1.2 / v2.0 / v3.0)',
      'Configurable C-PHY or D-PHY (one active at a time)',
      'Supports DBI-2 and DPI-2 interfaces',
      'Supports Command Mode and Video Mode',
      'Multi-lane data distribution across N lanes',
      'Connects multiple DSI receivers using sub-links',
      'Pixel-to-byte conversion and packet formatting',
      'De-skew, symbol slip detection, sync insertion',
      'Supports scrambling/descrambling and filler byte insertion',
      'Supports HS and Escape modes',
      'Supports AHB-Lite / APB / AXI interfaces'
    ],
    applications: [
      'Consumer Electronics — Smartphones, tablets, and display systems',
      'Automotive Displays — Infotainment systems, dashboards, and HUDs',
      'Embedded Systems — Industrial displays and control panels',
      'IoT Devices — Smart display-enabled edge devices',
      'AR/VR & Multimedia — High-speed visual processing and rendering'
    ],
    deliverables: [
      'DSI-2 TX Controller RTL IP',
      'PHY integration support (C-PHY / D-PHY)',
      'Software drivers and APIs',
      'FPGA bitfile for validation',
      'Testbench and verification environment',
      'Integration and user documentation',
      'Example applications and reference designs'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-csi2-receiver-ip-vega': {
    slug: 'maxvy-csi2-receiver-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY CSI-2 RECEIVER IP',
    heroDescription: 'Powering High-Speed Memory Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI CSI-2 Rx Integrated with VEGA Processor',
    overview: 'MAXVY Technologies offers a high-performance MIPI CSI-2 RX Controller integrated with the VEGA SoC (AT1051), designed to enable seamless high-speed data transfer from camera sensors to embedded processing systems. Compliant with MIPI CSI-2 v3.0, the controller delivers a robust, scalable, and low-power interface for a wide range of imaging applications.',
    features: [
      'MIPI CSI-2 v3.0 compliant',
      'C-PHY 2.0 and D-PHY 2.5 (configurable)',
      'C-PHY / D-PHY / A-PHY / M-PHY (one active at a time)',
      'AHB Lite / APB / AXI interface',
      'Lane merging and packet consolidation',
      '16 (D-PHY) / 32 (C-PHY) Virtual channels',
      'YUV, RGB, RAW, and generic pixel formats',
      'I2C and I3C (SDR/DDR) CCI Interface',
      'Error detection, scrambling/descrambling',
      'Byte-to-pixel conversion (LLP layer)',
      'De-skew (D-PHY) and sync word detection (C-PHY)'
    ],
    applications: [
      'Embedded Vision Systems: High-speed image capture and processing',
      'Automotive Cameras: ADAS, surround view, driver monitoring',
      'Consumer Electronics: Smart cameras, AR/VR, mobile imaging',
      'IoT & Smart Devices: Vision-enabled edge devices',
      'Industrial Inspection: Real-time image processing and automation'
    ],
    deliverables: [
      'CSI-2 RX Controller RTL IP',
      'PHY Integration Support (C-PHY/D-PHY)',
      'Software Drivers and APIs',
      'FPGA Bitfile for Validation',
      'Testbench and Verification Environment',
      'Integration and User Documentation',
      'Example Applications and Reference Designs'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-uart-ip-vega': {
    slug: 'maxvy-uart-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY UART IP',
    heroDescription: 'Enabling Reliable Serial Communication for Embedded Systems with VEGA processor.',
    title: 'MAXVY UART Integrated with VEGA Processor',
    overview: 'MAXVY Technologies delivers a robust and efficient UART Controller solution integrated with the VEGA SoC (AT1051), designed to enable seamless communication between processors and external serial devices. This architecture acts as a high-performance bridge between parallel processor buses and asynchronous serial interfaces, ensuring reliable data transfer with minimal CPU intervention.',
    features: [
      'High-Performance Architecture - Efficient bridge between parallel bus and serial communication',
      'Integrated Read and Write FIFOs for smooth data flow',
      'Supports AXI4-Lite, APB, AHB4-Lite, and WSB interfaces',
      'UART TX/RX Control - Automatic frame generation and decoding (start, stop, parity bits)',
      'Configurable baud rate derived from system clock',
      'Interrupt Support for efficient handling of communication events',
      'Data Integrity - Reliable transmission with error handling mechanisms',
      'Low CPU Overhead - Hardware-driven communication reduces processor load',
      'Scalable Integration - Easily integrates into complex SoC architectures'
    ],
    applications: [
      'IoT Devices: Reliable communication with sensors and modules',
      'Industrial Systems: Stable serial communication for control and monitoring',
      'Debug & Console Interfaces: UART-based debugging and system logging',
      'Automotive Electronics: Communication between ECUs and peripherals',
      'Consumer Electronics: Low-cost, efficient serial communication interface'
    ],
    deliverables: [
      'UART Controller RTL IP',
      'Software drivers and configuration support',
      'FPGA bitfile for validation',
      'Testbench and verification environment',
      'Integration and user documentation',
      'Example applications and reference designs'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-gpio-ip-vega': {
    slug: 'maxvy-gpio-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY GPIO IP',
    heroDescription: 'Enabling Intelligent Control and Real-Time Interaction with VEGA processor.',
    title: 'MAXVY GPIO Integrated with VEGA Processor',
    overview: 'MAXVY Technologies offers a flexible and efficient GPIO (General Purpose Input/Output) Controller integrated with the VEGA SoC (AT1051), enabling seamless interaction between the processor and external hardware components. The GPIO IP provides a simple yet powerful interface for monitoring external signals and controlling digital outputs through memory-mapped registers.',
    features: [
      'Supports 1 to 32 GPIO signals per channel',
      'Each pin individually configurable as input or output',
      'Simple memory-mapped interface for read/write operations',
      'Optional interrupt generation on input events',
      'Independent direction control using tri-state registers',
      'User-defined output states after reset',
      'Optimized for low FPGA resource utilization',
      'Easily adaptable for different system requirements'
    ],
    applications: [
      'IoT Devices: Interface with sensors, switches, and actuators',
      'Industrial Automation: Control and monitor external equipment in real-time',
      'Automotive Systems: Handle digital signals from control units and peripherals',
      'Consumer Electronics: User inputs, LEDs, and peripheral control',
      'Embedded Prototyping: Flexible IO control for FPGA-based development'
    ],
    deliverables: [
      'GPIO Controller RTL IP',
      'Software drivers and APIs',
      'FPGA bitfile for validation',
      'Testbench and verification environment',
      'Integration and user documentation',
      'Example applications and reference designs'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'maxvy-pwm-ip-vega': {
    slug: 'maxvy-pwm-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY PWM IP',
    heroDescription: 'Efficient Pulse Width Modulation for Embedded Control Systems with VEGA processor.',
    title: 'MAXVY PWM Integrated with VEGA processor',
    overview: 'MAXVY Technologies provides a high-performance PWM Controller IP integrated with the VEGA SoC (AT1051), designed to generate precise and configurable pulse signals for controlling a wide range of embedded peripherals. This architecture enables seamless interaction between the processor\'s parallel bus and time-critical PWM signal generation.',
    features: [
      'High-Precision PWM Generation - Accurate duty cycle and frequency control',
      'Hardware-Based Operation minimizes CPU intervention',
      'Fine control over output waveform with configurable duty cycle',
      'Supports multiple independent PWM outputs',
      'Programmable Period for flexible timing configuration',
      'Interrupt Support for event-based notifications for control',
      'Efficient hardware-driven design for Low Power Operation',
      'Supports AXI4-Lite, APB, AHB4-Lite, WSB interfaces',
      'Easily fits into complex SoC designs'
    ],
    applications: [
      'Motor Control Systems: Speed and direction control using PWM signals',
      'LED Dimming: Brightness control in lighting systems',
      'Power Electronics: Switching control in DC-DC converters and inverters',
      'Embedded Automation: Actuator and servo control',
      'Consumer Electronics: Efficient signal modulation for devices'
    ],
    deliverables: [
      'PWM Controller RTL IP',
      'Software drivers and APIs',
      'FPGA bitfile for validation',
      'Testbench and Verification Environment',
      'Integration and User Documentation',
      'Example Applications and Reference Designs'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  // ==================== OTHER RTL IP ====================
  'ucie-controller-ip': {
    slug: 'ucie-controller-ip',
    category: 'other-rtl-ip',
    heroTitle: 'UCIe CONTROLLER IP',
    heroDescription: 'High-performance Universal Chiplet Interconnect Express controller IP for die-to-die communication.',
    title: 'MAXVY UCIe Controller IP',
    overview: 'MAXVY\'s UCIe IP solution includes D2D Adapter layer which supports streaming/PCIe/CXL/Raw flitformats, supports both standard and advanced mainband links and sideband links.',
    features: [
      'ARB/MUX',
      'CRC Computation',
      'Link State Management',
      'Sideband Link training and Parameter Negotiation',
      'Single/Multiple PHY link',
      'Flit Retry',
      'Flow Control'
    ],
    applications: [
      'ML Compute Accelerator',
      'High performance compute Accelerator',
      'Automative Compute Accelerator',
      'Graphics Compute Accelerator',
      'Network Data Processing Accelerator',
      'Crypto Compute Accelerator'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'Basic Testsuite'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'avs-bus-host-ip': {
    slug: 'avs-bus-host-ip',
    category: 'other-rtl-ip',
    heroTitle: 'AVS BUS HOST IP',
    heroDescription: 'Adaptive Voltage Scaling bus host controller for dynamic power management.',
    title: 'MAXVY Adaptive Voltage Scaling (AVS) Bus Host Controller IP',
    overview: 'The MAXVY\'s AVS Bus Host Controller IP is a highly configurable solution designed to enable efficient, high-speed communication between the SoC processor subsystem and external voltage regulators through the industry-standard AVS Bus protocol. Fully compliant with the AVS Bus specification, the IP plays a critical role in Dynamic Voltage and Frequency Scaling (DVFS) applications, allowing software-controlled voltage adjustments to optimize power consumption and system performance in real time.',
    features: [
      'Fully Compliant with AVS Bus protocol specification',
      'Processor Interface supporting AXI4-Lite, APB, AHB-Lite, Wishbone (WSB)',
      'Register-based configuration and control interface',
      'Supports both 2-wire and 3-wire AVS Bus communication modes',
      'Dedicated Synchronization Module for clock-domain crossing',
      'Programmable AVS Bus Clock Generator',
      'AVS Bus Frame Generator for command transmission',
      'Response Decoder for target status and acknowledgment processing',
      'Integrated CRC generation and verification engine',
      'Support for Dynamic Voltage and Frequency Scaling (DVFS)',
      'Configurable operating parameters for application-specific requirements'
    ],
    applications: [
      'Dynamic Voltage and Frequency Scaling (DVFS)',
      'Adaptive Voltage Scaling (AVS)',
      'Processor Core Voltage Management',
      'Power Optimization and Energy Efficiency',
      'Thermal Management',
      'Real-Time Voltage Regulation',
      'Intelligent Power Delivery Control'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/avs_bus_host_ip.png',
    downloadFiles: []
  },

  'avs-bus-target-ip': {
    slug: 'avs-bus-target-ip',
    category: 'other-rtl-ip',
    heroTitle: 'AVS BUS TARGET IP',
    heroDescription: 'Adaptive Voltage Scaling bus target IP for power management device integration.',
    title: 'MAXVY Adaptive Voltage Scaling (AVS) Bus Target IP',
    overview: 'The MAXVY\'s AVS Bus Slave IP is a highly configurable IP that provides full AVS Bus slave functionality compliant with the AVS Bus specification. The IP enables seamless communication between an AVS Bus Master, such as a processor, FPGA, or SoC, and AVS Bus-compliant target devices used in power management applications.',
    features: [
      'Full AVS Bus Slave (Target) functionality',
      'Supports both 2-wire and 3-wire AVS Bus interfaces',
      'Optional Processor Interface with AXI4-Lite, APB, AHB-Lite, Wishbone, or custom interface',
      'Synchronization module for clock-domain crossing',
      'Command Decoder for AVS Bus command processing',
      'Response Generator for acknowledgment and status frame generation',
      'Integrated CRC Checker for error detection and frame validation',
      'Supports slave status response frames',
      'Positive-edge clocked architecture'
    ],
    applications: [
      'AVS Bus-Compliant Voltage Regulator Control',
      'Dynamic Voltage Scaling (DVS)',
      'Dynamic Voltage and Frequency Scaling (DVFS)',
      'Processor Core Voltage Management',
      'FPGA Core Voltage Control',
      'Power Supply Monitoring and Status Reporting',
      'Fault Detection and Protection Reporting',
      'Intelligent Power Delivery Systems',
      'Adaptive Power Management Solutions'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Encrypted UVM Verification Environment',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/avs_bus_target_ip.png',
    downloadFiles: []
  },

  'gpio-controller-ip': {
    slug: 'gpio-controller-ip',
    category: 'other-rtl-ip',
    heroTitle: 'GPIO CONTROLLER IP',
    heroDescription: 'General Purpose Input/Output controller IP for flexible embedded system I/O management.',
    title: 'MAXVY GPIO Controller IP',
    overview: 'The MAXVY GPIO (General Purpose Input/Output) Controller IP is a highly configurable and scalable peripheral designed to enable seamless communication between processors and external hardware devices. The IP provides a flexible interface for monitoring digital input signals and controlling digital output signals through memory-mapped register architecture.',
    features: [
      'Supports Configurable GPIO width from 1 to 32 signals',
      'Independent input/output configuration for each GPIO',
      'Memory-mapped register interface for simple software control',
      'Dynamic software-controlled GPIO operation',
      'Supports mixed input and output configurations within a single GPIO bank',
      'Interrupt generation support for GPIO input events',
      'Per-pin interrupt enable and status indication',
      'Write-one-to-clear interrupt status registers',
      'Low FPGA resource utilization',
      'Scalable architecture for FPGA and SoC designs',
      'Supports multiple host interfaces'
    ],
    applications: [
      'Embedded Control Systems',
      'Industrial Automation',
      'Sensor Monitoring Systems',
      'Human Machine Interfaces (HMI)',
      'LED and Display Control',
      'Communication Equipment',
      'Test and Measurement Systems',
      'IoT Devices'
    ],
    deliverables: [
      'Verilog Source code',
      'User Guide',
      'IP Integration Guide',
      'Simulation Script',
      'Synthesis Script',
      'Basic Testsuite',
      'Firmware code'
    ],
    videos: [],
    blockDiagram: '/images/gpio_block_diagram.png',
    downloadFiles: []
  },

  // ==================== RISC-V SOLUTION ====================
  'riscv-instruction-set': {
    slug: 'riscv-instruction-set',
    category: 'riscv',
    heroTitle: 'RISC V INSTRUCTION SET',
    heroDescription: 'Complete RISC-V RV32I base instruction set for processor development.',
    title: 'RISC V RV32I - BASE INSTRUCTION SET',
    overview: 'RISC-V (pronounced "risk-five") is a free and open ISA enabling a new era of processor innovation through open standard collaboration. The RISC-V ISA delivers a new level of free, extensible software and hardware freedom on architecture.',
    features: [
      'ADD - Addition',
      'SUB - Subtraction',
      'SLL – Logical Left Shift',
      'SLT – Set Less Than',
      'SLTU – Set Less Than Unsigned',
      'XOR – XOR operation',
      'SRL – Logical Right Shift',
      'SRA – Arithmetic Right Shift',
      'OR – OR operation',
      'AND – AND operation'
    ],
    applications: [
      'Processor Development',
      'Academic Research',
      'Custom Accelerator Design',
      'Embedded Systems'
    ],
    deliverables: [
      'R-FORMAT INSTRUCTION',
      'Instruction Set Documentation',
      'Reference Model'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'riscv-core-development': {
    slug: 'riscv-core-development',
    category: 'riscv',
    heroTitle: 'RISC V CORE DEVELOPMENT',
    heroDescription: 'Complete RISC-V processor core development solutions.',
    title: 'RISC V - CORE DEVELOPMENT',
    overview: 'RISC-V (pronounced "risk-five") is a free and open ISA enabling a new era of processor innovation through open standard collaboration. Founded in 2015, the RISC-V ISA delivers a new level of free, extensible software and hardware freedom on architecture, paving the way for the next 50 years of computing design and innovation.',
    features: [
      'A completely open ISA that is freely available to academia and industry',
      'A real ISA suitable for direct native hardware implementation',
      'An ISA that avoids over-architecting for a particular micro-architecture style',
      'An ISA separated into a small base integer ISA and optional standard extensions',
      'Support for the revised 2008 IEEE-754 floating-point standard',
      'Both 32-bit and 64-bit address space variants',
      'Optional variable-length instructions',
      'A fully virtualizable ISA to ease hypervisor development',
      'An ISA that simplifies experiments with new supervisor-level and hypervisor-level ISA design'
    ],
    applications: [
      'Processor Design',
      'System-on-Chip Development',
      'Custom Accelerator Design',
      'Academic Research',
      'Commercial Product Development'
    ],
    deliverables: [
      'RV32I - Immediate',
      'RV32IM - Immediate',
      'RV32IMF - Immediate',
      'RV32IMFD - Under Development',
      'RV32IMFA - Immediate',
      'RV64I - On Demand',
      'RV64IM - On Demand',
      'RV64IMFA - On Demand',
      'RV64IMF - On Demand',
      'RV64IMFD - On Demand'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  'riscv-reference-model': {
    slug: 'riscv-reference-model',
    category: 'riscv',
    heroTitle: 'RISC V REFERENCE MODEL',
    heroDescription: 'Complete RISC-V reference model for processor verification and development.',
    title: 'RISC V - REFERENCE MODEL',
    overview: 'The RISC-V Reference Model provides a complete software and hardware reference implementation for RISC-V processor development and verification.',
    features: [
      'Delivers a new level of software and hardware freedom on architecture in an open extensible way',
      'Open ISA delivers easier support from a broad range of operating systems, software vendors and tool developers',
      'The open source of hardware, RISC-V does not rely on a single supplier',
      'No other ISA is architected like the RISC-V ISA, allowing for user extensibility of the architecture'
    ],
    advantages: [
      'RISC architecture is used in high-end applications such as video processing, telecommunications and image processing',
      'Used in MICROPROCESSORS and MICROCONTROLLERS'
    ],
    applications: [
      'Video Processing',
      'Telecommunications',
      'Image Processing',
      'Microprocessors',
      'Microcontrollers'
    ],
    deliverables: [
      'System Verilog - RV32I, RV32IM, RV32IMF, RV32IMFD, RV32IMFA',
      'SystemC - RV32I, RV32IM, RV32IMF, RV32IMFD, RV32IMFA',
      'Python - RV32I, RV32IM, RV32IMF, RV32IMFD, RV32IMFA',
      'C, C++ Model - RV32I, RV32IM, RV32IMF, RV32IMFD, RV32IMFA'
    ],
    videos: [],
    blockDiagram: null,
    downloadFiles: []
  },

  // ==================== EMBEDDED SYSTEM ====================
  'cloud-based-qr-generator': {
    slug: 'cloud-based-qr-generator',
    category: 'embedded',
    heroTitle: 'CLOUD BASED DYNAMIC QR CODE GENERATOR',
    heroDescription: 'RISC-V based embedded application for real-time dynamic QR code generation.',
    title: 'Cloud Based Dynamic QR code generator',
    overview: 'A Risc-v core based Embedded application, using Sifive\'s Hifive1 micro-controller and Esp\'s NodeMCU which is able to produce a real time QR code, based on the current data fetched from cloud. It helps in improving the functionalities of QR related applications.',
    features: [
      'Risc-V core',
      'Dynamic generation of QR code',
      'High Performance'
    ],
    prerequisites: [
      'Arduino IDE version 1.8.7 and above',
      'MySQL database'
    ],
    applications: [
      'Authorization',
      'Attendance',
      'E-Commerce',
      'For Security',
      'Validation'
    ],
    deliverables: [
      'Source Code',
      'Circuit Diagram',
      'Block Diagram',
      'User Guide'
    ],
    videos: [],
    blockDiagram: '/images/QR_generator_block_diagram.jpg',
    downloadFiles: []
  },

  // ==================== MAXVY IP IN FPGA ====================
  'maxvy-i3c-host-software': {
    slug: 'maxvy-i3c-host-software',
    category: 'maxvy-fpga',
    heroTitle: 'MAXVY I3C HOST CONTROLLER SOFTWARE',
    heroDescription: 'Software tool for verifying MIPI I3C features on FPGA platforms.',
    title: 'MAXVY I3C Host Controller Software',
    overview: 'MAXVY I3C Host Controller Software helps to verify the MIPI I3C features as per Version 1.11 Specification standards.',
    features: [
      'Supports all MIPI I3C Version 1.11 specification standards',
      'Test suite environment works on SPD5 hub as target controller'
    ],
    dependencies: [
      'Artix-7 CMOD board for I3C Host controller',
      'JEDEC SPD5 hub as target controller'
    ],
    deliverables: [
      'I3C Host controller IP',
      'Test suite (CMOD file)',
      'Document',
      'I3C Host bit file flash in Artix-7 CMOD FEGA Board',
      'Maxvy I3C Host controller software tool guide',
      'Architecture Diagram'
    ],
    applications: [
      'FPGA Verification',
      'I3C Protocol Testing',
      'Embedded System Development'
    ],
    videos: [],
    blockDiagram: '/images/I3C_HOST_TARGET_SETUP_BOARD.jpg',
    downloadFiles: []
  }
};

// ==================== HELPER FUNCTIONS ====================

export const getProductBySlug = (slug) => {
  return productContent[slug] || null;
};

export const getProductsByCategory = (categoryId) => {
  const products = [];
  for (const key in productContent) {
    if (productContent[key].category === categoryId) {
      products.push({ slug: key, ...productContent[key] });
    }
  }
  return products;
};

export const findProduct = (category, slug) => {
  // First try to find by slug directly
  if (productContent[slug]) {
    return productContent[slug];
  }
  
  // If not found, search through all products
  for (const key in productContent) {
    if (productContent[key].slug === slug) {
      return productContent[key];
    }
  }
  
  return null;
};

// Default export for convenience
export default productContent;