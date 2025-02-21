import { useEffect, useState } from "react";
import Header from "@/components/Header";
import styles from "@/styles/Prompt.module.css";

export default function PromptPage() {
  const [generatedText, setGeneratedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const formattedSurvey = localStorage.getItem("formattedSurvey");

    if (formattedSurvey) {
      fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formattedText: formattedSurvey }),
      })
        .then((res) => res.json())
        .then((data) => {
          setGeneratedText(data.generatedText);
          setLoading(false);
        })
        .catch(() => {
          setGeneratedText("Error fetching response.");
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.promptContainer}>
        <h1 className={styles.title}>Generated Report</h1>
        <p className={styles.response}>
          {loading ? "Loading..." : generatedText}
        </p>
      </div>
    </div>
  );
}
