 const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown"; }[]> = {
    "Threat Detection":[
        { 
            "id": 1, 
            "text": "What tools (e.g., SIEM, XDR, IDS/IPS) are used to detect security threats?", 
            "options": [
                "No tools are in place for detecting security threats.", 
                "Basic security detection tools (e.g., IDS/IPS) are used.", 
                "Advanced tools like SIEM, XDR, and IDS/IPS are used for threat detection.", 
                "A comprehensive suite of integrated tools, including SIEM, XDR, and advanced machine learning-based detection, is used."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "How are alerts prioritized and triaged to reduce false positives?", 
            "options": [
                "Alerts are not prioritized or triaged.", 
                "Alerts are prioritized manually but may have high false positives.", 
                "Alerts are prioritized and triaged using automated systems.", 
                "Alerts are dynamically prioritized, and machine learning reduces false positives."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "Are there dedicated teams, such as a Security Operations Centre (SOC), to monitor threats?", 
            "options": [
                "No dedicated teams exist for threat monitoring.", 
                "A small team monitors threats on an ad-hoc basis.", 
                "A dedicated team or SOC is in place for monitoring threats.", 
                "A fully staffed, 24/7 SOC with advanced monitoring tools is operational."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "How are zero-day vulnerabilities and emerging threats monitored?", 
            "options": [
                "Emerging threats are not monitored.", 
                "Basic monitoring is conducted but not proactively.", 
                "Emerging threats are monitored with periodic updates from external sources.", 
                "Zero-day vulnerabilities are monitored continuously using threat intelligence feeds and automated detection tools."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "Are honeypots or decoys used to detect and study potential attackers?", 
            "options": [
                "Honeypots are not used.", 
                "Honeypots or decoys are occasionally deployed.", 
                "Honeypots and decoys are actively deployed to detect and study attackers.", 
                "A comprehensive network of honeypots and decoys is deployed to detect and analyze potential attackers in real-time."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "How is network traffic analysed for anomalies or malicious behaviour?", 
            "options": [
                "Network traffic is not analyzed for anomalies.", 
                "Basic network traffic analysis is performed periodically.", 
                "Network traffic is continuously analyzed using automated tools for anomalies.", 
                "Real-time network traffic analysis with advanced behavioral analytics is conducted."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Are endpoint devices monitored for suspicious activities?", 
            "options": [
                "Endpoint devices are not monitored.", 
                "Endpoint monitoring is conducted on a basic level.", 
                "Endpoint devices are monitored for suspicious activities.", 
                "Endpoint monitoring is comprehensive, using EDR tools for real-time detection."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "How are insider threats identified and mitigated?", 
            "options": [
                "Insider threats are not actively monitored.", 
                "Basic monitoring for insider threats is conducted.", 
                "Insider threats are identified using behavioral analysis and monitoring.", 
                "Comprehensive strategies, including UBA and anomaly detection, are implemented to identify and mitigate insider threats."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "Are threat intelligence feeds integrated into the monitoring process?", 
            "options": [
                "No threat intelligence feeds are used.", 
                "Threat intelligence feeds are integrated occasionally.", 
                "Threat intelligence feeds are continuously integrated into the monitoring process.", 
                "Advanced, real-time threat intelligence feeds are fully integrated and used to enhance monitoring capabilities."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "How are automated responses implemented to contain detected threats?", 
            "options": [
                "Automated responses are not implemented.", 
                "Some automated responses are in place but are not comprehensive.", 
                "Automated responses are implemented for containing common threats.", 
                "A fully automated incident response system is in place to detect, analyze, and respond to threats in real-time."
            ], 
            "type": "radio" 
        }
    ],
    "Logging and SIEM": [
        { 
            "id": 1, 
            "text": "Are logs from all critical systems centrally collected and stored?", 
            "options": [
                "Logs are not centrally collected.", 
                "Logs from some critical systems are collected.", 
                "Logs from all critical systems are centrally collected and stored.", 
                "Logs from all systems, including critical and non-critical, are centrally collected with real-time analysis."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "What tools are used for log management and analysis?", 
            "options": [
                "No tools are used for log management.", 
                "Basic log management tools are in use.", 
                "SIEM or similar tools are used for log management and analysis.", 
                "Advanced SIEM tools with automated analysis and integration with threat intelligence are used."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "How are logs protected against unauthorized access or tampering?", 
            "options": [
                "Logs are not secured.", 
                "Logs are stored securely but without automated protection.", 
                "Logs are protected through access controls and tamper detection.", 
                "Logs are encrypted, access-controlled, and continuously monitored for tampering."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "What retention policies are in place for log data, and do they meet compliance requirements?", 
            "options": [
                "Retention policies are not defined.", 
                "Basic retention policies are in place.", 
                "Retention policies are defined and meet compliance requirements.", 
                "Retention policies are comprehensive, ensuring compliance with all relevant regulations."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "Are logs reviewed periodically for anomalies or suspicious activities?", 
            "options": [
                "Logs are not reviewed regularly.", 
                "Logs are reviewed occasionally.", 
                "Logs are reviewed periodically for anomalies.", 
                "Logs are continuously reviewed for anomalies, with automated alerts triggered for suspicious activities."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "How is user activity within critical systems tracked through logs?", 
            "options": [
                "User activity is not tracked.", 
                "User activity is tracked occasionally.", 
                "User activity is tracked within critical systems through logs.", 
                "All user activity within critical systems is logged, including granular tracking of changes and access."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Are log correlation and analysis automated through SIEM or similar tools?", 
            "options": [
                "Log analysis is manual.", 
                "Log analysis is semi-automated.", 
                "Log analysis and correlation are fully automated through SIEM tools.", 
                "Log correlation and analysis are fully automated with real-time threat detection capabilities."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "Are third-party integrations monitored and logged for activity?", 
            "options": [
                "Third-party integrations are not monitored.", 
                "Third-party integrations are monitored but not always logged.", 
                "Third-party integrations are logged for activity.", 
                "All third-party integrations are comprehensively monitored and logged for activity and anomalies."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "How are log archiving and retrieval processes managed?", 
            "options": [
                "Log archiving is not managed.", 
                "Log archiving is managed but retrieval processes are inconsistent.", 
                "Log archiving and retrieval are managed systematically.", 
                "Logs are archived with secure storage and retrieval processes in place, ensuring compliance and efficiency."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "Are logs audited during incident investigations or compliance assessments?", 
            "options": [
                "Logs are not audited.", 
                "Logs are occasionally audited during investigations.", 
                "Logs are audited during incident investigations and compliance assessments.", 
                "Logs are continuously audited as part of incident response, regulatory assessments, and compliance checks."
            ], 
            "type": "radio" 
        }
    ],
    
  };
  
  export default questions;