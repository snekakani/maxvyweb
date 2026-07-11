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
    overview: 'JESD204B UVM Verification IP provides comprehensive verification of JESD204B interfaces in high-speed data conversion systems.',
    features: [
      'Compliant with JESD204B Specification',
      'Support for high-speed serial interfaces',
      'Multiple lane verification',
      'Coverage-driven verification',
      'Error injection',
      'Protocol checking'
    ],
    applications: [
      'ADC/DAC Interface Verification',
      'High-speed Data Conversion',
      'Test and Measurement',
      'Communications Systems'
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

  'lpc-controller-vip': {
    slug: 'lpc-controller-vip',
    category: 'verification-ip',
    heroTitle: 'LPC CONTROLLER VIP',
    heroDescription: 'Low Pin Count controller verification IP for legacy bus protocol verification.',
    title: 'LPC Controller VIP',
    overview: 'LPC (Low Pin Count) Controller Verification IP provides comprehensive verification of LPC interfaces in legacy and embedded systems.',
    features: [
      'Compliant with LPC Specification',
      'Support for master and slave verification',
      'Protocol checking',
      'Coverage-driven verification',
      'Transaction logging'
    ],
    applications: [
      'Embedded System Verification',
      'Legacy Bus Verification',
      'Peripheral Verification'
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
  }
};

// ==================== EXPORTS ====================

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

// Also export productContent as default or named export
export { productContent };

// Default export for convenience
export default productContent;