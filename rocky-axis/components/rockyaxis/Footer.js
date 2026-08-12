import React from 'react';
import { useRouter } from 'next/router';
import { FaFire } from 'react-icons/fa';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="border-t border-slate-700/50 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <FaFire className="w-3 h-3 text-orange-400" />
          <span>Rocky Axis • Free Fire Tools</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => router.push('/')} className="hover:text-white transition">
            Rocky Axis
          </button>
          <button onClick={() => router.push('/freefiretools')} className="hover:text-white transition">
            Tools
          </button>
          <button onClick={() => router.push('/')} className="hover:text-white transition">
            Home
          </button>
        </div>
      </div>
    </footer>
  );
}