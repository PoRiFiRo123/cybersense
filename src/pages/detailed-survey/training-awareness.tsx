import Header from "@/components/Header";
import styles from "@/styles/DetailedSurvey.module.css";

export default function TrainingAwareness() {
  return (
    <div className={styles.detailedSurveyContainer}>
      <Header />
      <h1 className={styles.title}>Training and Awareness</h1>
      <p className={styles.description}>Details about Training and Awareness.</p>
    </div>
  );
}
