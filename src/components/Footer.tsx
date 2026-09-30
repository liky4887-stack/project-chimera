import { Boxes, Github, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-slate-800/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">C</span>
          </div>
          <span className="font-bold text-white text-lg tracking-wider">PROJECT CHIMERA</span>
        </div>

        <p className="text-sm text-slate-500 max-w-xl mx-auto mb-6 leading-relaxed">
          The Horizon x GTA Fusion Monster is not a game. It is a universe engine — where reality itself is a design material,
          paradox is a feature, and the player can transcend all limits while the system remains stable.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600 font-mono">
          <span className="flex items-center gap-1.5"><Boxes className="w-3.5 h-3.5" /> 48 Layers</span>
          <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5" /> 4 Tiers</span>
          <span className="flex items-center gap-1.5">v1.0.0</span>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/40">
          <p className="text-xs text-slate-600">
            Full-Stack Reality Fusion Engine with Singularity Convergence
          </p>
        </div>
      </div>
    </footer>
  );
}
