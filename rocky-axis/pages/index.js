// pages/index.js
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Meta from '../components/Meta';
import CTASection from '../components/rockyaxis/CTASection';
import Footer from '../components/rockyaxis/Footer';
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
} from 'react-icons/fi';
import { FaFire, FaRocket } from 'react-icons/fa';

// ── Inside Items ──
const insideItems = [
  { icon: FiFile, title: 'Regedit Files', description: 'Optimized registry files for Windows to boost FPS, reduce lag, and improve overall performance.' },
  { icon: FiTarget, title: 'Headshot Configs', description: 'Professional headshot configuration files for precise aiming and one-tap kills.' },
  { icon: FiSettings, title: 'Sensi Config APK', description: 'Advanced sensitivity configuration APKs for better control and accuracy on all devices.' },
  { icon: FiTool, title: 'APK Mods & Tools', description: 'Game mods, GFX tools, and optimization APKs for Android phones.' },
  { icon: FiCpu, title: 'Performance Boosters', description: 'Tools and tweaks to maximize FPS, reduce ping, and eliminate stuttering.' },
  { icon: FiGlobe, title: 'Server-Specific Configs', description: 'Configs optimized for all Free Fire servers (India, Brazil, Indonesia, etc.).' },
  { icon: FiSmartphone, title: 'Multi-Device Support', description: 'Works on Android, iOS, PC (via emulators), and even low-end devices.' },
  { icon: FiHeadphones, title: 'Audio & Sound Files', description: 'Custom sound files and audio configs for better in-game awareness.' },
  { icon: FiBox, title: 'All-in-One Packs', description: 'Complete bundles containing everything you need for a pro-level setup.' },
];

// ── Popular Downloads (replaced emojis with icons) ──
const popularDownloads = [
  { icon: FiSettings, name: 'Regedit Pro Pack', description: 'Ultimate Windows registry tweaks', downloads: '12.4K', rating: '4.8' },
  { icon: FiTarget, name: 'Headshot Master Config', description: 'One-tap headshot settings', downloads: '9.8K', rating: '4.7' },
  { icon: FiSmartphone, name: 'Sensi Pro APK v3.2', description: 'Best sensitivity APK for Android', downloads: '15.2K', rating: '4.9' },
  { icon: FaRocket, name: 'GFX Tool Pro', description: 'Graphics optimization for low-end phones', downloads: '18.6K', rating: '4.8' },
];

// ── Why Items ──
const whyItems = [
  { icon: FiShield, title: '100% Safe', description: 'All files are scanned and verified to be virus-free and secure.' },
  { icon: FiZap, title: 'Proven Results', description: 'Tested and trusted by thousands of players worldwide.' },
  { icon: FiUsers, title: 'Community Driven', description: 'Regularly updated based on community feedback and requests.' },
  { icon: FiAward, title: 'Pro-Level Quality', description: 'Curated by experienced players and tech experts.' },
];

// ── Carousel Images ──
const carouselImages = [
  { src: '/images/brutal-sensi.jpg', alt: 'Brutal Sensi Config' },
  { src: '/images/panel.jpg', alt: 'Panel Tools' },
  { src: '/images/config.jpg', alt: 'Regedit Config' },
  { src: '/images/Sensi.jpg', alt: 'Sensi APK' },
];

export default function RockyAxis() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
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
        title="Rocky Axis – Free Fire Tools, Hacks, Configs & APKs"
        description="Download the best Free Fire tools, Regedit files, headshot configs, sensi APKs, and gameplay improvement files. Compatible with all devices, all servers, and all phones. 100% free!"
        keywords="Free Fire, Free Fire tools, Free Fire hacks, Regedit, headshot config, sensi APK, GFX tool, gameplay improvement"
        image="/images/rockyaxis/og-image.jpg"
        url="/"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* ── Top Navbar ── */}
        <nav className="flex items-center justify-between px-6 py-4 bg-slate-800/60 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/30 flex-shrink-0 bg-slate-700">
              <Image
                src="/images/rockyaxis.jpg"
                alt="Rocky Axis"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">Rocky Axis</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <button onClick={() => router.push('/')} className="hover:text-white transition">Home</button>
            <button onClick={() => router.push('/freefiretools')} className="hover:text-white transition">Tools</button>
          </div>
          <button
            onClick={() => router.push('/freefiretools')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition"
          >
            Explore Tools <FiArrowRight className="w-4 h-4" />
          </button>
        </nav>

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden px-4 py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-indigo-600/20" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm font-medium text-purple-300 mb-6">
              <FaFire className="w-4 h-4 text-orange-400" />
              <span>Free Fire Ultimate Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Rocky Axis
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mt-4 font-medium">
              The Ultimate Collection of Free Fire Tools, Configs & APKs
            </p>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              Download Regedit files, headshot configs, sensi APKs, and more — optimized for all devices, all servers, and all phones. 100% free!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={() => router.push('/freefiretools')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition hover:scale-105 active:scale-95 text-base"
              >
                <FaRocket className="w-5 h-5" />
                Explore All Tools
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-400">
              <span className="flex items-center gap-2"><FiCheckCircle className="w-4 h-4 text-green-400" /> 100% Free</span>
              <span className="flex items-center gap-2"><FiCheckCircle className="w-4 h-4 text-green-400" /> All Devices</span>
              <span className="flex items-center gap-2"><FiCheckCircle className="w-4 h-4 text-green-400" /> All Servers</span>
              <span className="flex items-center gap-2"><FiCheckCircle className="w-4 h-4 text-green-400" /> All Phones</span>
            </div>
          </div>
        </section>

        {/* ── Image Carousel ── */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0 relative aspect-[16/6] min-h-[220px] bg-slate-700">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={90}
                  />
                </div>
              ))}
            </div>

            {carouselImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-20"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? 'bg-purple-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── Brands / Trusted Section ── */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            {/* Garena Logo */}
            <div className="flex items-center">
              <Image
                src="/images/garena-logo.jpg"
                alt="Garena"
                width={100}
                height={100}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
            {/* FreeFire Text */}
            <div className="flex items-center">
              <Image
                src="/images/freefire.jpg"
                alt="Free Fire"
                width={140}
                height={50}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
            {/* Grandmaster Logo */}
            <div className="flex items-center">
              <Image
                src="/images/grandmaster-logo.jpg"
                alt="Grandmaster"
                width={100}
                height={100}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          </div>
        </section>

        {/* ── What's Inside ── */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What's Inside <span className="text-purple-400">Rocky Axis</span>
            </h2>
            <p className="text-slate-400 mt-2">Everything you need to dominate in Free Fire</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insideItems.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition hover:bg-slate-800/80 group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Popular Downloads ── */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              <span className="text-purple-400">Popular</span> Downloads
            </h2>
            <p className="text-slate-400 mt-2">Most requested tools and configs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularDownloads.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-center hover:border-purple-500/50 transition hover:bg-slate-800/80 group">
                <div className="text-3xl mb-3 text-purple-400 flex justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition">{item.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><FiDownload className="w-3 h-3" /> {item.downloads}</span>
                  <span className="w-1 h-1 bg-slate-600 rounded-full" />
                  <span className="flex items-center gap-1"><FiStar className="w-3 h-3 text-yellow-400" /> {item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Rocky Axis ── */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why <span className="text-purple-400">Rocky Axis</span>?
            </h2>
            <p className="text-slate-400 mt-2">Trusted by thousands of Free Fire players worldwide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition hover:bg-slate-800/80">
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <CTASection />
        </section>

        <Footer />
      </div>
    </>
  );
}