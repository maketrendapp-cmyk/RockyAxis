// pages/freefiretools/index.js
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Meta from '../../components/Meta';
import SearchFilter from '../../components/rockyaxis/SearchFilter';
import Footer from '../../components/rockyaxis/Footer';
import { toolsData } from '../../lib/rockyaxis/data';
import { FiDownload, FiStar, FiPackage, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function FreeFireTools() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // ── Featured apps slider state ──
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const featuredTools = useMemo(() => toolsData.filter(t => t.featured), []);
  const hasFeatured = featuredTools.length > 0;

  // ── Auto-slide every 2 seconds ──
  useEffect(() => {
    if (hasFeatured) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredTools.length);
      }, 2000);
    }
    return () => clearInterval(slideInterval.current);
  }, [hasFeatured, featuredTools.length]);

  // ── Manual slide controls ──
  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    if (hasFeatured) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredTools.length);
      }, 2000);
    }
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + featuredTools.length) % featuredTools.length);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % featuredTools.length);
  };

  // ── Filter & sort logic ──
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

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedPlatform('All');
    setSortBy('popular');
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || selectedPlatform !== 'All' || sortBy !== 'popular';

  // ── Render slide preview dots ──
  const renderDots = () => {
    return featuredTools.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-2 h-2 rounded-full transition-all ${
          currentSlide === index ? 'bg-purple-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ));
  };

  return (
    <>
      <Meta
        title="Free Fire Tools – Zerox FF Sensi APK & More"
        description="Browse the best Free Fire tools: Zerox FF Sensi APK, sensitivity optimizers, and more. 100% free!"
        keywords="Free Fire tools, Zerox FF Sensi APK, sensitivity APK, Free Fire hacks"
        image="/images/rockyaxis/og-tools.jpg"
        url="/freefiretools"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        {/* ── Search & Filter Bar ── */}
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          hasActiveFilters={hasActiveFilters}
          clearFilters={clearFilters}
        />

        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* ── Featured Apps Slider ── */}
          {hasFeatured && (
            <div className="relative mb-8 rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 shadow-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="w-full flex-shrink-0 relative cursor-pointer group"
                    onClick={() => router.push(`/freefiretools/${tool.slug}`)}
                  >
                    <div className="relative w-full aspect-[16/6] min-h-[200px] bg-slate-700">
                      {tool.imageUrl ? (
                        <Image
                          src={tool.imageUrl}
                          alt={tool.name}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-700"
                          sizes="(max-width: 768px) 100vw, 1200px"
                          priority
                          quality={90}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                          <FiPackage className="w-24 h-24 text-purple-400/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-yellow-500/90 text-black text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <FiStar className="w-3 h-3" /> Featured
                          </span>
                          <span className="bg-slate-700/80 text-white text-xs px-2.5 py-0.5 rounded-full">
                            {tool.category}
                          </span>
                          <span className="bg-slate-700/80 text-white text-xs px-2.5 py-0.5 rounded-full">
                            {tool.platform}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-400 transition">
                          {tool.name}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl line-clamp-2">
                          {tool.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <FiDownload className="w-3 h-3" /> {tool.downloads}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiStar className="w-3 h-3 text-yellow-400" /> {tool.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Slide Controls ── */}
              {featuredTools.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-10"
                    aria-label="Previous slide"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-10"
                    aria-label="Next slide"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {renderDots()}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── Results Count ── */}
          <p className="text-sm text-slate-400 mb-4">
            Showing <span className="text-white font-medium">{filteredTools.length}</span> tools
            {hasActiveFilters && <span className="text-xs ml-2 text-slate-500">(filters active)</span>}
          </p>

          {/* ── Tool Feed ── */}
          {filteredTools.length === 0 ? (
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
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-slate-800/70 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition hover:bg-slate-800 group cursor-pointer hover:shadow-xl hover:shadow-purple-500/10"
                  onClick={() => router.push(`/freefiretools/${tool.slug}`)}
                >
                  <div className="relative aspect-video bg-slate-700 overflow-hidden">
                    {tool.imageUrl ? (
                      <Image
                        src={tool.imageUrl}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        quality={85}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                        <FiPackage className="w-16 h-16 text-purple-400/50" />
                      </div>
                    )}
                    {tool.featured && (
                      <span className="absolute top-3 right-3 bg-yellow-500/90 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                        <FiStar className="w-3 h-3" /> Featured
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                      {tool.platform}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white group-hover:text-purple-400 transition text-base line-clamp-1">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-700/50 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <FiDownload className="w-3 h-3" /> {tool.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiStar className="w-3 h-3 text-yellow-400" /> {tool.rating}
                      </span>
                      <span className="ml-auto text-[10px] text-slate-400">{tool.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-slate-800/70 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition hover:bg-slate-800 group cursor-pointer flex flex-col sm:flex-row"
                  onClick={() => router.push(`/freefiretools/${tool.slug}`)}
                >
                  <div className="relative w-full sm:w-48 h-40 sm:h-auto aspect-video sm:aspect-square bg-slate-700 flex-shrink-0 overflow-hidden">
                    {tool.thumbnail || tool.imageUrl ? (
                      <Image
                        src={tool.thumbnail || tool.imageUrl}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="(max-width: 768px) 100vw, 192px"
                        quality={85}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                        <FiPackage className="w-16 h-16 text-purple-400/50" />
                      </div>
                    )}
                    {tool.featured && (
                      <span className="absolute top-2 right-2 bg-yellow-500/90 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                        <FiStar className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition">
                          {tool.name}
                        </h3>
                        <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full text-slate-400">
                          {tool.category}
                        </span>
                        <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full text-slate-400">
                          {tool.platform}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{tool.description}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-700/50 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <FiDownload className="w-3 h-3" /> {tool.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiStar className="w-3 h-3 text-yellow-400" /> {tool.rating}
                      </span>
                      <span className="ml-auto text-[10px] text-slate-400">v{tool.version}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}