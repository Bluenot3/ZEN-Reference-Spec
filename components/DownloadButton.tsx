import React from 'react';

export const DownloadButton: React.FC = () => {
  return (
    <a
      href="/assets/ZEN_Reference_Implementation_Spec_v0.1.pdf"
      className="group relative inline-flex items-center gap-3 px-5 py-2 overflow-hidden bg-transparent text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 text-xs font-mono uppercase tracking-widest transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 no-print"
      aria-label="Download PDF version of the specification"
    >
      <span className="absolute inset-0 w-full h-full bg-cyan-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="14" 
        height="14" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="relative z-10"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <span className="relative z-10">Download_PDF</span>
      <div className="absolute top-0 right-0 -mr-1 -mt-1 w-2 h-2 bg-military-950 border-b border-l border-cyan-500"></div>
      <div className="absolute bottom-0 left-0 -ml-1 -mb-1 w-2 h-2 bg-military-950 border-t border-r border-cyan-500"></div>
    </a>
  );
};