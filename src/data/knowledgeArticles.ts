// ====== IMAGE IMPORTS ======
import axiUcieImage from '../images/axi_ucie_block_diagram.png';
import spiIntroImage from '../images/spi_intro.png';
import mipiDsiImage from '../images/mipi_dsi_two_sublink_communication.png';
import dsi2ComImage from '../images/DSI2_COM_BTW_TX_RX.jpg';
import levelInAphyImage from '../images/level_in_aphy.png';
import dsi2LayersImage from '../images/dsi2_layers.jpg';
import i3cBusImage from '../images/i3c_bus_with_i3c_and_i2c_devices.png';
import i2cI3cBusImage from '../images/i2c_i3c_bus_target_with_controller.png';
import i3cCapabilitiesImage from '../images/i3c_capabilities.png';
import i3cCommFormatImage from '../images/i3c_bus_communication_format.png';
import speedDataRateImage from '../images/speed_and_data_rate_for_i3cvs_i2c.png';
import dynamicAddressImage from '../images/dynamic_address_assignment_process.png';
import i3cAppsImage from '../images/i3c_related_applications.png';
import energyConsumptionImage from '../images/energy_consumption_vs_data_rates.png';
import qualcommImage from '../images/qualcomm_snapdragon.jpg';
import lsm6dsoxImage from '../images/lsm6dsox.png';
import multiplexerImage from '../images/multiplexer.jpg';
import latticeFPGAImage from '../images/latticeFPGA.jpg';
import i3cDebuggerImage from '../images/i3cDebugger.jpg';

export interface KnowledgeArticle {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string | null;
  buttonText: string;
  icon: 'arrow' | 'download' | 'info';
  // tags: string[];
  related: string[];
  isDownload?: boolean;
  downloadUrl?: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: 1,
    slug: "axi_communication_in_ucie",
    title: "AXI Communication in UCIe",
    shortDescription: "UCIe (Universal Chiplet Interconnect Express) is a standard designed to facilitate high-bandwidth communication between heterogeneous chiplets, in a single package",
    content: `# AXI Communication in UCIe

UCIe (Universal Chiplet Interconnect Express) is a standard designed to facilitate high-bandwidth communication between heterogeneous chiplets, in a single package.

It is multilayered. it has

- Physical layer
- Die to die adapter layer
- Protocol layer

The physical layer is used to facilitate the data transmission between the dies. Die to die adapter manage the link management facility and protocol arbitration and negotiations. Protocol layer defines the rules and conventions for data exchange.

The protocol layer support PCIe,CXL.io, CXL.cachemem and streaming or raw format (based on UCIe V1.0).

![AXI UCIe Block Diagram](/images/axi_ucie_block_diagram.png)

Here we are using the UCIe streaming capability to facilitate AXI master – slave communication, that is connected to different dies of UCIe. AXI master is connected to either of one die and slave is connected to the other die through the UCIe interface bus. We have 'UCIe streaming AXI master' and a 'UCIe streaming AXI slave' inside protocol layer.The 'UCIe streaming AXI master' collects the data from AXI slave and 'UCIe streaming AXI slave' collects the data from AXI master. These AXI datas are converted to UCIe streaming formats and viceversa by this UCIe streaming AXI master and UCIe streaming AXI slave .These UCIe streaming formats is then used to facilitate communication between the AXI master and slave.`,
    image: axiUcieImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["UCIe", "AXI", "Chiplet", "Communication"],
    related: ["spi_introduction", "dsi2_introduction", "mipi_i3c_understanding"]
  },
  {
    id: 2,
    slug: "difference_between_3_wire_spi_and_4_wire_spi",
    title: "Difference between 3 Wire SPI and 4 Wire SPI",
    shortDescription: "Difference between 3 Wire SPI and 4 Wire SPI with features like data lines, Communication Mode, wires, Throughput, Bus Contention Risk, pin usage, Turnaround Phase, Transaction, Clock Modes, use cases",
    content: `# Difference between 3 Wire SPI and 4 Wire SPI

| S.NO | Feature | 3-Wire SPI | 4-Wire SPI |
|------|---------|------------|------------|
| 1 | Data Lines | Single bidirectional SDIO (half-duplex) | Separate MOSI (master → slave) and MISO (slave → master) for full-duplex |
| 2 | Total Wires | 3: SCLK, SS/CS, SDIO | 4: SCLK, SS/CS, MOSI, MISO |
| 3 | Communication Mode | Half-duplex : Master/slave take turns on SDIO | Full-duplex : Simultaneous data transmission and reception |
| 4 | Throughput | Lower (due to turnaround delays) | Higher (no turnaround delays) |
| 5 | Bus Contention Risk | Possible if master/slave drive SDIO simultaneously | Minimal (MOSI/MISO are independent) |
| 6 | Pin Usage | Saves 1 pin (ideal for low-pin-count systems) | Requires more pins but simplifies timing |
| 7 | Turnaround Phase | Required (delay between master → slave and slave → master phases) | Not required (MOSI/MISO operate independently) |
| 8 | Example Transaction | Master sends command. Turnaround. Slave responds. | Master sends command on MOSI while slave responds on MISO simultaneously |
| 9 | Clock Modes (CPOL/CPHA) | Same as 4-wire SPI (4 modes based on clock polarity and phase) | Same as 4-wire SPI (4 modes based on clock polarity and phase) |
| 10 | Use Cases | Sensors, EEPROMs, pin-constrained systems | High-speed ADCs/DACs, displays, full-duplex systems |`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    //  tags: ["SPI", "3-Wire", "4-Wire", "Communication"],
    related: ["spi_introduction", "axi_communication_in_ucie", "dsi2_introduction"]
  },
  {
    id: 3,
    slug: "spi_introduction",
    title: "SPI Introduction",
    shortDescription: "Serial Peripheral Interface (SPI) is a synchronous serial communication protocol widely used in embedded systems for high-speed data exchange between microcontrollers and peripheral devices.",
    content: `# SPI Introduction

Serial Peripheral Interface (SPI) is a synchronous serial communication protocol widely used in embedded systems for high-speed data exchange between microcontrollers and peripheral devices. However, in the 3-wire SPI interface, the data transmission occurs in half-duplex mode, where the same data line is used for both transmission and reception.

## Features
- Operating range 1 MHz to 20 MHz of SPI clock speed
- Memory space and Register space access is supported
- Data is driven based on spi_mode, config through APB/UART/AXI/AHBL interface.

![SPI Introduction](/images/spi_intro.png)

SPI in 3-wire mode requires the following signals:

- **SCLK (Serial Clock)**: Generated by the master to synchronize data transfer
- **SS/CS (Slave Select/Chip Select)**: Activated by the master to enable communication with a specific slave
- **SDIO (Serial Data Input/Output)**: Bidirectional line for half-duplex data exchange

## Working Principle
The master generates the clock signal (SCLK) and controls communication. Data transmission occurs bit-by-bit over the single SDIO line, requiring direction control. Slave selection is managed through the SS/CS line: When SS is low, the corresponding slave is active; other slaves remain inactive.

Since MOSI and MISO are combined into one line, SPI 3-wire operates in half-duplex mode, meaning data transmission and reception cannot happen simultaneously. The master and slave share the SDIO line but take turns transmitting data. The master initiates communication by pulling SS low and generating SCLK.

## SPI Modes of Operation
SPI has four different modes, determined by the clock polarity (CPOL) and clock phase (CPHA):

- **Mode 0**: CPOL = 0, CPHA = 0 (Clock idle low, data sampled on rising edge)
- **Mode 1**: CPOL = 0, CPHA = 1 (Clock idle low, data sampled on falling edge)
- **Mode 2**: CPOL = 1, CPHA = 0 (Clock idle high, data sampled on falling edge)
- **Mode 3**: CPOL = 1, CPHA = 1 (Clock idle high, data sampled on rising edge)

## Advantages
- Fewer Pins Required
- Reduces Wiring Complexity
- Simplifies Large-Scale Systems

## Applications of SPI
- Embedded Systems & Microcontrollers
- Memory Devices
- Display Interfaces
- ADCs & DACs
- Communication Modules
- Industrial Applications
- Secure Cryptographic Modules
- Automotive Applications
- FPGA & ASIC Communication
- Audio Codecs`,
    image: spiIntroImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SPI", "Serial Communication", "Embedded Systems"],
    related: ["difference_between_3_wire_spi_and_4_wire_spi", "axi_communication_in_ucie", "dsi2_introduction"]
  },
  {
    id: 4,
    slug: "understanding_mipi_dsi2_sublink_communication",
    title: "Understanding MIPI DSI-2 Sublink Communication",
    shortDescription: "The Mobile Industry Processor Interface Alliance (MIPI) developed a serial communication protocol known as the Display Serial Interface or DSI. MIPI DSI2 stands for high-speed Display Serial Interface between a host processor and a display module.",
    content: `# Understanding MIPI DSI-2 Sublink Communication

The Mobile Industry Processor Interface Alliance (MIPI) developed a serial communication protocol known as the Display Serial Interface or DSI. MIPI DSI2 stands for high-speed Display Serial Interface between a host processor and a display module. The DSI2 interface enables manufacturers to integrate displays to achieve high performance, low power, and low electromagnetic interference (EMI) while reducing pin count and maintaining compatibility across different vendors.

## What is a Sublink in MIPI DSI-2?
A sublink in DSI-2 refers to an independent data stream within a lane, allowing multiple streams of image or video data to be transmitted simultaneously. This enables functionalities like:

- Multi-display support within a single lane
- Independent image regions within the same display panel
- Optimized bandwidth usage in display communication

![MIPI DSI Sublink Communication](/images/mipi_dsi_two_sublink_communication.png)

DSI Transmitter that connects to two, three, or four DSI Receivers by splitting the DSI Link for either D Option or C Option. The multi-receiver configuration connects one DSI Transmitter to one display panel, with multiple DSI Receivers routing display data to separate portions of the panel. If a DSI Link can be split, the Sub-Links shall carry symmetrical, evenly divided Payloads. That is, each Sub-Link carries equal data to the whole panel. If the DSI Transmitter and DSI Receiver in a Sub-Link include LP Mode Lane reversal, Lane 0 of that Sub-Link shall support Lane reversal.`,
    image: mipiDsiImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "DSI-2", "Display", "Sublink"],
    related: ["dsi2_introduction", "working_of_dsi2_layers", "spi_introduction"]
  },
  {
    id: 5,
    slug: "spd5_hub_supports_i2c_i3c_ccc",
    title: "SPD5 HUB - Supports I2C/I3C CCC",
    shortDescription: "I3C basic specification has more common command codes (CCC). The SPD5 hub is not required to support all CCC. The SPD5 hub supports some of the CCC.",
    content: `# SPD5 HUB - Supports I2C/I3C CCC

I3C basic specification has more common command codes (CCC). The SPD5 hub is not required to support all CCC. The SPD5 hub supports some of the CCC.

There are two kinds of CCC which are broadcast and direct.

**Broadcast CCC**: All target devices which are connected to the bus have sent a response to this CCC. These CCCs are write CCC.

**Direct CCC**: The single or specifically addressed target only sent a response to this CCC. These CCCs are write, read, or write/read CCC.

## Supported I3C CCC

| S.NO | CCC | MODE | DESCRIPTION |
|------|-----|------|-------------|
| 1 | ENEC | BROADCAST | Used to enable In band interrupt (IBI) for SPD5 Hub and local devices. It is illegal for Host to issue ENINT bit = '0' SPD5 hub will not enable IBI. If Parity error occurs SPD5 hub will ignore this CCC |
| 2 | ENEC | DIRECT | Used to enable In band interrupt (IBI) for targetted device. If Parity error occurs SPD5 hub will ignore this CCC |
| 3 | DISEC | BROADCAST | Used to enable In band interrupt (IBI) for SPD5 Hub and local devices. It is illegal for Host to issue ENINT bit = '0' SPD5 hub will not enable IBI. If Parity error occurs SPD5 hub will ignore this CCC |
| 4 | DISEC | DIRECT | Used to enable In band interrupt (IBI) for targetted device. If Parity error occurs SPD5 hub will ignore this CCC |
| 5 | RSTDAA | BROADCAST | Used to switch from I2C Mode to I3C mode. If Parity error occurs SPD5 hub will ignore this CCC |
| 6 | GETSTATUS | DIRECT | Used to get device error status. If Parity error occurs SPD5 hub will ignore this CCC |
| 7 | DEVCAP | DIRECT | Used to get device capability. If Parity error occurs SPD5 hub will ignore this CCC |
| 8 | DEVCTRL | BROADCAST | REG_MODE = 0: SPD5 Hub will Enable PEC. SPD5 Hub will Disable parity. SPD5 Hub clears all events and pending IBI. REG_MODE = 1: SPD5 Hub will update the MR registers. SPD5 Hub will not update the NVM registers. |

## Supported I2C CCC

| S.NO | CCC | MODE | DESCRIPTION |
|------|-----|------|-------------|
| 1 | SETAASA | BROADCAST | Used to switch mode from I2C to I3C mode. Takes in effect at the next Start operation (i.e. after STOP condition). In I3C mode, This command is ignored. Supports parity check. If Parity error occurs SPD5 hub will ignore this CCC |
| 2 | SETHID | BROADCAST | SPD5 Hub updates 3-bit HID field, updates "T" bit with updated parity calculation for all devices behind Hub and stops 3-bit HID translation. In I3C Basic mode, it is illegal for host to issue this CCC. Host may issue SETHID CCC more than one time. Supports parity check. If Parity error occurs SPD5 hub will ignore this CCC |
| 3 | DEVCTRL | BROADCAST | REG_MODE = 0: SPD5 Hub will not Enable PEC in I2C mode. SPD5 Hub will not Disable parity in I2C mode. REG_MODE = 1: SPD5 Hub will update the MR registers. SPD5 Hub will not update the NVM registers. |`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SPD5", "I3C", "CCC", "I2C"],
    related: ["spd5_hub_mechanics_of_ibi_generation", "spd5_i2c_i3c_device", "spd5_hub_ccc_support_device"]
  },
  {
    id: 6,
    slug: "spd5_hub_mechanics_of_ibi_generation",
    title: "SPD5 HUB - mechanics of IBI generation",
    shortDescription: "IBI generation request enabled as per below condition. Device should be on I3C mode",
    content: `# SPD5 HUB - mechanics of IBI generation

IBI generation request enabled as per below condition.

Device should be on I3C mode. IBI_ERROR_EN bit should be enabled by ENEC CCC command.

If any of the following Error occurred:
- Temp Sensor status in MR51[3:0] and their corresponding enabled bits in MR27[3:0] asserted 1.
- Parity Error occurred during packet transmission
- PEC error when PEC mode enabled transaction
- Writing into NVM write protect register
- Writing into Protected NVM Block
- Write or Read attempt while SPD5 Hub device was busy

## Is SPD5 has error checking mechanisms?

The SPD5 hub supports some error-checking mechanisms which are parity error checking and Packet error checking. By default, Parity error checking is enabled and Packet error checking was disabled. The parity error is calculated for each byte in the data packet. The SPD5 hub was implemented on the basis of ODD parity. The I3C basic has TE0, TE1, TE2, TE3, TE4, TE5, and TE6 error detection techniques. But, the SPD5 hub only supports TE1 and TE2 error detection techniques. The packet error is calculated for each byte in the data packet except the device select code.

## SPD5 hub: IBI is supported or not?

The SPD5 hub supports the IBI feature only in I3C mode. By default, This feature is disabled. To enable IBI, Host (I3C Master) needs to write on the register of corresponding bits. If a local device has a request for IBI, SPD5 Hub forward it to Host and serves accordingly. IBI Read data send Host-based with or without PEC data based on PEC enabled.

Handed an Interrupt Arbitration based below condition:
- Among SPD5 Hub devices
- Among Local Target devices
- Between Local Target devices and own SPD5 Hub IBI interrupts
- Between Host and SPD5 Hub devices
- Among Local Target devices with Different SPD5 Hubs`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SPD5", "IBI", "I3C", "Interrupt"],
    related: ["spd5_hub_supports_i2c_i3c_ccc", "spd5_i2c_i3c_device", "spd5_hub_ccc_support_device"]
  },
  {
    id: 7,
    slug: "dsi2_introduction",
    title: "DSI2 Introduction",
    shortDescription: "The Mobile Industry Processor Interface Alliance (MIPI) developed a serial communication protocol known as the Display Serial Interface or DSI",
    content: `# DSI2 Introduction

The Mobile Industry Processor Interface Alliance (MIPI) developed a serial communication protocol known as the Display Serial Interface or DSI.

MIPI DSI2 stands for high-speed Display Serial Interface between a host processor and a display module. The DSI2 interface enables manufacturers to integrate displays to achieve high performance, low power, and low electromagnetic interference (EMI) while reducing pin count and maintaining compatibility across different vendors. The MIPI display serial interface requires fewer pin connections while maintaining the same level of performance.

![DSI2 Communication](/images/DSI2_COM_BTW_TX_RX.jpg)

## Types of PHY Layer Required for DSI2

DSI2 supports:
- D-PHY
- C-PHY
- M-PHY
- A-PHY

Only one PHY can be configured at a time of transmission.

## Major Difference Between C-PHY and D-PHY

| Feature | D-PHY | C-PHY |
|---------|-------|-------|
| Packet Structures | Same packet structure for High Speed mode and Escape Mode operations | Different packet structure for High Speed mode and Escape Mode operations |
| Distribution or Merging | By bytes | By 16-bit words |
| Serialization in High Speed Mode | Serialization with a forward clock | 3-phase encoding and serialization |
| Clock in High Speed Mode | Send or receive clock from the Clock Lane | Embed or recover clock from the Data Lane(s) |
| Continuous Clock Behavior | Applicable on the Clock Lane | Applicable on one of the Data Lane(s) |
| EoTp Packet | Applicable | Not applicable |
| Detect and Correct Errors in a Packet Header Transferred in High Speed Mode | Use ECC | Use packet header checksum, SSDC and packet header replicate |
| EoT Sync Error | Applicable | Not applicable |
| Deskew Calibration | Applicable | Not applicable |
| Minimum PPI Interface Width | 8 bits | 16 bits |
| Data Rate | 500Mbps | 100Mbps |`,
    image: dsi2ComImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "DSI2", "Display", "PHY"],
    related: ["understanding_mipi_dsi2_sublink_communication", "working_of_dsi2_layers", "spi_introduction"]
  },
  {
    id: 8,
    slug: "spd5_i2c_i3c_device",
    title: "SPD5 I2C/I3C device",
    shortDescription: "Serial Presence Deduct ie SPD stands for standard way of accessing information about the memory module. Most Memory module manufactures store the SPD information into the EEROM of the module.",
    content: `# SPD5 I2C/I3C device

Serial Presence Deduct ie SPD stands for standard way of accessing information about the memory module. Most Memory module manufactures store the SPD information into the EEROM of the module. The information sorted like module size, data and width and speed and voltage are very useful for configuration and management of the device.

SPD5 stands for Serial Presence Deduct. It has two serial interfaces SDA and SCL. It Has been developed with both I2C and I3C bus Interfaces. SPD5 Hub isolates the local devices. Local devices like temperature sensors(TS), Power Management IC (PMIC), and Registering Clock driver(RCD). The SPD5 hub is operating up to 12.5MHz on a I3C bus and 1 MHz on a I2C bus.

## SPD5 connect with I3C/I2C:

I3C/ I2C bus has two interfaces SDA and SCL. The host connected with the hub through the SDA line. SPD5 Hub is intended to interface to I2C/I3C basic buses which have multiple devices on the same bus. The device must be uniquely addressed.

The SPD5 hub passes through the commands from the host bus to the local bus based on the device address.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SPD5", "I2C", "I3C", "Memory"],
    related: ["spd5_hub_supports_i2c_i3c_ccc", "spd5_hub_mechanics_of_ibi_generation", "spd5_hub_ccc_support_device"]
  },
  {
    id: 9,
    slug: "spd5_hub_ccc_support_device",
    title: "SPD5 HUB - CCC Support device",
    shortDescription: "I3C basic specification has more common command codes (CCC). The SPD5 hub is not required to support all CCC. The SPD5 hub supports some of the CCC.",
    content: `# SPD5 HUB - CCC Support device

I3C basic specification has more common command codes (CCC). The SPD5 hub is not required to support all CCC. The SPD5 hub supports some of the CCC.

## Below mentioned CCCs are supported in SPD5 Hub

- **ENEC CCC** – Used to enable In band interrupt for SPD5 Hub and local devices.
- **DISEC CCC** – Used to disable In band interrupt (IBI) for SPD5 Hub and local devices.
- **RSTDAA CCC** – Used to switch mode from I3C to I2C. After receiving this command It reset the corresponding MR register to support I2C modes.
- **SETAASA CCC** - Used to switch mode from I2C to I3C. It doesn't support PEC mode and speed limits up to 1MHz. SPD5 Hub enters into I3C mode, This command is ignored.
- **GETSTATUS CCC** – Used to inform the host about PEC error, Parity Error, and Pending interrupt information.
- **DEVCAP CCC** – Used to inform the host, whether SPD5 Hub is support Timer based Reset or not
- **SETHID CCC** – Used to set Host ID in SPD5 Hub devices.
- **DEVCTRL CCC** – Used to set certain operations such as enable or disable PEC, and Parity function to all Devices which are connected in I3C bus.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SPD5", "CCC", "I3C", "Command"],
    related: ["spd5_hub_supports_i2c_i3c_ccc", "spd5_hub_mechanics_of_ibi_generation", "spd5_i2c_i3c_device"]
  },
  {
    id: 10,
    slug: "levels_of_driving_automation_and_role_of_aphy",
    title: "Levels of Driving Automation and the Role of A-PHY",
    shortDescription: "Are you tired of being stuck in traffic, constantly monitoring the road, and worrying about collisions? Well, the good news is that driving automation technology is advancing quickly.",
    content: `# Understanding the Levels of Driving Automation and the Role of A-PHY in Enabling Advanced Automation

Are you tired of being stuck in traffic, constantly monitoring the road, and worrying about collisions? Well, the good news is that driving automation technology is advancing quickly, and we may soon be able to enjoy fully automated driving experiences. However, it's essential to understand the different levels of driving automation to know what to expect from these advancements.

The Society of Automotive Engineers (SAE) has developed a set of standardized categories to describe the extent to which a vehicle is capable of operating itself without human intervention. These categories are often referred to as the levels of driving automation, and they range from Level 0 to Level 5.

## Level 0: No Automation
At Level 0, the driver is responsible for all aspects of driving, including steering, accelerating, braking, and monitoring the road. There are no automated driving features in the vehicle.

## Level 1: Driver Assistance
Level 1 introduces some basic automated features to the vehicle, such as adaptive cruise control, lane departure warning, and automatic emergency braking. These features can assist the driver with either steering or braking/accelerating, but not both simultaneously. The driver is still responsible for monitoring the road and taking control of the vehicle as needed.

## Level 2: Partial Automation
Level 2 takes things a step further, with the vehicle now equipped with systems that can assist the driver with both steering and braking/accelerating simultaneously. However, the driver is still responsible for monitoring the road and taking control of the vehicle as needed. Examples of Level 2 automation include Tesla's Autopilot and General Motors' Super Cruise.

## Level 3: Conditional Automation
At Level 3, the vehicle is capable of operating itself in certain situations, such as highway driving, but the driver must still be ready to take over control of the vehicle when prompted. This level of automation requires the vehicle to have advanced sensors and processing power to detect and respond to changes in the environment. Examples of Level 3 automation include Audi's Traffic Jam Pilot and Mercedes-Benz's Drive Pilot.

## Level 4: High Automation
Level 4 brings us even closer to fully automated driving, with the vehicle capable of operating itself without the need for human intervention in most driving scenarios. The driver may still need to take control in certain situations, such as extreme weather conditions or unmapped areas. This level of automation requires the vehicle to have highly advanced sensors and processing power to detect and respond to a wide range of situations. Examples of Level 4 automation include Waymo's self-driving taxis and Cruise's autonomous vehicles.

## Level 5: Full Automation
Finally, Level 5 is the ultimate goal of driving automation technology, where the vehicle is capable of operating itself without any human intervention in all driving scenarios and environments. However, currently, no commercially available vehicles have achieved this level of automation, and there are still significant challenges to overcome.

![Levels in A-PHY](/images/level_in_aphy.png)

Another crucial aspect of driving automation technology that contributes to levels 2-5 is the ability to move sensor data efficiently between different parts of the vehicle. This is where A-PHY comes in.

A-PHY is a new standard for high-speed communications within vehicles, specifically designed to support the needs of autonomous driving. It provides a robust, reliable, and secure way to transfer large amounts of sensor data between different parts of the vehicle, such as cameras, lidar, and radar systems.

By moving sensor data efficiently, A-PHY can help enable more advanced levels of automation, from Level 2, where the vehicle can assist with steering and braking/accelerating, to Level 5, where the vehicle can operate itself in all driving scenarios and environments.

For example, in a Level 4 autonomous vehicle, the vehicle must be able to process large amounts of sensor data quickly and accurately to make decisions about the vehicle's actions. With A-PHY, the vehicle can transfer data between sensors and the vehicle's central processing unit (CPU) in real-time, ensuring that the vehicle can respond to changing conditions on the road quickly and safely.

In conclusion, A-PHY is an essential component of driving automation technology that can help enable more advanced levels of automation by moving sensor data efficiently between different parts of the vehicle. As automated driving technology continues to evolve, it is likely that we will see more advancements in communication standards like A-PHY that will further improve the safety and reliability of these systems.`,
    image: levelInAphyImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["Automation", "A-PHY", "ADAS", "Autonomous Driving"],
    related: ["aphy_with_serializers_and_deserializers", "spi_introduction", "mipi_i3c_understanding"]
  },
  {
    id: 11,
    slug: "working_of_dsi2_layers",
    title: "WORKING OF DSI2 LAYERS",
    shortDescription: "A conceptual view of DSI organizes the interface into several functional layers.",
    content: `# WORKING OF DSI2 LAYERS

![DSI2 Layers](/images/dsi2_layers.jpg)

A conceptual view of DSI organizes the interface into several functional layers.

## PHY Layer
The PHY Layer specifies the Transmission medium (electrical conductors), the input/output circuitry, and the clocking mechanism that captures "ones" and "zeroes" from the serial bit stream. This part of the Specification documents the characteristics of the Transmission medium, the electrical parameters for signalling, and the timing relationship between clock and Data Lanes. The mechanism for signalling Start of Transmission (SoT) and End of Transmission (EoT) is specified, as well as other "out of band" information that can be conveyed between transmitting and receiving PHYs. Bit level and byte-level synchronization mechanisms are included as part of the PHY.

## Lane Management Layer
DSI is Lane-scalable for increased performance. The number of data Lanes maybe 1, 2, 3, or 4 depending on the bandwidth requirements of the application. For the D Option (that uses the D-PHY physical layer), the transmitter side of the interface distributes bytes of the outgoing data stream to one or more Lanes ("distributor" function). On the receiving end of the D Option, the interface collects bytes from the Lanes and merges them together into a recombined data stream that restores the original stream sequence ("merger" function). For the C Option (that uses the C-PHY physical layer), this layer exclusively distributes or collects byte pairs (i.e. 16-bits) to or from the data Lanes.

## Protocol Layer
At the lowest level, the DSI protocol specifies the sequence and value of bits and bytes traversing the interface. It specifies how bytes are organized into defined groups called Packets. The protocol defines required headers for each Packet, and how header information is generated and interpreted. The transmitting side of the interface appends header and error-checking information to data being transmitted. On the receiving side, the header is stripped off and interpreted by corresponding logic in the receiver. Error checking information may be used to test the integrity of incoming data. The DSI protocol also documents how Packets may be tagged for interleaving multiple command or data streams, to separate destinations using a single DSI.

## Application Management Layer
This layer describes higher-level encoding and interpretation of data contained in the data stream. Depending on the display subsystem architecture, it may consist of pixels or coded Bit streams having a prescribed format, or of commands that are interpreted by the display controller inside a display module. The DSI Specification describes the mapping of pixel values, Bitstreams, commands, and command parameters to the bytes in the Packet assembly. For the C Option (that uses the C-PHY physical layer), this layer exclusively distributes or collects byte pairs (i.e. 16-bits) to or from the data Lanes.`,
    image: dsi2LayersImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "DSI2", "Layers", "Protocol"],
    related: ["dsi2_introduction", "understanding_mipi_dsi2_sublink_communication", "spi_introduction"]
  },
  {
    id: 12,
    slug: "ddr5rcd01_drives_high_speed_data_transfer",
    title: "DDR5RCD01 Drives High-Speed Data Transfer for Next-Generation Computing",
    shortDescription: "DDR5RCD01 is a critical component in DDR5 memory architecture that enables faster and more efficient data transfer in modern computing systems.",
    content: `# How DDR5RCD01 Drives High-Speed Data Transfer for Next-Generation Computing

DDR5RCD01 is a critical component in DDR5 memory architecture that enables faster and more efficient data transfer in modern computing systems. As the latest memory technology, DDR5 provides increased bandwidth and support for larger densities of memory. DDR5RCD01 plays a vital role in this by regulating the clock signal that controls the data transfer rate, ensuring that the data is transferred quickly and accurately without any errors or delays.

The registered clock driver (RCD) acts as a traffic controller that buffers the memory address and command signals to ensure that they are delivered to the memory modules at the right time. This is crucial because DDR5 memory operates at high speeds, and timing is critical to ensure that data is processed accurately.

In addition to managing the data transfer rate, DDR5RCD01 supports higher densities of memory. DDR5 memory can support up to 256GB per module, which is a significant increase compared to DDR4, which can only support up to 64GB per module. The RCD helps to manage the larger amounts of data by ensuring that the data is transferred efficiently and accurately, preventing data loss or errors.

Overall, DDR5RCD01 is a crucial component in modern computing systems, enabling efficient data transfer and maximizing DDR5 memory performance. With the adoption of DDR5 memory increasing in the coming years, DDR5RCD01 will become an increasingly important component in computer memory systems.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["DDR5", "Memory", "RCD", "Computing"],
    related: ["spd5_hub_supports_i2c_i3c_ccc", "spd5_i2c_i3c_device", "spd5_hub_ccc_support_device"]
  },
  {
    id: 13,
    slug: "aphy_with_serializers_and_deserializers",
    title: "A-PHY With Serializers and Deserializers",
    shortDescription: "Serializers and deserializers, commonly known as SerDes, are integrated circuits (ICs) that enable the transmission of parallel data over a high-speed serial link.",
    content: `# What is Serializers and deserializers, How it is related in A-PHY

Serializers and deserializers, commonly known as SerDes, are integrated circuits (ICs) that enable the transmission of parallel data over a high-speed serial link. The transceiver converts parallel data to serial data on the transmitter side and vice versa on the receiver side. This technology is widely used in various applications, including high-speed digital bus technologies and next-generation advanced driver-assistance systems (ADAS).

SerDes technology is essential in high-speed digital bus technologies, which are used to transfer data between different components within a system(Example : Camera to Display). Traditional parallel buses are limited in terms of distance and bandwidth, which is why high-speed serial buses are increasingly preferred. SerDes chips help overcome these limitations by transmitting parallel data over a serial link, enabling greater distances and higher bandwidths.

In ADAS, SerDes technology plays a crucial role in transmitting data from sensors such as cameras, radar, and lidar with high resolution and bandwidth requirements. These sensors produce large amounts of data, which needs to be transmitted to the central processing unit (CPU) for analysis and decision-making. The asymmetrical design of SerDes chips is well-suited to this task, with a high-speed downlink for data transit and a slower uplink for monitoring and control.

The transmitter section of a SerDes chip is responsible for converting parallel data into a serial data stream, which is transmitted over the serial link. On the other hand, the receiver section converts the serial data back into parallel data. The speed of the serial link can be adjusted to meet the bandwidth requirements of the system. Additionally, SerDes chips can be designed to support different protocols, such as PCI Express, USB, and Ethernet.

In summary, SerDes chips are integral components of high-speed digital bus technologies and next-generation ADAS systems. They enable the transmission of large amounts of data over long distances with high throughput and bandwidth. The asymmetrical design of SerDes chips is well-suited to the demands of remote sensors in vehicles, providing high-speed output without excessive complexity, power requirements, or cost. As technology continues to advance, SerDes chips will remain a vital part of high-speed data transmission systems.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SerDes", "A-PHY", "ADAS", "Communication"],
    related: ["levels_of_driving_automation_and_role_of_aphy", "spi_introduction", "mipi_i3c_understanding"]
  },
  {
    id: 14,
    slug: "mipi_i3c_cts_for_mipi_i3c_devices",
    title: "MIPI I3C : CTS for MIPI I3C devices",
    shortDescription: "CTS stand for Conformance Test suite. These are series of tests designed to ensure the I3C devices are interoperable.",
    content: `# What is CTS MIPI I3C Devices ?

CTS stand for Conformance Test suite. These are series of tests designed to ensure the I3C devices are interoperable. CTS helps system designers test one device with other devices. As the adoption of MIPI I3C Standard grows CTS will play a very significant role to ensure the devices stay compliant to I3C specification.

The CTS tests are designed to determine whether a given product conforms to a subset of the common I3C requirements defined in both I3C v1.1.1 and I3C Basic v1.1.1 (i.e., the requirements that are common to both specifications, since I3C Basic is a subset of I3C).

The scope of current CTS version is intentionally limited, in order to meet time-to-market requirements imposed by the rapid adoption of I3C in the marketplace, focusing only on:

- SDR-only Devices without optional I3C capabilities,
- All Controller and Target Error Detection and Recovery methods, and
- Basic HDR Enter/tolerance/Restart/Exit procedures. However, specific HDR Modes are not covered by this version of the CTS.

In future the CTS will be expanded to support advanced commands as well.

The CTS tests are organized as Controller DUT tests (Device Under Test) and Target DUT tests. Tests for each are presented in the order in which they appear in the I3C specification.

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "CTS", "Testing"],
    related: ["mipi_i3c_understanding", "mipi_i3c_introduction", "mipi_i3c_advantages"]
  },
  {
    id: 15,
    slug: "mipi_i3c_understanding",
    title: "MIPI I3C : Understanding of MIPI I3C Protocol",
    shortDescription: "As the usage of sensors in mobile devices increases day by day, it's becoming complicated for designers to use existing methods ...",
    content: `# Understanding of MIPI I3C protocol and usage for sensor, other communication interface application

## Introduction
As the usage of sensors in mobile devices increases day by day, it's becoming complicated for designers to use existing methods (I2C and SPI).So the members of MIPI alliance introduced an Improved Inter Integrated Circuits. I3C is an evolution of I2C, low-speed peripherals and sensors in computer systems. I3C adds a significant number of system interface features while retaining backward compatibility with existing I2C slave devices while native I3C devices support higher data rates, similar to Serial peripheral interface (SPI). Both I2C and I3C are having SCL and SDA lines but, I2C supports only four speed modes (100KHz, 400KHz, 1MHz, 3MHz) I3C supports speed up to 12.5MHz in single data rate mode. I3C has high throughput bit rate up to12.5Mbps. The main purpose of MIPI I3C is,

- To standardize sensor communication,
- To reduce the number of physical pins used in sensor system integration,
- To support low power, high speed and other critical features which are currently not covered by I2C and SPI.

![I3C Bus with I3C and I2C Devices](/images/i3c_bus_with_i3c_and_i2c_devices.png)

## I3C Capabilities:
MIPI I3C has following capabilities which are not supported by I2C protocol,

**Dynamic address assignment:**
In I3C address can be assigned dynamically unlike I2C which is having static address.

**Hot-join feature:**
Hot join sensors can be connected on the same bus can be powered off until they are needed. I3C slaves can join after the bus configuration.

**I2C slave:**
Legacy I2C devices present in an I3C bus; I3C master devices can conditionally communicate to such legacy devices; constraints on speed and capabilities are applicable.

**Secondary master:**
Takes temporary control from main master and passes control back to the main master once control tasks are completed.

**In band interrupt:**
I3C provides in-band interrupts within the 2-wire interface, which drastically reduces device pin count and signal paths, and enables integration of additional sensors in a device.

**Standard CCC commands:**
Standard CCC commands to communicate with I3C slaves. Slaves recognize the command and responds back to master on I3C bus communication. These commands are global for all I3C devices unlike I2C.

![I3C Capabilities](/images/i3c_capabilities.png)

## Basic Operations:
I3C is a two wire bidirectional serial bus, which is having SCL clock line and SDA data line. Speed grades with data transfer rate up to 12.5Mbps with 12.5 MHz clock frequency in SDR mode. I3C bus starts transaction with START condition (SCL should be held high and SDA should go from high to low), following that address of the slave device or broadcasted address with W/R bit should be sent. After initial start address arbitration may happen in I3C bus the device which has lowest value address would win. For broadcasted address, all the slave devices on I3C bus should send acknowledgment (except I2C slaves). For slave address, only particular slave sends acknowledgment. After ACK I3C bus continues with write, read or CCC command data. I3C master can choose to STOP (SCL should be held high and SDA should go from low to high) or can give repeated start after a transaction (by using host controller command).

![I3C Bus Communication Format](/images/i3c_bus_communication_format.png)

## Advantages of I3C over I2C:

### Speed:
I²C supports a limited range of speeds. Hosts supporting the multi- megabit speeds are rare. Support for the Fm+ 1 Mbps speed is more widespread, since its electronics are simple variants of what is used at lower speeds. Many devices do not support the 400 kbps speed. I²C nodes implemented in software (instead of dedicated hardware) may not even support the 100 kbps speed. So, the whole range defined in the specification is rarely usable. I3C speed is 12.5MHz which is much faster compared to I2C speed modes. I3C provides raw bit rate of 12.5Mbps in the baseline SDR default mode. Since I3C is using strong pull up with push pull mode for transaction gives high speed rate with power efficiency.

![Speed and Data Rate for I3C vs I2C](/images/speed_and_data_rate_for_i3cvs_i2c.png)

### Dynamic addressing:
Static address is an issue in I2C devices. A given address may be used by a number of different protocol-incompatible devices in various systems, and hardly any device types can be detected at runtime. For example, 0x51 may be used by a 24LC02 or 24C32 EEPROM, with incompatible addressing; or by a PCF8563 RTC, which cannot reliably be distinguished from either (without changing device state, which might not be allowed). The only reliable configuration mechanisms available to hosts involve out-of-band mechanisms such as tables provided by system firmware, which list the available devices. In I3C each device connected to the I3C bus needs to have a unique address which is used for subsequent transactions. This address is assigned by the I3C main master, either during the initialization of the bus or when a new device is connected to the already configured I3C bus. This process is called dynamic address assignment. This reduces static address and address confliction issues.

![Dynamic Address Assignment Process](/images/dynamic_address_assignment_process.png)

## Standard commands:
I2C does not have any standardized command. The commands used for I2C are decided by different vendors. For example, Pressure sensor and temperature sensors are having different command formats. But I3C has standard CCC commands which are used to,

- Enable and disable events on I3C bus.
- To set/get maximum write and read lengths for data.
- To assign the dynamic address or to reset/reassign the dynamic address.
- To enable activity states
- To enable test modes

I3C contains two ways of CCC command transfer,

- Broadcast CCC model(will be send to all I3C slave devices on bus)
- Direct CCC model(will be send to particular I3C slave device on bus)

## In band Interrupt support:
In I3C master allows the slave to give interrupt during I3C communication which currently require dedicated line on I2C. I3C allows slave to initiate I3C bus after available condition. Slave device with lowest address wins the arbitration. But I2C needs separate pins for interrupts and sleep logics. In addition I2C does not have ability to initiate communication. In MIPI I3C Interrupt functionality can be enabled or disabled using CCC commands. I3C master will give ACK to allow ACK/NACK for IBI event after checking the capability of slave device.

## Power saving modes:
In I3C it is not necessary for all slaves to be activated when the I3C bus is initially powered up. There are two scenarios:

- Some of the slaves can be physically inserted into the bus later or they have been present but not activated.
- Slaves can be powered on after the bus has been active for some time.

The process of activating such slaves into the bus is known as hot- join. The hot-join feature enables the master to assign a dynamic address to the slave when the request is made by the slaves. In I2C all these special features needs separate GPIO pins which increase the power and area requirement.

## I3C Applications:
MIPI I3C is accepted in various industries because of its speed, power and area efficiency. I2C is typically used to support multiple sensors but having drawback in sensor interconnections. It increases the area requirement which affects power and cost as well. I3C is an absolute solution for integrating sensors with minimum number of connections, power and cost efficiency. I3C is used in smart phones, virtual reality, robot drones, medical instruments, autonomous vehicles, industrial equipments, all in one computers and TV remotes, accelerometers, touch screens, time of flight cameras, sonic/ultrasonic sensors, environmental sensors, near field communication, infrared or ultra violet sensing.

![I3C Related Applications](/images/i3c_related_applications.png)

## Summary
MIPI I3C Basic is a subset of MIPI I3C that bundles the most commonly needed I3C features for developers and other standards organizations. The mobile ecosystem and broader system integrator community can efficiently use these capabilities as an alternative to I2C. MIPI I3C interface has been developed to ease sensor system design architectures in mobile wireless products by providing fast, low cost, low power digital interface for sensors. Implementing I3C increases the flexibility mobile terminal system designers have to support an ever expanding sensor subsystem as efficiently and at as low cost as possible. MIPI I3C satisfies broad range of applications that extends beyond smart phones. Over time MIPI I3C could conceivably become much more than a standardized sensor interface and develop into a de facto bus communication standard for touch sensing, always-on and low resolution cameras, acoustics, environmental sensors and transducers that currently use I²C, SPI, UART and others.

## References:
- MIPI I3C Basic v1.0 Specification
- Introduction to the MIPI I3C Standardized Sensor Interface (white paper series)
- MIPI Webinar I3C Developer Guide 180207 PDF_0
- A Developer's Guide to MIPI I3C Implementation
- MIPI Alliance Releases I3C Basic Interface Specification for Widespread Implementation in Mobile and Beyond
- Specification for I3C Host controller interface`,
    image: i3cBusImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "Protocol", "Sensor"],
    related: ["mipi_i3c_introduction", "mipi_i3c_advantages", "mipi_i3c_cts_for_mipi_i3c_devices"]
  },
  {
    id: 16,
    slug: "mipi_i3c_introduction",
    title: "MIPI I3C : Introduction",
    shortDescription: "When is comes to I3C the terminology is mixed among most the designers. Some engineers called is I3C Target and Some engineers call it I3C Slave ...",
    content: `# WHAT IS MIPI I3C ?

MIPI I3C is a scalable, medium-speed, utility and control bus for connecting peripherals to an application processor.

MIPI I3C bus design incorporates key attributes from both I2C-bus and SPI interfaces to provide a unified, high- performance, low-power interface solution that delivers a flexible upgrade path for I2C-bus and SPI system designers I3C takes the best of SPI and I2C Combined

![I2C I3C Bus Target with Controller](/images/i2c_i3c_bus_target_with_controller.png)

As shown in bus diagram, I2C-bus targets can co-exist with I3C controllers operating at 12.5 MHz, enabling the migration of existing I2C-bus designs to the I3C specification. Conversely, I3C targets operating at typical 400 kHz or 1 MHz I2C-bus speeds can coexist with existing I2C-bus controllers. There can be systems where I3C devices and I2C can exist on the same system bus

Both I2C, I3C are implemented with standard CMOS I/O pins using a two-wire interface, but unlike I2C it supports in-band interrupts enabling target devices to notify controllers of interrupts, a design feature that eliminates the need for a separate general-purpose input/output (GPIO) interrupt for each target, reducing system cost and complexity. Support for dynamic address assignments help minimize pin counts, which is key for accommodating space-constrained form factors. This helps system designers design low pin count system with high performance

I3C supports a multi-drop bus that, at 12.5MHz, supports standard data rate (SDR) of 10 Mbps with options for high- data-rate (HDR) modes. The net result is that I3C offers a leap in performance and power efficiency

![Energy Consumption vs Data Rates](/images/energy_consumption_vs_data_rates.png)

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: i2cI3cBusImage,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "Introduction", "Protocol"],
    related: ["mipi_i3c_understanding", "mipi_i3c_slave_or_target", "mipi_i3c_controller"]
  },
  {
    id: 17,
    slug: "mipi_i3c_slave_or_target",
    title: "MIPI I3C Slave or I3C Target",
    shortDescription: "When is comes to I3C the terminology is mixed among most the designers. Some engineers called is I3C Target and Some engineers call it I3C Slave....",
    content: `# MIPI I3C Slave or I3C Target

Is it I3C Slave or I3C Target? When is comes to I3C the terminology is mixed among most the designers. Some engineers called is I3C Target and Some engineers call it I3C Slave. Technically both I3C Slave and Target are the same.

The confusion has come from the spec. In the I3C Spec before v1.1.1 I3C Device was called I3C Slave and later in the newer specs it's called as I3C Target.

The later version of the spec had more changes as well. The slave reset pattern is called Target reset pattern and the commands DEFSLVS CC is called DEFTGTS CCC

| Deprecated Prior Term I3C and I3C Basic before v1.1.1 | Replacement Term I3C and I3C Basic v1.1.1 and Later |
|--------------------------------------------------------|------------------------------------------------------|
| Slave | Target |
| Slave Reset Pattern | Target Reset Pattern |
| DEFSLVS CC | DEFTGTS CCC |
| Error Types S0 through S6 | Error Types TE0 through TE6 |

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "Slave", "Target"],
    related: ["mipi_i3c_introduction", "mipi_i3c_controller", "mipi_i3c_understanding"]
  },
  {
    id: 18,
    slug: "mipi_i3c_controller",
    title: "MIPI I3C or I3C Controller",
    shortDescription: "When is comes to I3C the terminology is mixed among most the designers. Some engineers called is I3C Master and ...",
    content: `# Is it I3C Master or I3C Controller?

When is comes to I3C the terminology is mixed among most the designers. Some engineers called is I3C Master and Some engineers call it I3C Controller. Technically both I3C Master and Controller are the same.

The confusion has come from the spec. In the I3C Spec before v1.1.1 I3C Host was called I3C Master and later in the newer specs it's called as I3C Controller.

The later version of the spec had more changes as well. The current master was called Active Master and the Secondary master was called secondary controller and the main master was called Primary master.

| Prior Term I3C and I3C Basic before v1.1.1 | Replacement Term I3C and I3C Basic v1.1.1 and Later |
|---------------------------------------------|------------------------------------------------------|
| Master | Controller |
| Current Master | Active Controller |
| Secondary Master | Secondary Controller |
| Main Master | Primary Controller |
| New Master (relating to Handoff) | New Active Controller |
| Master-capable Device | Controller-capable Device |
| Mastership, Mastering the Bus, etc. | Controller Role, Control of the Bus, etc. |
| Mastership Request | Controller Role Request |

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "Master", "Controller"],
    related: ["mipi_i3c_introduction", "mipi_i3c_slave_or_target", "mipi_i3c_understanding"]
  },
  {
    id: 19,
    slug: "mipi_i3c_vs_spi_limitations_of_i2c",
    title: "MIPI I3C vs SPI : Limitations of I2C",
    shortDescription: "SPI is four wire interfaces and has many different implementations because there is based on the manufactures ...",
    content: `# What are the advantages of I3C over SPI ?

SPI is four wire interfaces and has many different implementations because there is based on the manufactures.

SPI also requires one additional chip select wire for each additional device on the bus, which quickly becomes cost-prohibitive in terms of number of pins and wires, and power.

I3C overcomes the limitations over SPI, as it uses only two wires and is well defined. I3C covers most of the speed range of SPI, but is not intended for the highest speed grades that really only work well with a point-to-point interface, such as for SPI Flash.

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.

# What are the limitations of I2C over I3C ?

While I2C has seen biggest adoption over the years, almost all the major components interface has a default I2C interface. However it lacks some critical features – especially as mobile and mobile-influenced systems continue to integrate more and more sensors and other components. As a system has more sensors or I2C devices with varying bandwidth requirement I2C has come as bottleneck.

Some of the critical I2C limitations include: 7-bit fixed address, no in-band interrupt (requires additional wires/pins), limited data rate, and the ability of Targets to stretch the clock (thus potentially hanging up the system, etc.). I3C aims both to fix these limitations, and to add many other enhancements.

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "SPI", "I2C"],
    related: ["mipi_i3c_advantages", "mipi_i3c_limitations_of_i2c", "mipi_i3c_understanding"]
  },
  {
    id: 20,
    slug: "mipi_i3c_limitations_of_i2c",
    title: "MIPI I3C : Limitations of I2C",
    shortDescription: "While I2C has seen biggest adoption over the years, almost all the major components interface has a default I2C interface ...",
    content: `# What are the limitations of I2C over I3C ?

While I2C has seen biggest adoption over the years, almost all the major components interface has a default I2C interface. However it lacks some critical features – especially as mobile and mobile-influenced systems continue to integrate more and more sensors and other components. As a system has more sensors or I2C devices with varying bandwidth requirement I2C has come as bottleneck.

Some of the critical I2C limitations include: 7-bit fixed address, no in-band interrupt (requires additional wires/pins), limited data rate, and the ability of Targets to stretch the clock (thus potentially hanging up the system, etc.). I3C aims both to fix these limitations, and to add many other enhancements.

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "I2C", "Limitations"],
    related: ["mipi_i3c_vs_spi_limitations_of_i2c", "mipi_i3c_advantages", "mipi_i3c_understanding"]
  },
  {
    id: 21,
    slug: "spd5_hub_serial_presence_deduct_hub_for_ddr5_modules",
    title: "SPD5 Hub : Serial Presence Deduct Hub for DDR5 Modules",
    shortDescription: "Serial Presence Deduct ie SPD stands for standard way of accessing information about the memory module. Most Memory module manufactures store the SPD information ...",
    content: `# SPD5 Hub : Serial Presence Deduct Hub for DDR5 Modules

## What is SPD ?
Serial Presence Deduct ie SPD stands for standard way of accessing information about the memory module. Most Memory module manufactures store the SPD information into the EEROM of the module. The information sorted like module size, data and width and speed and voltage are very useful for configuration and management of the device.

## What is SPD5 Hub ?
SPD5 Hub specification allows management and interface of the DDR5 SPD EEROM. SPD 5118 is referred as SPD5. The SPD5118 specification allows access of Temperature sensor and DDR5 EEPROM Data.

## How to interface of SPD5 Hub ?
SPD5 Hub has interfaces I2C and I3C to access the SPD5 registers. I3C is next generation interface from MIPI as replacement towards I2C protocol.

SPD5 Hub I3C Controller allows designers to easily configure the SPD Hub registers and access the Temperature sensor data of the DDR5 module.

## What are the advantages of SPD5 Hub ?
SPD5 Hub works on I3C bus . I3C bus provides fast data rates and low latency to access the registers. The specification is compatible with JEDEC DDR5 . ie JESD300-5A)

SPD5 Hub also supports temperature sensor and advanced reliability features.

Maxvy Technologies provides state of art SPD5 Hub controller and many other MIPI IP like I3C Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["SPD5", "DDR5", "Memory", "Hub"],
    related: ["spd5_hub_supports_i2c_i3c_ccc", "spd5_i2c_i3c_device", "ddr5rcd01_drives_high_speed_data_transfer"]
  },
  {
    id: 22,
    slug: "mipi_i3c_advantages",
    title: "MIPI I3C : Advantages of MIPI I3C",
    shortDescription: "MIPI I3C has all the features of I²C in terms of simplicity, low pin count, easy board design, and multi-drop (vs. point-to-point)",
    content: `# What are the main advantages of MIPI I3C ?

MIPI I3C has all the features of I²C in terms of simplicity, low pin count, easy board design, and multi-drop (vs. point-to-point), but also provides the higher data rates, simpler pads, and lower power of SPI.

MIPI I3C then adds higher throughput for a given frequency, In-Band Interrupts (from Target to Controller), Dynamic Addressing, advanced power management, and Hot-Join. In a MIPI I3C bus a slave can be dynamically be added and removed.

In band interrupts are very useful features as the interrupts can be sent to the host without adding additional pins.

MIPI I3C has higher throughput over I2C as well as SPI.

Maxvy Technologies provides state of art I3C Controller and many other MIPI IP like I3C master and slave Controller. Maxvy Provides several design and Verification IP for SoC design and development.`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["MIPI", "I3C", "Advantages", "Protocol"],
    related: ["mipi_i3c_understanding", "mipi_i3c_introduction", "mipi_i3c_vs_spi_limitations_of_i2c"]
  },
  {
    id: 23,
    slug: "mipi_i3c_supported_devices",
    title: "MIPI I3C - SUPPORTED DEVICES",
    shortDescription: "FOR MORE INFO",
    content: `# MIPI I3C - SUPPORTED DEVICES

## MCUs & MPU's
- Qualcomm – SM8150
- NXP – MX RT500 & MX RT600
- ASPEED – AST2600
- TEXAS INSTRUMENTS – DRA829JM, DRA829VM & DRA821U/ DRA821A
- HISILICON – HIKEY970 (I3C Provision pins)
- MEDIATEK – MT8385
- NXP - LPC557x/8x Family

![Qualcomm Snapdragon](/images/qualcomm_snapdragon.jpg)

## SENSOR DEVICES
- PRESSURE SENSOR – LPS22HH
- WATER PROOF PRESSURE SENSOR - LPS27HHW
- IMU SENSORS – BMI263, LSM6DSOX, ICM42605, ICM 42688
- TEMPERATURE SENSOR – TS5111
- MAGNETIC SENSOR – MMC5633NJL
- EEPROM – SPD5118

![LSM6DSOX](/images/lsm6dsox.png)

## MULTIPLEXER & EXPANDER DEVICES
- RENESAS – IMX3112 (1:2), IMX3102 (2:1)
- RENESAS – IXP31x4
- DIODES - PI3CSW12 I3C 1:2 Multiplexer

![Multiplexer](/images/multiplexer.jpg)

## FPGA BOARDS
- LATTICE SEMICONDUCTOR – ICE40 Ultra Plus Family, MachX03D, ECP5-5G FPGA
- GOWIN SEMICONDUCTORS CORP – GW1N-9 device

![Lattice FPGA](/images/latticeFPGA.jpg)

## TEST DEBUGGERS AND ANALYZER DEVICES
- INTROSPECT TECHNOLOGY – SV4E-I3C
- KEYSIGHT TECHNOLOGIES - N8843A I3C PROTOCOL TRIGGERING AND DECODE FOR INFINIIUM SERIES OSCILLOSCOPE
- PRODIGY – I3C PROTOCOL ANALYZER
- TEKTRONIX – 4SERIES Mixed Signal Oscilloscope
- SPEKTRA – S-TEST

![I3C Debugger](/images/i3cDebugger.jpg)`,
    image: null,
    buttonText: "For more info",
    icon: "info",
    // tags: ["MIPI", "I3C", "Devices", "Support"],
    related: ["mipi_i3c_understanding", "mipi_i3c_introduction", "mipi_i3c_advantages"]
  },
  {
    id: 24,
    slug: "creating_custom_ip_block_in_vivado",
    title: "Creating a custom IP block in Vivado",
    shortDescription: "Create a custom AXI IP block in Vivado by integrating custom VHDL code with the Zynq SoC. This example demonstrates AXI register-based communication using a multiplier IP.",
    content: `# Creating a custom IP block in Vivado

[Click here to read the full article](https://www.fpgadeveloper.com/2014/08/creating-a-custom-ip-block-in-vivado.html)`,
    image: null,
    buttonText: "Read more",
    icon: "arrow",
    // tags: ["Vivado", "FPGA", "IP", "AXI"],
    related: ["axi_communication_in_ucie", "spi_introduction", "ddr5rcd01_drives_high_speed_data_transfer"]
  },
  {
    id: 25,
    slug: "synchronous_vs_asynchronous_circuits",
    title: "SYNCHRONOUS CIRCUITS VS ASYNCHRONOUS CIRCUITS",
    shortDescription: "DOWNLOAD DOCUMENT",
    content: `# SYNCHRONOUS CIRCUITS VS ASYNCHRONOUS CIRCUITS

[Download Document](/images/synchronous_vs_asynchronous_circuits_mod.pdf)`,
    image: null,
    buttonText: "Download Document",
    icon: "download",
    // tags: ["Synchronous", "Asynchronous", "Digital", "Circuits"],
    related: ["spi_introduction", "axi_communication_in_ucie", "ddr5rcd01_drives_high_speed_data_transfer"],
    isDownload: true,
    downloadUrl: "/images/synchronous_vs_asynchronous_circuits_mod.pdf"
  },
  {
    id: 26,
    slug: "mipi_i3c_white_paper_v095",
    title: "MIPI I3C white paper v0.95",
    shortDescription: "Understanding of MIPI I3C protocol and usage for sensor, other communication interface application",
    content: `# MIPI I3C white paper v0.95

[Download White Paper](/images/understanding_of_mipi_i3c_white_paper_v0.95.pdf)`,
    image: null,
    buttonText: "Download Document",
    icon: "download",
    // tags: ["MIPI", "I3C", "White Paper", "Protocol"],
    related: ["mipi_i3c_understanding", "mipi_i3c_introduction", "mipi_i3c_advantages"],
    isDownload: true,
    downloadUrl: "/images/understanding_of_mipi_i3c_white_paper_v0.95.pdf"
  }
];

export const getArticleBySlug = (slug: string): KnowledgeArticle | undefined => {
  return knowledgeArticles.find(article => article.slug === slug);
};

export const getRelatedArticles = (slug: string, limit: number = 3): KnowledgeArticle[] => {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  
  const related = article.related
    .map(relatedSlug => getArticleBySlug(relatedSlug))
    .filter((a): a is KnowledgeArticle => a !== undefined);
  
  return related.slice(0, limit);
};