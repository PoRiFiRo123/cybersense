export interface Question {
    id: number;
    text: string;
    options?: string[]; // Optional for dropdown or non-multiple-choice questions
    type?: "dropdown" | "radio"; // ✅ Allowed values
  }
  