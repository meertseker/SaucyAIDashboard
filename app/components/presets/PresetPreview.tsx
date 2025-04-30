"use client";

import React from 'react';
import { Preset } from '../../types';
import Button from '../common/Button';
import AudioPlayer from '../common/AudioPlayer';
import { FaDownload } from 'react-icons/fa';

type PresetPreviewProps = {
  preset: Preset;
  isEffectActive: boolean;
  onToggleEffect: () => void;
  onClose: () => void;
};

const PresetPreview: React.FC<PresetPreviewProps> = ({ 
  preset, 
  isEffectActive, 
  onToggleEffect,
  onClose 
}) => {
  return (
    <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
      <h2 className="text-xl mb-4">Preview: {preset.name}</h2>
      
      {/* Audio Player */}
      <AudioPlayer
        title="Your Vocal Track"
        isEffectActive={isEffectActive}
        toggleEffect={onToggleEffect}
      />

      {/* Preset Info */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Preset Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg">
            <div className="text-sm text-white/60">Creator</div>
            <div>{preset.creator}</div>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg">
            <div className="text-sm text-white/60">Popularity</div>
            <div>{preset.likes} ♥</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button 
          variant="secondary" 
          fullWidth
          className="flex items-center justify-center gap-2 py-3"
        >
          <FaDownload /> Download Preset
        </Button>
        <Button 
          variant="ghost" 
          fullWidth
          className="py-3"
          onClick={onClose}
        >
          Try Another Preset
        </Button>
      </div>
    </section>
  );
};

export default PresetPreview;