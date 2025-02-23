export const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown"; }[]> = {
  "Policies and Frameworks": [
    {
      "id": 1,
      "text": "Which cybersecurity frameworks (e.g., NIST CSF, COBIT, CIS Controls) are implemented?",
      "options": [
        "No frameworks are implemented.",
        "One framework is partially implemented.",
        "Multiple frameworks are implemented but not fully integrated.",
        "Comprehensive implementation and integration of multiple frameworks."
      ],
      "type": "radio"
    },
    {
      "id": 2,
      "text": "Are policies aligned with legal requirements such as GDPR, CCPA, or HIPAA?",
      "options": [
        "No alignment with legal requirements.",
        "Basic alignment exists, but gaps remain in compliance.",
        "Most requirements are met, with periodic reviews to ensure compliance.",
        "Fully aligned with all applicable regulations, with regular audits and updates."
      ],
      "type": "radio"
    },
    {
      "id": 3,
      "text": "What is the process for adopting new frameworks or adapting to evolving regulations?",
      "options": [
        "No formal process for adopting frameworks or regulations.",
        "Ad hoc adoption based on immediate needs or external pressures.",
        "A defined process exists but is not consistently followed.",
        "A formal, well-documented process ensures timely adoption and adaptation."
      ],
      "type": "radio"
    },
    {
      "id": 4,
      "text": "How is adherence to cybersecurity frameworks audited?",
      "options": [
        "No auditing of adherence to frameworks.",
        "Audits are conducted informally or sporadically.",
        "Regular audits are conducted by internal teams.",
        "Independent audits are performed regularly, with actionable recommendations."
      ],
      "type": "radio"
    },
    {
      "id": 5,
      "text": "Are there policies for mobile device management and BYOD (Bring Your Own Device)?",
      "options": [
        "No policies exist for mobile devices or BYOD.",
        "Basic policies exist but lack enforcement mechanisms.",
        "Comprehensive policies are in place but only partially enforced.",
        "Well-defined policies are enforced with tools like MDM solutions and regular audits."
      ],
      "type": "radio"
    },
    {
      "id": 6,
      "text": "Is there a formal process to decommission outdated policies?",
      "options": [
        "No process for decommissioning outdated policies.",
        "Policies are retired informally, without clear documentation.",
        "A formal process exists but is inconsistently followed.",
        "A robust, documented process ensures timely and thorough decommissioning."
      ],
      "type": "radio"
    },
    {
      "id": 7,
      "text": "How are framework updates or changes communicated across the organization?",
      "options": [
        "Updates or changes are not communicated to employees.",
        "Changes are communicated informally, without structured channels.",
        "Updates are shared via official channels but lack training or follow-ups.",
        "Updates are communicated through structured channels, training sessions, and regular briefings."
      ],
      "type": "radio"
    },
    {
      "id": 8,
      "text": "Are policies integrated with enterprise-wide risk management processes?",
      "options": [
        "Policies are not integrated with risk management processes.",
        "Partial integration exists, but silos remain between teams.",
        "Policies are mostly integrated with periodic reviews.",
        "Policies are fully integrated with risk management, including real-time updates and reporting."
      ],
      "type": "radio"
    },
    {
      "id": 9,
      "text": "Is policy enforcement automated, or does it rely on manual oversight?",
      "options": [
        "Policy enforcement is entirely manual.",
        "Enforcement is partially automated with significant manual intervention.",
        "Automation is implemented for key policies, with manual oversight for exceptions.",
        "Policy enforcement is fully automated, with advanced tools ensuring compliance."
      ],
      "type": "radio"
    },
    {
      "id": 10,
      "text": "How are exemptions or exceptions to policies handled and documented?",
      "options": [
        "No process exists for handling exemptions or exceptions.",
        "Exemptions are handled informally, with limited documentation.",
        "A formal process exists but is inconsistently applied.",
        "A well-documented process ensures transparency and accountability for all exemptions."
      ],
      "type": "radio"
    }
  ],
  "Risk Management":[
    { 
        "id": 1, 
        "text": "How frequently are cybersecurity risks assessed within the organization?", 
        "options": [
            "Risks are not formally assessed.", 
            "Risk assessments are conducted annually.", 
            "Risk assessments are conducted semi-annually or quarterly.", 
            "Continuous risk assessment is integrated into operations."
        ], 
        "type": "radio" 
    },
    { 
        "id": 2, 
        "text": "Are risks categorized by impact, likelihood, or other factors?", 
        "options": [
            "Risks are not categorized.", 
            "Risks are categorized informally or inconsistently.", 
            "Risks are systematically categorized by impact and likelihood.", 
            "Risks are categorized using advanced metrics, including business impact analysis and threat modeling."
        ], 
        "type": "radio" 
    },
    { 
        "id": 3, 
        "text": "Is there a risk register or centralized repository for tracking risks?", 
        "options": [
            "No risk registers or repository exists.", 
            "Risks are tracked informally using basic tools (e.g., spreadsheets).", 
            "A formal risk register exists but is not regularly updated.", 
            "A centralized, regularly updated risk register is integrated with risk management tools."
        ], 
        "type": "radio" 
    },
    { 
        "id": 4, 
        "text": "What tools or methodologies are used for risk assessment?", 
        "options": [
            "No specific tools or methodologies are used.", 
            "Basic tools or frameworks (e.g., spreadsheets, simple checklists) are employed.", 
            "Recognized methodologies (e.g., NIST RMF, FAIR, ISO 31000) are applied.", 
            "Advanced tools (e.g., automated risk platforms, AI-driven analytics) and methodologies are fully integrated."
        ], 
        "type": "radio" 
    },
    { 
        "id": 5, 
        "text": "How are emerging threats incorporated into the risk management process?", 
        "options": [
            "Emerging threats are not considered.", 
            "Emerging threats are considered reactively after incidents occur.", 
            "Threat intelligence feeds and periodic reviews address emerging threats.", 
            "A proactive approach uses real-time threat intelligence and scenario planning."
        ], 
        "type": "radio" 
    },
    { 
        "id": 6, 
        "text": "Are risk mitigation strategies prioritized based on business impact?", 
        "options": [
            "Mitigation strategies are not prioritized.", 
            "Strategies are prioritized informally without clear criteria.", 
            "Strategies are prioritized using impact assessments and cost-benefit analysis.", 
            "Mitigation is fully prioritized based on detailed business impact analysis and alignment with organizational goals."
        ], 
        "type": "radio" 
    },
    { 
        "id": 7, 
        "text": "Is there a budget specifically allocated for cybersecurity risk management?", 
        "options": [
            "No budget is allocated for cybersecurity risk management.", 
            "A limited budget is available but insufficient for comprehensive coverage.", 
            "A dedicated budget exists but is subject to annual constraints.", 
            "A robust and flexible budget is allocated, aligned with organizational risk priorities."
        ], 
        "type": "radio" 
    },
    { 
        "id": 8, 
        "text": "Are employees trained to recognize and mitigate cybersecurity risks?", 
        "options": [
            "Employees receive no training on cybersecurity risks.", 
            "Basic training is provided, but it is infrequent and not role-specific.", 
            "Regular training programs include role-specific content.", 
            "Comprehensive, continuous training is conducted, including real-world simulations and customized modules."
        ], 
        "type": "radio" 
    },
    { 
        "id": 9, 
        "text": "How is the effectiveness of risk controls evaluated?", 
        "options": [
            "Risk controls are not evaluated for effectiveness.", 
            "Effectiveness is assessed informally or sporadically.", 
            "Regular reviews and audits evaluate the effectiveness of controls.", 
            "Continuous monitoring and metrics-driven evaluation ensure the effectiveness of risk controls."
        ], 
        "type": "radio" 
    },
    { 
        "id": 10, 
        "text": "Is there a formal escalation process for high-risk findings?", 
        "options": [
            "No escalation process exists for high-risk findings.", 
            "Escalation occurs informally without a documented process.", 
            "A formal process exists but is inconsistently applied.", 
            "A well-defined and consistently followed escalation process ensures timely resolution of high-risk findings."
        ], 
        "type": "radio" 
    }
],

  "Incident Response": [
    { 
        "id": 1, 
        "text": "Is there a documented incident response plan (IRP) that aligns with industry standards?", 
        "options": [
            "No incident response plan exists.", 
            "A basic IRP exists but does not align with industry standards.", 
            "The IRP is documented and aligns with one industry standard (e.g., NIST, ISO).", 
            "The IRP is comprehensive, regularly updated, and aligns with multiple standards."
        ], 
        "type": "radio" 
    },
    { 
        "id": 2, 
        "text": "Who is responsible for activating and managing the IRP during an incident?", 
        "options": [
            "No clear roles or responsibilities are defined.", 
            "Responsibility lies informally with the IT team or leadership.", 
            "Specific individuals or teams are assigned but lack formal documentation.", 
            "A dedicated incident response team (IRT) with documented roles is responsible."
        ], 
        "type": "radio" 
    },
    { 
        "id": 3, 
        "text": "How often is the IRP reviewed and updated?", 
        "options": [
            "The IRP is never reviewed or updated.", 
            "The IRP is reviewed sporadically or after major incidents.", 
            "The IRP is reviewed and updated annually.", 
            "The IRP is reviewed quarterly or after every significant change or incident."
        ], 
        "type": "radio" 
    },
    { 
        "id": 4, 
        "text": "Are employees trained on their roles and responsibilities during an incident?", 
        "options": [
            "Employees are not trained on incident response roles.", 
            "Limited training is provided to key personnel.", 
            "Employees are trained periodically on their roles and responsibilities.", 
            "Regular, comprehensive training is provided to all relevant personnel, including simulations."
        ], 
        "type": "radio" 
    },
    { 
        "id": 5, 
        "text": "What tools or systems support incident detection, logging, and response?", 
        "options": [
            "No tools or systems are in place for incident detection or response.", 
            "Basic tools (e.g., antivirus or firewalls) are used for incident detection.", 
            "Specialized tools (e.g., SIEM, EDR) are used but are not fully integrated.", 
            "Advanced, integrated systems with automation capabilities (e.g., SOAR) support incident response."
        ], 
        "type": "radio" 
    },
    { 
        "id": 6, 
        "text": "Is there a designated incident response team (IRT) with clear roles?", 
        "options": [
            "No designated IRT exists.", 
            "An informal or ad-hoc team handles incidents.", 
            "A designated IRT exists but lacks comprehensive training or role definitions.", 
            "A fully trained and well-documented IRT is in place with clear roles and responsibilities."
        ], 
        "type": "radio" 
    },
    { 
        "id": 7, 
        "text": "How is information about incidents shared with relevant stakeholders?", 
        "options": [
            "Incident information is not shared systematically.", 
            "Information is shared informally or only with internal teams.", 
            "Incident information is shared through established channels but lacks timeliness or consistency.", 
            "A structured process ensures timely communication with internal and external stakeholders."
        ], 
        "type": "radio" 
    },
    { 
        "id": 8, 
        "text": "Are incidents categorized by severity, and how is escalation handled?", 
        "options": [
            "Incidents are not categorized or escalated.", 
            "Basic categorization exists, but escalation processes are informal.", 
            "Incidents are categorized by severity, and escalation follows a documented process.", 
            "A comprehensive framework categorizes incidents and ensures prompt escalation based on impact."
        ], 
        "type": "radio" 
    },
    { 
        "id": 9, 
        "text": "How are lessons learned from past incidents documented and applied?", 
        "options": [
            "Lessons learned are not documented.", 
            "Some lessons are documented informally but are not consistently applied.", 
            "Lessons learned are documented and reviewed periodically for process improvements.", 
            "Lessons are systematically documented, reviewed, and incorporated into policies and training."
        ], 
        "type": "radio" 
    },
    { 
        "id": 10, 
        "text": "Is there coordination with external agencies (e.g., law enforcement, CERTs) during incidents?", 
        "options": [
            "No coordination occurs with external agencies during incidents.", 
            "Coordination occurs informally and only during major incidents.", 
            "Formal relationships exist with external agencies for incident support.", 
            "Comprehensive partnerships and predefined protocols guide collaboration with external agencies."
        ], 
        "type": "radio" 
    }
],
};
