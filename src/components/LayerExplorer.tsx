import { useState, useMemo } from 'react';
import { layers, tiers } from '@/data/architecture';
import { Search, X, ChevronRight, AlertTriangle, Lightbulb, Shield, Cpu } from 'lucide-react';

const tierStyles: Record<string, { border: string; bg: string; text: string; dot: string; hoverBorder: string }> = {
  foundation: { border: 'border-cyan-500/20', bg: 'hover:bg-cyan-500/5', text: 'text-cyan-400', dot: 'bg-cyan-500', hoverBorder: 'hover:border-cyan-500/50' },
  advanced: { border: 'border-emerald-500/20', bg: 'hover:bg-emerald-500/5', text: 'text-emerald-400', dot: 'bg-emerald-500', hoverBorder: 'hover:border-emerald-500/50' },
  singularity: { border: 'border-amber-500/20', bg: 'hover:bg-amber-500/5', text: 'text-amber-400', dot: 'bg-amber-500', hoverBorder: 'hover:border-amber-500/50' },
  void: { border: 'border-rose-500/20', bg: 'hover:bg-rose-500/5', text: 'text-rose-400', dot: 'bg-rose-500', hoverBorder: 'hover:border-rose-500/50' },
};

export default function LayerExplorer({ initialTier }: { initialTier?: string }) {
  const [selectedTier, setSelectedTier] = useState<string>(initialTier || 'all');
  const [search, setSearch] = useState('');
  const [selectedLayer, setSelectedLayer] = useState<number | null>(initialTier ? null : 1);

  const filtered = useMemo(() => {
    let result = layers;
    if (selectedTier !== 'all') {
      result = result.filter((l) => l.tier === selectedTier);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) => l.name.toLowerCase().includes(q) || l.purpose.toLowerCase().includes(q) || l.interface.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedTier, search]);

  const activeLayer = layers.find((l) => l.id === selectedLayer);
  const activeTier = activeLayer ? tiers.find((t) => t.id === activeLayer.tier) : null;

  return (
    <section id="explorer" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-700/50 mb-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Interactive Explorer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The 48 Layers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Every layer of the fusion engine, from foundational logic bridges to void-level transcendence. Click any layer to inspect its specification.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedTier === 'all' ? 'bg-slate-700 text-white' : 'glass-light text-slate-400 hover:text-slate-200'
              }`}
            >
              All Tiers
            </button>
            {tiers.map((t) => {
              const s = tierStyles[t.id];
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    selectedTier === t.id
                      ? `${s.border} ${s.text} bg-slate-800/60`
                      : 'border-transparent glass-light text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.name.split(' ')[0]}
                </button>
              );
            })}
          </div>

          <div className="relative flex-1 md:max-w-xs md:ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search layers..."
              className="w-full pl-10 pr-4 py-2 glass-light rounded-lg text-sm text-slate-200 placeholder-slate-500 border border-slate-700/50 focus:border-cyan-500/50 focus:outline-none transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {filtered.map((layer) => {
              const s = tierStyles[layer.tier];
              const isActive = selectedLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`group relative p-4 rounded-xl border ${isActive ? `${s.border} bg-slate-800/60` : `${s.border} ${s.bg} ${s.hoverBorder}`} glass-light transition-all duration-200 text-left`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${isActive ? s.text : 'text-slate-400'} bg-slate-900/60`}>
                      {String(layer.id).padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-sm font-semibold ${isActive ? s.text : 'text-slate-200'} truncate`}>{layer.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{layer.purpose}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            {activeLayer && activeTier ? (
              <div className="glass rounded-2xl border border-slate-700/50 p-6 animate-slide-in-right">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold ${tierStyles[activeLayer.tier].text} bg-slate-900/80 border ${tierStyles[activeLayer.tier].border}`}>
                    {String(activeLayer.id).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">{activeTier.name}</div>
                    <h3 className="text-lg font-bold text-white">{activeLayer.name}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700/40 mb-4">
                  <Cpu className="w-3.5 h-3.5 text-slate-500" />
                  <code className="text-xs font-mono text-slate-400">INTERFACE: {activeLayer.interface}</code>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">{activeLayer.purpose}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Lightbulb className="w-3.5 h-3.5" /> Key Behaviors
                  </h4>
                  <ul className="space-y-2">
                    {activeLayer.keyBehaviors.map((behavior, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${tierStyles[activeLayer.tier].text}`} />
                        <span>{behavior}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeLayer.example && (
                  <div className="mb-4 p-3 rounded-lg bg-slate-900/40 border border-slate-700/30">
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">Example</h4>
                    <p className="text-xs text-slate-400 leading-relaxed italic">{activeLayer.example}</p>
                  </div>
                )}

                {activeLayer.failureMode && (
                  <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                    <h4 className="text-xs font-mono text-amber-400/80 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5" /> Failure Mode
                    </h4>
                    <p className="text-xs text-amber-200/70 leading-relaxed">{activeLayer.failureMode}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass rounded-2xl border border-slate-700/50 p-8 text-center">
                <Shield className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                <p className="text-sm text-slate-500">Select a layer to inspect its specification</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
