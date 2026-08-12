import React from 'react';
import { useRouter } from 'next/router';
import { FiDownload, FiArrowRight, FiStar } from 'react-icons/fi';

export default function CTASection() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-3xl p-8 sm:p-12 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm font-medium text-purple-300 mb-4">
        <FiStar className="w-4 h-4 text-yellow-400" />
        <span>Ready to Level Up?</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Access All Tools & Configs Now
      </h2>
      <p className="text-slate-300 mb-6">
        Download Regedit files, headshot configs, sensi APKs, and more — all optimized for your device.
      </p>
      <button
        onClick={() => router.push('/freefiretools')}
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition hover:scale-105 active:scale-95 text-base"
      >
        <FiDownload className="w-5 h-5" />
        Explore Free Fire Tools
        <FiArrowRight className="w-5 h-5" />
      </button>
      <p className="text-xs text-slate-500 mt-4">100% free • No registration required • Works on all devices</p>
    </div>
  );
}