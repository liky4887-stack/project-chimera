import { useState } from 'react';
import { performanceSpecs, stabilitySpecs, scalabilitySpecs, errorCodes, glossaryTerms } from '@/data/architecture';
import { Gauge, Shield, TrendingUp, AlertTriangle, BookOpen, Target, Minimize2, Zap } from 'lucide-react';

type TabId = 'performance' | 'stability' | 'scalability' | 'errors' | 'glossary';

const tabs: { id: TabId; label: string; icon: typeof Gauge }[] = [
  { id: 'performance', label: 'Performance', icon: Gauge },
  { id: 'stability', label: 'Stability', icon: Shield },
  { id: 'scalability', label: 'Scalability', icon: TrendingUp },
  { id: 'errors', label: 'Error Codes', icon: AlertTriangle },
  { id: 'glossary', label: 'Glossary', icon: BookOpen },
];

export default function SpecsDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('performance');

  const renderTable = (data: typeof performanceSpecs, icon: typeof Target) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700/40">
            <th className="text-left py-3 px-4 text-xs font-mono text-slate-500 uppercase tracking-wider">Metric</th>
            <th className="text-left py-3 px-4 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <div className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> Target</div>
            </th>
            <th className="text-left py-3 px-4 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <div className="flex items-center gap-1.5"><Minimize2 className="w-3.5 h-3.5" /> Minimum</div>
            </th>
            <th className="text-left py-3 px-4 text-xs font-mono text-rose-400 uppercase tracking-wider">
              <div className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> God Mode</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.label} className="border-b border-slate-800/40 hover:bg-slate-800/30 transition-colors">
              <td className="py-3 px-4 text-sm text-slate-300 font-medium">{row.label}</td>
              <td className="py-3 px-4 text-sm text-cyan-300 font-mono">{row.target}</td>
              <td className="py-3 px-4 text-sm text-amber-300/70 font-mono">{row.minimum}</td>
              <td className="py-3 px-4 text-sm text-rose-300 font-mono">{row.godMode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section id="specs" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-700/50 mb-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Technical Reference</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Specifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Performance targets, stability guarantees, scalability limits, error codes, and the full glossary of fusion engine terminology.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-700/60 text-white border border-slate-600'
                  : 'glass-light text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass rounded-2xl border border-slate-700/50 p-6">
          {activeTab === 'performance' && renderTable(performanceSpecs, Target)}
          {activeTab === 'stability' && renderTable(stabilitySpecs, Shield)}
          {activeTab === 'scalability' && renderTable(scalabilitySpecs, TrendingUp)}

          {activeTab === 'errors' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {errorCodes.map((err) => (
                <div key={err.code} className="p-4 rounded-xl bg-slate-900/40 border border-slate-700/40 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-xs font-mono font-bold text-amber-400">{err.code}</code>
                  </div>
                  <p className="text-sm text-slate-300 mb-1">{err.meaning}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Action: {err.action}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'glossary' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {glossaryTerms.map((item) => (
                <div key={item.term} className="p-3 rounded-lg bg-slate-900/40 border border-slate-700/30">
                  <div className="text-sm font-bold text-cyan-300 font-mono mb-1">{item.term}</div>
                  <p className="text-xs text-slate-400">{item.definition}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
