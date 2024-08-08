export type PatientType = {
  id?: string;
  resourceType: 'Patient';
  givenName: string;
  familyName: string;
  telecom: string;
  gender: string;
  homeNumber?: string;
  birthDate?: string;

  //deceasedBoolean?: boolean;
  //deceasedDateTime?: string;
  //photo?: string;
  //relationship?: string;
  //contactFamilyName?: string;
  //contactGivenName?: string;
  //contactGender?: string;
  //contactTelecom?: string;
  //language?: string; //default: "en"
  //preferred?: boolean;
  healthInsurance: number;
  lifeInsurance: number;
};

export type ConditionType = {
  id?: string;
  resourceType: 'Condition';
  code: string; // <---
  clinicalStatus: string;
  verificationStatus: string;
  severity: string;
  onsetDateTime: string;
};

export type ProcedureType = {
  id?: string;
  resourceType: 'Procedure';
  code: string; // <---
  status: string;
  reasonCode: string;
  performer: string;
  performedDateTime: string;
  location: string;
  outcome: string;
};

export type EncounterType = {
  id?: string;
  resourceType: 'Encounter';
  class: string; // <---
  status: string;
  type: string;
  period: string;
  /* period: {
    start: string;
    end: string;
  }; */
  reasonCode: string;
  location: string;
  hospitalization: string;
  serviceProvider: string;
};

export type AllergyIntoleranceType = {
  id?: string;
  resourceType: 'AllergyIntolerance';
  code: string; // <----
  clinicalStatus: string;
  verificationStatus: string;
  category: string;
  criticality: string;
  onsetDateTime: string;
  reaction: string;
};

export type FamilyMemberHistoryType = {
  id?: string;
  resourceType: 'FamilyMemberHistory';
  status: string; // <------
  relationship: string; // <------
  date: string;
  age?: number;
  deceasedBoolean: boolean;
  deceasedDate: string;
  sex: string;
  reason: string;
  // procedure: string;
  // condition: string;
};

export type MedicationStatementType = {
  id?: string;
  resourceType: 'MedicationStatement';
  status: string;
  category: string;
  dateAsserted: string;
  reasonCode: string;
  dosage?: number;
  note: string;
  medicationReference: string;
};

export type ObservationType = {
  id?: string;
  resourceType: 'Observation';
  code: string; // <----
  status: string;
  effectiveDateTime: string;
  valueQuantity?: number;
};

export type ImmunizationType = {
  id?: string;
  resourceType: 'Immunization';
  vaccineCode: string; // <-----
  status: string;
  occurrenceDateTime: string;
  location: string;
  manufacturer: string;
  lotNumber: string;
  expirationDate: string;
  site: string;
  doseQuantity?: number;
};

export type AdverseEventType = {
  id?: string;
  resourceType: 'AdverseEvent';
  category: string;
  actuality: string;
  date: string;
  location: string;
  seriousness: string;
  outcome: string;
  contributingFactor: string;
};

export type BasicResourceType = {
  id?: string;
  resourceType: 'Basic';
  //extension: [{ url: string; valueString: string }];
  //created: string;
  //author: string;
};

export interface SocialHistoryType extends BasicResourceType {
  economicStatus: string;
  highestLevelOfEducation: string;
  physicalActivity: string;
  dietAndNutrition: string;
  substanceUse: string[];
  stressAndCoping: string;
}

export type ConsentType = {
  consentDataCollection: boolean;
  gdprCompliance: boolean;
  gdprProcessingAgreement: boolean;
  hipaaCompliance: boolean;
  hipaaConsent: boolean;
  dataSharing: boolean;
  rightToWithdraw: boolean;
  confidentialityAgreement: boolean;
  dataRetentionPolicy: boolean;
  termsAndConditions: boolean;
  privacyPolicy: boolean;
  dnaCollectionConsent: boolean;
};

export interface BundleResourceType {
  patient: Patient;
  conditions: ConditionType[];
  procedures: ProcedureType[];
  encounters: EncounterType[];
  allergyIntolerances: AllergyIntoleranceType[];
  familyMemberHistories: FamilyMemberHistoryType[];
  observations: ObservationType[];
  immunizations: ImmunizationType[];
  adverseEvents: AdverseEventType[];
  medicationStatement: MedicationStatementType;
  socialHistory: SocialHistoryType;
  consent: Consent;
}
