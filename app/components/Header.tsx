import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-[#002147] border-b-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* OAU LOGO & TITLE */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
              {/* Replace /oau-logo.png with your actual file in /public folder */}
              <img 
                src="/oau-logo.png" 
                alt="OAU Crest" 
                className="object-contain"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/60?text=OAU" }} 
              />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold leading-tight tracking-tight">OBAFEMI AWOLOWO UNIVERSITY</h1>
              <p className="text-[#FFD700] text-xs font-semibold tracking-[0.2em]">HEALTH CENTRE</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <nav className="hidden md:flex space-x-8 text-sm font-bold text-white uppercase">
            <a href="/" className="hover:text-[#FFD700] transition">Home</a>
            <a href="/health-centre" className="text-[#FFD700]">Health Portal</a>
            <a href="#" className="hover:text-[#FFD700] transition">Staff</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
