export interface Prompt {
    id: string;
    text: string;
    duration: number;
    difficulty: "beginner" | "intermediate" | "advanced";
}

export interface PromptCategory {
    id: string;
    name: string;
    description: string;
    prompts: Prompt[]
}

export interface PromptsData {
    categories: PromptCategory[];
}

