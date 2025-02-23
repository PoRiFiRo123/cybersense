import React from "react";
import styles from "@/styles/DetailedSurvey.module.css";
import Header from "@/components/Header";
import Link from "next/link";

const categories = [
  { name: "Governance and Policies", link: "/detailed-survey/governance", img: "/images/governance.svg" },
  { name: "Technical", link: "/detailed-survey/technical", img: "/images/technical.svg" },
  { name: "Data Security", link: "/detailed-survey/data-security", img: "/images/data-security.svg" },
  { name: "Access Control", link: "/detailed-survey/access-control", img: "/images/access-control.svg" },
];

const secondRowCategories = [
  { name: "Monitoring and Detection", link: "/detailed-survey/monitoring", img: "/images/monitoring.svg" },
  { name: "Training and Awareness", link: "/detailed-survey/training", img: "/images/training.svg" },
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
