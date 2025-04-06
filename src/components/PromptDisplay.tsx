import React, { useEffect, useState } from "react";
import prompts from "../utils/prompts.json";

interface Prompt {
  id: string;
  category: string;
  prompt: string;
}

const PromptDisplay: React.FC<{
  onPromptSelected: (prompt: Prompt) => void;
}> = ({ onPromptSelected }) => {
  const [prompt, setPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    getRandomPrompt();
  }, []);

  const getRandomPrompt = () => {
    if (prompts.length === 0) {
      console.error("No prompts available");
      return;
    }
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(selectedPrompt);
    onPromptSelected(selectedPrompt);
  };
  return <div>{prompt && <h2>{prompt.prompt}</h2>}</div>;
};

export default PromptDisplay;
