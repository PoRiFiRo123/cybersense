import Header from "@/components/Header";
import CategoryButton from "@/components/CategoryButton";
import styles from "@/styles/DetailedSurvey.module.css";

export default function DetailedSurvey() {
  return (
    <div className={styles.detailedSurveyContainer}>
      <Header />
      <h1 className={styles.title}>Select a Security Category</h1>

      <div className={styles.categoryGrid}>
        <CategoryButton label="Governance and Policies" icon="/assets/governance.svg" route="/detailed-survey/governance" />
        <CategoryButton label="Technical" icon="/assets/technical.svg" route="/detailed-survey/technical" />
        <CategoryButton label="Data Security" icon="/assets/data-security.svg" route="/detailed-survey/data-security" />
        <CategoryButton label="Access Control" icon="/assets/access-control.svg" route="/detailed-survey/access-control" />
        <CategoryButton label="Threat Detection" icon="/assets/threat-detection.svg" route="/detailed-survey/threat-detection" />
        <CategoryButton label="Training and Awareness" icon="/assets/training-awareness.svg" route="/detailed-survey/training-awareness" />
      </div>
    </div>
  );
}
