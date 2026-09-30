import { useState } from 'react';
import { scenarios } from '@/data/architecture';
import { Car, Repeat, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, typeof Car> = {
  Car,
  Repeat,
  Sparkles,
};

export default function Scenarios() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scenario = scenarios[activeIdx];
  const Icon = iconMap[scenario.icon] || Car;

  return (
    <section id="scenarios" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-700/50 mb-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Use Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Scenario Playthroughs</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Three end-to-end scenarios showing how the 48 layers work together — from cross-world car chases to god-mode finales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scenarios.map((s, idx) => {
            const TabIcon = iconMap[s.icon] || Car;
            return (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeIdx === idx
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40'
                    : 'glass-light text-slate-400 hover:text-slate-200 border border-slate-700/40'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="glass rounded-2xl border border-slate-700/50 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/5 px-6 py-5 border-b border-slate-700/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {scenario.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                      {idx + 1}
                    </div>
                    {idx < scenario.steps.length - 1 && <div className="w-px h-full bg-slate-700/40 mx-auto mt-1" style={{ marginLeft: '15px' }} />}
                  </div>

                  <div className="flex-1 pb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-1">{step.action}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono text-slate-500">Systems:</span>
                      {step.systems.split(', ').map((sys) => (
                        <span key={sys} className="text-xs px-2 py-0.5 rounded-md bg-slate-800/60 text-cyan-300/80 border border-cyan-500/20">
                          {sys}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Result</h4>
                <p className="text-sm text-emerald-100/80">{scenario.result}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setActiveIdx(Math.max(0, activeIdx - 1))}
            disabled={activeIdx === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Previous
          </button>
          <span className="text-xs font-mono text-slate-500">
            {activeIdx + 1} / {scenarios.length}
          </span>
          <button
            onClick={() => setActiveIdx(Math.min(scenarios.length - 1, activeIdx + 1))}
            disabled={activeIdx === scenarios.length - 1}
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
