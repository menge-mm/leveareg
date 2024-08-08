const socialHistory = {
  // id: uniqueId(),
  resourceType: "SocialHistory",
  patientId: "",
  economicStatus: "",
  highestLevelOfEducation: "",
  physicalActivity: "",
  dietAndNutrition: "",
  substanceUse: [],
  stressAndCoping: "",
};

export type SocialHistory = typeof socialHistory;

export const formatSocialHistoryResource = (socialHistory: SocialHistory) => {
  return {
    resourceType: "Basic",
    code: {
      coding: [
        {
          system: "http://example.com/fhir/codes",
          code: "SocialHistory",
          display: "Social History",
        },
      ],
    },
    subject: {
      reference: `Patient/${socialHistory.patientId}`,
    },
    extension: [
      {
        url: "http://example.com/fhir/StructureDefinition/economicStatus",
        valueString: socialHistory.economicStatus,
      },
      {
        url: "http://example.com/fhir/StructureDefinition/highestLevelOfEducation",
        valueString: socialHistory.highestLevelOfEducation,
      },
      {
        url: "http://example.com/fhir/StructureDefinition/physicalActivity",
        valueString: socialHistory.physicalActivity,
      },
      {
        url: "http://example.com/fhir/StructureDefinition/dietAndNutrition",
        valueString: socialHistory.dietAndNutrition,
      },
      {
        url: "http://example.com/fhir/StructureDefinition/substanceUse",
        valueString: socialHistory.substanceUse.join(", "),
      },
      {
        url: "http://example.com/fhir/StructureDefinition/stressAndCoping",
        valueString: socialHistory.stressAndCoping,
      },
    ],
    created: new Date().toISOString(),
    // author: {
    //   reference: "Practitioner/123",
    //   display: "Dr. Smith",
    // },
  };
};

// Custom FHIR resource type for SocialHistory
const socialHistoryResource = {
  resourceType: "StructureDefinition",
  id: "social-history",
  url: "http://example.com/fhir/StructureDefinition/social-history",
  name: "SocialHistory",
  title: "Social History",
  status: "draft",
  description: "A record of information about an individual’s social determinants of health.",
  fhirVersion: "4.0.1",
  kind: "resource",
  abstract: false,
  type: "SocialHistory",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/DomainResource",
  derivation: "constraint",
  differential: {
    element: [
      {
        id: "SocialHistory",
        path: "SocialHistory",
        short: "Information about an individual’s social determinants of health",
        definition:
          "This resource contains details about different aspects of a person's lifestyle that impact their health.",
        min: 0,
        max: "*",
      },
      {
        id: "SocialHistory.economicStatus",
        path: "SocialHistory.economicStatus",
        short: "Economic status of the individual",
        definition:
          "Describes the economic status of the individual, which can affect their health outcomes.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
      },
      {
        id: "SocialHistory.highestLevelOfEducation",
        path: "SocialHistory.highestLevelOfEducation",
        short: "Highest level of education attained",
        definition: "The highest level of education the individual has completed.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
      },
      {
        id: "SocialHistory.physicalActivity",
        path: "SocialHistory.physicalActivity",
        short: "Physical activity levels",
        definition:
          "Details about the frequency and type of physical activity in which the individual engages.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
      },
      {
        id: "SocialHistory.dietAndNutrition",
        path: "SocialHistory.dietAndNutrition",
        short: "Diet and nutritional habits",
        definition: "Information about the individual's diet and nutritional habits.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
      },
      {
        id: "SocialHistory.substanceUse",
        path: "SocialHistory.substanceUse",
        short: "Substance use information",
        definition:
          "Information regarding the individual's use of substances like tobacco, alcohol, and drugs.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
      },
      {
        id: "SocialHistory.stressAndCoping",
        path: "SocialHistory.stressAndCoping",
        short: "Stress and coping mechanisms",
        definition: "Details on how the individual copes with stress.",
        min: 0,
        max: "1",
        type: [
          {
            code: "string",
          },
        ],
      },
    ],
  },
};

const definitionProfile = {
  resourceType: "StructureDefinition",
  url: "http://hl7.org/fhir/StructureDefinition/SocialHistory",
  name: "SocialHistory",
  title: "Social History",
  status: "draft",
  date: "2021-09-23",
  publisher: "Healthcare Provider",
  description: "Social History",
  fhirVersion: "4.0.1",
  kind: "resource",
  abstract: false,
  type: "SocialHistory",
  baseDefinition: "http://hl7.org/fhir/StructureDefinition/DomainResource",
  derivation: "specialization",
  snapshot: {
    element: [
      {
        id: "SocialHistory",
        path: "SocialHistory",
        short: "Social History",
        definition: "Social History",
        min: 0,
        max: "1",
        type: [
          {
            code: "BackboneElement",
          },
        ],
        constraint: [
          {
            key: "ele-1",
            severity: "error",
            human: "All FHIR elements must have a @value or children",
            expression: "hasValue() or (children().count() > id.count())",
          },
        ],
      },
      {
        id: "SocialHistory.economicStatus",
        path: "SocialHistory.economicStatus",
        short: "Economic Status",
        definition: "Economic Status",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
      },
      {
        id: "SocialHistory.highestLevelOfEducation",
        path: "SocialHistory.highestLevelOfEducation",
        short: "Highest Level of Education",
        definition: "Highest Level of Education",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
      },
      {
        id: "SocialHistory.physicalActivity",
        path: "SocialHistory.physicalActivity",
        short: "Physical Activity",
        definition: "Physical Activity",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
      },
      {
        id: "SocialHistory.dietAndNutrition",
        path: "SocialHistory.dietAndNutrition",
        short: "Diet and Nutrition",
        definition: "Diet and Nutrition",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
      },

      {
        id: "SocialHistory.substanceUse",
        path: "SocialHistory.substanceUse",
        short: "Substance Use",
        definition: "Substance Use",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
      },
      {
        id: "SocialHistory.stressAndCoping",
        path: "SocialHistory.stressAndCoping",
        short: "Stress and Coping",
        definition: "Stress and Coping",
        min: 0,
        max: "1",
        type: [
          {
            code: "CodeableConcept",
          },
        ],
      },
    ],
  },
};
