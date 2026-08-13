// pages/freefiretools/index.js
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Meta from '../../components/Meta';
import { toolsData } from '../../lib/rockyaxis/data';
import {
  FiStar,
  FiPackage,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiSearch,
  FiFilter,
  FiX,
  FiGrid,
  FiArrowLeft,
} from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';

const CATEGORIES = ['All', 'Sensi', 'Panel', 'Regedit', 'Hacks', 'Tools'];
const PLATFORMS = ['All', 'Android', 'iOS', 'PC'];
const SORT_OPTIONS = [
  { value: 'popular', label: 'Popular' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
  { value: 'featured', label: 'Featured' },
];

export default function FreeFireTools() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  // ── Featured slider ──
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const featuredTools = useMemo(() => toolsData.filter(t => t.featured), []);
  const hasFeatured = featuredTools.length > 0;
  const isFilterActive = searchTerm.trim() !== '' || selectedCategory !== 'All' || selectedPlatform !== 'All';

  useEffect(() => {
    if (hasFeatured && !isFilterActive) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredTools.length);
      }, 2000);
    }
    return () => clearInterval(slideInterval.current);
  }, [hasFeatured, isFilterActive, featuredTools.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    if (hasFeatured && !isFilterActive) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredTools.length);
      }, 2000);
    }
  };

  const prevSlide = () => goToSlide((currentSlide - 1 + featuredTools.length) % featuredTools.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % featuredTools.length);

  // ── Filter & sort ──
  const filteredTools = useMemo(() => {
    let result = toolsData;
    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(term) ||
          tool.description.toLowerCase().includes(term) ||
          tool.category.toLowerCase().includes(term)
      );
    }
    if (selectedCategory !== 'All') {
      result = result.filter((tool) => tool.category === selectedCategory);
    }
    if (selectedPlatform !== 'All') {
      result = result.filter((tool) => tool.platform === selectedPlatform || tool.platform === 'All');
    }
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => parseFloat(b.downloads.replace('K', '')) - parseFloat(a.downloads.replace('K', '')));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        break;
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }
    return result;
  }, [searchTerm, selectedCategory, selectedPlatform, sortBy]);

  const displayTools = isFilterActive
    ? filteredTools
    : filteredTools.filter(t => !t.featured);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedPlatform('All');
    setSortBy('popular');
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || selectedPlatform !== 'All' || sortBy !== 'popular';

  const renderDots = () =>
    featuredTools.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-2 h-2 rounded-full transition-all ${
          currentSlide === index ? 'bg-purple-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ));

  const getMainImage = (tool) => tool.thumbnail || tool.imageUrl || '';

  return (
    <>
      <Meta
        title="Free Fire Tools – Zerox FF Sensi APK & More"
        description="Browse the best Free Fire tools: Zerox FF Sensi APK, sensitivity optimizers, Regedit files, and more. 100% free!"
        keywords="Free Fire tools, Zerox FF Sensi APK, sensitivity APK, Free Fire hacks"
        image="/images/rockyaxis/og-tools.jpg"
        url="/freefiretools"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        {/* ── Page Header with Back Button ── */}
        <div className="bg-slate-800/50 border-b border-slate-700/50 py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            {/* Back Button */}
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-xl transition"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <FaFire className="text-orange-400" />
                Free Fire Tools
              </h1>
              <p className="text-slate-400 text-sm hidden sm:block">
                Browse and download the best Free Fire tools – Sensi APKs, Regedit files, Headshot configs, and more. All free!
              </p>
            </div>
          </div>
        </div>

        {/* ── Sticky Search Bar ── */}
        <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Search Input */}
              <div className="flex-1 relative w-full sm:w-auto">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search tools..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-600/50 rounded-xl text-sm text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition shadow-sm"
                />
              </div>

              {/* Filter Toggle + Grid Indicator */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`p-2.5 rounded-xl border transition ${
                    showFilters || hasActiveFilters
                      ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                      : 'bg-slate-800/80 border-slate-600/50 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  <FiFilter className="w-5 h-5" />
                </button>

                {/* ── Static Grid Indicator ── */}
                <div className="p-2 rounded-xl bg-slate-700/50 border border-slate-600/50 text-purple-400">
                  <FiGrid className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Expandable Filters */}
            {showFilters && (
              <div className="mt-3 pt-3 border-t border-slate-700/50">
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

        {/* ── Main Content ── */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Featured Slider */}
          {hasFeatured && !isFilterActive && (
            <div className="relative mb-10 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-2 border-purple-500/30 shadow-2xl shadow-purple-500/10">
              {/* ... (same as before) ... */}
            </div>
          )}

          {/* Results Count */}
          <p className="text-sm text-slate-400 mb-4">
            Showing <span className="text-white font-medium">{displayTools.length}</span> tools
            {hasActiveFilters && <span className="text-xs ml-2 text-slate-500">(filters active)</span>}
          </p>

          {/* Tool Grid */}
          {displayTools.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white">No tools found</h3>
              <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayTools.map((tool) => {
                const mainImage = getMainImage(tool);
                return (
                  <div
                    key={tool.id}
                    className="bg-slate-800/70 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition hover:bg-slate-800 group cursor-pointer hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
                    onClick={() => router.push(`/freefiretools/${tool.slug}`)}
                  >
                    {/* ... card content (same as before) ... */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}