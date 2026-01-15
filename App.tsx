import React from 'react';
import { SpecHeader } from './components/SpecHeader';
import { SpecSection } from './components/SpecSection';
import { SpecFooter } from './components/SpecFooter';
import { Callout } from './components/Callout';
import { DownloadButton } from './components/DownloadButton';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-military-950 selection:bg-cyan-500/30 selection:text-white">
      <ParticleBackground />
      
      {/* 1. Subtle Scanline Texture (CRT feel) */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* 2. Vignette for focus */}
      <div className="fixed inset-0 pointer-events-none z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]"></div>

      {/* Decorative Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundSize: '60px 60px', backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)' }}>
      </div>

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:font-mono focus:uppercase focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Skip to content
      </a>

      {/* Top HUD Bar */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-50 no-print shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      <div className="w-full border-b border-white/5 bg-military-950/80 backdrop-blur-md sticky top-0 z-40 no-print">
        <div className="max-w-[1000px] mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </div>
            <div className="text-[10px] font-mono font-bold text-cyan-500 tracking-[0.2em] uppercase opacity-90 shadow-cyan-500/20 drop-shadow-[0_0_2px_rgba(6,182,212,0.8)]">
              ZEN AI OS // V.0.1
            </div>
          </div>
          <DownloadButton />
        </div>
      </div>

      {/* Main Document Content */}
      <main id="main-content" className="max-w-[1000px] mx-auto px-6 py-16 relative z-10">
        
        {/* Document Header */}
        <SpecHeader />

        {/* Content Sections */}
        <div className="space-y-20">
          
          <SpecSection title="Purpose" code="SEC-01">
            <p className="mb-4">
              ZEN exists to define, steward, and certify responsible, operational AI systems for regulated youth and workforce environments.
            </p>
            <p>
              This specification establishes the foundational criteria required for AI systems operating in contexts involving youth, workforce compliance, and public or mission-critical institutions. It is intended to reduce operational risk, increase accountability, and enable safe, scalable adoption of AI in real-world settings.
            </p>
          </SpecSection>

          <SpecSection title="Scope" code="SEC-02">
            <p className="mb-4">This specification applies to AI-augmented systems used in:</p>
            <ul className="space-y-2 mb-4">
              {['Youth-serving organizations', 'Workforce development programs', 'Regulated nonprofit and public-interest institutions', 'Federally, state, or philanthropically funded operational environments'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <span className="h-px w-3 bg-cyan-800 group-hover:bg-cyan-400 group-hover:w-6 transition-all duration-300"></span>
                  <span className="text-slate-300 group-hover:text-cyan-100 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-6 p-4 border-l border-cyan-900/50 bg-cyan-950/10">
              <p className="text-slate-400 text-sm font-mono">
                <span className="text-cyan-500 mr-2">> NOTE:</span>
                The specification addresses operational deployment, not research, experimentation, or theoretical models.
              </p>
            </div>
          </SpecSection>

          <SpecSection title="Foundational Requirements" code="SEC-03">
            <p className="mb-8 font-mono text-cyan-400 text-xs tracking-widest uppercase border border-cyan-500/20 bg-cyan-950/20 p-3 inline-block shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              // CRITICAL: A ZEN-Aligned AI System must satisfy all criteria below.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Human-in-the-Loop Governance", text: "AI systems must incorporate explicit human oversight at all decision points involving hiring, screening, compliance, youth interaction, or resource allocation. Automated outputs may inform decisions but must not replace accountable human judgment." },
                { title: "Auditability and Transparency", text: "Systems must maintain auditable records of AI usage, decision support activity, cost utilization, and system outcomes. Audit mechanisms must be accessible to authorized supervisors and reviewers." },
                { title: "Role-Based Governance Structure", text: "Operational responsibility must be clearly separated across defined roles, including system operators, supervisors, and administrators. AI logic must not substitute for organizational authority or accountability." },
                { title: "Youth Safety and Data Minimization", text: "Systems interacting with or impacting youth must enforce age-appropriate safeguards, minimize data collection, and operate in alignment with youth protection, privacy, and safety obligations." },
                { title: "Real-World Operational Deployment", text: "ZEN-Aligned systems must be deployed and actively used within live institutional environments. Simulations, prototypes, or slide-based representations do not qualify as compliant deployments." }
              ].map((req, idx) => (
                <article key={idx} className="group relative border border-white/5 bg-white/[0.01] p-6 transition-all duration-500 hover:bg-cyan-950/20 hover:border-cyan-500/30 overflow-hidden">
                  {/* Hover Scan Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline gap-3 mb-3 relative z-10">
                    <span className="font-mono text-[10px] text-cyan-700 group-hover:text-cyan-400 transition-colors border border-cyan-900/30 px-1.5 py-0.5 rounded-sm">REQ_0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-slate-200 tracking-tight group-hover:text-cyan-50 group-hover:shadow-cyan-500/20 transition-all">{req.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-3 mt-1 group-hover:text-slate-300 transition-colors relative z-10">
                    {req.text}
                  </p>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-cyan-500/50 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-cyan-500/50 transition-colors duration-300"></div>
                </article>
              ))}
            </div>
          </SpecSection>

          <div className="grid md:grid-cols-2 gap-8">
            <SpecSection title="What ZEN Is" code="DEF-01">
              <ul className="space-y-4">
                {[
                  "A steward of reference implementations for responsible AI operations",
                  "A certifying and credentialing authority for compliant systems and operators",
                  "An operator-informed standards body grounded in real deployments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 group">
                    <span className="font-mono text-xs text-cyan-500/80 mt-1 border-b border-cyan-900 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-colors">0{i + 1}</span>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </SpecSection>

            <SpecSection title="What ZEN Is Not" code="DEF-02">
              <ul className="space-y-4">
                {[
                  "A generic AI software vendor",
                  "A consulting firm selling abstract frameworks",
                  "A data broker or AI model owner",
                  "A replacement for institutional leadership or governance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400 group">
                    <span className="font-mono text-[10px] text-red-500/40 mt-1 border border-red-900/30 px-1 rounded-sm group-hover:text-red-400 group-hover:border-red-500/50 transition-colors">NEG</span>
                    <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </SpecSection>
          </div>

          <SpecSection title="Proof of Operational Reality" code="SEC-04">
            <div className="border border-white/10 p-8 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden group">
               {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 group-hover:border-cyan-400/50 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 group-hover:border-cyan-400/50 transition-colors duration-500"></div>
              
              <p className="mb-6 text-slate-300">ZEN-aligned systems are characterized by:</p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Active deployment in regulated youth-serving environments",
                  "Documented workforce and compliance workflows",
                  "Youth and staff operating AI-augmented systems under supervision",
                  "Ongoing monitoring of system usage, cost, and governance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-black/40 p-3 border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <div className="w-1 h-1 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    <span className="text-sm font-light text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-dashed border-white/10 pt-4 mt-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Status Check</span>
                <span className="font-mono text-xs text-green-400/80 animate-pulse">>> OPERATIONAL_REALITY_REQUIRED</span>
              </div>
            </div>
          </SpecSection>

          <SpecSection title="Certification and Alignment" code="SEC-05">
            <p className="mb-6">ZEN alignment may be demonstrated through:</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {['ZEN-Compliant System designation', 'ZEN-Certified Operator credentialing', 'ZEN-Verified Deployment Site recognition'].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 text-sm font-mono rounded-sm hover:bg-cyan-900/40 hover:border-cyan-400/40 transition-all cursor-default shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  [{tag}]
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-sm italic border-l-2 border-slate-800 pl-3">
              Certification processes and criteria will be versioned and published separately.
            </p>
          </SpecSection>

          {/* Versioning and Stewardship */}
          <section aria-labelledby="versioning-heading" className="mt-32">
            <Callout title="Versioning and Stewardship" id="versioning-heading">
              <div className="space-y-4">
                <p>
                  This document defines the foundational criteria for the ZEN Reference Implementation.
                </p>
                <p>
                  Subsequent versions may refine requirements while preserving core principles.
                </p>
                <p className="text-white font-medium">
                  ZEN AI Co. serves as the steward of this specification and retains authority over interpretation, certification, and alignment.
                </p>
              </div>
            </Callout>
          </section>

        </div>

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-cyan-900/30 to-transparent" />
        
        <SpecFooter />
      </main>
    </div>
  );
}