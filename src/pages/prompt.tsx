import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import styles from "@/styles/Prompt.module.css";

export default function PromptPage() {
  const router = useRouter();
  const [generatedText, setGeneratedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const formattedSurvey = localStorage.getItem("formattedSurvey");

      if (!formattedSurvey) return;

      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formattedText: formattedSurvey }),
        });

        const data = await response.json();
        if (response.ok) {
          setGeneratedText(data.bot);
          setLoading(false);
        } else {
          throw new Error("Error fetching response.");
        }
      } catch (error) {
        setGeneratedText("Error fetching response.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && generatedText) {
      let index = 0;
      const interval = setInterval(() => {
        setTypingIndex((prev) => prev + 1);
        index++;
        if (index >= generatedText.length) {
          clearInterval(interval);
        }
      }, 20);
    }
  }, [generatedText, loading]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.promptContainer}>
        <h1 className={styles.title}>Generated Report</h1>
        <div className={styles.messageContainer}>
          {loading ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            <p className={styles.response}>{generatedText.substring(0, typingIndex)}</p>
          )}
        </div>
      </div>
      
      {/* ✅ Button Below the Container (Now 40% of the Container Width) */}
      <div className={styles.buttonWrapper}>
        <button className={styles.detailTestButton} onClick={() => router.push("/detailed-survey")}>
          TAKE ANOTHER TEST FOR A DETAILED REPORT
        </button>
      </div>
    </div>
  );
}
