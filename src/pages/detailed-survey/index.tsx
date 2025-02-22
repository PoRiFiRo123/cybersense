import React from "react";
import styles from "@/styles/DetailedSurvey.module.css";
import Header from "@/components/Header";
import Link from "next/link";

const categories = [
  { name: "Governance and Policies", link: "/detailed-survey/governance", img: "/icons/governance.svg" },
  { name: "Technical", link: "/detailed-survey/technical", img: "/icons/technical.svg" },
  { name: "Data Security", link: "/detailed-survey/data-security", img: "/icons/data-security.svg" },
  { name: "Access Control", link: "/detailed-survey/access-control", img: "/icons/access-control.svg" },
];

const secondRowCategories = [
  { name: "Threat Detection", link: "/detailed-survey/threat-detection", img: "/icons/threat-detection.svg" },
  { name: "Training and Awareness", link: "/detailed-survey/training", img: "/icons/training.svg" },
];

const DetailedSurvey = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className={styles.category}>
              <img src={category.img} alt={category.name} />
              <span>{category.name}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* ✅ Centered Second Row */}
      <div className={styles.secondRow}>
        {secondRowCategories.map((category, index) => (
          <Link href={category.link} key={index}>
            <div className={styles.category}>
              <img src={category.img} alt={category.name} />
              <span>{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailedSurvey;
