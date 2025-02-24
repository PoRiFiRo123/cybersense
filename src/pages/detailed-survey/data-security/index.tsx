import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import DetailedQuestionBox from "@/components/DetailedQuestionBox";
import Header from "@/components/Header";
import styles from "@/styles/CategoryQuestionPage.module.css";

const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown"; }[]> = {
  "Encryption and Storage": [
    { 
        "id": 1, 
        "text": "Are strong encryption standards (e.g., AES-256) used for sensitive data?", 
        "options": [
            "No encryption is used for sensitive data.", 
            "Basic encryption standards are used for some data.", 
            "Strong encryption standards are applied to most sensitive data.", 
            "Strong encryption standards (e.g., AES-256) are applied to all sensitive data."
        ], 
        "type": "radio" 
    },
    { 
        "id": 2, 
        "text": "How is encryption applied to databases, file systems, and cloud storage?", 
        "options": [
            "Encryption is not used for databases or file systems.", 
            "Encryption is applied to some databases and file systems.", 
            "Encryption is applied to all databases, file systems, and cloud storage.", 
            "Comprehensive encryption methods are used for databases, file systems, and cloud storage with automated key management."
        ], 
        "type": "radio" 
    },
    { 
        "id": 3, 
        "text": "Are encryption keys managed securely, and are key rotation policies in place?", 
        "options": [
            "Encryption keys are not managed securely.", 
            "Keys are stored securely but key rotation policies are not enforced.", 
            "Keys are stored securely, and manual key rotation is performed periodically.", 
            "Keys are securely managed with automated rotation and comprehensive key lifecycle management."
        ], 
        "type": "radio" 
    },
    { 
        "id": 4, 
        "text": "Are communications secured using protocols like TLS, HTTPS, and VPNs?", 
        "options": [
            "Communications are not secured.", 
            "Basic encryption protocols (e.g., TLS, HTTPS) are used for some communications.", 
            "TLS, HTTPS, and VPNs are used for securing all communications.", 
            "Advanced encryption protocols and VPNs are used for securing both internal and external communications."
        ], 
        "type": "radio" 
    },
    { 
        "id": 5, 
        "text": "Is sensitive data classified, and are encryption requirements tailored to data classification levels?", 
        "options": [
            "Sensitive data is not classified.", 
            "Sensitive data is classified, but encryption is not always based on classification.", 
            "Data classification is in place, and encryption is applied according to classification levels.", 
            "A comprehensive data classification scheme is in place, and encryption is dynamically applied based on data classification levels."
        ], 
        "type": "radio" 
    },
    { 
        "id": 6, 
        "text": "How are mobile devices and removable media secured through encryption?", 
        "options": [
            "Mobile devices and removable media are not encrypted.", 
            "Mobile devices and removable media are encrypted, but not consistently.", 
            "All mobile devices and removable media are encrypted.", 
            "Encryption is enforced on mobile devices and removable media, with automated enforcement for non-compliant devices."
        ], 
        "type": "radio" 
    },
    { 
        "id": 7, 
        "text": "Are there policies for securely decommissioning or disposing of storage media?", 
        "options": [
            "No policies for media decommissioning exist.", 
            "Basic decommissioning procedures are followed.", 
            "Policies for securely decommissioning or disposing of storage media are enforced.", 
            "Comprehensive media decommissioning policies are in place, including secure wiping and physical destruction."
        ], 
        "type": "radio" 
    },
    { 
        "id": 8, 
        "text": "How is encryption compliance monitored and audited?", 
        "options": [
            "Encryption compliance is not monitored.", 
            "Basic monitoring and audits of encryption practices are conducted.", 
            "Regular audits and automated tools monitor encryption compliance.", 
            "Continuous monitoring, real-time alerts, and periodic audits ensure encryption compliance."
        ], 
        "type": "radio" 
    },
    { 
        "id": 9, 
        "text": "Are there mechanisms to detect unauthorized attempts to access encrypted data?", 
        "options": [
            "No mechanisms are in place for detecting unauthorized access to encrypted data.", 
            "Basic monitoring is in place to detect unauthorized access.", 
            "Automated tools detect and alert unauthorized access attempts.", 
            "Advanced monitoring mechanisms (e.g., anomaly detection) detect unauthorized access to encrypted data in real-time."
        ], 
        "type": "radio" 
    },
    { 
        "id": 10, 
        "text": "How is encryption performance optimized to avoid impacting system operations?", 
        "options": [
            "Encryption is applied without consideration for system performance.", 
            "Some performance optimizations are applied but are not consistent.", 
            "Encryption is optimized for performance to minimize impact on critical systems.", 
            "Encryption is carefully optimized and continuously monitored to ensure minimal impact on system performance."
        ], 
        "type": "radio" 
    }
],

  

  "Backup and Recovery": [
    { 
        "id": 1, 
        "text": "Are backups encrypted to protect sensitive data from unauthorized access?", 
        "options": [
            "Backups are not encrypted.", 
            "Backups are encrypted for some sensitive data.", 
            "All backups are encrypted to protect sensitive data.", 
            "Backups are encrypted, with secure key management and encryption policies."
        ], 
        "type": "radio" 
    },
    { 
        "id": 2, 
        "text": "How are backup copies stored (e.g., on-premises, cloud, or hybrid)?", 
        "options": [
            "Backup copies are stored solely on-premises.", 
            "Backup copies are stored on-premises and in the cloud.", 
            "Backup copies are stored in a hybrid environment with both on-premises and cloud.", 
            "Backup copies are stored in a hybrid environment with automated failover between on-premises and cloud storage."
        ], 
        "type": "radio" 
    },
    { 
        "id": 3, 
        "text": "What is the recovery time objective (RTO) and recovery point objective (RPO) for critical data?", 
        "options": [
            "No RTO or RPO are defined.", 
            "RTO and RPO are defined for some systems but are not consistently followed.", 
            "RTO and RPO are defined and monitored for critical data.", 
            "RTO and RPO are clearly defined for all systems and continuously tested to ensure rapid recovery."
        ], 
        "type": "radio" 
    },
    { 
        "id": 4, 
        "text": "Are backup systems isolated to prevent ransomware from affecting them?", 
        "options": [
            "Backup systems are not isolated.", 
            "Basic isolation is implemented for some backup systems.", 
            "Backup systems are isolated to prevent ransomware attacks.", 
            "Backup systems are fully isolated and protected using air-gapping or other advanced methods."
        ], 
        "type": "radio" 
    },
    { 
        "id": 5, 
        "text": "How are incremental and full backups scheduled to minimize data loss risks?", 
        "options": [
            "Backups are performed manually and irregularly.", 
            "Incremental and full backups are scheduled periodically.", 
            "Incremental and full backups are scheduled regularly to minimize data loss.", 
            "A combination of incremental, full, and continuous backups is scheduled for all critical data."
        ], 
        "type": "radio" 
    },
    { 
        "id": 6, 
        "text": "Are backups tested regularly to ensure they can be restored successfully?", 
        "options": [
            "Backups are not regularly tested.", 
            "Backups are tested occasionally but without formal procedures.", 
            "Backups are regularly tested for restore capability.", 
            "Backups are routinely tested with automated verification and disaster recovery drills."
        ], 
        "type": "radio" 
    },
    { 
        "id": 7, 
        "text": "Is there an air-gapped backup strategy in place?", 
        "options": [
            "No air-gapping strategy exists.", 
            "Some backups are air-gapped, but the strategy is not comprehensive.", 
            "An air-gapped backup strategy is implemented for critical systems.", 
            "An air-gapped backup strategy is fully integrated and automated for all critical data."
        ], 
        "type": "radio" 
    },
    { 
        "id": 8, 
        "text": "How are access controls enforced for backup systems?", 
        "options": [
            "Access to backup systems is not controlled.", 
            "Basic access controls are enforced for backup systems.", 
            "Strong access controls are enforced for backup systems with periodic reviews.", 
            "Access to backup systems is tightly controlled using role-based access and continuous monitoring."
        ], 
        "type": "radio" 
    },
    { 
        "id": 9, 
        "text": "Are disaster recovery plans integrated with incident response plans?", 
        "options": [
            "Disaster recovery and incident response plans are separate.", 
            "Disaster recovery plans are loosely integrated with incident response.", 
            "Disaster recovery plans are integrated with incident response plans.", 
            "Disaster recovery and incident response plans are fully integrated, tested, and continuously improved."
        ], 
        "type": "radio" 
    },
    { 
        "id": 10, 
        "text": "Are external dependencies or third-party solutions evaluated for backup reliability?", 
        "options": [
            "External dependencies are not evaluated.", 
            "Backup reliability of third-party solutions is occasionally evaluated.", 
            "External dependencies are regularly evaluated for backup reliability.", 
            "Comprehensive assessments are conducted, and third-party backup solutions are continuously monitored for reliability."
        ], 
        "type": "radio" 
    }
],  
};



export default function DataSecuritySurvey() {
  const [currentSection, setCurrentSection] = useState<keyof typeof questions>("Encryption and Storage");
  const router = useRouter();
  const questionContainerRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll to top when section changes
  useEffect(() => {
    if (questionContainerRef.current) {
      questionContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSection]);

  const handleNextSection = () => {
    const sectionKeys = Object.keys(questions) as Array<keyof typeof questions>;
    const currentIndex = sectionKeys.indexOf(currentSection);
    if (currentIndex < sectionKeys.length - 1) {
      setCurrentSection(sectionKeys[currentIndex + 1]);
    } else {
      router.push("/detailed-survey/access-control"); // ✅ Navigate to Technical
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* ✅ Governance Title as a Button */}
      <button className={styles.titleButton} onClick={() => router.push("/detailed-survey")}>
        Data Security
      </button>

      {/* ✅ Subcategory Navigation Buttons */}
      <div className={styles.sectionButtons}>
        {Object.keys(questions).map((section) => (
          <button
            key={section}
            className={currentSection === section ? styles.activeButton : styles.inactiveButton}
            onClick={() => setCurrentSection(section as keyof typeof questions)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* ✅ Question Box */}
      <DetailedQuestionBox
        questions={questions[currentSection]}
        onNextSection={handleNextSection}
        isLastSection={currentSection === "Backup and Recovery"}
      />
    </div>
  );
}
