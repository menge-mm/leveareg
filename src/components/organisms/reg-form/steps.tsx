import Condition from './condition';
import Procedure from './procedure';
import AdverseEvent from './adverseEvents';
import Encounter from './encounter';
import MedicationStatement from './medicationStatement';
import Consent from './consent';
import Immunization from './immunization';
import Observation from './observation';
import SocialHistory from './socialHistory';
import FamilyMemberHistory from './familyMemberHistory';
import { fieldResourceMap } from '@/constants/fieldSchema';
import AllergyIntolerance from './allergyIntollerance';
import Patient from './patient';

export const resourceNames = (step: number) => {
  switch (step) {
    case 0:
      return 'patient';
    case 1:
      return 'conditions';
    case 2:
      return 'procedures';
    case 3:
      return 'encounters';
    case 4:
      return 'immunizations';
    case 5:
      return 'observations';
    case 6:
      return 'adverseEvents';
    case 7:
      return 'allergyIntolerances';
    case 8:
      return 'familyMemberHistories';
    case 9:
      return 'medicationStatement';
    case 10:
      return 'socialHistory';
    case 11:
      return 'consent';
    default:
      return 'patient';
  }
};

export const steps = [
  <Patient
    key="patient"
    title="معلومات عامة عن المريض" // General Patient Information
    description="يرجى تزويدنا بمعلومات المريض" // Please provide the patient's information
    fieldsSchema={fieldResourceMap.get('Patient')}
  />,
  <Condition
    key="condition"
    index={0}
    title="الحالة" // Condition
    description="يرجى تزويدنا بحالة المريض" // Please provide the patient's condition
    fieldsSchema={fieldResourceMap.get('Condition')}
  />,
  <Procedure
    key="procedure"
    index={0}
    title="الإجراء الطبي" // Medical Procedure
    description="يرجى تزويدنا بالإجراء الطبي للمريض" // Please provide the patient's procedure
    fieldsSchema={fieldResourceMap.get('Procedure')}
  />,
  <Encounter
    key="encounter"
    index={0}
    title="مقابلة المريض" // Patient Encounter
    description="يرجى تزويدنا بمقابلة المريض" // Please provide the patient's encounter
    fieldsSchema={fieldResourceMap.get('Encounter')}
  />,
  <Immunization
    key="immunization"
    index={0}
    title="التطعيم" // Immunization
    description="يرجى تزويدنا بسجل تطعيم المريض" // Please provide the patient's immunization record
    fieldsSchema={fieldResourceMap.get('Immunization')}
  />,

  <Observation
    key="observation"
    index={0}
    title="الملاحظة"
    description="يرجى تزويدنا بالملاحظة الطبية للمريض" // Please provide the patient's observation
    fieldsSchema={fieldResourceMap.get('Observation')}
  />,

  <AdverseEvent
    key="adverseEvent"
    index={0}
    title="حدث ضار" // Adverse Event
    description="يرجى تزويدنا بالحدث الضار للمريض" // Please provide the patient's adverse event
    fieldsSchema={fieldResourceMap.get('AdverseEvent')}
  />,

  <AllergyIntolerance
    key="allergyIntolerances"
    index={0}
    title="حساسية وتحمل" // Allergy Intolerance
    description="يرجى تزويدنا بحساسية المريض وعدم تحمله" // Please provide the patient's allergy intolerance
    fieldsSchema={fieldResourceMap.get('AllergyIntolerance')}
  />,

  <FamilyMemberHistory
    key="familyMemberHistories"
    index={0}
    title="تاريخ أفراد الأسرة" // Family Member History
    description="يرجى تزويدنا بتاريخ أفراد أسرة المريض" // Please provide the patient's family member history
    fieldsSchema={fieldResourceMap.get('FamilyMemberHistory')}
  />,

  <MedicationStatement
    key="medicalStatement"
    title="بيان طبي" // MedicationStatement
    description="يرجى تزويدنا بالبيان الطبي للمريض" // Please provide the patient's medical statement
    fieldsSchema={fieldResourceMap.get('MedicationStatement')}
  />,

  <SocialHistory
    key="socialHistory"
    title="التاريخ الاجتماعي" // Social History
    description="يرجى تزويدنا بالتاريخ الاجتماعي للمريض" // Please provide the patient's social history
    fieldsSchema={fieldResourceMap.get('Basic')}
  />,

  <Consent
    key="consent"
    title="موافقة المريض" // Patient Consent
    description="يرجى تزويدنا بموافقة المريض" // Please provide the patient's consent
    fieldsSchema={fieldResourceMap.get('Consent')}
  />,
];

export type Step = {
  key: string;
  index: number;
  title: string;
  description: string;
  fieldSchema: any;
};

export type Steps = Step[];
