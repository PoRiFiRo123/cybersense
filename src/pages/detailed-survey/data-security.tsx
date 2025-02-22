import Header from "@/components/Header";
import styles from "@/styles/DetailedSurvey.module.css";

export default function DataSecurity() {
  return (
    <div className={styles.detailedSurveyContainer}>
      <Header />
      <h1 className={styles.title}>Data Security</h1>
      <p className={styles.description}>Details about Data Security.</p>
    </div>
  );
}
