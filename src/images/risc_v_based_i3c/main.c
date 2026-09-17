/*******************************************************************************
 * (c) Copyright 2016-2017 Microsemi SoC Products Group. All rights reserved.
 *
 * This SoftConsole example project demonstrates how to configure and use the
 * MiV_RV32IM_L1_AHB system timer.
 *
 * Please refer README.TXT in the root folder of this project for more details.
 * Change the frequency
 */
#include "riscv_hal.h"
#include "hw_platform.h"
#include "core_uart_apb.h"
#include "core_gpio.h"
#include "hw_macros.h"
#include <stdio.h>
#include <stdint.h>


#define IDEAL_TIME_ADDR      0x70000000UL
#define WR_DATA_PORT_ADDR    0x70000014UL
#define SLV_WR_DATA_PORT_REG 0x7000009CUL
#define RD_DATA_PORT_REG     0x70000018UL
#define SLV_ADDR_REG         0x70000008UL
#define SLV_ADDR_REG_SLV     0x70000080UL
#define CMD_TRANS_REG0       0X7000000CUL
#define CMD_TRANS_REG1       0X70000010UL
#define CLK_PORT_ADDR        0X70000004UL
#define DAT_REG_MAS          0x7000004CUL
#define MAS_INT_REG            0x70000038UL
#define SLV_INT_REG            0x70000094UL
#define RD_DATA_PORT_REG_SLV   0x700000A0UL
#define BCR_REG                0x70000084UL
#define DAT_REG0               0x7000004CUL
#define DAT_REG1               0x70000050UL
#define SLV_BCR_REG            0x70000084UL
#define SLV_DCR_REG            0x70000088UL
#define SLV_PID_REG0           0x700000b0UL
#define SLV_PID_REG1           0x700000b4UL
#define SOFT_RESET_REG          0x70000030UL
#define DEBUG_REG              0x70000054UL



/*-----------------------------------------------------------------------------
 * UART instance data.
 */
UART_instance_t g_uart;

/*-----------------------------------------------------------------------------
 * GPIO instance data.
 */

gpio_instance_t g_gpio_in;
gpio_instance_t g_gpio_out;

/*-----------------------------------------------------------------------------
 * Global state counter.
 */
uint32_t g_state = 1;

/*-----------------------------------------------------------------------------
 * System Tick interrupt handler
 */
void SysTick_Handler(void) {
    uint32_t stable;
    uint32_t gpout;

    stable = GPIO_get_inputs(&g_gpio_in);
    gpout = ~stable & 0x000000F0;

    g_state = g_state << 1;
    if (g_state > 4) {
        g_state = 0x01;
    }
    gpout = gpout | g_state;

    GPIO_set_outputs(&g_gpio_out, gpout);
}

/*-----------------------------------------------------------------------------
 * main
 */
int main(int argc, char **argv) {

	unsigned int idlTimeval=27;
    unsigned int wr_dataVa1=0x00000052;
    uint8_t rx_char;
    uint8_t rx_count;
   PLIC_init();


    GPIO_init(&g_gpio_in, COREGPIO_IN_BASE_ADDR, GPIO_APB_32_BITS_BUS);
    GPIO_init(&g_gpio_out, COREGPIO_OUT_BASE_ADDR, GPIO_APB_32_BITS_BUS);

    UART_init(&g_uart,
              COREUARTAPB0_BASE_ADDR,
              BAUD_VALUE_115200,
              (DATA_8_BITS | NO_PARITY));

    UART_polled_tx_string(&g_uart, (const uint8_t *)g_hello_msg);

    SysTick_Config(SYS_CLK_FREQ);





   
   HW_set_32bit_reg(SOFT_RESET_REG,0x01);          //soft reset register
   
   HW_set_32bit_reg(IDEAL_TIME_ADDR,0x0111101);    //ideal time register
   
   HW_set_32bit_reg(CLK_PORT_ADDR,0x00001001);     //clock port register
   
   HW_set_32bit_reg(SLV_ADDR_REG,0X5b);            //slave address register  
   
   HW_set_32bit_reg(WR_DATA_PORT_ADDR,0X55);       //write data port register

   HW_set_32bit_reg(SOFT_RESET_REG,0x00);

    for(int i=0;i<1;i++){
		
        HW_set_32bit_reg(CMD_TRANS_REG0,0x80000000);  //write regular command
        HW_set_32bit_reg(CMD_TRANS_REG1,0X00010000);

        }

    for(int i=0;i<1;i++){
        HW_set_32bit_reg(CMD_TRANS_REG0,0xa0000000);  //read regular command
        HW_set_32bit_reg(CMD_TRANS_REG1,0X00010000);

        }

    for(int i=0;i<10;i++){
        uint32_t mas= HW_get_32bit_reg(RD_DATA_PORT_REG); //to read from read data port register
        printf("read status %X\n",mas);

        }




    return 0;
}

