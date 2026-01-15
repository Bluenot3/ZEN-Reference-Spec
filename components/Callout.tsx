import React from 'react';

interface CalloutProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ title, id, children }) => {
  return (
    <div className="relative bg-white border-l-4 border-teal-400 p-6 md:p-8 shadow-sm overflow-hidden group rounded-r-sm">
      {/* Subtle scanning line background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/[0.03] to-transparent bg-[length:100%_200%] animate-[scan_3s_linear_infinite] pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
        <h3 
          id={id} 
          className="text-sm font-bold text-teal-600 font-mono uppercase tracking-widest flex items-center gap-2"
        >
          <span className="text-lg">❖</span> {title}
        </h3>
        <span className="text-[10px] font-mono text-slate-400">SYS_MSG_PRIORITY_1</span>
      </div>
      <div className="text-slate-600 text-base leading-relaxed relative z-10 font-mono text-sm md:text-base">
        {children}
      </div>
      
      <style>{`
        @keyframes scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }
      `}</style>
    </div>
  );
};