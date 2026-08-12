import React from 'react';
import { useRouter } from 'next/router';
import { FiSearch, FiFilter, FiX, FiGrid, FiList, FiArrowLeft } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { CATEGORIES, PLATFORMS, SORT_OPTIONS } from '../../lib/rockyaxis/constants';

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  showFilters,
  setShowFilters,
  hasActiveFilters,
  clearFilters,
}) {
  const router = useRouter();

  return (
    <div className="bg-slate-800/80 border-b border-slate-700 sticky top-0 z-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/')}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaFire className="text-orange-400" />
                Free Fire Tools
              </h1>
              <p className="text-xs text-slate-400">Discover the best tools, configs & APKs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tools..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-700 border border-slate-600 rounded-xl text-sm text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-xl border transition ${
                showFilters || hasActiveFilters
                  ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                  : 'bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600'
              }`}
            >
              <FiFilter className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex bg-slate-700 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition ${
                  viewMode === 'grid' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition ${
                  viewMode === 'list' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Category:</span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Platform:</span>
                {PLATFORMS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      selectedPlatform === p
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <FiX className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}