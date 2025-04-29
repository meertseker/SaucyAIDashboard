"use client";

import { useState, useEffect } from 'react';
import { FaMicrophone, FaHeadphones, FaRandom, FaDownload } from 'react-icons/fa';

const SaucyAIDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [vocalFile, setVocalFile] = useState<File | null>(null);
  const [presets, setPresets] = useState<Preset[]>([]);
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

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
  const [isEffectActive, setIsEffectActive] = useState(true);
  const handleTryPreset = (preset: Preset) => {
    setSelectedPreset(preset);
    // In a real app, this would apply the preset to the vocal
  };

  const handleRandomPreset = () => {
    const randomIndex = Math.floor(Math.random() * presets.length);
    handleTryPreset(presets[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-[#060711] text-white font-sans relative overflow-x-hidden">
      {/* Mobile Menu */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-[rgba(255,255,255,0.1)] rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 bottom-0 left-0 lg:top-4 lg:bottom-4 lg:left-6 md:left-4 md:bottom-4 md:top-4 w-20 bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] rounded-r-3xl p-4 transition-transform
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
        <div className="flex flex-col items-center gap-8 h-full">
          <div className="bg-gradient-to-r from-[#8974FF] to-[#149CFD] w-12 h-12 rounded-full flex items-center justify-center">
            <span className="text-xl">⚡</span>
          </div>
          <div className="w-full h-px bg-white/20" />
          <nav className="flex flex-col gap-6">
            <button className="text-white hover:text-[#8974FF] transition-colors">
              <FaMicrophone className="w-6 h-6 mx-auto" />
            </button>
            <button className="text-white/50 hover:text-white transition-colors">
              <FaHeadphones className="w-6 h-6 mx-auto" />
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="md:ml-24 lg:ml-28 p-4 md:p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Saucy AI Mixer</h1>
            <p className="text-white/60 mt-1">Tr presets - No account needed to try</p>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <label className="flex-1 md:flex-none bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] p-3 rounded-lg transition-colors cursor-pointer">
              <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
              <div className="flex items-center justify-center gap-2">
                <FaMicrophone /> {vocalFile ? vocalFile.name : 'Upload Vocal'}
              </div>
            </label>
            <button 
              className="flex-1 md:flex-none bg-gradient-to-r from-[#8974FF] to-[#149CFD] hover:opacity-90 p-3 rounded-lg transition-opacity flex items-center justify-center gap-2"
              onClick={handleRandomPreset}
            >
              <FaRandom /> Random Preset
            </button>
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

        {analysisResult && (
          <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
            <h2 className="text-xl mb-4">Vocal Analysis Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                <div className="text-sm text-white/60">Frequency Range</div>
                <div className="text-lg font-medium">{analysisResult.frequencyRange}</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                <div className="text-sm text-white/60">Loudness</div>
                <div className="text-lg font-medium">{analysisResult.loudness}</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                <div className="text-sm text-white/60">Clarity</div>
                <div className="text-lg font-medium">{analysisResult.clarity}</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                <div className="text-sm text-white/60">Recommended</div>
                <div className="text-lg font-medium">{analysisResult.recommendedPresetType[0]}</div>
              </div>
              <button 
              className="flex-1 md:flex-none bg-gradient-to-r from-[#8974FF] to-[#149CFD] hover:opacity-90 p-3 rounded-lg transition-opacity flex items-center justify-center gap-2"
              onClick={handleRandomPreset}
            >
              <FaMicrophone /> Create Your Preset
            </button>
            </div>
            
            
            <div className="text-sm text-white/60">
              Based on our analysis, we recommend creating presets that match your vocal characteristics.
            </div>

          </section>
        )}

        {/* Preset Showcase Section */}
        <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl">AI-Generated Presets</h2>
            <div className="text-sm text-white/60">
              {selectedPreset ? `Selected: ${selectedPreset.name}` : 'No preset selected'}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {presets.map((preset) => (
              <div 
                key={preset.id} 
                className={`bg-[rgba(255,255,255,0.05)] p-4 rounded-xl transition-all cursor-pointer
                  ${selectedPreset?.id === preset.id ? 'ring-2 ring-[#8974FF]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`}
                onClick={() => handleTryPreset(preset)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{preset.name}</div>
                    <div className="text-sm text-white/60">{preset.description}</div>
                  </div>
                  <div className="text-xs bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded">
                    {preset.likes} ♥
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {preset.tags.map(tag => (
                    <span key={tag} className="text-xs bg-[rgba(99,117,197,0.3)] px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="mt-3 w-full bg-[#556CF5] hover:bg-[#4659d1] px-3 py-2 rounded-lg flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTryPreset(preset);
                  }}
                >
                  <FaHeadphones /> Try This Preset
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Preview Section */}
        {selectedPreset && (
            <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
                <h2 className="text-xl mb-4">Preview: {selectedPreset.name}</h2>
                
                {/* Audio Player with Effect Toggle */}
                <div className="bg-black/20 rounded-xl mb-4 p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                    <div className="text-2xl">🎵</div>
                    <div>
                        <p className="font-medium">Your Vocal Track</p>
                        <p className="text-sm text-white/60">0:30 / 0:30</p>
                    </div>
                    </div>
                    
                    {/* Effect Toggle */}
                    <button 
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                        isEffectActive 
                        ? 'bg-[#556CF5] hover:bg-[#4659d1]' 
                        : 'bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]'
                    }`}
                    onClick={() => setIsEffectActive(!isEffectActive)}
                    >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        isEffectActive ? 'bg-white text-[#556CF5]' : 'bg-white/20 text-white'
                    }`}>
                        {isEffectActive ? '✓' : ''}
                    </div>
                    <span>{isEffectActive ? 'Effect ON' : 'Effect OFF'}</span>
                    </button>
                </div>
                
                {/* Audio Visualization */}
                <div className="w-full h-16 bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden mb-2">
                    <div className="flex items-end h-full gap-[2px]">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div 
                        key={i}
                        className={`flex-1 ${
                            isEffectActive ? 'bg-[#8974FF]' : 'bg-white/30'
                        }`}
                        style={{
                            height: `${Math.random() * 70 + 30}%`,
                            opacity: isEffectActive ? 1 : 0.7,
                            transition: 'all 0.3s ease'
                        }}
                        />
                    ))}
                    </div>
                </div>
                
                {/* Playback Controls */}
                <div className="flex items-center justify-between">
                    <button className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                    </svg>
                    </button>
                    <div className="flex-1 mx-4 h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-[#8974FF] rounded-full" 
                        style={{ width: '30%' }}
                    />
                    </div>
                    <button className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
                </div>

                {/* Preset Info */}
                <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Preset Details</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg">
                    <div className="text-sm text-white/60">Creator</div>
                    <div>{selectedPreset.creator}</div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg">
                    <div className="text-sm text-white/60">Popularity</div>
                    <div>{selectedPreset.likes} ♥</div>
                    </div>
                </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                <button className="flex-1 bg-[#556CF5] hover:bg-[#4659d1] px-4 py-3 rounded-lg flex items-center justify-center gap-2">
                    <FaDownload /> Download Preset
                </button>
                <button 
                    className="flex-1 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] px-4 py-3 rounded-lg"
                    onClick={() => {
                    setSelectedPreset(null);
                    setIsEffectActive(false);
                    }}
                >
                    Try Another Preset
                </button>
                </div>
            </section>
            )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#8974FF] to-[#149CFD] rounded-3xl p-8 text-center">
          <h2 className="text-2xl mb-4">Want to save your favorites?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Create a free account to save your custom presets, access more AI tools, and get unlimited exports.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-[#060711] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Sign Up Free
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Continue Without Account
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// Types
type Preset = {
  id: string;
  name: string;
  description: string;
  creator: string;
  tags: string[];
  likes: number;
};

type AnalysisResult = {
  frequencyRange: string;
  loudness: string;
  clarity: string;
  recommendedPresetType: string[];
};

export default SaucyAIDashboard;