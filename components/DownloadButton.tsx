import React from 'react';

export const DownloadButton: React.FC = () => {
  return (
    <a
      href="/assets/ZEN_Reference_Implementation_Spec_v0.1.pdf"
      className="group relative inline-flex items-center gap-3 px-5 py-2 overflow-hidden bg-white text-teal-700 border border-slate-300 hover:border-teal-400 text-xs font-mono uppercase tracking-widest transition-all focus:outline-none focus:ring-1 focus:ring-teal-400 no-print rounded-sm shadow-sm hover:shadow-md"
      aria-label="Download PDF version of the specification"
    >
      <span className="absolute inset-0 w-full h-full bg-teal-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
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
      <span className="relative z-10 font-semibold">Download_PDF</span>
    </a>
  );
};