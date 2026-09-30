import { useEffect, useState } from 'react';
import { Boxes, ChevronDown, Cpu, Zap } from 'lucide-react';

export default function Hero({ onExplore }: { onExplore: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scan-line" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-8 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase">Full-Stack Reality Fusion Engine</span>
        </div>

        <h1 className={`text-6xl md:text-8xl font-black tracking-tight mb-4 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient-cyan">PROJECT</span>
          <br className="md:hidden" />
          <span className="text-white"> CHIMERA</span>
        </h1>

        <p className={`text-xl md:text-2xl text-slate-400 font-light mb-2 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Horizon x GTA Fusion Monster
        </p>
        <p className={`text-sm md:text-base text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          A 48-layer recursive hybrid engine with singularity convergence — fusing two game universes into one coherent reality where physics bends, entities morph, and paradox becomes a feature.
        </p>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {[
            { icon: Boxes, label: 'Architecture Layers', value: '48' },
            { icon: Cpu, label: 'Tiers', value: '4' },
            { icon: Zap, label: 'Reality Threads', value: '8+' },
            { icon: ChevronDown, label: 'Timelines', value: '∞' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/40 transition-colors duration-300">
              <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <button
            onClick={onExplore}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Explore the Architecture
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href="#scenarios"
            className="px-8 py-4 glass border border-slate-700/50 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Scenarios
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06080f] to-transparent pointer-events-none" />
    </section>
  );
}
