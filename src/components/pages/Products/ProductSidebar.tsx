import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Package } from 'lucide-react';
import { sidebarGroups, getGroupItems } from '../../../data/navigation';

interface ProductSidebarProps {
  className?: string;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({ className = '' }) => {
  const location = useLocation();
  const [expandedGroup, setExpandedGroup] = useState<string | null>('rtl-design-ip');

  const toggleGroup = (groupId: string) => {
    setExpandedGroup(expandedGroup === groupId ? null : groupId);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`bg-[#F5F5F5] rounded-2xl p-4 shadow-sm ${className}`}>
      {/* Header */}
      <div className="bg-[#FF8C1A] rounded-xl p-3 mb-4 flex items-center gap-2">
        <Package className="w-5 h-5 text-white" />
        <h2 className="text-white font-bold text-base tracking-wide">PRODUCTS</h2>
      </div>

      {/* Accordion Groups */}
      <div className="space-y-2">
        {sidebarGroups.map((group) => {
          const isOpen = expandedGroup === group.id;
          const items = getGroupItems(group.id);

          return (
            <div key={group.id} className="space-y-1">
              {/* Accordion Button */}
              <button
                onClick={() => toggleGroup(group.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 ${
                  isOpen ? 'border-orange-200 shadow-md' : ''
                }`}
              >
                <span className="text-sm font-semibold text-gray-700">{group.label}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Items */}
              {isOpen && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {items.map((item, index) => {
                    const isActive = isActivePath(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                          index !== items.length - 1 ? 'border-b border-gray-50' : ''
                        } ${
                          isActive
                            ? 'bg-[#FF8C1A] text-white font-medium'
                            : 'text-gray-700 hover:bg-orange-50 hover:text-[#FF8C1A]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSidebar;