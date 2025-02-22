import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/components/styles/QuestionBox.module.css";
import countryList from "@/utils/countries"; // Import country list

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
  onPrev: (id: number) => void; // ✅ Allow `onPrev` to take an argument
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
  const [filteredCountries, setFilteredCountries] = useState(countryList);
  const router = useRouter();

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("surveyResults") || "{}");
    setSelectedOption(storedAnswers[question.id] || "");
    setOtherInput(storedAnswers[`${question.id}-other`] || "");
  }, [question.id]);

  const saveAnswer = () => {
    const storedAnswers = JSON.parse(localStorage.getItem("surveyResults") || "{}");
    storedAnswers[question.id] = selectedOption === "Other" ? otherInput : selectedOption;
    if (selectedOption === "Other") {
      storedAnswers[`${question.id}-other`] = otherInput;
    }
    localStorage.setItem("surveyResults", JSON.stringify(storedAnswers));
  };

  const handleNext = () => {
    saveAnswer();
    onNext();
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      saveAnswer();
      onPrev(currentQuestion - 1); // ✅ Pass the previous question number
    }
  };
  
  const handleSubmit = () => {
    saveAnswer();
    router.push("/results");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    setFilteredCountries(
      countryList.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.question}>{question.text}</h2>

      {question.type === "dropdown" ? (
        <>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Type to search country..."
            value={selectedOption}
            onChange={handleSearch}
          />
          <select
            className={styles.dropdown}
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            {filteredCountries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </>
      ) : (
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

              {selectedOption === "Other" && option === "Other" && (
                <input
                  type="text"
                  className={styles.otherInput}
                  placeholder="Please specify..."
                  value={otherInput}
                  onChange={(e) => setOtherInput(e.target.value)}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Navigation Buttons */}
      {/* ✅ Navigation Buttons - Previous on Left, Next on Right */}
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
