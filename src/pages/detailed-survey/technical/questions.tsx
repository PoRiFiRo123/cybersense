const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown"; }[]> = {
    "Network Security": [
        { 
            "id": 1, 
            "text": "What measures are in place to segment the network and restrict lateral movement?", 
            "options": [
                "No segmentation is implemented.", 
                "Basic segmentation is implemented, but gaps remain.", 
                "Segmentation is implemented using VLANs and access control lists (ACLs).", 
                "Advanced segmentation (e.g., micro-segmentation, zero trust) is in place."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "Are firewalls configured based on a principle of least privilege?", 
            "options": [
                "Firewalls allow broad access and lack proper configuration.", 
                "Basic firewall rules exist but are not optimized for least privilege.", 
                "Firewall configurations adhere to least privilege principles.", 
                "Firewalls are dynamically managed with real-time policy enforcement."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "How are network traffic patterns monitored for anomalies?", 
            "options": [
                "Network traffic is not monitored.", 
                "Traffic is monitored manually or reactively.", 
                "Automated tools monitor traffic patterns for anomalies.", 
                "Advanced AI/ML-driven systems monitor and respond to anomalies in real time."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "Are intrusion detection and prevention systems (IDS/IPS) regularly updated with threat intelligence?", 
            "options": [
                "IDS/IPS systems are not deployed.", 
                "Systems are deployed but not regularly updated.", 
                "IDS/IPS systems are updated periodically with threat intelligence.", 
                "Continuous updates from threat intelligence feeds ensure maximum protection."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "Is there a secure architecture for remote access (e.g., VPN or ZTNA)?", 
            "options": [
                "Remote access is unsecured or not implemented.", 
                "VPN is implemented but lacks additional security measures.", 
                "Secure VPN or ZTNA architecture is in place with MFA.", 
                "ZTNA with context-aware access policies is fully implemented."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "Are wireless networks protected through encryption and authentication protocols?", 
            "options": [
                "Wireless networks are open or use outdated protocols (e.g., WEP).", 
                "WPA2 is implemented with basic authentication controls.", 
                "WPA3 and strong authentication mechanisms (e.g., 802.1X) are in place.", 
                "Wireless networks are fully secured with advanced encryption and monitoring."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "How is network activity logged and reviewed for potential threats?", 
            "options": [
                "Network activity is not logged.", 
                "Logs are collected but reviewed infrequently.", 
                "Logs are reviewed periodically by security teams.", 
                "Real-time log analysis is conducted using SIEM or similar tools."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "Are there mechanisms to prevent unauthorized devices from connecting to the network?", 
            "options": [
                "No mechanisms exist to prevent unauthorized device connections.", 
                "Basic MAC address filtering or manual approval processes are in place.", 
                "Network access control (NAC) is implemented to enforce device authentication.", 
                "Advanced NAC systems dynamically enforce device compliance and authorization."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "Is data encrypted in transit, and are secure protocols (e.g., TLS, SSH) enforced?", 
            "options": [
                "Data in transit is not encrypted.", 
                "Encryption is applied inconsistently or uses outdated protocols.", 
                "TLS, SSH, and other secure protocols are enforced.", 
                "Encryption is comprehensive, with regular audits to ensure protocol strength."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "Are there disaster recovery and backup mechanisms in place for network infrastructure?", 
            "options": [
                "No disaster recovery or backup mechanisms are in place.", 
                "Basic backup mechanisms exist but are not tested regularly.", 
                "Backups are tested periodically, with a documented recovery process.", 
                "Robust, automated backup and disaster recovery mechanisms are tested frequently."
            ], 
            "type": "radio" 
        }
    ],
    
    "Endpoint Security": [
        { 
            "id": 1, 
            "text": "What endpoint protection platforms (EPP) or endpoint detection and response (EDR) solutions are deployed?", 
            "options": [
                "No endpoint protection solutions are implemented.", 
                "Basic antivirus solutions are deployed.", 
                "EPP/EDR solutions are deployed but lack full utilization.", 
                "Advanced EPP/EDR solutions with real-time monitoring and AI/ML capabilities are actively used."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "Are endpoint devices automatically scanned for malware and vulnerabilities?", 
            "options": [
                "No scanning mechanisms are implemented.", 
                "Scanning is manual and infrequent.", 
                "Automated malware and vulnerability scanning is scheduled regularly.", 
                "Continuous scanning with real-time threat detection is in place."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "How are endpoint devices enrolled, managed, and decommissioned securely?", 
            "options": [
                "There is no formal process for managing endpoint devices.", 
                "Devices are manually enrolled and decommissioned with limited security checks.", 
                "A formal endpoint lifecycle management process is in place.", 
                "Automated tools manage the secure enrollment and decommissioning of endpoints."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "Are device encryption policies enforced for all portable and remote endpoints?", 
            "options": [
                "Device encryption is not enforced.", 
                "Some devices are encrypted, but not consistently.", 
                "Encryption policies are enforced for all portable and remote devices.", 
                "Encryption is mandatory, with regular audits to ensure compliance."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "How are endpoints protected against phishing and social engineering attacks?", 
            "options": [
                "No protection mechanisms are in place.", 
                "Basic antivirus provides minimal protection.", 
                "Anti-phishing tools and browser protections are implemented.", 
                "Advanced solutions with real-time threat detection and user training are deployed."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "Is a baseline security configuration established for all endpoints?", 
            "options": [
                "No baseline configuration is established.", 
                "Basic configurations are in place but not enforced.", 
                "A standardized baseline configuration is enforced for all endpoints.", 
                "Continuous monitoring ensures endpoints maintain compliance with baseline security."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Are removable storage devices restricted or monitored?", 
            "options": [
                "No restrictions are in place for removable storage devices.", 
                "Basic restrictions exist but lack monitoring.", 
                "Removable storage is restricted and monitored for activity.", 
                "Advanced monitoring and encryption policies are enforced for removable storage."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "How are endpoint logs collected and correlated for incident detection?", 
            "options": [
                "Endpoint logs are not collected.", 
                "Logs are collected but not analyzed systematically.", 
                "Logs are periodically reviewed and correlated with other security systems.", 
                "Logs are centrally collected and analyzed in real-time using SIEM."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "Is there a policy for personal device usage (BYOD), and how is it enforced?", 
            "options": [
                "No BYOD policy exists.", 
                "A basic BYOD policy is in place but lacks enforcement.", 
                "BYOD policies are enforced through MDM tools.", 
                "Advanced BYOD policies ensure secure access and continuous compliance monitoring."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "Are endpoint devices tested for compliance before accessing sensitive resources?", 
            "options": [
                "No compliance checks are conducted.", 
                "Basic compliance checks are conducted infrequently.", 
                "Devices undergo regular compliance checks before accessing sensitive resources.", 
                "Advanced tools enforce continuous compliance checks before granting access."
            ], 
            "type": "radio" 
        }
    ],
  
    "Application Security": [
        { 
            "id": 1, 
            "text": "How are application vulnerabilities identified and remediated?", 
            "options": [
                "Vulnerabilities are not actively identified.", 
                "Basic vulnerability scanning is conducted occasionally.", 
                "Regular scans and manual assessments are conducted.", 
                "Continuous scanning, automated tools, and a formal remediation process are in place."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "Are secure development practices (e.g., OWASP guidelines) followed by developers?", 
            "options": [
                "No secure development practices are in place.", 
                "Basic secure coding guidelines are available but inconsistently applied.", 
                "Developers follow standardized secure coding practices with regular training.", 
                "Secure development practices are enforced with automated tools and audits."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "What tools are used for application security testing (e.g., SAST, DAST, RASP)?", 
            "options": [
                "No application security testing tools are used.", 
                "Basic tools are used inconsistently.", 
                "SAST and DAST tools are used for regular testing.", 
                "SAST, DAST, and RASP tools are integrated into the development lifecycle."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "Are third-party libraries and dependencies regularly scanned for vulnerabilities?", 
            "options": [
                "No scanning is performed for third-party libraries.", 
                "Scanning is performed infrequently or manually.", 
                "Automated tools regularly scan third-party libraries.", 
                "Continuous scanning with automated alerts and remediation workflows is in place."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "How is sensitive data protected within applications (e.g., encryption, masking)?", 
            "options": [
                "Sensitive data is not actively protected.", 
                "Basic encryption is implemented but lacks consistency.", 
                "Encryption and masking are applied to all sensitive data.", 
                "Advanced data protection methods, including tokenization and secure key management, are implemented."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "Are runtime application self-protection (RASP) tools deployed?", 
            "options": [
                "RASP tools are not deployed.", 
                "RASP tools are deployed for critical applications only.", 
                "RASP tools are deployed and monitored across major applications.", 
                "RASP tools are fully integrated and monitored in real time for all applications."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Is an application inventory maintained and assessed for outdated or unsupported systems?", 
            "options": [
                "No application inventory is maintained.", 
                "A basic inventory exists but is not regularly updated.", 
                "A complete inventory is maintained and reviewed periodically.", 
                "The inventory is continuously updated and assessed for unsupported systems."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "Are APIs tested and secured against common vulnerabilities like injection attacks?", 
            "options": [
                "APIs are not tested for vulnerabilities.", 
                "APIs are manually tested occasionally.", 
                "Automated tools test APIs for vulnerabilities.", 
                "APIs are tested and secured using continuous monitoring and automated defenses."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "Are regular penetration tests conducted on critical applications?", 
            "options": [
                "No penetration tests are conducted.", 
                "Penetration tests are conducted sporadically.", 
                "Regular penetration tests are conducted on critical applications.", 
                "Penetration tests are part of a continuous security assessment program."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "How is user activity within applications monitored and logged?", 
            "options": [
                "User activity is not monitored.", 
                "Basic logs are collected but not actively reviewed.", 
                "User activity is logged and periodically reviewed.", 
                "User activity is continuously monitored and analysed in real time."
            ], 
            "type": "radio" 
        }
    ],    
  };
  
  export default questions;