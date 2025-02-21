import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";
import { formatSurveyResponses } from "@/utils/formatResponse";

const questions = [
  { id: 1, text: "What products or services does your organization offer?" },
  { id: 2, text: "Who are your primary customers or target audience?" },
  { id: 3, text: "Which industry or market segment does your business operate in?" },
  { id: 4, text: "What types of sensitive data does your organization handle?" },
  { id: 5, text: "Where are you located at?" }
];

export default function Results() {
  const [surveyResults, setSurveyResults] = useState<Record<number, string>>({});
  const router = useRouter();

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("surveyResults") || "{}");
    setSurveyResults(storedResults);
  }, []);

  const handleGenerate = () => {
    const formattedText = formatSurveyResponses(surveyResults, questions);
    
    localStorage.setItem("formattedSurvey", formattedText);
    
    setTimeout(() => {
      router.push("/prompt"); // ✅ Navigate to Prompt Page after storage update
    }, 200); // Small delay ensures data is saved before navigation
  };

  const handleBack = () => {
    router.push("/survey"); // ✅ Go back to Question 1 in Survey
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.scrollableContent}>
        <h1 className={styles.pageTitle}>Survey Preview</h1>

        {questions.map((question) => (
          <div key={question.id} className={styles.resultItem}>
            <h2 className={styles.questionTitle}>{question.text}</h2>
            <p className={styles.answerText}>{surveyResults[question.id] || "No answer selected"}</p>
          </div>
        ))}

        {/* ✅ Buttons in the same row */}
        <div className={styles.buttonContainer}>
          <button className={styles.backButton} onClick={handleBack}>
            Back
          </button>
          <button className={styles.generateButton} onClick={handleGenerate}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
