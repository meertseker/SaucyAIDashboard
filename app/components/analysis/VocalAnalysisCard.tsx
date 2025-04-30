"use client";

import React from 'react';

type VocalAnalysisCardProps = {
  label: string;
  value: string;
};

const VocalAnalysisCard: React.FC<VocalAnalysisCardProps> = ({ label, value }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-lg font-medium">{value}</div>
    </div>
  );
};

export default VocalAnalysisCard;