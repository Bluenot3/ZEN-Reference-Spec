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
      {/* Target Lock Brackets (Appear on Hover) - Mint */}
      <div className="absolute -left-6 top-0 bottom-0 w-1 border-l-2 border-teal-400/0 group-hover:border-teal-400 transition-all duration-300 ease-out h-0 group-hover:h-full"></div>
      
      <div className="flex items-end gap-4 mb-6 border-b border-slate-200 pb-2 group-hover:border-teal-400/50 transition-colors duration-500">
        {code && (
          <span className="font-mono text-2xl text-slate-200 font-bold select-none group-hover:text-teal-200 transition-colors duration-300">{code}</span>
        )}
        <h2 
          id={id} 
          className="text-2xl font-bold text-slate-900 uppercase tracking-wide flex-grow"
        >
          {title}
        </h2>
        <div className="hidden sm:block h-1 w-20 bg-slate-200 group-hover:bg-teal-400 transition-colors duration-500"></div>
      </div>
      <div className="text-slate-600 leading-7 text-lg font-light relative z-10">
        {children}
      </div>
    </section>
  );
};