  export interface Question {
    id: number;
    text: string;
    options?: string[]; // Only for multiple-choice questions
    type?: "radio" | "dropdown"; // ✅ Ensuring valid values
  }
  