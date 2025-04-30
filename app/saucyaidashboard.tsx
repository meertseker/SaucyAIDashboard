"use client";

import { useState, useEffect } from 'react';
import { FaMicrophone, FaRandom } from 'react-icons/fa';

// Types
import { Preset, AnalysisResult } from './types';

// Layout
import MainLayout from './components/layout/MainLayout';

// Components
import Button from './components/common/Button';
import AnalysisResults from './components/analysis/AnalysisResults';
import PresetsList from './components/presets/PresetsList';
import PresetPreview from './components/presets/PresetPreview';
import CTASection from './components/cta/CTASection';

const SaucyAIDashboard = () => {
  const [vocalFile, setVocalFile] = useState<File | null>(null);
  const [presets, setPresets] = useState<Preset[]>([]);
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isEffectActive, setIsEffectActive] = useState(true);

  // Mock data for demo purposes
  useEffect(() => {
    // Simulate loading AI-generated presets
    const demoPresets: Preset[] = [
      { id: '1', name: 'Trap Master', description: 'Punchy vocals for trap beats', creator: 'AI Generated', tags: ['trap', 'aggressive'], likes: 124 },
      { id: '2', name: 'R&B Smooth', description: 'Silky vocals with warm tones', creator: 'AI Generated', tags: ['rnb', 'smooth'], likes: 89 },
      { id: '3', name: 'Drill Ready', description: 'Dark and gritty for drill', creator: 'AI Generated', tags: ['drill', 'dark'], likes: 156 },
      { id: '4', name: 'Pop Shine', description: 'Bright and radio-ready', creator: 'AI Generated', tags: ['pop', 'bright'], likes: 210 },
      { id: '5', name: 'Lo-Fi Chill', description: 'Laid-back and vintage', creator: 'AI Generated', tags: ['lofi', 'chill'], likes: 178 },
      { id: '6', name: 'Hyper Vocal', description: 'Energetic and processed', creator: 'AI Generated', tags: ['hyperpop', 'edgy'], likes: 92 },
    ];
    setPresets(demoPresets);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVocalFile(e.target.files[0]);
      setIsAnalyzing(true);
      
      // Simulate AI analysis
      setTimeout(() => {
        setAnalysisResult({
          frequencyRange: '32Hz-8kHz',
          loudness: '-6.2dB',
          clarity: '88%',
          recommendedPresetType: ['Mid Boost']
        });
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  const handleTryPreset = (preset: Preset) => {
    setSelectedPreset(preset);
    // In a real app, this would apply the preset to the vocal
  };

  const handleRandomPreset = () => {
    const randomIndex = Math.floor(Math.random() * presets.length);
    handleTryPreset(presets[randomIndex]);
  };

  const handleCreatePreset = () => {
    // This function would handle the creation of a new preset
    console.log('Creating new preset based on analysis');
    // For demo purposes, just select a random preset
    handleRandomPreset();
  };

  return (
    <MainLayout>
      {/* Header */}
      <header className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Saucy AI Mixer</h1>
          <p className="text-white/60 mt-1">Try presets - No account needed to try</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <label className="flex-1 md:flex-none bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] p-3 rounded-lg transition-colors cursor-pointer">
            <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
            <div className="flex items-center justify-center gap-2">
              <FaMicrophone /> {vocalFile ? vocalFile.name : 'Upload Vocal'}
            </div>
          </label>
          <Button 
            variant="primary"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 p-3"
            onClick={handleRandomPreset}
          >
            <FaRandom /> Random Preset
          </Button>
        </div>
      </header>

      {/* Vocal Analysis Section */}
      {isAnalyzing && (
        <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="animate-pulse">🔍</div>
            <div>Analyzing your vocal... This may take a moment</div>
          </div>
        </section>
      )}

      {/* Analysis Results */}
      {analysisResult && (
        <AnalysisResults 
          analysisResult={analysisResult} 
          onCreatePreset={handleCreatePreset} 
        />
      )}

      {/* Presets List */}
      <PresetsList 
        presets={presets} 
        selectedPreset={selectedPreset} 
        onSelectPreset={handleTryPreset} 
      />

      {/* Preset Preview */}
      {selectedPreset && (
        <PresetPreview 
          preset={selectedPreset} 
          isEffectActive={isEffectActive} 
          onToggleEffect={() => setIsEffectActive(!isEffectActive)} 
          onClose={() => setSelectedPreset(null)} 
        />
      )}

      {/* CTA Section */}
      <CTASection />
    </MainLayout>
  );
};

export default SaucyAIDashboard;