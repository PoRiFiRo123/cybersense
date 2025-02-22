import Header from "@/components/Header";
import styles from "@/styles/DetailedSurvey.module.css";

export default function Governance() {
  return (
    <div className={styles.detailedSurveyContainer}>
      <Header />
      <h1 className={styles.title}>Governance and Policies</h1>
      <p className={styles.description}>Details about Governance and Policies.</p>
    </div>
  );
}
