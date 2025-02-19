import { useEffect, useState } from "react";
import Header from "@/components/Header";
import styles from "@/styles/Results.module.css";

// Define the same set of questions as in the survey page
const questions = [
  { id: 1, text: "What products or services does your organization offer?" },
  { id: 2, text: "Who are your primary customers or target audience?" },
  { id: 3, text: "Which industry or market segment does your business operate in?" },
  { id: 4, text: "What types of sensitive data does your organization handle?" },
  { id: 5, text: "Where are you located at?" }
];

export default function Results() {
  const [surveyResults, setSurveyResults] = useState<Record<number, string>>({});

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("surveyResults") || "{}");
    setSurveyResults(storedResults);
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />

      {/* Centered Scrollable Content Container */}
      <div className={styles.scrollableContent}>
        <h1 className={styles.pageTitle}>Survey Preview</h1> {/* ✅ Updated title */}

        {questions.map((question) => (
          <div key={question.id} className={styles.resultItem}>
            <h2 className={styles.questionTitle}>{question.text}</h2>
            <p className={styles.answerText}>{surveyResults[question.id] || "No answer selected"}</p>
          </div>
        ))}

        {/* Generate Button */}
        <button className={styles.generateButton} onClick={() => alert("Generating...")}>
          Generate
        </button>
      </div>
    </div>
  );
}
