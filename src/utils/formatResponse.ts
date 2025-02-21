import { Question } from "@/types/question";

export function formatSurveyResponses(surveyResults: Record<number, string>, questions: Question[]): string {
  return `
What products or services does your organization offer?- ${surveyResults[1] || "Not provided"}
Who are your primary customers or target audience?- ${surveyResults[2] || "Not provided"}
Which industry or market segment does your business operate in? - ${surveyResults[3] || "Not provided"}
What types of sensitive data does your organization handle?- ${surveyResults[4] || "Not provided"}

Organisation is situated in ${surveyResults[5] || "Not provided"}.

Based on these options give me mandatory security measures that an organisation should have in place  
and also give me risks that the organisation might face if they don't have those mandatory measures.
  `;
}
