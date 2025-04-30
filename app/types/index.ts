// types/index.ts
export type Preset = {
    id: string;
    name: string;
    description: string;
    creator: string;
    tags: string[];
    likes: number;
  };
  
  export type AnalysisResult = {
    frequencyRange: string;
    loudness: string;
    clarity: string;
    recommendedPresetType: string[];
  };