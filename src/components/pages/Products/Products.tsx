import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Package } from 'lucide-react';
import SEO from '../../common/SEO';
import CTA from '../../common/CTA';
import { useReveal } from '../../../hooks/useReveal';
import { sidebarGroups, getGroupItems, getAllProducts } from '../../../data/navigation';
import aboutBanner from '../../../images/about-us_banner.jpeg';

export default function Products() {
  useReveal();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Get all products
  const allProducts = useMemo(() => getAllProducts(), []);

  // Get products based on active group or all products
  const activeProducts = useMemo(() => {
    if (activeGroup) {
      return getGroupItems(activeGroup);
    }
    return allProducts;
  }, [activeGroup, allProducts]);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeProducts;
    }
    return activeProducts.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeProducts, searchQuery]);

  // Get group label
  const getGroupLabel = (groupId: string | null) => {
    if (!groupId) return 'All Products';
    const group = sidebarGroups.find(g => g.id === groupId);
    return group ? group.label : 'All Products';
  };

  return (
    <>
      <SEO
        title="Products — MAXVY Technologies"
        description="Explore MAXVY's portfolio of silicon-proven IP cores across Verification, RTL Design, RISC-V, Embedded and Software."
        canonical="/products"
      />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-[#FAFAFA]">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            height: '400px',
          }}
        >
          {/* Content - No overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[50px] font-extrabold leading-tight tracking-tight">
                <span className="text-[#0F172A]">OUR </span>
                <span className="text-[#FF6A00]">PRODUCTS</span>
              </h1>

              <p className="mt-4 text-base text-gray-700 max-w-[780px] mx-auto leading-relaxed">
                Explore MAXVY's comprehensive portfolio of silicon-proven IP cores
              </p>

              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-4">
                <Link to="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
                <span className="text-gray-400">›</span>
                <span className="text-[#FF6A00] font-medium">Products</span>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Floating White Container */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
          >
            {/* Search Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="relative w-full sm:max-w-xxl">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search ${getGroupLabel(activeGroup)}...`}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-all"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                  Showing {filteredProducts.length} products {activeGroup ? `in ${getGroupLabel(activeGroup)}` : ''}
                </span>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products match your search.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      to={item.path}
                      className="group flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                        <Package className="h-6 w-6" />
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-[#0F172A] group-hover:text-[#FF6A00] transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">{item.blurb}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#FF6A00]">
                        View details
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>

      <CTA />
    </>
  );
}