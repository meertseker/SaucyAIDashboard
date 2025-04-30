"use client";

import React from 'react';

type AudioVisualizerProps = {
  isEffectActive: boolean;
};

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isEffectActive }) => {
  return (
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
  );
};

export default AudioVisualizer;