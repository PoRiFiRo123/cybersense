export const allQuestions = {
    "Governance and Policies": {
      "Policies and Frameworks": [
        { id: 1, text: "What cybersecurity policies does your organization follow?", options: ["ISO 27001", "NIST", "GDPR", "Other"], type: "radio" },
        { id: 2, text: "How often are policies reviewed and updated?", options: ["Monthly", "Quarterly", "Annually", "Ad-hoc"], type: "radio" },
      ],
      "Risk Management": [
        { id: 3, text: "Does your organization conduct regular risk assessments?", options: ["Yes", "No"], type: "radio" },
        { id: 4, text: "Which risk frameworks are followed?", options: ["NIST", "ISO 31000", "CIS Controls", "Other"], type: "radio" },
      ],
      "Incident Response": [
        { id: 5, text: "Does your organization have an incident response plan?", options: ["Yes", "No"], type: "radio" },
      ],
    },
    "Technical Controls": {
      "Network Security": [
        { id: 6, text: "Do you use firewalls for network security?", options: ["Yes", "No"], type: "radio" },
      ],
    },
    "Data Security": {
      "Encryption": [
        { id: 7, text: "Is your data encrypted at rest and in transit?", options: ["Yes", "No"], type: "radio" },
      ],
    },
    "Access Control": {
      "User Authentication": [
        { id: 8, text: "What authentication methods does your organization use?", options: ["MFA", "SSO", "Basic Passwords"], type: "radio" },
      ],
    },
    "Monitoring & Detection": {
      "Threat Detection": [
        { id: 9, text: "Do you have real-time threat monitoring in place?", options: ["Yes", "No"], type: "radio" },
      ],
    },
    "Training & Awareness": {
      "Cybersecurity Training": [
        { id: 10, text: "How often do employees receive cybersecurity training?", options: ["Monthly", "Quarterly", "Annually"], type: "radio" },
      ],
    },
  };
  