import React from 'react';

export const SpecHeader: React.FC = () => {
  return (
    <header className="mb-24 relative">
      {/* Decorative corners */}
      <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-white/10"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-white/10"></div>

      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="bg-cyan-950/50 text-cyan-400 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-cyan-900/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]">Classified // Open Reference</span>
          <span className="h-px bg-gradient-to-r from-cyan-900/50 to-transparent flex-grow"></span>
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-none uppercase drop-shadow-lg">
          ZEN Reference <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-100 to-slate-400 animate-gradient-x">Implementation</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-cyan-500/70 font-mono font-light mt-6 max-w-3xl leading-relaxed">
          AI-Augmented Workforce Systems for Regulated Youth & Workforce Environments
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <div className="bg-military-950 p-6 group hover:bg-white/[0.03] transition-colors relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/0 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          <span className="block text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:text-cyan-400 transition-colors">Version ID</span>
          <span className="font-mono text-lg text-white">0.1 <span className="text-xs text-slate-500">(Foundational Draft)</span></span>
        </div>
        <div className="bg-military-950 p-6 group hover:bg-white/[0.03] transition-colors relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/0 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          <span className="block text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:text-cyan-400 transition-colors">Current Status</span>
          <span className="font-mono text-lg text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Foundational Ref
          </span>
        </div>
        <div className="bg-military-950 p-6 group hover:bg-white/[0.03] transition-colors relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/0 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          <span className="block text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:text-cyan-400 transition-colors">Stewardship</span>
          <span className="font-mono text-lg text-white">ZEN AI Co.</span>
        </div>
      </div>
    </header>
  );
};