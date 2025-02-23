import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
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
}

const DetailedQuestionBox: React.FC<DetailedQuestionBoxProps> = ({
  questions,
  onNextSection,
  isLastSection,
}) => {
  const router = useRouter();
  const questionContainerRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll to top when changing sections
  useEffect(() => {
    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [questions]);

  const handleNextCategory = () => {
    router.push("/detailed-survey/technical");
  };

  const handleSubmitSurvey = () => {
    alert("Survey Submitted Successfully!"); // ✅ Replace this with API logic if needed
    router.push("/thank-you"); // ✅ Redirect to a Thank You page or Results Page
  };

  return (
    <div className={styles.questionBox}>
      {/* ✅ Scrollable Question Container */}
      <div ref={questionContainerRef} className={styles.questionContainer}>
        {questions.map((question) => (
          <div key={question.id} className={styles.questionItem}>
            <h2 className={styles.questionText}>{question.text}</h2>

            {question.type === "dropdown" ? (
              <select className={styles.dropdown}>
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
                      <input type="radio" name={`question-${question.id}`} value={option} />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Navigation Buttons (Next Section, Submit Survey, Next Category) */}
      <div className={styles.navigation}>
        {!isLastSection && (
          <button className={styles.nextButton} onClick={onNextSection}>
            Next Section
          </button>
        )}

        {isLastSection && (
          <button className={styles.submitButton} onClick={handleSubmitSurvey}>
            Submit Survey
          </button>
        )}

        {isLastSection && (
          <button className={styles.nextButton} onClick={handleNextCategory}>
            Next Category
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailedQuestionBox;
