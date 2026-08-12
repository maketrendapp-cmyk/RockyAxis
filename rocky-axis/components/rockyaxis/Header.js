// components/rockyaxis/Header.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FiMenu, FiX, FiHome, FiGrid, FiArrowRight } from 'react-icons/fi';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/30 flex-shrink-0 bg-slate-700 shadow-md">
              <Image
                src="/images/rockyaxis.jpg"
                alt="Rocky Axis"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Rocky Axis
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition ${
                  router.pathname === item.path
                    ? 'text-white bg-purple-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side: CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigation('/freefiretools')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-xl transition shadow-lg hover:shadow-purple-500/30"
            >
              Explore Tools
              <FiArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-xl hover:bg-slate-700/50 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700/50 py-2 px-4 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  router.pathname === item.path
                    ? 'text-white bg-purple-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/freefiretools')}
              className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition shadow-lg"
            >
              Explore Tools
              <FiArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}