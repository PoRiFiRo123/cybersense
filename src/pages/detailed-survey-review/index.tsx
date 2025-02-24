import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import styles from "@/styles/DetailedSurveyReview.module.css";
import { allQuestions } from "@/utils/questions"; // ✅ Import all categories & questions

export default function DetailedSurveyReview() {
  const router = useRouter();

  // ✅ Ensure there are categories available
  const categoryKeys = Object.keys(allQuestions) as (keyof typeof allQuestions)[];
  const firstCategory = categoryKeys.length > 0 ? categoryKeys[0] : null;
  const firstSubCategory =
    firstCategory && Object.keys(allQuestions[firstCategory]).length > 0
      ? Object.keys(allQuestions[firstCategory])[0]
      : null;

  // ✅ State to Track Selections
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof allQuestions | null>(firstCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(firstSubCategory);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // Stores selected answers

  // ✅ Fetch Selected Answers from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAnswers = JSON.parse(localStorage.getItem("surveyResults") || "{}");
      setSelectedAnswers(storedAnswers);
    }
  }, []);

  // ✅ Update Subcategory when Category Changes
  useEffect(() => {
    if (selectedCategory && allQuestions[selectedCategory]) {
      const firstSub = Object.keys(allQuestions[selectedCategory])[0];
      setSelectedSubCategory(firstSub);
    }
  }, [selectedCategory]);

  // ✅ Ensure Questions Exist Before Rendering
  const questions = selectedCategory && selectedSubCategory
    ? allQuestions[selectedCategory]?.[selectedSubCategory] || []
    : [];

  return (
    <div className={styles.container}>
      {/* ✅ Fixed Header */}
      <Header />

      <div className={styles.contentWrapper}>
        {/* ✅ Category Selection */}
        <div className={styles.categoryButtons}>
          {categoryKeys.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? styles.activeButton : styles.inactiveButton}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Subcategory Selection */}
        {selectedCategory && (
          <div className={styles.subCategoryButtons}>
            {Object.keys(allQuestions[selectedCategory]).map((sub) => (
              <button
                key={sub}
                className={selectedSubCategory === sub ? styles.activeButton : styles.inactiveButton}
                onClick={() => setSelectedSubCategory(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* ✅ Scrollable Container for Questions & Selected Answers */}
        {questions.length > 0 ? (
          <div className={styles.scrollableContainer}>
            {questions.map((q) => {
              const selectedOption = selectedAnswers[q.id] || "Nil"; // ✅ Default to "Nil" if no answer
              return (
                <div key={q.id} className={styles.questionItem}>
                  <h2 className={styles.questionText}>{q.text}</h2>
                  <p className={styles.selectedOption}>Selected: <strong>{selectedOption}</strong></p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className={styles.noQuestions}>No questions available.</p>
        )}

        {/* ✅ Generate Button */}
        <div className={styles.generateButtonWrapper}>
          <button className={styles.generateButton} onClick={() => router.push("/prompt")}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
