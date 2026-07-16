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
import { productContent } from './products/productContent';

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

// Build categories from productContent
export const buildCategories = (): ProductCategory[] => {
  const categoryMap: { [key: string]: ProductCategory } = {};

  for (const key in productContent) {
    const product = productContent[key];
    const categoryId = product.category;

    if (!categoryMap[categoryId]) {
      // Find the category description and icon from the original categories
      let description = '';
      let icon: LucideIcon = Cpu;

      // Map category IDs to descriptions and icons
      const categoryInfo: { [key: string]: { name: string; description: string; icon: LucideIcon } } = {
        'ddr5': { name: 'DDR5 Solution', description: 'Next-generation memory interface IP for DDR5 RCD, SPD5 and PMIC.', icon: Cpu },
        'multimedia': { name: 'Multimedia Solution', description: 'MIPI DSI2 / CSI2 transmitter and receiver IP for imaging and display.', icon: MonitorSmartphone },
        'peripheral': { name: 'Peripheral', description: 'High-performance SPI target and host controllers for storage peripherals.', icon: HardDrive },
        'mipi-i3c': { name: 'MIPI I3C Solution IP', description: 'Complete I3C host, target and basic controller IP portfolio.', icon: Spline },
        'i3c-support': { name: 'I3C Support Protocol IP', description: 'Companion protocol controllers for SPMI and ETSI SSP I3C.', icon: SplineIcon },
        'verification-ip': { name: 'Verification IP', description: 'UVM and VIP libraries for protocol-aware verification.', icon: ShieldCheck },
        'maxvy-integration': { name: 'MAXVY IP Integration with Vega Processor', description: 'Pre-integrated MAXVY IP portfolio for Vega-class RISC-V SoCs.', icon: Layers },
        'other-rtl-ip': { name: 'Other RTL IP', description: 'Controller IP for UCIe, AVS bus and GPIO subsystems.', icon: CircuitBoard },
        'riscv': { name: 'RISC-V Solution', description: 'Instruction set, core development and reference models for RISC-V.', icon: CircuitBoard },
        'embedded': { name: 'Embedded System', description: 'Cloud-connected embedded solutions and dynamic services.', icon: Cloud },
        'maxvy-fpga': { name: 'MAXVY IP in FPGA', description: 'FPGA-proven MAXVY IP with reference software stacks.', icon: CircuitBoard },
      };

      const info = categoryInfo[categoryId];
      categoryMap[categoryId] = {
        id: categoryId,
        name: info?.name || categoryId,
        description: info?.description || '',
        icon: info?.icon || Cpu,
        items: []
      };
    }

    // Create product item with path based on category
    const path = `/products/${categoryId}/${key}`;
    categoryMap[categoryId].items.push({
      name: product.heroTitle || product.title,
      path: path,
      blurb: product.heroDescription || ''
    });
  }

  return Object.values(categoryMap);
};

// Internal categories for data organization (not displayed in sidebar)
export const internalCategories: ProductCategory[] = buildCategories();

// ============================================================
// SIDEBAR GROUPS - The main navigation structure
// ============================================================
export const sidebarGroups = [
  {
    id: 'verification-ip',
    label: 'VERIFICATION IP',
    categoryIds: ['verification-ip']
  },
  {
    id: 'rtl-design-ip',
    label: 'RTL DESIGN IP',
    categoryIds: ['ddr5', 'multimedia', 'peripheral', 'mipi-i3c', 'i3c-support', 'maxvy-integration', 'other-rtl-ip']
  },
  {
    id: 'riscv',
    label: 'RISC-V SOLUTION',
    categoryIds: ['riscv']
  },
  {
    id: 'embedded',
    label: 'EMBEDDED SYSTEM',
    categoryIds: ['embedded']
  },
  {
    id: 'software',
    label: 'SOFTWARE',
    categoryIds: ['maxvy-fpga']
  }
];

// Helper to get all items for a sidebar group
export const getGroupItems = (groupId: string) => {
  const group = sidebarGroups.find(g => g.id === groupId);
  if (!group) return [];

  const items: ProductItem[] = [];
  group.categoryIds.forEach((categoryId) => {
    const category = internalCategories.find(c => c.id === categoryId);
    if (category) {
      items.push(...category.items);
    }
  });
  return items;
};

// Helper to get all products
export const getAllProducts = () => {
  return internalCategories.flatMap(c => c.items);
};

// EXPORT allProducts for backward compatibility
export const allProducts = getAllProducts();

// Helper to find product by path
export const findProduct = (path: string) => {
  // Extract slug from path
  const pathParts = path.split('/');
  const slug = pathParts[pathParts.length - 1];
  
  // Try to find in productContent
  if (productContent[slug]) {
    const product = productContent[slug];
    return {
      name: product.heroTitle || product.title,
      path: path,
      blurb: product.heroDescription || '',
      categoryId: product.category
    };
  }
  
  return getAllProducts().find((p) => p.path === path);
};

// Helper to get category name for a product
export const getCategoryName = (path: string) => {
  const product = findProduct(path);
  if (!product) return '';
  
  const category = internalCategories.find(c => c.id === product.categoryId);
  return category ? category.name : '';
};

// Helper to get sidebar group for a product
export const getSidebarGroupForProduct = (path: string) => {
  const product = findProduct(path);
  if (!product) return null;

  for (const group of sidebarGroups) {
    const items = getGroupItems(group.id);
    const found = items.find(item => item.path === path);
    if (found) return group;
  }
  return null;
};

// Helper to get previous/next product in a group
export const getAdjacentProducts = (path: string, direction: 'prev' | 'next') => {
  const group = getSidebarGroupForProduct(path);
  if (!group) return null;

  const items = getGroupItems(group.id);
  const currentIndex = items.findIndex(item => item.path === path);

  if (currentIndex === -1) return null;

  const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
  if (newIndex < 0 || newIndex >= items.length) return null;

  return items[newIndex];
};

// Export internal categories as productCategories for backward compatibility
export const productCategories = internalCategories;