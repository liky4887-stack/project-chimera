import { dataFlowSteps } from '@/data/architecture';
import { ArrowDown, Circle } from 'lucide-react';

export default function DataFlowDiagram() {
  return (
    <section id="flow" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-700/50 mb-4">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">System Pipeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Flow</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From player input to rendered frame — every stage in the fusion pipeline, with the systems that process each step.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700 to-rose-500/40 md:-translate-x-1/2" />

          <div className="space-y-3">
            {dataFlowSteps.map((step, idx) => {
              const isInput = idx === 0;
              const isOutput = idx === dataFlowSteps.length - 1;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex items-center gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} ${isInput || isOutput ? 'md:justify-center' : ''}`}
                >
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 ${isInput ? 'bg-cyan-500' : isOutput ? 'bg-rose-500' : 'bg-slate-600'} w-3 h-3 rounded-full ring-4 ring-[#06080f]`}>
                    {(isInput || isOutput) && <div className={`absolute inset-0 rounded-full ${isInput ? 'bg-cyan-500' : 'bg-rose-500'} animate-ping opacity-40`} />}
                  </div>

                  <div className={`flex-1 ml-12 md:ml-0 ${isInput || isOutput ? 'md:max-w-md' : 'md:max-w-sm'} ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`glass rounded-xl p-4 border transition-all duration-300 hover:scale-[1.02] ${
                      isInput ? 'border-cyan-500/40 shadow-lg shadow-cyan-500/10' :
                      isOutput ? 'border-rose-500/40 shadow-lg shadow-rose-500/10' :
                      'border-slate-700/50 hover:border-slate-600'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-slate-500">{String(idx + 1).padStart(2, '0')}</span>
                        {isInput && <Circle className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />}
                        {isOutput && <Circle className="w-3 h-3 text-rose-400 fill-rose-400/20" />}
                      </div>
                      <h3 className={`text-sm font-bold ${isInput ? 'text-cyan-300' : isOutput ? 'text-rose-300' : 'text-slate-200'}`}>
                        {step.stage}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>

                  {!(isInput || isOutput) && <div className="hidden md:block flex-1" />}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex flex-col items-center gap-1 text-slate-600">
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
