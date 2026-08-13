// pages/index.js
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Meta from '../components/Meta';
import CTASection from '../components/rockyaxis/CTASection';
import {
  FiCheckCircle,
  FiCpu,
  FiSmartphone,
  FiGlobe,
  FiTool,
  FiUsers,
  FiZap,
  FiShield,
  FiAward,
  FiStar,
  FiFile,
  FiTarget,
  FiSettings,
  FiHeadphones,
  FiBox,
  FiDownload,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiTrendingUp,
  FiCheck,
} from 'react-icons/fi';
import { FaFire, FaRocket } from 'react-icons/fa';

// ── What's Inside Items ──
const insideItems = [
  { icon: FiFile, title: 'Regedit Files', description: 'Optimized registry tweaks for Windows to maximize FPS, minimize input lag, and ensure ultra-smooth gameplay.' },
  { icon: FiTarget, title: 'Headshot Configs', description: 'Pro-level aim and drag sensitivity configurations crafted for maximum accuracy and one-tap precision.' },
  { icon: FiSettings, title: 'Sensi Config APK', description: 'Custom Android utility APKs designed for granular sensitivity fine-tuning across all phone screens.' },
  { icon: FiTool, title: 'APK Mods & Tools', description: 'Curated optimization APKs, GFX launchers, and performance enhancement tools for Android devices.' },
  { icon: FiCpu, title: 'Performance Boosters', description: 'System tweaks engineered to reduce latency, stabilize high frame rates, and prevent thermal throttling.' },
  { icon: FiGlobe, title: 'Server-Specific Configs', description: 'Configurations tailored specifically for various global servers (India, LATAM, Brazil, Indonesia, etc.).' },
  { icon: FiSmartphone, title: 'Multi-Device Support', description: '100% compatible with Android phones, iOS devices, and low-end PC setups running emulators.' },
  { icon: FiHeadphones, title: 'Audio & Sound Files', description: 'Spatial sound configs and modified audio profiles for enhanced step detection and situational awareness.' },
  { icon: FiBox, title: 'All-in-One Packs', description: 'Comprehensive pro bundles containing everything required to build the ultimate competitive gaming setup.' },
];

// ── Popular Downloads ──
const popularDownloads = [
  { icon: FiSettings, name: 'Regedit Pro Pack', description: 'Ultimate Windows registry tweaks', downloads: '12.4K', rating: '4.8', category: 'Config' },
  { icon: FiTarget, name: 'Headshot Master Config', description: 'One-tap headshot settings', downloads: '9.8K', rating: '4.7', category: 'Aim' },
  { icon: FiSmartphone, name: 'Sensi Pro APK v3.2', description: 'Best sensitivity APK for Android', downloads: '15.2K', rating: '4.9', category: 'Tool' },
  { icon: FaRocket, name: 'GFX Tool Pro', description: 'Graphics optimization for low-end phones', downloads: '18.6K', rating: '4.8', category: 'GFX' },
];

// ── Why Choose Us ──
const whyItems = [
  { icon: FiShield, title: '100% Virus-Free & Safe', description: 'Every file is thoroughly scanned and tested for security and stability before release.' },
  { icon: FiZap, title: 'Battle-Tested Performance', description: 'Proven configurations trusted by thousands of competitive players worldwide.' },
  { icon: FiUsers, title: 'Community Feedback Driven', description: 'Regularly updated based on community testing, server updates, and user suggestions.' },
  { icon: FiAward, title: 'Curated Pro-Level Quality', description: 'Crafted and benchmarked by experienced players and technical experts.' },
];

// ── Carousel Images ──
const carouselImages = [
  { src: '/images/brutal-sensi.jpg', title: 'Brutal Sensi Config', subtitle: 'Ultra Drag Aim Settings' },
  { src: '/images/panel.jpg', title: 'Panel Optimization Tools', subtitle: 'Max FPS Launcher' },
  { src: '/images/config.jpg', title: 'Regedit Pro Configs', subtitle: 'Zero Lag Windows Tweaks' },
  { src: '/images/Sensi.jpg', title: 'Sensi APK v3.2', subtitle: 'Advanced Screen Sensitivity' },
];

export default function RockyAxis() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % carouselImages.length);
  };

  return (
    <>
      <Meta
        title="Rocky Axis – Free Fire Tools, Configs & APKs"
        description="Download top Free Fire tools: Sensi APK, Regedit files, Headshot configs, and GFX boosters. 100% free and tested for all devices."
        keywords="Free Fire, Free Fire tools, Sensi APK, Regedit, headshot config, GFX tool, sensitivity settings"
        image="/images/rockyaxis/og-image.jpg"
        url="/"
      />

      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-purple-500 selection:text-white pb-12 overflow-x-hidden">
        
        {/* ── HERO SECTION ── */}
        <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Ambient Lighting & Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-600/20 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            
            {/* Live Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/90 border border-purple-500/30 rounded-full text-xs sm:text-sm font-semibold text-purple-300 mb-6 shadow-lg shadow-purple-900/20 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <FaFire className="w-3.5 h-3.5 text-amber-400" />
              <span>Free Fire Ultimate Utility Hub</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.15]">
              Dominate Every Game with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
                Rocky Axis
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-slate-300 mt-5 font-bold tracking-tight">
              Sensi APKs, Regedit Configs, Headshot Settings & GFX Boosters
            </p>

            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
              Access the most effective gaming tweaks, sensitivity tools, and optimization files. 
              Engineered for seamless compatibility across all servers and devices.
            </p>

            {/* Hero CTA Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => router.push('/freefiretools')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-extrabold text-base rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all hover:scale-[1.02] active:scale-95"
              >
                <FaRocket className="w-4 h-4 text-purple-200" />
                <span>Explore All Tools</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs sm:text-sm font-semibold text-slate-400 border-t border-slate-800/80 pt-6">
              <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-emerald-400" /> 100% Free</span>
              <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-emerald-400" /> Safe &amp; Tested</span>
              <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-emerald-400" /> All Devices</span>
              <span className="flex items-center gap-1.5"><FiCheckCircle className="w-4 h-4 text-emerald-400" /> All Servers</span>
            </div>

          </div>
        </section>

        {/* ── CAROUSEL SHOWCASE ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0 relative aspect-[16/8] sm:aspect-[21/8] min-h-[220px] bg-slate-900 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title || 'Tool Showcase'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                    priority={index === 0}
                    quality={90}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1 flex items-center gap-1">
                      <FiStar className="fill-purple-400" /> Featured Showcase
                    </span>
                    <h3 className="text-xl sm:text-3xl font-black text-white">{img.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">{img.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            {carouselImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-slate-950/60 hover:bg-purple-600 text-white rounded-2xl border border-white/10 backdrop-blur-md transition z-20 shadow-lg"
                  aria-label="Previous Slide"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-slate-950/60 hover:bg-purple-600 text-white rounded-2xl border border-white/10 backdrop-blur-md transition z-20 shadow-lg"
                  aria-label="Next Slide"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 right-6 flex gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index ? 'bg-purple-500 w-7' : 'bg-slate-700/80 hover:bg-slate-500 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── WHAT'S INSIDE ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Complete Toolkit</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What's Inside <span className="text-purple-400">Rocky Axis</span>
            </h3>
            <p className="text-slate-400 text-sm font-medium mt-2 max-w-lg mx-auto">
              Everything required to elevate your Free Fire gameplay performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {insideItems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 hover:border-purple-500/40 hover:bg-slate-900/90 transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── POPULAR DOWNLOADS ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Most Popular</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Downloads</span>
            </h3>
            <p className="text-slate-400 text-sm font-medium mt-2">
              Top requested utilities and configuration files.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularDownloads.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 hover:border-purple-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-300 bg-purple-950/60 border border-purple-800/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5"><FiDownload className="w-3.5 h-3.5 text-purple-400" /> {item.downloads}</span>
                  <span className="flex items-center gap-1"><FiStar className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {item.rating}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/freefiretools')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-sm rounded-xl transition shadow-sm"
            >
              <span>View Full Tools List</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ── WHY CHOOSE ROCKY AXIS ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Why Players Trust <span className="text-purple-400">Rocky Axis</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium mt-2 max-w-md mx-auto">
                Built by passionate gamers, tested by thousands worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {whyItems.map((item, index) => (
                <div key={index} className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <CTASection />
        </section>

      </div>
    </>
  );
}


