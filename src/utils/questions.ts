import { questions as governanceQuestions } from ".././pages/detailed-survey/governance/questions";
import { questions as technicalQuestions } from ".././pages/detailed-survey/technical/questions";
import { questions as dataSecurityQuestions } from ".././pages/detailed-survey/data-security/questions";
import { questions as accessControlQuestions } from ".././pages/detailed-survey/access-control/questions";
import { questions as monitoringQuestions } from ".././pages/detailed-survey/monitoring/questions";
import { questions as trainingQuestions } from ".././pages/detailed-survey/training/questions";

export const allQuestions = {
  "Governance and Policies": governanceQuestions,
  "Technical": technicalQuestions,
  "Data Security": dataSecurityQuestions,
  "Access Control": accessControlQuestions,
  "Monitoring": monitoringQuestions,
  "Training & Awareness": trainingQuestions
};
