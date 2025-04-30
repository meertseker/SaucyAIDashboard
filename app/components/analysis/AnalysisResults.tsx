"use client";

import React from 'react';
import { AnalysisResult } from '../../types';
import VocalAnalysisCard from './VocalAnalysisCard';
import Button from '../common/Button';
import { FaMicrophone } from 'react-icons/fa';

type AnalysisResultsProps = {
  analysisResult: AnalysisResult;
  onCreatePreset: () => void;
};

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ 
  analysisResult,
  onCreatePreset 
}) => {
  return (
    <section className="bg-[rgba(99,117,197,0.1)] rounded-3xl p-6 mb-8">
      <h2 className="text-xl mb-4">Vocal Analysis Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <VocalAnalysisCard label="Frequency Range" value={analysisResult.frequencyRange} />
        <VocalAnalysisCard label="Loudness" value={analysisResult.loudness} />
        <VocalAnalysisCard label="Clarity" value={analysisResult.clarity} />
        <VocalAnalysisCard label="Recommended" value={analysisResult.recommendedPresetType[0]} />
        
        <Button 
          variant="primary"
          onClick={onCreatePreset}
          className="flex items-center justify-center gap-2 p-3"
        >
          <FaMicrophone /> Create Your Preset
        </Button>
      </div>
      
      <div className="text-sm text-white/60">
        Based on our analysis, we recommend creating presets that match your vocal characteristics.
      </div>
    </section>
  );
};

export default AnalysisResults;