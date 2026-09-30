import { useState, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TierOverview from '@/components/TierOverview';
import LayerExplorer from '@/components/LayerExplorer';
import DataFlowDiagram from '@/components/DataFlowDiagram';
import Scenarios from '@/components/Scenarios';
import SpecsDashboard from '@/components/SpecsDashboard';
import Footer from '@/components/Footer';

function App() {
  const [explorerTier, setExplorerTier] = useState<string | undefined>(undefined);

  const handleSelectTier = useCallback((tierId: string) => {
    setExplorerTier(tierId);
    document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleExplore = useCallback(() => {
    document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#06080f]">
      <Navigation />
      <Hero onExplore={handleExplore} />
      <TierOverview onSelectTier={handleSelectTier} />
      <LayerExplorer initialTier={explorerTier} />
      <DataFlowDiagram />
      <Scenarios />
      <SpecsDashboard />
      <Footer />
    </div>
  );
}

export default App;
