import React from 'react';

export const SpecFooter: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-end md:items-center text-xs text-slate-500 font-mono uppercase tracking-wider pb-8">
      <div className="flex flex-col gap-1">
        <span className="text-white">&copy; ZEN AI Co.</span>
        <span>Systems Integrity Division</span>
      </div>
      <div className="mt-4 md:mt-0 text-right">
        <div className="mb-1">Last updated: v0.1</div>
        <div className="text-[10px] text-slate-700">Hash: 8f4-a2b-9c1</div>
      </div>
    </footer>
  );
};