import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import DetailedQuestionBox from "@/components/DetailedQuestionBox";
import Header from "@/components/Header";
import styles from "@/styles/CategoryQuestionPage.module.css";
// import questions  from "./questions";

const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown"; }[]> = {
    "Identity Management": [
        { 
            "id": 1, 
            "text": "What authentication mechanisms (e.g., MFA, SSO, biometrics) are implemented?", 
            "options": [
                "Basic password-based authentication is used.", 
                "MFA is implemented for critical systems only.", 
                "MFA and SSO are implemented for all systems.", 
                "MFA, SSO, and biometric authentication are widely used with adaptive policies."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "How is user provisioning and deprovisioning managed?", 
            "options": [
                "Manual provisioning and deprovisioning processes are used.", 
                "Basic automated workflows are implemented but lack integration.", 
                "Automated workflows with role-based access are in place.", 
                "Fully automated lifecycle management integrated with HR systems is implemented."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "Are identity and access management (IAM) tools deployed?", 
            "options": [
                "IAM tools are not deployed.", 
                "Basic IAM tools are deployed with limited functionality.", 
                "IAM tools are widely deployed with role-based access control (RBAC).", 
                "Advanced IAM tools with real-time access monitoring and analytics are implemented."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "How is user access reviewed and certified periodically?", 
            "options": [
                "User access is not reviewed.", 
                "Access reviews are conducted sporadically.", 
                "Regular access reviews are conducted and certified.", 
                "Automated periodic reviews and certifications are enforced."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "Are password policies enforced, and do they align with industry standards?", 
            "options": [
                "Password policies are not enforced.", 
                "Basic password policies exist but do not meet industry standards.", 
                "Strong password policies are enforced across all systems.", 
                "Passwordless authentication or advanced alternatives are implemented."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "How are inactive accounts monitored and disabled?", 
            "options": [
                "Inactive accounts are not monitored.", 
                "Accounts are monitored and disabled manually.", 
                "Inactive accounts are automatically flagged and reviewed periodically.", 
                "Automated policies disable inactive accounts based on pre-defined rules."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Are user identities monitored for compromise (e.g., through dark web scans)?", 
            "options": [
                "User identities are not monitored for compromise.", 
                "Basic manual monitoring is conducted.", 
                "Automated tools scan for compromised credentials periodically.", 
                "Continuous dark web monitoring and proactive remediation are implemented."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "Is user behaviour analytics (UBA) used to detect anomalies?", 
            "options": [
                "UBA tools are not used.", 
                "Basic tools are used for specific systems.", 
                "UBA tools analyse behaviour across major systems.", 
                "Advanced UBA solutions provide real-time anomaly detection."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "How is access granted for third-party users or contractors?", 
            "options": [
                "Access for third parties is unmanaged.", 
                "Third-party access is granted with minimal oversight.", 
                "Third-party access is granted with formal reviews and temporary permissions.", 
                "Granular, context-aware policies control third-party access."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "Are guest users restricted from accessing sensitive resources?", 
            "options": [
                "Guest users have unrestricted access.", 
                "Basic restrictions are in place for guest users.", 
                "Guest users are restricted from accessing sensitive resources.", 
                "Advanced policies enforce strict limitations on guest access."
            ], 
            "type": "radio" 
        }
    ],
    "Privileged Access": [
        { 
            "id": 1, 
            "text": "What privileged access management (PAM) solutions are deployed?", 
            "options": [
                "No PAM solutions are in place.", 
                "Basic PAM solutions are deployed with limited scope.", 
                "PAM solutions cover most privileged accounts.", 
                "Comprehensive PAM solutions with session recording and auditing are deployed."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "Are privileged accounts protected with multi-factor authentication (MFA)?", 
            "options": [
                "Privileged accounts are not protected with MFA.", 
                "MFA is enforced for some privileged accounts.", 
                "MFA is enforced for all privileged accounts.", 
                "Adaptive MFA is enforced with continuous monitoring."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "How are privileged session activities logged and monitored?", 
            "options": [
                "Privileged session activities are not logged.", 
                "Basic logs are collected but not reviewed consistently.", 
                "Privileged session activities are logged and reviewed periodically.", 
                "Real-time monitoring and advanced analytics are applied to privileged sessions."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "Are privileged credentials rotated and securely stored?", 
            "options": [
                "Privileged credentials are not rotated or stored securely.", 
                "Basic rotation policies are in place but lack automation.", 
                "Automated credential rotation with secure storage is implemented.", 
                "Advanced rotation policies with vault integration are in place."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "Are just-in-time (JIT) access models implemented for administrative tasks?", 
            "options": [
                "JIT access is not implemented.", 
                "JIT access is implemented for a few critical tasks.", 
                "JIT access is implemented for all administrative tasks.", 
                "Fully automated JIT access with contextual validation is enforced."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "How is access restricted to critical infrastructure and sensitive data?", 
            "options": [
                "No restrictions are in place for critical infrastructure.", 
                "Basic access controls are in place.", 
                "Advanced access controls with role-based policies are implemented.", 
                "Zero-trust access policies protect critical infrastructure."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Is there a separation of duties for privileged roles?", 
            "options": [
                "No separation of duties exists.", 
                "Separation of duties is implemented for some roles.", 
                "A formal separation of duties policy is enforced across all roles.", 
                "Separation of duties is enforced and regularly audited."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "Are privileged accounts audited regularly for unauthorized usage?", 
            "options": [
                "Privileged accounts are not audited.", 
                "Audits are conducted sporadically.", 
                "Regular audits are conducted for privileged accounts.", 
                "Automated auditing and anomaly detection are enforced."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "How are emergency access procedures for privileged accounts managed?", 
            "options": [
                "No emergency access procedures are in place.", 
                "Basic manual processes are followed for emergency access.", 
                "Emergency access is governed by formal policies and approvals.", 
                "Automated processes with comprehensive logging are in place for emergency access."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "Are privileged access policies aligned with compliance requirements?", 
            "options": [
                "Policies do not align with compliance requirements.", 
                "Policies partially align with compliance mandates.", 
                "Policies fully align with compliance requirements and are reviewed regularly.", 
                "Policies exceed compliance requirements with proactive updates."
            ], 
            "type": "radio" 
        }
    ],    
  };
  


export default function GovernanceSurvey() {
  const [currentSection, setCurrentSection] = useState<keyof typeof questions>("Identity Management");
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
      router.push("/detailed-survey/monitoring"); // ✅ Navigate to Technical
    }
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* ✅ Governance Title as a Button */}
      <button className={styles.titleButton} onClick={() => router.push("/detailed-survey")}>
        Access Control
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
        isLastSection={currentSection === "Privileged Access"}
      />
    </div>
  );
}
