// components/rockyaxis/Footer.js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  FiHome,
  FiGrid,
  FiMail,
  FiArrowUpRight,
} from 'react-icons/fi';
import { FaFire, FaWhatsapp, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const router = useRouter();

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Tools', path: '/freefiretools', icon: FiGrid },
  ];

  const socialLinks = [
    { name: 'WhatsApp Channel', icon: FaWhatsapp, url: 'https://whatsapp.com/channel/0029Vb6p9OD6buMGD949uX1f' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/maketrendapp' },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/50 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/30 flex-shrink-0 bg-slate-700">
                <Image
                  src="/images/rockyaxis.jpg"
                  alt="Rocky Axis"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Rocky Axis
                </span>
                <p className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                  Free Fire Hub
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              The ultimate collection of Free Fire tools, configs, and APKs – all free and optimized for every device.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 hover:bg-purple-600/20 text-slate-400 hover:text-purple-400 rounded-xl transition-all duration-200 border border-slate-700/50 hover:border-purple-400/30"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-200 group"
                  >
                    <link.icon className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition" />
                    {link.name}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNavigation('/freefiretools')}
                  className="hover:text-white transition"
                >
                  All Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className="hover:text-white transition"
                >
                  About Rocky Axis
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
            <p className="text-sm text-slate-400 mb-4">
              Have a tool or config to share? Reach out to us.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:rockyaxis@example.com'}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              <FiMail className="w-4 h-4" />
              Contact Us
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} <span className="font-semibold text-slate-300">Rocky Axis</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button
              onClick={() => handleNavigation('/privacy')}
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavigation('/terms')}
              className="hover:text-slate-300 transition"
            >
              Terms of Service
            </button>
            <span className="flex items-center gap-1">
              <FaFire className="w-3 h-3 text-orange-400" />
              <span className="text-slate-400">v1.0</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}