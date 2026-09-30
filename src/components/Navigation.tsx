import { useEffect, useState } from 'react';
import { Layers, GitBranch, Workflow, Gauge, Home, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Overview', icon: Home },
  { id: 'tiers', label: 'Tiers', icon: Layers },
  { id: 'explorer', label: '48 Layers', icon: GitBranch },
  { id: 'flow', label: 'Data Flow', icon: Workflow },
  { id: 'scenarios', label: 'Scenarios', icon: Workflow },
  { id: 'specs', label: 'Specs', icon: Gauge },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = navItems.map((n) => document.getElementById(n.id));
      const offsets = sections.map((s) => (s ? s.getBoundingClientRect().top : Infinity));
      const idx = offsets.findIndex((o) => o > 120);
      const activeIdx = idx === -1 ? navItems.length - 1 : Math.max(0, idx - 1);
      setActive(navItems[activeIdx].id);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-slate-800/60 py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
            <span className="text-white font-black text-sm">C</span>
          </div>
          <span className="font-bold text-white text-sm tracking-wider hidden sm:block">CHIMERA</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                active === item.id
                  ? 'text-cyan-300 bg-cyan-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-300 p-2">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-slate-800/60 mt-3">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-3 rounded-lg text-sm font-medium text-left flex items-center gap-3 ${
                  active === item.id ? 'text-cyan-300 bg-cyan-500/10' : 'text-slate-400'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
