import { useEffect, useState } from "react";
import { Prompt } from "../types";

interface Props {
  onSelectedPrompt: (prompt: Prompt) => void;
}

const PromptDisplay: React.FC<Props> = ({ onSelectedPrompt }) => {
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch("data/prompts.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setPrompts(data);
        getRandomPrompt();
      } catch (error) {
        throw error;
      }
    };
    fetchPrompts();
  }, []);

  const getRandomPrompt = async () => {
    if (prompts.length === 0) return;
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(selectedPrompt);
    onSelectedPrompt(selectedPrompt);
  };
  return (
    <div>
      {prompt && (
        <>
          <h2>{prompt.category}</h2>
          <p>{prompt.prompt}</p>
        </>
      )}
      <button onClick={getRandomPrompt}>New Prompt</button>
    </div>
  );
};

export default PromptDisplay;
