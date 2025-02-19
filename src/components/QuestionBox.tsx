import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/components/styles/QuestionBox.module.css";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface QuestionBoxProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: (id: number) => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [otherInput, setOtherInput] = useState<string>("");
  const router = useRouter();

  // Load previously selected answer from localStorage
  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("surveyResults") || "{}");
    if (storedAnswers[question.id]) {
      setSelectedOption(storedAnswers[question.id]);
    } else {
      setSelectedOption(""); // Reset when switching questions
    }
  }, [question.id]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    if (option !== "Other") {
      setOtherInput("");
    }
  };

  // Save answer to localStorage
  const saveAnswer = () => {
    const storedAnswers = JSON.parse(localStorage.getItem("surveyResults") || "{}");
    storedAnswers[question.id] = selectedOption === "Other" ? otherInput : selectedOption;
    localStorage.setItem("surveyResults", JSON.stringify(storedAnswers));
  };

  const handleNext = () => {
    saveAnswer();
    onNext();
  };

  const handleSubmit = () => {
    saveAnswer();
    router.push("/results"); // Redirect to Results Page
  };

  return (
    <div className={styles.box}>
      {/* Question Text */}
      <h2 className={styles.question}>{question.text}</h2>

      {/* Options */}
      <ul className={styles.options}>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                onChange={() => handleOptionChange(option)}
                checked={selectedOption === option}
              />
              {option}
            </label>

            {/* Show input field if "Other" is selected */}
            {selectedOption === option && option === "Other" && (
              <input
                type="text"
                placeholder="Please specify..."
                className={styles.otherInput}
                value={otherInput}
                onChange={(e) => setOtherInput(e.target.value)}
              />
            )}
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div className={styles.navigation}>
        {currentQuestion < totalQuestions ? (
          <button className={styles.nextButton} onClick={handleNext}>
            Next Question
          </button>
        ) : (
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
