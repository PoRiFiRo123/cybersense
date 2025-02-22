import Header from "@/components/Header";
import styles from "@/styles/DetailedSurvey.module.css";

export default function ThreatDetection() {
  return (
    <div className={styles.detailedSurveyContainer}>
      <Header />
      <h1 className={styles.title}>Threat Detection</h1>
      <p className={styles.description}>Details about Threat Detection.</p>
    </div>
  );
}
