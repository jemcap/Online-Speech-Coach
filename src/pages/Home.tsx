import { useState } from "react";
import PromptDisplay from "../components/PromptDisplay";
import { Prompt } from "../types";
import VoiceAnalysis from "../components/VoiceAnalysis";

const Home = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [analysisResult, setAnalysisResult] = useState<Record<
    string,
    any
  > | null>(null);
  console.log("Selected Prompt:", selectedPrompt);
  return (
    <div>
      <PromptDisplay onSelectedPrompt={setSelectedPrompt} />
      {selectedPrompt && (
        <div>
          <h2>Selected Prompt:</h2>
          <p>{selectedPrompt.prompt}</p>
        </div>
      )}
      <h2>Voice Analysis</h2>
      <p>Analyze your voice here:</p>

      <VoiceAnalysis onFeaturesExtracted={setAnalysisResult} />
    </div>
  );
};

export default Home;
