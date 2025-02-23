export const questions: Record<string, { id: number; text: string; options: string[]; type: "radio" | "dropdown"; }[]> = {
    "Employee Training": [
        { 
            "id": 1, 
            "text": "Are cybersecurity training sessions mandatory for all employees?", 
            "options": [
                "Cybersecurity training is not mandatory for employees.", 
                "Cybersecurity training is voluntary for some employees.", 
                "Cybersecurity training is mandatory for all employees.", 
                "Cybersecurity training is mandatory for all employees, with regular follow-ups and reinforcement."
            ], 
            "type": "radio" 
        },
        { 
            "id": 2, 
            "text": "How frequently is training conducted, and are updates made to reflect new threats?", 
            "options": [
                "Training is conducted rarely, with no updates on new threats.", 
                "Training is conducted annually, with occasional updates on new threats.", 
                "Training is conducted regularly (e.g., quarterly), with updates reflecting emerging threats.", 
                "Training is conducted continuously, with frequent updates to include the latest cybersecurity threats and trends."
            ], 
            "type": "radio" 
        },
        { 
            "id": 3, 
            "text": "Are specific training modules available for high-risk roles (e.g., finance, IT)?", 
            "options": [
                "No specific training modules are available for high-risk roles.", 
                "Some specific modules are available for high-risk roles.", 
                "Specific training modules for high-risk roles (e.g., finance, IT) are available and mandatory.", 
                "Comprehensive, role-based training modules are available for all high-risk roles, including specialized content and scenarios."
            ], 
            "type": "radio" 
        },
        { 
            "id": 4, 
            "text": "How are employees tested on their understanding of cybersecurity principles?", 
            "options": [
                "Employees are not tested on their cybersecurity knowledge.", 
                "Basic testing is conducted after training, with limited follow-up.", 
                "Employees are regularly tested through quizzes and assessments after each training session.", 
                "Employees are tested with interactive assessments, real-world simulations, and periodic evaluations."
            ], 
            "type": "radio" 
        },
        { 
            "id": 5, 
            "text": "Are phishing simulations conducted regularly to assess awareness?", 
            "options": [
                "Phishing simulations are not conducted.", 
                "Phishing simulations are conducted occasionally.", 
                "Regular phishing simulations are conducted to assess employee awareness.", 
                "Phishing simulations are conducted frequently, with varying scenarios to test and improve employee vigilance."
            ], 
            "type": "radio" 
        },
        { 
            "id": 6, 
            "text": "How are results from training and simulations used to improve employee behaviour?", 
            "options": [
                "Results from training and simulations are not used to improve behavior.", 
                "Results are reviewed but not systematically applied to improve employee behavior.", 
                "Results from training and simulations are analyzed to identify areas for improvement and are used to provide targeted feedback.", 
                "Results are regularly analyzed and used to create personalized development plans and reinforce best practices through continuous coaching."
            ], 
            "type": "radio" 
        },
        { 
            "id": 7, 
            "text": "Is there a feedback mechanism for employees to report suspicious activities?", 
            "options": [
                "No feedback mechanism is available for reporting suspicious activities.", 
                "Employees can report suspicious activities, but the process is informal.", 
                "A formal feedback mechanism is in place for employees to report suspicious activities.", 
                "An easy-to-use, anonymous feedback mechanism is in place, encouraging employees to report suspicious activities without fear of reprisal."
            ], 
            "type": "radio" 
        },
        { 
            "id": 8, 
            "text": "Are third-party contractors and vendors included in training programs?", 
            "options": [
                "Third-party contractors and vendors are not included in training programs.", 
                "Some third-party contractors are provided with cybersecurity training.", 
                "Third-party contractors and vendors are required to participate in cybersecurity training programs.", 
                "All third-party contractors and vendors are integrated into regular training programs and receive tailored security briefings based on their role."
            ], 
            "type": "radio" 
        },
        { 
            "id": 9, 
            "text": "Are gamification techniques or incentives used to encourage participation?", 
            "options": [
                "No gamification or incentives are used to encourage participation.", 
                "Some gamification techniques or incentives are used but are limited.", 
                "Gamification techniques, such as leaderboards or rewards, are used to encourage participation in training.", 
                "Extensive use of gamification techniques, badges, and incentives are incorporated to make cybersecurity training engaging and competitive."
            ], 
            "type": "radio" 
        },
        { 
            "id": 10, 
            "text": "How is training effectiveness measured, and what metrics are tracked?", 
            "options": [
                "Training effectiveness is not measured.", 
                "Basic metrics like completion rates are tracked, but effectiveness is not assessed in depth.", 
                "Training effectiveness is measured using quizzes, employee performance in phishing simulations, and feedback surveys.", 
                "Training effectiveness is measured through key performance indicators (KPIs) such as incident reduction, improved phishing test results, and employee behavior changes, with continuous monitoring for improvements."
            ], 
            "type": "radio" 
        }
    ]    
  };
  