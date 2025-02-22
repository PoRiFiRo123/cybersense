import React, { useState } from "react";
import { useRouter } from "next/router";
import DetailedQuestionBox from "@/components/DetailedQuestionBox";
import Header from "@/components/Header";
import styles from "@/styles/Governance.module.css";

const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown" }[]> = {
  "Policies and Frameworks": [
    { id: 1, text: "What cybersecurity policies does your organization follow?", options: ["ISO 27001", "NIST", "GDPR", "Other"], type: "radio" },
    { id: 2, text: "How often are policies reviewed and updated?", options: ["Monthly", "Quarterly", "Annually", "Ad-hoc"], type: "radio" },
    { id: 3, text: "Who oversees policy compliance?", options: ["CISO", "IT Manager", "External Auditors", "Other"], type: "radio" },
  ],
  "Risk Management": [
    { id: 4, text: "Does your organization conduct regular risk assessments?", options: ["Yes", "No"], type: "radio" },
    { id: 5, text: "Which risk frameworks are followed?", options: ["NIST", "ISO 31000", "CIS Controls", "Other"], type: "radio" },
    { id: 6, text: "How are risks categorized?", options: ["High, Medium, Low", "Quantitative Approach", "No formal process"], type: "radio" },
  ],
  "Incident Response": [
    { id: 7, text: "Does your organization have an incident response plan?", options: ["Yes", "No"], type: "radio" },
    { id: 8, text: "How often do you test your incident response plan?", options: ["Monthly", "Quarterly", "Annually", "Never"], type: "radio" },
    { id: 9, text: "Who is responsible for incident management?", options: ["Security Team", "IT Manager", "External Response Team", "Other"], type: "radio" },
  ],
};

export default function GovernanceSurvey() {
  const [currentSection, setCurrentSection] = useState<keyof typeof questions>("Policies and Frameworks");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const questionList = questions[currentSection];
  const sectionKeys = Object.keys(questions) as Array<keyof typeof questions>;

  const handleNext = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentIndex = sectionKeys.indexOf(currentSection);
      if (currentIndex < sectionKeys.length - 1) {
        setCurrentSection(sectionKeys[currentIndex + 1]);
        setCurrentQuestionIndex(0);
      } else {
        router.push("/detailed-survey/technical");
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      const currentIndex = sectionKeys.indexOf(currentSection);
      if (currentIndex > 0) {
        setCurrentSection(sectionKeys[currentIndex - 1]);
        setCurrentQuestionIndex(questions[sectionKeys[currentIndex - 1]].length - 1);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Governance and Policies</h1>

      {/* ✅ Updated Subcategory Buttons */}
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

      {/* Question Box */}
      <DetailedQuestionBox
        question={questionList[currentQuestionIndex]}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questionList.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
