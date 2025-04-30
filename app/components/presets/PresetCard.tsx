"use client";

import React from 'react';
import { Preset } from '../../types';
import { FaHeadphones } from 'react-icons/fa';
import Button from '../common/Button';

type PresetCardProps = {
  preset: Preset;
  isSelected: boolean;
  onSelect: (preset: Preset) => void;
};

const PresetCard: React.FC<PresetCardProps> = ({ 
  preset, 
  isSelected, 
  onSelect 
}) => {
  return (
    <div 
      className={`bg-[rgba(255,255,255,0.05)] p-4 rounded-xl transition-all cursor-pointer
        ${isSelected ? 'ring-2 ring-[#8974FF]' : 'hover:bg-[rgba(255,255,255,0.1)]'}`}
      onClick={() => onSelect(preset)}
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
      <Button 
        variant="secondary"
        className="mt-3 w-full flex items-center justify-center gap-2"
        onClick={() => onSelect(preset)}
      >
        <FaHeadphones /> Try This Preset
      </Button>
    </div>
  );
};

export default PresetCard;