import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/styles/DetailedQuestionBox.module.css";

interface Question {
  id: number;
  text: string;
  options?: string[];
  type?: "dropdown" | "radio";
}

interface DetailedQuestionBoxProps {
  questions: Question[];
  onNextSection: () => void;
  isLastSection: boolean;
  category: string;
  subcategory: string;
}

const DetailedQuestionBox: React.FC<DetailedQuestionBoxProps> = ({
  questions,
  onNextSection,
  isLastSection,
  category,
  subcategory,
}) => {
  const questionContainerRef = useRef<HTMLDivElement>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  // ✅ Load stored answers on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAnswers = JSON.parse(localStorage.getItem("surveyResults") || "{}");
      setSelectedAnswers(storedAnswers);
    }
  }, []);

  // ✅ Save selected answers to `localStorage`
  const handleOptionChange = (questionId: number, selectedOption: string) => {
    const key = `${category}-${subcategory}-${questionId}`;
    const updatedAnswers = {
      ...selectedAnswers,
      [key]: selectedOption,
    };

    setSelectedAnswers(updatedAnswers);
    localStorage.setItem("surveyResults", JSON.stringify(updatedAnswers));
  };

  // ✅ Scroll to top when switching sections
  useEffect(() => {
    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [questions]);

  return (
    <div className={styles.questionBox}>
      {/* ✅ Scrollable Question Container */}
      <div ref={questionContainerRef} className={styles.questionContainer}>
        {questions.map((question) => {
          const storedAnswer =
            selectedAnswers[`${category}-${subcategory}-${question.id}`] || "";

          return (
            <div key={question.id} className={styles.questionItem}>
              <h2 className={styles.questionText}>{question.text}</h2>

              {question.type === "dropdown" ? (
                <select
                  className={styles.dropdown}
                  value={storedAnswer}
                  onChange={(e) => handleOptionChange(question.id, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {question.options?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <ul className={styles.options}>
                  {question.options?.map((option, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${category}-${subcategory}-${question.id}`}
                          value={option}
                          checked={storedAnswer === option}
                          onChange={() => handleOptionChange(question.id, option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* ✅ Navigation Buttons (Next Section, Submit Survey, Next Category) */}
      <div className={styles.navigation}>
        {!isLastSection && (
          <button className={styles.nextButton} onClick={onNextSection}>
            Next Section
          </button>
        )}

        {isLastSection && (
          <>
            <button className={styles.submitButton} onClick={onNextSection}>
              Submit Survey
            </button>

            <button className={styles.nextButton} onClick={onNextSection}>
              Next Category
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailedQuestionBox;
