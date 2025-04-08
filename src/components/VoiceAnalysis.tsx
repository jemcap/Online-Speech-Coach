import React, { useEffect, useRef } from "react";
import Meyda from "meyda";

interface Props {
  onFeaturesExtracted: (features: any) => void;
}

const VoiceAnalysis: React.FC<Props> = ({ onFeaturesExtracted }) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const meydaAnalyserRef = useRef<any>(null);

  const startAudio = async () => {
    try {
      audioContextRef.current = new AudioContext();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      sourceRef.current =
        audioContextRef.current.createMediaStreamSource(stream);

      meydaAnalyserRef.current = Meyda.createMeydaAnalyzer({
        audioContext: audioContextRef.current,
        source: sourceRef.current,
        bufferSize: 512,
        featureExtractors: ["rms", "zcr", "energy", "spectralCentroid", "mfcc"],
        callback: (features: any) => {
          onFeaturesExtracted(features);
        },
      });
      meydaAnalyserRef.current.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
      throw error;
    }
  };

  const stopAudio = () => {
    meydaAnalyserRef.current.stop();
    audioContextRef.current?.close();
  };
  return (
    <div>
      <button onClick={startAudio}>Start Speaking</button>
      <button onClick={stopAudio}>Stop</button>
    </div>
  );
};

export default VoiceAnalysis;
