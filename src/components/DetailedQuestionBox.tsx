import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/components/styles/DetailedQuestionBox.module.css";

interface Question {
  id: number;
  text: string;
  options?: string[];
  type?: "dropdown" | "radio";
}

interface QuestionBoxProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
}

const DetailedQuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div className={styles.box}>
      <h2 className={styles.question}>{question.text}</h2>

      <ul className={styles.options}>
        {question.options?.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={() => setSelectedOption(option)}
                checked={selectedOption === option}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div className={styles.navigation}>
        {currentQuestion > 1 && (
          <button className={styles.prevButton} onClick={onPrev}>
            Previous Question
          </button>
        )}
        <button className={styles.nextButton} onClick={onNext}>
          {currentQuestion < totalQuestions ? "Next Question" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default DetailedQuestionBox;
