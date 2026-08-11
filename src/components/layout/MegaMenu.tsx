import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { productCategories } from '../../data/navigation';

export default function MegaMenu() {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const active = productCategories.find((c) => c.id === activeId) ?? productCategories[0];
  const ActiveIcon = active.icon;

  return (
    <div className="absolute left-1/2 top-full z-50 mt-2 w-[min(900px,90vw)] -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift animate-scale-in">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
          {/* Left: categories */}
          <div className="border-b border-line bg-gradient-to-b from-slate-50 to-white p-4 md:border-b-0 md:border-r">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Product categories
            </p>
            <ul className="flex flex-col gap-0.5 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400">
              {productCategories.map((c) => {
                const Icon = c.icon;
                const isActive = c.id === activeId;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(c.id)}
                      onFocus={() => setActiveId(c.id)}
                      onClick={() => setActiveId(c.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                        isActive
                          ? 'bg-[#e34115]/10 text-[#e34115] font-semibold shadow-sm'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-[#e34115] text-white shadow-md shadow-[#e34115]/30' 
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">{c.name}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-all ${
                          isActive 
                            ? 'opacity-100 translate-x-0 text-[#e34115]' 
                            : 'opacity-0 -translate-x-2'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: items */}
          <div className="p-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400">
            <div className="mb-5 flex items-start gap-4 pb-4 border-b border-slate-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e34115] text-white shadow-md shadow-[#e34115]/30">
                <ActiveIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-800">{active.name}</h3>
                <p className="text-sm text-slate-500">{active.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {active.items && active.items.length > 0 ? (
                active.items.map((item) => (
                  <li key={item.path} className="list-none">
                    <Link
                      to={item.path}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-slate-50 hover:shadow-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e34115] transition-all group-hover:bg-[#e34115] group-hover:scale-125" />
                      <span>
                        <span className="block text-sm font-medium text-slate-700 transition-colors group-hover:text-[#e34115]">
                          {item.name}
                        </span>
                        <span className="block text-xs text-slate-400">{item.blurb}</span>
                      </span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="col-span-2 text-center py-6 text-slate-400">
                  No items available
                </li>
              )}
            </div>
            
            <div className="mt-5 pt-4 border-t border-slate-100">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#e34115] hover:text-[#c43a12] transition-colors group"
              >
                Explore all {active.name.toLowerCase()}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}