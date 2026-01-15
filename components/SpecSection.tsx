import React from 'react';

interface SpecSectionProps {
  title: string;
  code?: string;
  children: React.ReactNode;
}

export const SpecSection: React.FC<SpecSectionProps> = ({ title, code, children }) => {
  const id = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <section aria-labelledby={id} className="scroll-mt-32 relative group">
      {/* Target Lock Brackets (Appear on Hover) */}
      <div className="absolute -left-4 top-0 bottom-0 w-1 border-l border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-300 ease-out h-0 group-hover:h-full"></div>
      
      <div className="flex items-end gap-4 mb-6 border-b border-white/5 pb-2 group-hover:border-cyan-500/30 transition-colors duration-500">
        {code && (
          <span className="font-mono text-2xl text-white/10 font-bold select-none group-hover:text-cyan-500/20 transition-colors duration-300">{code}</span>
        )}
        <h2 
          id={id} 
          className="text-2xl font-bold text-white uppercase tracking-wide flex-grow drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]"
        >
          {title}
        </h2>
        <div className="hidden sm:block h-1 w-20 bg-cyan-900/20 group-hover:bg-cyan-500/40 transition-colors duration-500"></div>
      </div>
      <div className="text-slate-300 leading-7 text-lg font-light relative z-10">
        {children}
      </div>
    </section>
  );
};