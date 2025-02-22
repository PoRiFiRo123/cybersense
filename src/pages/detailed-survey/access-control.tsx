import Header from "@/components/Header";
import styles from "@/styles/DetailedSurvey.module.css";

export default function AccessControl() {
  return (
    <div className={styles.detailedSurveyContainer}>
      <Header />
      <h1 className={styles.title}>Access Control</h1>
      <p className={styles.description}>Details about Access Control.</p>
    </div>
  );
}
