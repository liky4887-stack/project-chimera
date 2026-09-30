import { tiers, layers } from '@/data/architecture';
import { ChevronRight, Clock, Target, ArrowRight } from 'lucide-react';

const tierStyles: Record<string, { border: string; bg: string; text: string; glow: string; dot: string }> = {
  foundation: {
    border: 'border-cyan-500/30',
    bg: 'from-cyan-500/10 to-blue-600/5',
    text: 'text-gradient-cyan',
    glow: 'shadow-cyan-500/20',
    dot: 'bg-cyan-500',
  },
  advanced: {
    border: 'border-emerald-500/30',
    bg: 'from-emerald-500/10 to-teal-600/5',
    text: 'text-gradient-emerald',
    glow: 'shadow-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  singularity: {
    border: 'border-amber-500/30',
    bg: 'from-amber-500/10 to-orange-600/5',
    text: 'text-gradient-amber',
    glow: 'shadow-amber-500/20',
    dot: 'bg-amber-500',
  },
  void: {
    border: 'border-rose-500/30',
    bg: 'from-rose-500/10 to-red-600/5',
    text: 'text-gradient-rose',
    glow: 'shadow-rose-500/20',
    dot: 'bg-rose-500',
  },
};

export default function TierOverview({ onSelectTier }: { onSelectTier: (tierId: string) => void }) {
  return (
    <section id="tiers" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-700/50 mb-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Four Ascending Tiers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Architecture Tiers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The system ascends through four tiers — from foundational engine communication to void-level transcendence. Each tier builds on the last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier, idx) => {
            const styles = tierStyles[tier.id];
            const tierLayers = layers.filter((l) => l.tier === tier.id);

            return (
              <button
                key={tier.id}
                onClick={() => onSelectTier(tier.id)}
                className={`group relative overflow-hidden rounded-2xl border ${styles.border} bg-gradient-to-br ${styles.bg} p-8 text-left hover:shadow-2xl ${styles.glow} transition-all duration-500 hover:scale-[1.02]`}
              >
                <div className="absolute -top-4 -right-4 text-[120px] font-black text-white/[0.03] font-mono leading-none select-none">
                  {idx + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${styles.dot} animate-pulse`} />
                        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">{tier.number}</span>
                      </div>
                      <h3 className={`text-2xl font-bold ${styles.text}`}>{tier.name}</h3>
                      <p className="text-sm text-slate-500 font-mono mt-1">{tier.layerRange}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{tier.purpose}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-light text-xs">
                      <Target className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-300">{tierLayers.length} Layers</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-light text-xs">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-300">{tier.timeline}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-700/40 pt-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <ChevronRight className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider font-mono">Milestone</span>
                    </div>
                    <p className="text-sm text-slate-300 font-medium">{tier.milestone}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
