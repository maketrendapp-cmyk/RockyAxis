// components/rockyaxis/Header.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FiMenu, FiX, FiHome, FiGrid, FiArrowRight, FiZap } from 'react-icons/fi';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Tools', path: '/freefiretools', icon: FiGrid },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    closeMenu();
  };

  const isActive = (path) => router.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ background: isScrolled ? undefined : 'transparent !important' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigation('/')}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/30 flex-shrink-0 bg-slate-700 shadow-md group-hover:border-purple-400/60 transition-all duration-300">
              <Image
                src="/images/rockyaxis.jpg"
                alt="Rocky Axis"
                width={40}
                height={40}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent'
                  : 'text-white'
              }`}>
                Rocky Axis
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase hidden sm:block ${
                isScrolled ? 'text-slate-400' : 'text-white/60'
              }`}>
                Free Fire Hub
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'bg-purple-600/20 text-white shadow-[0_0_20px_rgba(168,85,247,0.15)] border border-purple-500/30'
                      : 'bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20'
                    : isScrolled
                    ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/freefiretools')}
              className={`ml-2 inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/20 hover:shadow-purple-500/40'
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20'
              }`}
            >
              <FiZap className="w-4 h-4" />
              Explore
              <FiArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Right */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => handleNavigation('/freefiretools')}
              className={`p-2 rounded-xl transition ${
                isScrolled
                  ? 'bg-purple-600/20 text-purple-400 hover:bg-purple-600/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Explore Tools"
            >
              <FiZap className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-xl transition ${
                isScrolled
                  ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 py-3 px-4 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-2 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-purple-600/20 text-white border border-purple-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/freefiretools')}
              className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20"
            >
              <FiZap className="w-5 h-5" />
              Explore Tools
              <FiArrowRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </header>
  );
}