import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import DetailedQuestionBox from "@/components/DetailedQuestionBox";
import Header from "@/components/Header";
import styles from "@/styles/CategoryQuestionPage.module.css";
import questions  from "./questions";

export default function GovernanceSurvey() {
  const [currentSection, setCurrentSection] = useState<keyof typeof questions>("Threat Detection");
  const router = useRouter();
  const questionContainerRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll to top when section changes
  useEffect(() => {
    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSection]);

  const handleNextSection = () => {
    const sectionKeys = Object.keys(questions) as Array<keyof typeof questions>;
    const currentIndex = sectionKeys.indexOf(currentSection);
    if (currentIndex < sectionKeys.length - 1) {
      setCurrentSection(sectionKeys[currentIndex + 1]);
    } else {
      router.push("/detailed-survey/training"); // ✅ Navigate to Technical
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* ✅ Governance Title as a Button */}
      <button className={styles.titleButton} onClick={() => router.push("/detailed-survey")}>
        Monitoring and Detection
      </button>

      {/* ✅ Subcategory Navigation Buttons */}
      <div className={styles.sectionButtons}>
        {Object.keys(questions).map((section) => (
          <button
            key={section}
            className={currentSection === section ? styles.activeButton : styles.inactiveButton}
            onClick={() => setCurrentSection(section as keyof typeof questions)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* ✅ Question Box */}
      <DetailedQuestionBox
        questions={questions[currentSection]}
        onNextSection={handleNextSection}
        isLastSection={currentSection === "Logging and SIEM"}
      />
    </div>
  );
}
