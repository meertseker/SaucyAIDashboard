"use client";

import React from 'react';
import { Preset } from '../../types';
import PresetCard from './PresetCard';

type PresetsListProps = {
  presets: Preset[];
  selectedPreset: Preset | null;
  onSelectPreset: (preset: Preset) => void;
};

const PresetsList: React.FC<PresetsListProps> = ({ 
  presets, 
  selectedPreset, 
  onSelectPreset 
}) => {
  return (
    <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl">AI-Generated Presets</h2>
        <div className="text-sm text-white/60">
          {selectedPreset ? `Selected: ${selectedPreset.name}` : 'No preset selected'}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {presets.map((preset) => (
          <PresetCard 
            key={preset.id}
            preset={preset}
            isSelected={selectedPreset?.id === preset.id}
            onSelect={onSelectPreset}
          />
        ))}
      </div>
    </section>
  );
};

export default PresetsList;