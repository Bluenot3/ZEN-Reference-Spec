import React from 'react';
import { SpecHeader } from './components/SpecHeader';
import { SpecSection } from './components/SpecSection';
import { SpecFooter } from './components/SpecFooter';
import { Callout } from './components/Callout';
import { DownloadButton } from './components/DownloadButton';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-slate-50">
      <ParticleBackground />
      
      {/* 1. Main Atmosphere Gradient (Silver to faint Mint) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-br from-white via-slate-50 to-teal-50/40 opacity-90"></div>
      
      {/* 2. Subtle Noise Texture for "Paper" feel */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}></div>

      {/* Decorative Grid Overlay - Faint Tech Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]" 
           style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)' }}>
      </div>

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:font-mono focus:uppercase focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md shadow-lg"
      >
        Skip to content
      </a>

      {/* Top HUD Bar - Glassy & Light */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/30 to-transparent z-50 no-print"></div>
      <div className="w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md sticky top-0 z-40 no-print supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-[1000px] mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </div>
            <div className="text-[10px] font-mono font-bold text-slate-600 tracking-[0.2em] uppercase opacity-90">
              ZEN AI OS <span className="text-teal-500">//</span> V.0.1
            </div>
          </div>
          <DownloadButton />
        </div>
      </div>

      {/* Main Document Content */}
      <main id="main-content" className="max-w-[1000px] mx-auto px-6 py-16 relative z-10">
        
        <SpecHeader />

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
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-200 group-hover:bg-teal-400 transition-colors duration-300"></span>
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-6 p-4 border-l-2 border-teal-400/30 bg-teal-50/50 rounded-r-sm">
              <p className="text-slate-600 text-sm font-mono">
                <span className="text-teal-600 font-bold mr-2">NOTE:</span>
                The specification addresses operational deployment, not research, experimentation, or theoretical models.
              </p>
            </div>
          </SpecSection>

          <SpecSection title="Foundational Requirements" code="SEC-03">
            <p className="mb-8 font-mono text-teal-700 text-xs tracking-widest uppercase border border-teal-200 bg-white p-3 inline-block rounded-sm shadow-sm">
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
                <article key={idx} className="group relative bg-white border border-slate-200 p-6 transition-all duration-300 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:border-teal-400/40 rounded-sm">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-3 mb-3 relative z-10">
                    <span className="font-mono text-[10px] text-slate-400 group-hover:text-teal-500 transition-colors border border-slate-100 bg-slate-50 px-1.5 py-0.5 rounded-sm">REQ_0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-teal-900 transition-colors">{req.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-3 mt-1 group-hover:text-slate-700 transition-colors relative z-10">
                    {req.text}
                  </p>
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
                  <li key={i} className="flex items-start gap-4 text-slate-700 group">
                    <span className="font-mono text-xs text-teal-400 mt-1 font-bold group-hover:text-teal-500 transition-colors">0{i + 1}</span>
                    <span className="group-hover:text-slate-900 transition-colors">{item}</span>
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
                  <li key={i} className="flex items-start gap-4 text-slate-500 group">
                    <span className="font-mono text-[10px] text-slate-400 mt-1 border border-slate-200 px-1 rounded-sm bg-slate-50">NEG</span>
                    <span className="group-hover:text-slate-700 transition-colors decoration-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </SpecSection>
          </div>

          <SpecSection title="Proof of Operational Reality" code="SEC-04">
            <div className="border border-slate-200 p-8 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden group shadow-sm rounded-sm">
               {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-slate-200 group-hover:border-teal-400 transition-colors duration-500"></div>
              
              <p className="mb-6 text-slate-800 font-medium">ZEN-aligned systems are characterized by:</p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Active deployment in regulated youth-serving environments",
                  "Documented workforce and compliance workflows",
                  "Youth and staff operating AI-augmented systems under supervision",
                  "Ongoing monitoring of system usage, cost, and governance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-3 border border-slate-100 shadow-sm rounded-sm group-hover:border-teal-100 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-4 mt-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Status Check</span>
                <span className="font-mono text-xs text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded-sm">OPERATIONAL_REALITY_REQUIRED</span>
              </div>
            </div>
          </SpecSection>

          <SpecSection title="Certification and Alignment" code="SEC-05">
            <p className="mb-6 text-slate-700">ZEN alignment may be demonstrated through:</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {['ZEN-Compliant System designation', 'ZEN-Certified Operator credentialing', 'ZEN-Verified Deployment Site recognition'].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-mono rounded-full hover:border-teal-400 hover:text-teal-600 hover:shadow-sm transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-sm italic border-l-2 border-slate-200 pl-3">
              Certification processes and criteria will be versioned and published separately.
            </p>
          </SpecSection>

          {/* Versioning and Stewardship */}
          <section aria-labelledby="versioning-heading" className="mt-32">
            <Callout title="Versioning and Stewardship" id="versioning-heading">
              <div className="space-y-4 text-slate-700">
                <p>
                  This document defines the foundational criteria for the ZEN Reference Implementation.
                </p>
                <p>
                  Subsequent versions may refine requirements while preserving core principles.
                </p>
                <p className="text-slate-900 font-bold">
                  ZEN AI Co. serves as the steward of this specification and retains authority over interpretation, certification, and alignment.
                </p>
              </div>
            </Callout>
          </section>

        </div>

        <div className="my-20 h-px bg-slate-200" />
        
        <SpecFooter />
      </main>
    </div>
  );
}