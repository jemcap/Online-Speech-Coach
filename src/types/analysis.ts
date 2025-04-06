export interface AnalysisData {
    pace: number;      // Words per minute
  volume: number;    // RMS volume (0-1)
  pitch: number;     // Average pitch
  clarity: number;   // Spectral flatness (lower is clearer)
  energy: number;    // Energy level (enthusiasm)
  pauseCount: number;
  pauseDuration: number;
  fillers: number;   // Number of filler words detected
}

export interface RecordingData {
    id?: string;
    userId: string;
    promptId: string;
    analysis: AnalysisData;
    duration: number;
    audioUrl?: string;
    createdAt: Date;
  }