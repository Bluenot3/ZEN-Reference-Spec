import React from 'react';

export const SpecHeader: React.FC = () => {
  return (
    <header className="mb-24 relative">
      {/* Decorative corners */}
      <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-slate-300"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-slate-300"></div>

      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="bg-teal-50 text-teal-700 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-teal-200 rounded-full">Classified // Open Reference</span>
          <span className="h-px bg-gradient-to-r from-teal-200 to-transparent flex-grow"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-slate-900 tracking-tighter leading-none uppercase">
          ZEN Reference <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-slate-600">Implementation</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 font-mono font-light mt-6 max-w-3xl leading-relaxed">
          AI-Augmented Workforce Systems for Regulated Youth & Workforce Environments
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 shadow-sm rounded-sm overflow-hidden">
        <div className="bg-white p-6 group hover:bg-slate-50 transition-colors relative">
           <span className="block text-slate-400 text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:text-teal-500 transition-colors">Version ID</span>
           <span className="font-mono text-lg text-slate-900">0.1 <span className="text-xs text-slate-500">(Foundational Draft)</span></span>
        </div>
        <div className="bg-white p-6 group hover:bg-slate-50 transition-colors relative">
           <span className="block text-slate-400 text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:text-teal-500 transition-colors">Current Status</span>
           <span className="font-mono text-lg text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            Foundational Ref
           </span>
        </div>
        <div className="bg-white p-6 group hover:bg-slate-50 transition-colors relative">
           <span className="block text-slate-400 text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:text-teal-500 transition-colors">Stewardship</span>
           <span className="font-mono text-lg text-slate-900">ZEN AI Co.</span>
        </div>
      </div>
    </header>
  );
};