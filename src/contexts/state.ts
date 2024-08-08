import { v4 as uniqueId } from "uuid";

// Multiple records each entry selected from the list for each vaccineCode
const immunization = {
  id: uniqueId(),
  vaccineCode: "",
  resourceType: "Immunization",
  status: "completed",
  occurrenceDateTime: "",
  location: "",
  manufacturer: "",
  lotNumber: "",
  expirationDate: "",
  site: "",
  doseQuantity: "",
};

// Multiple records each entry selected from the list for each code
const condition = {
  id: uniqueId(),
  resourceType: "Condition",
  code: "",
  clinicalStatus: "",
  verificationStatus: "",
  severity: "",
  onsetDateTime: "",
};

// Multiple records each entry selected from the list for each code
const procedure = {
  id: uniqueId(),
  resourceType: "Procedure",
  status: "",
  code: "",
  reasonCode: "",
  performer: "",
  performedDateTime: "",
  location: "",
  outcome: "",
};

const encounter = {
  id: uniqueId(),
  resourceType: "Encounter",
  status: "",
  class: "",
  type: "",
  period: "",
  reasonCode: "",
  location: "",
  hospitalization: "",
  serviceProvider: "",
};

// Each allergy intolerance is a separate record with category
// After category is selected, the code is selected from the list - SNOMED CT or ICD-10
const allergyIntolerance = {
  id: uniqueId(),
  resourceType: "AllergyIntolerance",
  code: "",
  clinicalStatus: "",
  verificationStatus: "",
  category: "",
  criticality: "",
  onsetDateTime: "",
  reaction: "",
};

// relationship is selected from the list and the other fields are filled in - they may be arrays
const familyMemberHistory = {
  id: uniqueId(),
  resourceType: "FamilyMemberHistory",
  relationship: "",
  date: "",
  age: "",
  // deceasedBoolean: false,
  deceasedDateTime: "",
  sex: "",
  reason: "",
  //condition: "",
  //procedure: "",
};

// why do we need this in patient registration? - shouldn't this be in the filled by the physician?
const medicationStatement = {
  id: uniqueId(),
  resourceType: "MedicationStatement",
  status: "active",
  // taken: "",
  category: "",
  note: "",
  dateAsserted: "",
  reasonCode: "", // SNOMED CT or ICD-10
  dosage: "",
  reasonReference: "",
  // medication: "",
};

// mutiple record each entry selected from the list for each code
const observation = {
  id: uniqueId(),
  resourceType: "Observation",
  code: "",
  status: "",
  effectiveDateTime: "",
  valueQuantity: "",
};

//
const adverseEvent = {
  id: uniqueId(),
  resourceType: "AdverseEvent",
  // status: "",
  category: "",
  date: "",
  location: "",
  seriousness: "",
  outcome: "",
  contributingFactor: "",
};

const socialHistory = {
  id: uniqueId(),
  resourceType: "Basic",
  economicStatus: "",
  highestLevelOfEducation: "",
  physicalActivity: "",
  dietAndNutrition: "",
  substanceUse: "",
  stressAndCoping: "",
};

export {
  immunization,
  observation,
  condition,
  procedure,
  encounter,
  allergyIntolerance,
  familyMemberHistory,
  medicationStatement,
  adverseEvent,
  socialHistory,
};

export type Immunization = typeof immunization;
export type Observation = typeof observation;
export type Condition = typeof condition;
export type Procedure = typeof procedure;
export type Encounter = typeof encounter;
export type AllergyIntolerance = typeof allergyIntolerance;
export type FamilyMemberHistory = typeof familyMemberHistory;
export type MedicationStatement = typeof medicationStatement;
export type AdverseEvent = typeof adverseEvent;
export type SocialHistory = typeof socialHistory;

export type RegistrationState = {
  immunizations: Immunization[];
  observations: Observation[];
  procedures: Procedure[];
  encounters: Encounter[];
  allergyIntolerances: AllergyIntolerance[];
  familyMemberHistories: FamilyMemberHistory[];
  //medicationStatements: MedicationStatement[];
  adverseEvents: AdverseEvent[];
  conditions: Condition[];
  socialHistory: SocialHistory;
  medicationStatement: MedicationStatement;
};
