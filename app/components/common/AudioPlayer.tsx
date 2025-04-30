"use client";

import React from 'react';
import AudioVisualizer from './AudioVisualizer';
import Button from './Button';

type AudioPlayerProps = {
  title: string;
  isEffectActive: boolean;
  toggleEffect: () => void;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  title, 
  isEffectActive, 
  toggleEffect 
}) => {
  return (
    <div className="bg-black/20 rounded-xl mb-4 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🎵</div>
          <div>
            <p className="font-medium">{title}</p>
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
          onClick={toggleEffect}
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
      <AudioVisualizer isEffectActive={isEffectActive} />
      
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
  );
};

export default AudioPlayer;