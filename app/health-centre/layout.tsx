import React from 'react';

export default function HealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white p-1 rounded-md">✚</div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">OAU Health Services</span>
        </div>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-red-600 transition">Services</a>
          <a href="#emergency" className="hover:text-red-600 transition">Emergency</a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Patient Portal
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}
