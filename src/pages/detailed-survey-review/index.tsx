import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import styles from "@/styles/DetailedSurveyReview.module.css";
import { allQuestions } from "@/utils/questions"; // ✅ Import all categories & questions

export default function DetailedSurveyReview() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof allQuestions | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      {/* ✅ Fixed Header */}
      <Header />

      <div className={styles.contentWrapper}>
        {/* ✅ Category Selection */}
        <div className={styles.categoryButtons}>
          {Object.keys(allQuestions).map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? styles.activeButton : styles.inactiveButton}
              onClick={() => {
                setSelectedCategory(category as keyof typeof allQuestions);
                setSelectedSubCategory(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Subcategory Selection */}
        {selectedCategory && (
          <div className={styles.subCategoryButtons}>
            {Object.keys(allQuestions[selectedCategory] as Record<string, unknown>).map((sub) => (
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

        {/* ✅ Scrollable Container for Questions */}
        {selectedCategory && selectedSubCategory && (
          <div className={styles.scrollableContainer}>
            {(allQuestions[selectedCategory] as Record<string, { id: number; text: string; options: string[]; type: string }[]>)[
              selectedSubCategory
            ]?.map((q) => (
              <div key={q.id} className={styles.questionItem}>
                <h2 className={styles.questionText}>{q.text}</h2>
              </div>
            ))}
          </div>
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
