export const productContent = {
  // ==================== DDR5 SOLUTION ====================
  'spd5-hub-interface-ip': {
    slug: 'spd5-hub-interface-ip',
    category: 'ddr5',
    heroTitle: 'SPD5 HUB INTERFACE IP',
    heroDescription: 'Accelerating next-generation memory communication with secure and reliable SPD5 connectivity.',
    title: 'DDR5 Serial Presence Detect (SPD) Hub Interface',
    overview: 'The SPD5 Hub Function IP has been developed to interface I3C/I2C Host Bus and it allows an isolation of local devices like Temperature Sensor(TS), from master host bus. This SPD5 has Two wire serial interface like SCL, SDA.',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    downloadFiles: [],
    showMipiI3cFeatures: true,
    resourceDeliverables: [
      'Verilog Source Code.',
      'User Guide.',
      'IP Integration Guide.',
      'Run and Synthesis Script.',
      'Encrypted Verification Test-bench Environment.',
      'Basic Test-suite.'
    ]
  },

  'mipi-i3c-target-ip': {
    slug: 'mipi-i3c-target-ip',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C TARGET IP',
    heroDescription: 'Single-role MIPI I3C target controller with high-performance sensor interface capabilities.',
    title: 'MIPI-I3C Slave (SDR) RTL Design IP',
    badges: ['Silicon Proven', 'IP Proven'],
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
    downloadFiles: [],
    showMipiI3cTable: true,
    mipiI3cTableData: {
      headers: ['S.No', 'MIPI-I3C Features', 'Evaluation Version', 'Full Version'],
      rows: [
        ['1', 'Dynamic address assignment', 'YES', 'YES'],
        ['2', 'SDA Arbitration', 'YES', 'YES'],
        ['3', 'Inband Interrupt', 'NO', 'YES'],
        ['4', 'Hotjoin Request', 'NO', 'YES'],
        ['5', 'HDR Capable', 'NO', 'YES'],
        ['6', 'CCC Command Features', 'YES', 'YES'],
        ['7', 'Private READ and WRITE', 'YES', 'YES'],
        ['8', 'Data transfer with & without Broadcast', 'YES', 'YES'],
        ['9', 'Secondary Master Capable', 'NO', 'YES'],
        ['10', 'Legacy I2C Slave', 'YES', 'YES'],
        ['11', 'Processor Interface', 'AHB Lite', 'Custom Interface']
      ]
    }
  },

  'mipi-i3c-host-ip': {
    slug: 'mipi-i3c-host-ip',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C HOST IP',
    heroDescription: 'High-performance MIPI I3C host controller for multi-sensor systems and peripheral management.',
    title: 'MIPI-I3C Master (SDR) RTL Design IP',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    downloadFiles: [],
    showMipiI3cTable: true,
    mipiI3cTableData: {
      headers: ['S.No', 'MIPI-I3C Features', 'Evaluation Version', 'Full Version'],
      rows: [
        ['1', 'Dynamic address assignment', 'YES', 'YES'],
        ['2', 'SDA Arbitration', 'YES', 'YES'],
        ['3', 'Inband Interrupt', 'NO', 'YES'],
        ['4', 'Hotjoin Request', 'NO', 'YES'],
        ['5', 'HDR Capable', 'NO', 'YES'],
        ['6', 'CCC Command Features', 'YES', 'YES'],
        ['7', 'Private READ and WRITE', 'YES', 'YES'],
        ['8', 'Data transfer with & without Broadcast', 'YES', 'YES'],
        ['9', 'Secondary Master Capable', 'NO', 'YES'],
        ['10', 'Processor Interface', 'AHB Lite', 'Custom Interface']
      ]
    }
  },

  'mipi-i3c-basic-target-controller': {
    slug: 'mipi-i3c-basic-target-controller',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C BASIC TARGET CONTROLLER',
    heroDescription: 'Lightweight MIPI I3C basic target controller for legacy and low-power sensor integration.',
    title: 'MIPI I3C Basic Slave Controller',
    badges: ['IP Proven', 'Software IP'],
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
    downloadFiles: [],
    showMipiI3cTable: true,
    mipiI3cTableData: {
      headers: ['S.No', 'MIPI-I3C Features', 'Evaluation Version', 'Full Version'],
      rows: [
        ['1', 'Dynamic address assignment', 'YES', 'YES'],
        ['2', 'SDA Arbitration', 'YES', 'YES'],
        ['3', 'Inband Interrupt', 'YES', 'YES'],
        ['4', 'Hotjoin Request', 'YES', 'YES'],
        ['5', 'CCC Command Features', 'YES', 'YES'],
        ['6', 'Private READ and WRITE', 'YES', 'YES'],
        ['7', 'Data transfer with & without Broadcast', 'YES', 'YES'],
        ['8', 'Secondary Master Capable', 'NO', 'YES'],
        ['9', 'Legacy I2C Slave', 'YES', 'YES'],
        ['10', 'Processor Interface', 'AHB Lite', 'Custom Interface']
      ]
    }
  },

  'mipi-i3c-basic-host-controller': {
    slug: 'mipi-i3c-basic-host-controller',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C BASIC HOST CONTROLLER',
    heroDescription: 'Lightweight MIPI I3C basic host controller for simple sensor bus management.',
    title: 'MIPI I3C Basic Master Controller',
    badges: ['IP Proven', 'Software IP'],
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
    downloadFiles: [],
    showMipiI3cTable: true,
    mipiI3cTableData: {
      headers: ['S.No', 'MIPI-I3C Features', 'Evaluation Version', 'Full Version'],
      rows: [
        ['1', 'Dynamic address assignment', 'YES', 'YES'],
        ['2', 'SDA Arbitration', 'YES', 'YES'],
        ['3', 'Inband Interrupt', 'YES', 'YES'],
        ['4', 'Hotjoin Request', 'YES', 'YES'],
        ['5', 'CCC Command Features', 'YES', 'YES'],
        ['6', 'Private READ and WRITE', 'YES', 'YES'],
        ['7', 'Data transfer with & without Broadcast', 'YES', 'YES'],
        ['8', 'Secondary Master Capable', 'NO', 'YES'],
        ['9', 'Processor Interface', 'AHB Lite', 'Custom Interface']
      ]
    }
  },

  'mipi-i3c-host-riscv-subsystem': {
    slug: 'mipi-i3c-host-riscv-subsystem',
    category: 'mipi-i3c',
    heroTitle: 'MIPI I3C HOST RISC-V SUBSYSTEM',
    heroDescription: 'Complete MIPI I3C host subsystem with integrated RISC-V processor for autonomous sensor management.',
    title: 'MIPI I3C Master RISC-V based subsystem',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
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
    downloadFiles: [],
    fpgaBoardDetails: {
      title: 'FPGA Board details',
      items: [
        'Name of the board: Microsemi creative development board',
        'Family name: Smart fusion2',
        'Part number: M2S025-VF0256'
      ]
    },
    prerequisite: {
      title: 'Prerequisite',
      items: [
        'Hardware tool : Micrsoemi- Libero SOC 11.9',
        'Software tool: Soft console 6.0'
      ]
    },
    usageImage: '/images/risc_v_based_i3c/risc_v_based_i3c_useage_details.jpg',
    pinsUsedImage: '/images/risc_v_based_i3c/risc_v_based_i3c_pindetail.jpg',
    boardImage: '/images/risc_v_based_i3c/risc_v_based_i3c_board.jpg'
  },

  // ==================== I3C SUPPORT PROTOCOL IP ====================
  'spmi-host-controller': {
    slug: 'spmi-host-controller',
    category: 'i3c-support',
    heroTitle: 'SPMI HOST CONTROLLER',
    heroDescription: 'System Power Management Interface host controller for efficient power management communication.',
    title: 'SPMI Host Controller',
    badges: ['IP Proven', 'Software IP'],
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
    blockDiagram: '/images/spmi_host_block_diagram.png',
    downloadFiles: []
  },

  'spmi-target-controller': {
    slug: 'spmi-target-controller',
    category: 'i3c-support',
    heroTitle: 'SPMI TARGET CONTROLLER',
    heroDescription: 'System Power Management Interface target controller for PMIC and power management devices.',
    title: 'SPMI Target Controller',
    badges: ['IP Proven', 'Software IP'],
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
    blockDiagram: '/images/spmi_target_block_diagram.png',
    downloadFiles: []
  },

  'etsi-ssp-i3c-interface-ip': {
    slug: 'etsi-ssp-i3c-interface-ip',
    category: 'i3c-support',
    heroTitle: 'ETSI SSP I3C INTERFACE IP',
    heroDescription: 'ETSI Secure Service Provider I3C interface for secure sensor and peripheral communication.',
    title: 'ETSI SSP I3C Interface IP',
    badges: ['IP Proven', 'Software IP'],
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
    blockDiagram: '/images/etsi_ssp_i3c.png',
    downloadFiles: []
  },

  // ==================== VERIFICATION IP ====================
  'ucie-vip': {
    slug: 'ucie-vip',
    category: 'verification-ip',
    heroTitle: 'UCIE VIP',
    heroDescription: 'Universal Chiplet Interconnect Express verification IP for die-to-die communication verification.',
    title: 'UCIe VIP',
    badges: ['IP Proven', 'Software IP'],
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
    applications: [],
    applicationsTable: {
      headers: ['SL.NO', 'Application', 'DESCRIPTION'],
      rows: [
        [
          '1',
          'High Performance Computing (HPC)',
          'UCIe can be used to connect various chiplets that perform specialized functions, such as compute, memory, I/O, and AI acceleration, to create powerful and efficient HPC systems. UCIe can also enable 3D stacking of chiplets for higher bandwidth and density.'
        ],
        [
          '2',
          'Cloud Computing',
          'UCIe can be used to create heterogeneous and disaggregated cloud servers that can dynamically allocate resources according to the workload demand. UCIe can also support resource pooling and rack-scale designs with low latency and high performance.'
        ],
        [
          '3',
          'Mobile Devices',
          'UCIe can be used to create modular and customizable mobile SoCs that can optimize performance, power consumption, and functionality. UCIe can also support integration of different types of chiplets, such as CPU, GPU, memory, RF, and analog.'
        ],
        [
          '4',
          'Automotive Systems',
          'UCIe can be used to connect various compute blocks and application specific accelators chiplets for automotive applications.'
        ]
      ]
    },
    customerBenefits: {
      title: 'MAXVY customer Benifits :',
      items: [
        'VIP integration support.',
        'Customer specific sequences , Customer specific scoreboard.'
      ]
    },
    blockDiagram: '/images/product/uci_vip_block_diagram.png',
    deliverables: [
      'Basic Test Suite.',
      'Encrypted MAXVY UCIe VIP package.',
      'VIP integration guide, user guide.'
    ],
    videos: [],
    downloadFiles: []
  },

  'mipi-i3c-uvm-vip': {
    slug: 'mipi-i3c-uvm-vip',
    category: 'verification-ip',
    heroTitle: 'MIPI-I3C UVM VIP',
    heroDescription: 'MIPI I3C Universal Verification Methodology VIP for comprehensive I3C protocol verification.',
    title: 'MIPI-I3C UVM VIP',
    badges: ['IP Proven', 'Software IP'],
    overview: 'MIPI I3C UVM VIP provides a complete verification environment for I3C interfaces, enabling thorough functional verification of I3C host and target designs.',
    features: [
      'Device can configurable as Master/ Slave/ Secondary Master.',
      'Dynamic addressing.',
      'Secondary Master Capable.',
      'Broadcast and Direct Address support.',
      'Support Single Data Rate (SDR) Mode.',
      'Support High Data Rate (HDR) Mode.',
      'I2C legacy device support.',
      'Hot join.',
      'In-band interrupts.',
      'Mastership request.'
    ],
    advantages: [
      'Configurable Option like Master/Slave/SM.',
      'Supports both Dynamic and Static address.',
      'Simple steps to integrate into customer environment.'
    ],
    applications: [
      'Consumer electronics.',
      'Defense',
      'Aerospace',
      'Virtual Reality',
      'Augmented Reality',
      'Medical',
      'Biometrics (Finger prints, etc)',
      'Automotive Devices',
      'Sensor Devices'
    ],
    blockDiagram: '/images/mipi-i3c-uvm-vip.jpg',
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
    downloadFiles: []
  },

  'mipi-dsi-vip': {
    slug: 'mipi-dsi-vip',
    category: 'verification-ip',
    heroTitle: 'MIPI DSI VIP',
    heroDescription: 'MIPI Display Serial Interface verification IP for comprehensive display interface verification.',
    title: 'MIPI DSI VIP',
    badges: ['IP Proven', 'Software IP'],
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
      'DSI-2 is designed to support a wide range of display types, including:',
      'Smartphone and tablet displays',
      'Automotive displays (e.g., infotainment, instrument clusters)',
      'AR/VR headsets',
      'Industrial and medical displays'
    ],
    blockDiagram: '/images/product/dsi2_vip_blockdiagram.jpg',
    deliverables: [
      'Basic test-suite for reference',
      'basic testbench setup',
      'Encrypted source code of DSI-2 VIP',
      'User-guide for setup'
    ],
    videos: [],
    downloadFiles: []
  },

  'mipi-csi-vip': {
    slug: 'mipi-csi-vip',
    category: 'verification-ip',
    heroTitle: 'MIPI CSI VIP',
    heroDescription: 'MIPI Camera Serial Interface verification IP for camera and imaging subsystem verification.',
    title: 'MIPI CSI VIP',
    badges: ['IP Proven', 'Software IP'],
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
    blockDiagram: '/images/product/csi2_vip_block_diagram.jpg',
    deliverables: [
      'Basic test-suite for reference',
      'basic testbench setup',
      'Encrypted source code of CSI-2 VIP',
      'User-guide for setup'
    ],
    videos: [],
    downloadFiles: []
  },

  'axi-vip': {
    slug: 'axi-vip',
    category: 'verification-ip',
    heroTitle: 'AXI VIP',
    heroDescription: 'AXI4 protocol verification IP for comprehensive SoC interconnect verification.',
    title: 'AXI VIP',
    badges: ['IP Proven', 'Software IP'],
    overview: 'The MAXVY\'S AMBA-AXI VIP provides a complete solution for verification of AMBA-AXI protocol version 2.0. MAXVY\'S AXI verification IP is fully compatible with standard AXI 3 protocol. This VIP is supported natively in System Verilog UVM.',
    features: [
      'Separate address/control and data phases',
      'Support for unaligned data transfers using byte strobes',
      'Burst-based transactions with only start address issued',
      'separate read and write data channels to enable low-cost Direct Memory Access (DMA)',
      'Ability to issue multiple outstanding addresses',
      'Out-of-order transaction completion',
      'Easy addition of register stages to provide timing closure'
    ],
    keyBenefits: [
      'Availability in pure System Verilog and UVM',
      'Unique development to ensure highest level of quality',
      'Availability of Compliance & Regression test suites',
      'Unique and customizable licensing models'
    ],
    deliverables: [
      'VIPuser guide',
      'AXI VIP encrypted source code',
      'Sample Testbench top',
      'Sample scoreboard',
      'Assertions and coverage model'
    ],
    extendedCapabilities: [
      'Supports directed random and fully random tests',
      'Supports environment configuration of VIP based on DUT',
      'Monitors and Checkers for protocol violation',
      'Coverage model for functional coverage'
    ],
    blockDiagram: '/images/axi-vip.png',
    applications: [],
    videos: [],
    downloadFiles: []
  },

  'ahb-lite-master-slave-vip': {
    slug: 'ahb-lite-master-slave-vip',
    category: 'verification-ip',
    heroTitle: 'AHB LITE MASTER/SLAVE VIP',
    heroDescription: 'AHB-Lite verification IP for low-power SoC bus protocol verification.',
    title: 'AHB Lite Master/Slave VIP',
    badges: ['IP Proven', 'Software IP'],
    overview: 'Maxvy Technologies AHB Verification IP provides a complete solution for Verification of AMBA 3.0 AHB-Lite protocol v1.0 component of a SOC or ASIC. Maxvy AHB-Lite Verification IP is fully compliant with standard AMBA 3 AHB-Lite Specification. AMBA 3.0 AHB-Lite VIP is supported natively in SystemVerilog and UVM.',
    features: [
      'Fully compliant with AMBA 3.0 AHB-Lite / AHB3 of the ARM specification.',
      'Supports AHB Lite Operation.',
      'Configurable as a full AHB Lite Master, Slave.',
      'Supports Multi-Master and Multi-Slave System(Optional).',
      'Supports pipelined operation.',
      'Parameterized data and address widths.',
      'Supports all transfer types (IDLE, BUSY, NONSEQ & SEQ) and burst transfers (4, 8, 16 bit incrementing and wrapping).',
      'Ability to controll the wait states and secondary response types',
      'Supports early burst termination.',
      'Supports insertion of delays by slave and master.',
      'Configuration of lock and unlock transfer.',
      'Supports big endian and little endian mode.',
      'Supports various error injection and detection.',
      'Supports Configurable memory in slave operation.',
      'All the channel states are visible through waveform debugger'
    ],
    usageModel: 'An AHB Lite DUT in any mode can be verified with single instance of AHB Lite VIP. User needs to configure AHB Lite VIP in appropriate mode depending on the DUT. For AHB Lite Master DUT, Maxvy\'s AHB VIP can be configured to behave like either AHB system with multiple masters and slaves or a single slave. Similarly for AHB Slave DUT, it can be configured to behave like AHB system with multiple masters and slaves or a single master.',
    keyBenefits: [
      'Available in Pure System Verilog and with UVM methodology Support.',
      'Unique development methodology to ensure highest levels of quality.',
      'Availability of Compliance & Regression Test Suites.',
      '24X5 customer support.',
      'Unique and customizable licensing models.',
      'Exhaustive set of assertions and coverage points with connectivity example for all the components.',
      'Consistency of interface, installation ,operation and documentation across all our VIPs.',
      'Runs on all major simulators'
    ],
    extendedCapabilities: [
      'Supports directed random & fully random tests.',
      'Supports Environment configuration of VIP based on the DUT.',
      'Includes scoreboard for end to end data integrity check.',
      'Monitors & checkers for protocol violations.',
      'Coverage model for functional coverage.'
    ],
    deliverables: [
      'VIP User\'s guide.',
      'AHB Lite VIP Encrypted source code.',
      'Sample Test bench Top.',
      'Sample Scoreboard& Sanity test.',
      'Assertions and coverage model.'
    ],
    blockDiagram: '/images/ahb-lite2.jpg',
    usageModelImage: '/images/ahb-lite1.jpg',
    applications: [],
    videos: [],
    downloadFiles: []
  },

  'aphy-vip': {
    slug: 'aphy-vip',
    category: 'verification-ip',
    heroTitle: 'A-PHY VIP',
    heroDescription: 'Automotive A-PHY verification IP for high-speed automotive communication verification.',
    title: 'A-PHY VIP',
    badges: ['IP Proven', 'Software IP'],
    overview: 'A-PHY Verification IP provides comprehensive verification of automotive A-PHY interfaces in automotive and ADAS designs.',
    features: [
      'Supports MIPI A-PHY specification 1.0 and 1.1',
      'Supports single lane and dual lane, point-to-point and serial communication technology',
      'Supports PHY layer and Data link layer features',
      'Provides a main unidirectional data stream and a bi-directional low-throughput command and control data stream',
      'Rich set of configuration parameters to control MIPI A-PHY functionality',
      'Supports APPI interface between MIPI A-PHY',
      'Supports multiple speed gears ranging from 2Gbps up to 32 Gbps',
      'Supports 5 discrete Downlink Gears: G1, G2, G3, G4, and G5 and Uplink shall be 200Mbps at U1 and U2 gears',
      'Supports two types of profiles: Profile 1 (P1-NRZ 8B/10B) and Profile 2 (P2-PAM 4, 8, 16)',
      'Supports clock recovery to reach the proper port rate',
      'Supports Re-transmission request/ACK types',
      'Supports Scrambler as per specs',
      'Supports two types of Startup Procedure: Mission Mode startup and Unidirectional startup',
      'Supports Wake-Up protocol and below Mode of operation: Non-active Mode and Active Mode',
      'Supports below Data Link feature: Link service, Local function, Multi-port function, and Network function',
      'Monitors, detects, and notifies the test bench of significant events such as transactions, warnings, timing, and protocol violations',
      'Supports constraints Randomization',
      'MIPI A-PHY Verification IP comes with a complete test suite to test every feature of MIPI A-PHY specification',
      'Functional coverage for complete MIPI A-PHY features'
    ],
    applicationsTable: {
      headers: ['SL.NO', 'Application', 'DESCRIPTION'],
      rows: [
        [
          '1',
          'Advanced Driver Assistance Systems (ADAS)',
          'A-PHY can be used to connect various sensors, such as radar, lidar, and cameras, to enable real-time data collection and analysis for ADAS features like automatic emergency braking, lane departure warning, and adaptive cruise control.'
        ],
        [
          '2',
          'Infotainment Systems',
          'A-PHY can be used for telematics applications, such as vehicle tracking, remote diagnostics, and over-the-air software updates.'
        ],
        [
          '3',
          'Electric Vehicle Systems',
          'A-PHY can enable communication between various systems in electric vehicles, such as battery management, charging systems, and electric motor controllers.'
        ],
        [
          '4',
          'Autonomous Driving',
          'A-PHY can be used to connect sensors and other components in autonomous driving systems, allowing for real-time data processing and decision-making.'
        ],
        [
          '5',
          'Vehicle-to-Vehicle Communication (V2V)',
          'A-PHY can facilitate communication between vehicles for V2V applications, such as collision avoidance, traffic management, and platooning .'
        ]
      ]
    },
    applicationsImage: '/images/product/ADAS_APP.png',
    blockDiagram: '/images/product/block_diagram_a_phy.jpg',
    deliverables: [
      'Basic Test Suite.',
      'Random Testbench Environment.',
      'Encrypted Source Code of A-PHY VIP.',
      'VIP user guide.'
    ],
    videos: [],
    downloadFiles: []
  },

  'cpri-verification-ip': {
    slug: 'cpri-verification-ip',
    category: 'verification-ip',
    heroTitle: 'CPRI VERIFICATION IP',
    heroDescription: 'Common Public Radio Interface verification IP for telecom and front-haul applications.',
    title: 'CPRI verification IP',
    badges: ['IP Proven', 'Software IP'],
    overview: 'MAXVY provides configurable CPRI TX/RX verification IP. MAXVY\'s CPRI verification IP is fully compatible with CPRI version v7.0 with backward compatibility to previous versions and provides an efficient and effective way to verify the component interfacing with CPRI interface of an IP.',
    features: [
      'Compatible with CPRI version v7.0 as well as previous versions.',
      'Transmitter/Receiver function',
      'Supports line bit rates of CPRI specification',
      'Supports 8B/10B & 64B/66bB line coding.',
      'Supports scrambling/descrambling.',
      'Supports both layers (i.e. PHY & Data link)and Service Access Point(SAP) for data link layer.',
      'Supports Fast C&M channel and slow C&M channel',
      'Supports L1 inband protocol and Performs L1 synchronization.',
      'Supports RS-FEC and its features',
      'Performs hyperframe framing.',
      'Supports interface for vendor specific data into CPRI Frame.',
      'Supports different IQ data sampling width and oversampling ratio',
      'Error detection and reporting',
      'Supports constraint randomization'
    ],
    keyBenefits: [
      'Available in Pure System Verilog and with UVM methodology Support.',
      'Unique development methodology to ensure highest levels of quality.',
      'Availability of Compliance & Regression Test Suites.',
      '24X5 customer support.',
      'Unique and customizable licensing models.',
      'Exhaustive set of assertions and coverage points with connectivity example for all the components.',
      'Consistency of interface, installation ,operation and documentation across all our VIPs.'
    ],
    advantages: [
      'Simple steps to integrate into customer environment',
      'Fast,reusable and accurate',
      'Supported on all industry-standard simulators',
      'Complete verification plan, protocol coverage and checking',
      'Availability in pure system verilog and UVM',
      'Unique development to ensure highest level of quality',
      'Configurable options like TX/RX.'
    ],
    blockDiagram: '/images/marketing.png',
    deliverables: [
      'VIP user guide',
      'Complete documentation of all class, task , function etc used in verification env.',
      'CPRI VIP encrypted code',
      'Sample Testbench Top',
      'Built-in verification test plan includes-',
      'Basic Protocol Tests',
      'Random Tests',
      'Assertions & Coverage model'
    ],
    applications: [],
    videos: [],
    downloadFiles: []
  },

  'jesd204b-uvm-vip': {
    slug: 'jesd204b-uvm-vip',
    category: 'verification-ip',
    heroTitle: 'JESD204B UVM VIP',
    heroDescription: 'JESD204B verification IP for high-speed ADC/DAC interface verification.',
    title: 'JESD204B UVM VIP',
    badges: ['IP Proven', 'Software IP'],
    overview: 'MAXVY\'s provides configurable JESD204B TX/RX verification IP. JESD204B is a Serial Interface for Data Converters which are defined by JEDEC SOLID STATE TECHNOLOGY ASSOCIATION. Our VIP covers Transport and Data link layer functionality of JESD204B. MAXVY\'s VIP provides more flexible configuration to user to select their needs like lane,device configuration, data width.',
    features: [
      'ADC - TX/RX DAC - TX/RX.',
      'Support up to 12.5 Gbps data rate.',
      'Support configurable device classification.',
      'Support configurable subclass 0/1/2.',
      'Support Frame alignment monitor and correction.',
      'Support lane synchronization.',
      'Support Lane alignment monitor and correction.',
      'Support Link configuration.',
      'Support Link re-initialization.',
      'Support Deterministic Latency.',
      'Support 8B/10B encode/decode.',
      'Support Application specific control interface (user specific).'
    ],
    advantages: [
      'Configurable Option like lane,frame,TX/RX.',
      'Supports both multi device configuration.',
      'Simple steps to integrate into customer environment'
    ],
    applications: [
      'Wireless Infrastructure Transceiver.',
      'Software defined Radios.',
      'Medical Imaging Systems.',
      'Radar and Secure Communications'
    ],
    blockDiagram: '/images/jesd204b-uvm-vip.jpg',
    deliverables: [
      'Basic Test Suite.',
      'Random Testbench Environment.',
      'Encrypted Source Code of VIP.',
      'VIP user guide.'
    ],
    videos: [],
    downloadFiles: []
  },

  'lpc-controller-vip': {
    slug: 'lpc-controller-vip',
    category: 'verification-ip',
    heroTitle: 'LPC CONTROLLER VIP',
    heroDescription: 'Low Pin Count controller verification IP for legacy bus protocol verification.',
    title: 'Low Pin Count (LPC) controller verification IP',
    badges: ['IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies brings advanced connectivity to embedded systems with the successful integration of MIPI I3C Host IP into the VEGA SoC (AT1051). This solution bridges next‑generation I3C protocols and legacy I2C devices — enabling faster data transfer, reduced latency, and scalable system design. It is validated on the Arty A7 100T FPGA platform with real‑time I2C/I3C sensors.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['Standards Compliance', 'Fully compliant with MIPI I3C Basic v1.2 specification'],
        ['Multi-Role Operation', 'Supports Host, Secondary Controller, and Target roles'],
        ['Legacy Compatibility', 'Backward compatible with I2C devices for mixed I3C/I2C bus operation'],
        ['Addressing', 'Supports dynamic and static addressing for I3C and I2C devices'],
        ['High-Speed Serial Interface', '2-wire interface up to 12.5 MHz with push-pull signaling'],
        ['Data Transfer Modes', 'Supports Single Data Rate (SDR) messaging'],
        ['In-Band Interrupts (IBI)', 'Real-time event-driven communication without extra interrupt lines'],
        ['Common Command Codes (CCC)', 'Supports standard CCC commands for device management'],
        ['Low Power', 'Optimized for reduced power consumption'],
        ['Scalability', 'Designed to support multiple devices on a single bus']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Integrated components and flow',
      components: [
        'VEGA SoC (AT1051) – Processing core',
        'MAXVY MIPI I3C Host IP – Communication engine',
        'Arty A7 100T FPGA – Hardware platform',
        'I2C/I3C Target Devices – Sensor/actuator endpoints'
      ],
      howItWorks: [
        'I3C Host initializes and configures the bus',
        'Dynamic addressing enables multi-device communication',
        'Data is transmitted using I2C/I3C protocols to target devices',
        'Verification ensures protocol compliance (validation on Arty A7)'
      ]
    },
    blockDiagram: '/images/product/mx_ip_i3c_host_target_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-i3c-target-ip-vega': {
    slug: 'maxvy-i3c-target-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY I3C TARGET IP',
    heroDescription: 'Powering Next-Gen Sensor Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI I3C Host/Target Controller integrated with VEGA processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies delivers a high-performance MIPI I3C Host/Target Controller integrated with the VEGA SoC (AT1051), enabling scalable and efficient communication for modern embedded systems\n\nFully compliant with the latest MIPI I3C Basic v1.1.1 specification, the controller provides high bandwidth, low latency, and reduced pin count, making it ideal for connecting multiple sensors and peripherals on a single bus. Its advanced architecture supports both Host and Target modes, allowing flexible system configurations and multi-device communication\n\nThe controller also supports in-band interrupts (IBI) and hot-join capability, enabling dynamic and event-driven communication without additional hardware lines. With backward compatibility to I2C, it ensures seamless integration with existing devices while enabling migration to next-generation interfaces.\n\nIntegrated with the VEGA AT1051 RISC-V processor and standard AHB interface, the solution offers easy SoC integration, low power consumption, and optimized performance for IoT, automotive, and consumer electronics applications.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['Standards Compliance', 'Fully compliant with MIPI I3C Basic v1.2 specification'],
        ['Dual Mode Operation', 'Supports both Host and Target modes'],
        ['Backward Compatibility', 'Fully compatible with legacy I2C devices'],
        ['Dynamic Addressing', 'Supports dynamic and static addressing'],
        ['High-Speed Interface', '2-wire interface up to 12.5 MHz (push-pull)'],
        ['Data Transfer Modes', 'Supports Single Data Rate (SDR) messaging'],
        ['In-Band Interrupts (IBI)', 'Enables event-driven communication'],
        ['Common Command Codes (CCC)', 'Supports broadcast and direct CCC commands'],
        ['Hot-Join Support', 'Allows dynamic device addition to the bus'],
        ['Low Power & Pin Count', 'Optimized for efficient and compact designs'],
        ['Standard Bus Interface', 'AHB interface for seamless SoC integration']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC-V processing unit',
        'MAXVY I3C Host/Target Controller IP',
        'AHB Interface – Standard SoC integration',
        'I3C Bus (2-wire interface)',
        'I3C/I2C Devices – Sensors, peripherals, legacy devices'
      ]
    },
    blockDiagram: '/images/product/mx_ip_i3c_host_target_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-xspi-host-ip-vega': {
    slug: 'maxvy-xspi-host-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY xSPI HOST IP',
    heroDescription: 'Powering High-Speed Memory Connectivity with VEGA processor integration.',
    title: 'MAXVY XSPI Host Controller Integrated with VEGA Processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies brings high-performance memory and peripheral connectivity to embedded systems with the integration of its XSPI (eXpanded Serial Peripheral Interface) Host Controller into the VEGA SoC (AT1051).\n\nThe MAXVY XSPI Host, compliant with JEDEC JESD251 standard, is designed to deliver high data bandwidth with minimal signal count, making it ideal for next-generation embedded and computing applications. It enables seamless communication between the processor and multiple xSPI slave devices such as non-volatile memories, sensors, FPGAs, and high-speed peripherals.\n\nPowered by the VEGA AT1051 RISC-V processor, the solution ensures efficient data handling, faster execution, and scalable system integration. The combination of XSPI high-speed capability and VEGA\'s processing power provides a robust platform for memory-intensive and performance-critical applications.\n\nValidated on FPGA platforms, this integration demonstrates reliable high-speed data transfer and flexible interfacing.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['Standards Compliance', 'Compliant with JEDEC JESD251 (xSPI) Version 1.0'],
        ['Multi-Slave Support', 'Single master supporting multiple slave devices per interface'],
        ['Data Transfer Modes', 'Supports SDR (Single Data Rate) and DDR (Double Data Rate)'],
        ['High-Speed Performance', 'Data rates up to 400 MT/s (200 MHz clock)'],
        ['Source Synchronous Clocking', 'Ensures reliable high-speed data transfer'],
        ['Low Pin Count Interface', 'Optimized for reduced signal complexity'],
        ['Wide IO Support', 'Supports up to 8 IO lines, scalable based on system needs'],
        ['Memory Compatibility', 'Supports NOR Flash, NAND Flash, FRAM, nvSRAM'],
        ['Volatile Memory Support', 'Compatible with SRAM, PSRAM, DRAM'],
        ['Advanced Command Support', 'Profile 1.0 & 2.0 commands for flexible device control'],
        ['Deep Power Down (DPD)', 'Supports power-saving modes for energy-efficient designs'],
        ['Programmable Device Support', 'Interfaces with FPGAs and register-mapped I/O devices']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC‑V based processing unit',
        'MAXVY XSPI Host Controller IP – High‑speed communication engine',
        'AXI/AHB Interface – Standard bus for seamless SoC integration',
        'xSPI Slave Devices – NOR Flash, NAND Flash, PSRAM, FRAM, etc.',
        'FPGA Platform (Arty A7 100T) – Prototyping and validation platform'
      ]
    },
    blockDiagram: '/images/product/mx_ip_i3c_host_target_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-dsi2-transmitter-ip-vega': {
    slug: 'maxvy-dsi2-transmitter-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY DSI-2 TRANSMITTER IP',
    heroDescription: 'Powering High-Speed Sensor Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI DSI-2 Tx Integrated with VEGA Processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies offers a high-performance MIPI DSI-2 Transmitter (TX) Controller integrated with the VEGA SoC (AT1051), enabling seamless high-speed data transmission from the processor to display devices.\n\nCompliant with MIPI DSI-2 v2.0, the controller provides a robust, scalable, low-power, and cost-effective interface for modern display systems. It supports multiple PHY configurations including C-PHY and D-PHY, offering flexibility to meet diverse performance and system requirements.\n\nPowered by the VEGA AT1051 RISC-V processor, the solution ensures efficient graphics data handling and smooth display output. With support for both Command Mode and Video Mode, advanced packet handling, and multi-lane distribution, it enables high-quality and high-resolution display transmission.\n\nThis solution is ideal for applications requiring high-speed display interfaces, real-time graphics output, and scalable visual systems, including consumer electronics, automotive displays, and embedded visualization platforms.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['Standards Compliance', 'Compliant with MIPI DSI-2 v2.0'],
        ['PHY Support', 'Supports C-PHY 2.0 and D-PHY (v1.2 / v2.0 / v3.0)'],
        ['Flexible PHY Selection', 'Configurable C-PHY or D-PHY (one active at a time)'],
        ['Display Interfaces', 'Supports DBI-2 and DPI-2 interfaces'],
        ['Transmission Modes', 'Supports Command Mode and Video Mode'],
        ['Lane Distribution', 'Multi-lane data distribution across N lanes'],
        ['Split Link Support', 'Connects multiple DSI receivers using sub-links'],
        ['Data Processing', 'Pixel-to-byte conversion and packet formatting'],
        ['Error & Sync Handling', 'De-skew, symbol slip detection, sync insertion'],
        ['Data Integrity', 'Supports scrambling/descrambling and filler byte insertion'],
        ['High-Speed Transmission', 'Supports HS and Escape modes'],
        ['Processor Interface', 'Supports AHB-Lite / APB / AXI interfaces']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC‑V processing unit',
        'MAXVY DSI-2 TX Controller IP – Transmitter engine and packet handler',
        'PHY Layer (C-PHY / D-PHY) – Physical interface for high-speed lanes',
        'Display Panel (DSI Receiver) – Target display or sensor receiver',
        'AHB/APB/AXI Interface – Configuration and control bus interfaces',
        'LLP (Low-Level Protocol) Layer – Packet handling and transmission'
      ]
    },
    blockDiagram: '/images/product/mx_dsi2_tx_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-csi2-receiver-ip-vega': {
    slug: 'maxvy-csi2-receiver-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY CSI-2 RECEIVER IP',
    heroDescription: 'Powering High-Speed Memory Connectivity with VEGA processor integration.',
    title: 'MAXVY MIPI CSI-2 Rx Integrated with VEGA Processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies offers a high-performance MIPI CSI-2 RX Controller integrated with the VEGA SoC (AT1051), designed to enable seamless high-speed data transfer from camera sensors to embedded processing systems.\n\nCompliant with MIPI CSI-2 v3.0, the controller delivers a robust, scalable, and low-power interface for a wide range of imaging applications. It supports multiple PHY configurations including C-PHY and D-PHY, providing flexibility to adapt to different system requirements and performance needs.\n\nIntegrated with the VEGA AT1051 RISC-V processor, the solution ensures efficient image data handling, fast processing, and smooth system integration. With support for multiple pixel formats, virtual channels, and advanced error handling, it enables reliable and high-quality image capture for modern embedded vision systems.\n\nThis solution is ideal for applications requiring high-speed video input, real-time processing, and scalable imaging architectures, including automotive, IoT, and consumer electronics.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['Standards Compliance', 'MIPI CSI-2 v3.0 compliant'],
        ['PHY Support', 'C-PHY 2.0 and D-PHY 2.5 (configurable)'],
        ['Flexible PHY Options', 'C-PHY / D-PHY / A-PHY / M-PHY (one active at a time)'],
        ['Processor Interface', 'AHB Lite / APB / AXI'],
        ['Lane Management', 'Lane merging and packet consolidation'],
        ['Virtual Channels', '16 (D-PHY) / 32 (C-PHY)'],
        ['Pixel Formats', 'YUV, RGB, RAW, and generic formats'],
        ['CCI Interface', 'I2C and I3C (SDR/DDR) compatible'],
        ['Error Handling', 'Error detection, scrambling/descrambling'],
        ['Data Processing', 'Byte-to-pixel conversion (LLP layer)'],
        ['Synchronization', 'De-skew (D-PHY) and sync word detection (C-PHY)']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC-V processing unit',
        'MAXVY CSI-2 RX Controller IP',
        'PHY Layer (C-PHY / D-PHY)',
        'Camera Sensor (CSI-2 Transmitter)',
        'AHB/APB/AXI Interface – Configuration and control',
        'LLP (Low-Level Protocol) Layer – Packet handling and data conversion'
      ]
    },
    blockDiagram: '/images/product/mx_csi2_rx_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-uart-ip-vega': {
    slug: 'maxvy-uart-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY UART IP',
    heroDescription: 'Enabling Reliable Serial Communication for Embedded Systems with VEGA processor.',
    title: 'MAXVY UART Integrated with VEGA Processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies delivers a robust and efficient UART Controller solution integrated with the VEGA SoC (AT1051), designed to enable seamless communication between processors and external serial devices.\n\nThis architecture acts as a high-performance bridge between parallel processor buses and asynchronous serial interfaces, ensuring reliable data transfer with minimal CPU intervention. By incorporating hardware FIFOs, intelligent control logic, and configurable communication parameters, the UART controller offloads real-time data handling from the processor, improving system efficiency and throughput.\n\nPowered by the VEGA AT1051 RISC-V processor, the solution supports scalable embedded applications requiring stable and continuous communication. Its flexible design and standardized bus interfaces make it ideal for integration into modern IoT, industrial, and consumer electronic systems.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['High-Performance Architecture', 'Efficient bridge between parallel bus and serial communication'],
        ['FIFO-Based Data Handling', 'Integrated Read and Write FIFOs for smooth data flow'],
        ['Multi-Bus Interface Support', 'Supports AXI4-Lite, APB, AHB4-Lite, and WSB interfaces'],
        ['UART TX/RX Control', 'Automatic frame generation and decoding (start, stop, parity bits)'],
        ['Baud Rate Generator', 'Configurable baud rate derived from system clock'],
        ['Interrupt Support', 'Efficient handling of communication events'],
        ['Data Integrity', 'Reliable transmission with error handling mechanisms'],
        ['Low CPU Overhead', 'Hardware-driven communication reduces processor load'],
        ['Scalable Integration', 'Easily integrates into complex SoC architectures']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC-V processing unit',
        'Processor Interface – Control, status, and interrupt coordination',
        'Write FIFO – Buffers outgoing data for efficient transmission',
        'Read FIFO – Stores incoming data to prevent loss',
        'UART TX Control – Formats outgoing serial frames',
        'UART RX Control – Handles data reception and decoding',
        'Baud Rate Generator – Controls communication speed',
        'BUS Interface – Supports AXI/APB/AHB/WSB protocols'
      ]
    },
    blockDiagram: '/images/product/mx_uart_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-gpio-ip-vega': {
    slug: 'maxvy-gpio-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY GPIO IP',
    heroDescription: 'Enabling Intelligent Control and Real-Time Interaction with VEGA processor.',
    title: 'MAXVY GPIO Integrated with VEGA Processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies offers a flexible and efficient GPIO (General Purpose Input/Output) Controller integrated with the VEGA SoC (AT1051), enabling seamless interaction between the processor and external hardware components.\n\nThe GPIO IP provides a simple yet powerful interface for monitoring external signals and controlling digital outputs through memory-mapped registers. With support for configurable pin directions and interrupt-driven event handling, it allows embedded systems to respond quickly and efficiently to real-world inputs.\n\nPowered by the VEGA AT1051 RISC-V processor, this solution ensures reliable performance and easy scalability for a wide range of applications. Its lightweight design and low resource utilization make it ideal for FPGA-based prototyping as well as production-ready embedded systems.',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['Flexible GPIO Width', 'Supports 1 to 32 GPIO signals per channel'],
        ['Per-Pin Configuration', 'Each pin individually configurable as input or output'],
        ['Register-Based Control', 'Simple memory-mapped interface for read/write operations'],
        ['Interrupt Support', 'Optional interrupt generation on input events'],
        ['Tri-State Direction Control', 'Independent direction control using tri-state registers'],
        ['Custom Default Values', 'User-defined output states after reset'],
        ['Efficient Resource Usage', 'Optimized for low FPGA resource utilization'],
        ['Scalable Design', 'Easily adaptable for different system requirements']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC-V processing unit',
        'GPIO Controller IP – Digital input/output management',
        'Data Register – Stores input/output values',
        'Direction Register – Controls pin direction (input/output)',
        'Interrupt Control & Status Registers – Handles event-driven signals',
        'AXI/AHB Interface – Enables seamless SoC integration'
      ]
    },
    blockDiagram: '/images/product/mx_gpio_vega_processor.png',
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
    downloadFiles: []
  },

  'maxvy-pwm-ip-vega': {
    slug: 'maxvy-pwm-ip-vega',
    category: 'maxvy-integration',
    heroTitle: 'MAXVY PWM IP',
    heroDescription: 'Efficient Pulse Width Modulation for Embedded Control Systems with VEGA processor.',
    title: 'MAXVY PWM Integrated with VEGA processor',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'MAXVY Technologies provides a high-performance PWM Controller IP integrated with the VEGA SoC (AT1051), designed to generate precise and configurable pulse signals for controlling a wide range of embedded peripherals\n\nThis architecture enables seamless interaction between the processor\'s parallel bus and time-critical PWM signal generation. By incorporating dedicated hardware counters, duty cycle control logic, and programmable timing registers, the PWM controller ensures accurate waveform generation with minimal CPU involvement\n\nThe solution is optimized for applications requiring fine-grained control of power delivery, motor speed, brightness, and signal modulation. With its scalable and flexible design, it integrates easily into modern SoC environments while maintaining high efficiency and timing accuracy',
    featuresTable: {
      headers: ['Feature', 'Specification'],
      rows: [
        ['High-Precision PWM Generation', 'Accurate duty cycle and frequency control'],
        ['Hardware-Based Operation', 'Minimizes CPU intervention'],
        ['Configurable Duty Cycle', 'Fine control over output waveform'],
        ['Multi-Channel Support', 'Supports multiple independent PWM outputs'],
        ['Programmable Period', 'Flexible timing configuration'],
        ['Interrupt Support', 'Event-based notifications for control'],
        ['Low Power Operation', 'Efficient hardware-driven design'],
        ['Multi-Bus Interface', 'Supports AXI4-Lite, APB, AHB4-Lite, WSB'],
        ['Scalable Integration', 'Easily fits into complex SoC designs']
      ]
    },
    solutionArchitecture: {
      title: 'Solution Architecture',
      subtitle: 'Core Components',
      components: [
        'VEGA SoC (AT1051) – RISC-V processing unit',
        'Processor Interface – Handles configuration, status, and interrupts',
        'PWM Counter/Timer – Generates timing base for PWM signals',
        'Duty Cycle Register – Controls ON/OFF ratio of output waveform',
        'Control Logic – Manages PWM modes and signal generation',
        'Output Driver – Produces final PWM signal to external devices',
        'BUS Interface – Supports AXI/APB/AHB/WSB protocols'
      ]
    },
    blockDiagram: '/images/product/mx_pwm_vega_processor.png',
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
    downloadFiles: []
  },

  // ==================== OTHER RTL IP ====================
  'ucie-controller-ip': {
    slug: 'ucie-controller-ip',
    category: 'other-rtl-ip',
    heroTitle: 'UCIe CONTROLLER IP',
    heroDescription: 'High-performance Universal Chiplet Interconnect Express controller IP for die-to-die communication.',
    title: 'MAXVY UCIe Controller IP',
    badges: ['Silicon Proven', 'IP Proven'],
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
    blockDiagram: '/images/UCIe_blockdiagram.png',
    downloadFiles: []
  },

  'avs-bus-host-ip': {
    slug: 'avs-bus-host-ip',
    category: 'other-rtl-ip',
    heroTitle: 'AVS BUS HOST IP',
    heroDescription: 'Adaptive Voltage Scaling bus host controller for dynamic power management.',
    title: 'MAXVY Adaptive Voltage Scaling (AVS) Bus Host Controller IP',
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'The MAXVY\'s AVS Bus Host Controller IP is a highly configurable solution designed to enable efficient, high-speed communication between the SoC processor subsystem and external voltage regulators through the industry-standard AVS Bus protocol. Fully compliant with the AVS Bus specification, the IP plays a critical role in Dynamic Voltage and Frequency Scaling (DVFS) applications, allowing software-controlled voltage adjustments to optimize power consumption and system performance in real time.\n\nThe controller integrates a flexible Processor Interface that enables seamless communication with the SoC. It supports multiple industry-standard bus protocols, including AXI4-Lite, APB, AHB-Lite, and Wishbone (WSB), providing easy register access for configuration, control, status monitoring, and interrupt handling.\n\nThe MAXVY\'s AVS Bus Controller IP incorporates a comprehensive set of functional blocks to efficiently manage AVS Bus transactions. A dedicated Synchronization Module ensures safe clock-domain crossing between the processor interface and AVS Bus domains, while a programmable Clock Generator produces the AVS Bus clock required for protocol-compliant communication with the target voltage regulator.\n\nA configurable Frame Generator constructs AVS Bus command frames based on software requests, and the Response Decoder processes acknowledgments, status information, and responses received from the AVS Bus target device. An integrated CRC Engine provides cyclic redundancy check generation and verification to ensure reliable communication and robust error detection, enabling secure and efficient processor-controlled voltage management.\n\nThe architecture supports voltage programming, status monitoring, fault reporting, and protocol error handling, making it well-suited for advanced power management applications that require fast and reliable regulator control.',
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'The MAXVY\'s AVS Bus Slave IP is a highly configurable IP that provides full AVS Bus slave functionality compliant with the AVS Bus specification. The IP enables seamless communication between an AVS Bus Master, such as a processor, FPGA, or SoC, and AVS Bus-compliant target devices used in power management applications.\n\nDesigned for both FPGA and ASIC implementations, the MAXVY\'s AVS Bus Slave IP supports both 2-wire and 3-wire AVS Bus communication modes, providing flexibility for integration with a wide range of AVS Bus-based systems. The IP can operate as an AVS Bus target device, receiving commands from an AVS Bus master and generating protocol-compliant responses.\n\nThe architecture consists of an optional Processor Interface for configuration, status monitoring, and register access. The processor interface can be implemented using AXI4-Lite, APB, AHB-Lite, Wishbone, or a custom register interface based on system requirements. A dedicated Synchronization Module ensures reliable clock-domain crossing between the processor interface and the AVS Bus domain.\n\nThe AVS Target subsystem incorporates a Command Decoder that receives and interprets incoming AVS Bus command frames, a Response Generator that creates protocol-compliant acknowledgment and status response frames, and a CRC Checker that performs cyclic redundancy check verification to ensure data integrity and robust error detection. Together, these blocks enable reliable command processing and communication with the AVS Bus master.\n\nThe IP supports protocol error handling, status reporting, interrupt generation, clock resynchronization, and timeout detection, making it suitable for Dynamic Voltage and Frequency Scaling (DVFS), power management, industrial, automotive, networking, and high-performance computing applications.',
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
    badges: ['Silicon Proven', 'IP Proven', 'Software IP'],
    overview: 'The MAXVY GPIO (General Purpose Input/Output) Controller IP is a highly configurable and scalable peripheral designed to enable seamless communication between processors and external hardware devices. The IP provides a flexible interface for monitoring digital input signals and controlling digital output signals a simple through memory-mapped register architecture.\n\nThe GPIO Controller allows software to read external signals and drive output signals using dedicated control and status registers. Each GPIO can be independently configured as either an input or output, enabling flexible system-level connectivity and control. When configured as an input, the GPIO captures external signal states that can be read by software. When configured as an output, the GPIO drives user-programmed values onto external pins.\n\nThe IP includes configurable interrupt generation capabilities for responsive event handling. Interrupts can be generated on rising-edge, falling-edge, active-high, or active-low input conditions. Interrupt status information is maintained through dedicated status registers and can be cleared by software using a write-one-to-clear mechanism.\n\nThe modular architecture supports integration into FPGA and SoC designs through multiple industry-standard interfaces, including APB, AHB-Lite, AXI4-Lite, Wishbone (WSB), and UART2BUS. Designed for low resource utilization and high reliability, the MAXVY GPIO Controller IP is suitable for a wide range of embedded and industrial applications.',
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
    badges: ['IP Proven', 'Software IP'],
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
    badges: ['Silicon Proven', 'IP Proven'],
    overview: 'RISC-V (pronounced “risk-five”) is a free and open ISA enabling a new era of processor innovation through open standard collaboration. Founded in 2015, the RISC-V ISA delivers a new level of free, extensible software and hardware freedom on architecture, paving the way for the next 50 years of computing design and innovation.\n\nIn contrast to most ISAs, the RISC-V ISA can be freely used for any purpose, permitting anyone to design, manufacture and sell RISC-V chips and software. While not the first open architecture ISA, it is significant because it is designed to be useful in modern computerized devices such as warehouse-scale cloud computers, high-end mobile phones and the smallest embedded systems. Such uses demand that the designers consider both performance and power efficiency. The instruction set also has a substantial body of supporting software, which avoids a usual weakness of new instruction sets. The RISC-V ISA has been designed with small, fast, and low-power real-world implementations in mind, but without over-architecting for a particular micro architecture style.\n\nGoals in defining RISC-V\n\nA completely open ISA that is freely available to academia and industry.\nA real ISA suitable for direct native hardware implementation, not just simulation or binary translation.\nAn ISA that avoids over-architecting" for a particular micro-architecture style (e.g.,micro-coded, in-order, decoupled, out-of-order) or implementation technology (e.g.,full-custom, ASIC, FPGA), but which allows efficient implementation in any of these.\nAn ISA separated into a small base integer ISA, usable by itself as a base for customized accelerators or for educational purposes, and optional standard extensions, to support general-purpose software development.\nSupport for the revised 2008 IEEE-754 floating-point standard.\nBoth 32-bit and 64-bit address space variants for applications, operating system kernels, and hardware implementations.\nOptional variable-length instructions to both expand available instruction encoding space and to support an optional dense instruction encoding for improved performance, static code size, and energy efficiency.\nA fully virtualizable ISA to ease hypervisor development.\nAn ISA that simplifies experiments with new supervisor-level and hypervisor-level ISA design.',
    featuresTable: {
      headers: ['S.No', 'Instruction Formats', 'Availability'],
      rows: [
        ['1', 'RV32I', 'Immediate'],
        ['2', 'RV32IM', 'Immediate'],
        ['3', 'RV32IMF', 'Immediate'],
        ['4', 'RV32IMFD', 'Under Development'],
        ['5', 'RV32IMFA', 'Immediate'],
        ['6', 'RV64I', 'On Demand'],
        ['7', 'RV64IM', 'On Demand'],
        ['8', 'RV64IMFA', 'On Demand'],
        ['9', 'RV64IMF', 'On Demand'],
        ['10', 'RV64IMFD', 'On Demand']
      ]
    },
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
    badges: ['IP Proven', 'Software IP'],
    overview: 'The RISC-V Reference Model provides a complete software and hardware reference implementation for RISC-V processor development and verification.',
    keyFeatures: [
      'Delivers a new level of software and hardware freedom on architecture in an open extensible way.',
      'Open ISA delivers easier support from a broad range of operating systems, software vendors and tool developers.',
      'The open source of hardware, RISC-V does not rely on a single supplier – offers multiple suppliers, therefore, supports unlimited potential for future growth.',
      'No other ISA is architected like the RISC-V ISA, allowing for user extensibility of the architecture without breaking existing extensions or incurring software fragmentation.'
    ],
    advantages: [
      'RISC architecture is used in high-end applications such as video processing, telecommunications and image processing.',
      'Used in MICROPROCESSORS and MICROCONTROLLERS.'
    ],
    featuresTable: {
      headers: ['S.No', 'Instruction Formats', 'System Verilog', 'SystemC', 'Python', 'C, C++ Model'],
      rows: [
        ['1', 'RV32I', 'Immediate', 'Under Development', 'Under Development', 'Under Development'],
        ['2', 'RV32IM', 'Immediate', 'Under Development', 'Under Development', 'On Demand'],
        ['3', 'RV32IMF', 'Immediate', 'Under Development', 'Under Development', 'On Demand'],
        ['4', 'RV32IMFD', 'Immediate', 'Under Development', 'Under Development', 'On Demand'],
        ['5', 'RV32IMFA', 'Under Development', 'Under Development', 'Under Development', 'Under Development'],
        ['6', 'RV64I', 'On Demand', 'On Demand', 'On Demand', 'On Demand'],
        ['7', 'RV64IM', 'On Demand', 'On Demand', 'On Demand', 'On Demand'],
        ['8', 'RV64IMFA', 'On Demand', 'On Demand', 'On Demand', 'On Demand'],
        ['9', 'RV64IMF', 'On Demand', 'On Demand', 'On Demand', 'On Demand'],
        ['10', 'RV64IMFD', 'On Demand', 'On Demand', 'On Demand', 'On Demand']
      ]
    },
    features: [
      'Delivers a new level of software and hardware freedom on architecture in an open extensible way',
      'Open ISA delivers easier support from a broad range of operating systems, software vendors and tool developers',
      'The open source of hardware, RISC-V does not rely on a single supplier',
      'No other ISA is architected like the RISC-V ISA, allowing for user extensibility of the architecture'
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
    badges: ['Software IP'],
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
    circuitDiagram: '/images/QR_generator_circuit_diagram.jpg',
    downloadFiles: []
  },

  // ==================== MAXVY IP IN FPGA ====================
  'maxvy-i3c-host-software': {
    slug: 'maxvy-i3c-host-software',
    category: 'maxvy-fpga',
    heroTitle: 'MAXVY I3C HOST CONTROLLER SOFTWARE',
    heroDescription: 'Software tool for verifying MIPI I3C features on FPGA platforms.',
    title: 'MAXVY I3C Host Controller Software',
    badges: ['IP Proven', 'Software IP'],
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
    boardPurchaseLinks: {
      title: 'Board Purchase Link',
      links: [
        { label: 'Artix-7 CMOD', url: 'https://in.element14.com/digilent/410-328-35/development-kit-artix-7-fpga/dp/2614574?CMP=KNC-GIN-DSA-PMAX-SEARCH&mckv=_dc|pcrid||pkw||pmt||slid||product||pgrid||ptaid||&gad_source=1&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT-B-tEmn0dNYIfthAIIdjWnLxgUkhM4tYxeLqpOBOPqfxPiGe8uwxwaAs2WEALw_wcB' },
        { label: 'Arty A7-100T', url: 'http://in.element14.com/digilent/410-319-1/development-kit-artix-7-fpga/dp/3050772?CMP=KNC-GIN-DSA-PMAX-SEARCH&mckv=_dc|pcrid||pkw||pmt||slid||product||pgrid||ptaid||&gad_source=1&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT8XgirQ3MaHQVQHXQ471O0-4EYXnwLeZ9kFqNbFhJ7fBvoSgb0FzDoaAreBEALw_wcB' }
      ]
    },
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
  if (productContent[slug]) {
    return productContent[slug];
  }
  
  for (const key in productContent) {
    if (productContent[key].slug === slug) {
      return productContent[key];
    }
  }
  
  return null;
};

export default productContent;