import { useState } from "react";
import Header from "@/components/Header";
import QuestionBox from "@/components/QuestionBox";
import { Question } from "@/types/question"; // ✅ Import Question type
import styles from "@/styles/Survey.module.css";

const questions: Question[] = [
  { 
    id: 1, 
    text: "What products or services does your organization offer?", 
    options: [
      "Software development / IT services", 
      "Financial services / Banking", 
      "Healthcare / Pharmaceuticals", 
      "Manufacturing / Supply chain", 
      "Retail / E-commerce", 
      "Government / Public services", 
      "Other"
    ],
    type: "radio" // ✅ Explicitly defining type
  },
  { 
    id: 2, 
    text: "Who are your primary customers or target audience?", 
    options: [
      "Individual consumers (B2C)", 
      "Businesses / Enterprises (B2B)", 
      "Government agencies (B2G)", 
      "Internal employees / In-house operations", 
      "Mixed audience (B2B & B2C)"
    ],
    type: "radio"
  },
  { 
    id: 3, 
    text: "Which industry or market segment does your business operate in?", 
    options: [
      "Technology & Software", 
      "Finance & Banking", 
      "Healthcare & Biotech", 
      "Retail & E-commerce", 
      "Energy & Utilities", 
      "Manufacturing & Logistics", 
      "Education & Research"
    ],
    type: "radio"
  },
  { 
    id: 4, 
    text: "What types of sensitive data does your organization handle?", 
    options: [
      "Customer personal data (PII - Name, Address, Phone, etc.)", 
      "Financial data (Credit cards, Bank details, Transactions)", 
      "Healthcare data (Medical records, Patient information)", 
      "Intellectual property (Patents, Trade secrets, Proprietary data)", 
      "Employee data (HR records, Payroll, Internal communications)"
    ],
    type: "radio"
  },
  { 
    id: 5, 
    text: "Where are you located at?", 
    type: "dropdown" // ✅ Ensuring "dropdown" is explicitly mentioned
  }
];

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNext = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = (id: number) => {
    setCurrentQuestion(id);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className={styles.content}>
        <QuestionBox
          question={questions[currentQuestion - 1]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
}
