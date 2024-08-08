const adverseEvent = {
  resourceType: "AdverseEvent",
  patientId: "",
  category: "",
  actuality: "",
  date: "",
  location: "",
  seriousness: "",
  outcome: "",
  contributingFactor: "",
};

export type AdverseEvent = typeof adverseEvent;

export const formatAdverseEventResource = (adverseEvent: AdverseEvent) => ({
  resourceType: "AdverseEvent",
  actuality: adverseEvent.actuality, // R!  actual | potential
  subject: {
    reference: `Patient/${adverseEvent.patientId}`,
  },

  seriousness: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: adverseEvent.seriousness,
      },
    ],
  },

  outcome: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: adverseEvent.outcome,
      },
    ],
  },
  /// contributingFactor is in version 6 --but azure fhir server is in version 4
  suspectEntity: adverseEvent.contributingFactor
    ? [
        {
          instance: {
            reference: adverseEvent.contributingFactor,
          },
        },
      ]
    : undefined,

  date: adverseEvent.date ? adverseEvent.date : undefined,
  location: adverseEvent.location
    ? {
        reference: adverseEvent.location,
      }
    : undefined,
  category: adverseEvent.category
    ? [
        {
          coding: [
            {
              system: "http://example.com/fhir/adverse-event-categories",
              code: adverseEvent.category,
              display: adverseEventDictionary.find((c) => c.value === adverseEvent.category)
                ?.display,
            },
          ],
        },
      ]
    : undefined,
});

export const adverseEventDictionary = [
  { value: "product-problem", arDisplay: "مشكلة في المنتج", display: "Product problem" },
  { value: "product-quality", arDisplay: "جودة المنتج", display: "Product quality" },
  { value: "product-use-error", arDisplay: "خطأ في استخدام المنتج", display: "Product use error" },
  { value: "wrong-dose", arDisplay: "جرعة خاطئة", display: "Wrong dose" },
  {
    value: "incorrect-prescribing-information",
    arDisplay: "معلومات وصفة غير صحيحة",
    display: "Incorrect prescribing information",
  },
  { value: "wrong-technique", arDisplay: "طريقة خاطئة", display: "Wrong technique" },
  {
    value: "wrong-route-of-administration",
    arDisplay: "طريق إعطاء خاطئ",
    display: "Wrong route of administration",
  },
  { value: "wrong-rate", arDisplay: "معدل خاطئ", display: "Wrong rate" },
  { value: "wrong-duration", arDisplay: "مدة خاطئة", display: "Wrong duration" },
  { value: "wrong-time", arDisplay: "وقت خاطئ", display: "Wrong time" },
  { value: "expired-drug", arDisplay: "دواء منتهي الصلاحية", display: "Expired drug" },
  {
    value: "medical-device-use-error",
    arDisplay: "خطأ في استخدام الجهاز الطبي",
    display: "Medical device use error",
  },
  {
    value: "problem-different-manufacturer",
    arDisplay: "مشكلة - شركة مصنّعة مختلفة",
    display: "Problem - different manufacturer",
  },
  {
    value: "unsafe-physical-environment",
    arDisplay: "بيئة مادية غير آمنة",
    display: "Unsafe physical environment",
  },
];

/*
{
   "resourceType" : "AdverseEvent",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // Business identifier for the event
  "status" : "<code>", // R!  in-progress | completed | entered-in-error | unknown
  "actuality" : "<code>", // R!  actual | potential
  "category" : [{ CodeableConcept }], // wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site
  "code" : { CodeableConcept }, // Event or incident that occurred or was averted
  "subject" : { Reference(Group|Patient|Practitioner|RelatedPerson) }, // R!  Subject impacted by event
  "encounter" : { Reference(Encounter) }, // The Encounter associated with the start of the AdverseEvent
  // cause[x]: When the cause of the AdverseEvent occurred. One of these 2:
  "causeDateTime" : "<dateTime>",
  "causePeriod" : { Period },
  // effect[x]: When the effect of the AdverseEvent occurred. One of these 2:
  "effectDateTime" : "<dateTime>",
  "effectPeriod" : { Period },
  "detected" : "<dateTime>", // When the event was detected
  "recordedDate" : "<dateTime>", // When the event was recorded
  "resultingEffect" : [{ Reference(Condition|Observation) }], // Effect on the subject due to this event
  "location" : { Reference(Location) }, // Location where adverse event occurred
  "seriousness" : { CodeableConcept }, // Seriousness or gravity of the event
  "outcome" : [{ CodeableConcept }], // Type of outcome from the adverse event
  "recorder" : { Reference(Patient|Practitioner|PractitionerRole|
   RelatedPerson) }, // Who recorded the adverse event
  "participant" : [{ // Who was involved in the adverse event or the potential adverse event and what they did
    "function" : { CodeableConcept }, // Type of involvement
    "actor" : { Reference(CareTeam|Device|Organization|Patient|Practitioner|
    PractitionerRole|RelatedPerson) } // R!  Who was involved in the adverse event or the potential adverse event
  }],
  "study" : [{ Reference(ResearchStudy) }], // Research study that the subject is enrolled in
  "expectedInResearchStudy" : <boolean>, // Considered likely or probable or anticipated in the research study
  "suspectEntity" : [{ // The suspected agent causing the adverse event
    // instance[x]: Refers to the specific entity that caused the adverse event. One of these 2:
    "instanceCodeableConcept" : { CodeableConcept },
    "instanceReference" : { Reference(BiologicallyDerivedProduct|Device|Immunization|
    Medication|MedicationAdministration|MedicationStatement|Procedure|
    ResearchStudy|Substance) },
    "causality" : { // Information on the possible cause of the event
      "assessmentMethod" : { CodeableConcept }, // Method of evaluating the relatedness of the suspected entity to the event
      "entityRelatedness" : { CodeableConcept }, // Result of the assessment regarding the relatedness of the suspected entity to the event
      "author" : { Reference(Patient|Practitioner|PractitionerRole|
     RelatedPerson) } // Author of the information on the possible cause of the event
    }
  }],
  "contributingFactor" : [{ // Contributing factors suspected to have increased the probability or severity of the adverse event
    // item[x]: Item suspected to have increased the probability or severity of the adverse event. One of these 2:
    "itemReference" : { Reference(AllergyIntolerance|Condition|Device|DeviceUsage|
    DocumentReference|FamilyMemberHistory|Immunization|MedicationAdministration|
    MedicationStatement|Observation|Procedure) },
    "itemCodeableConcept" : { CodeableConcept }
  }],
  "preventiveAction" : [{ // Preventive actions that contributed to avoiding the adverse event
    // item[x]: Action that contributed to avoiding the adverse event. One of these 2:
    "itemReference" : { Reference(DocumentReference|Immunization|
    MedicationAdministration|MedicationRequest|Procedure) },
    "itemCodeableConcept" : { CodeableConcept }
  }],
  "mitigatingAction" : [{ // Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
    // item[x]: 
      Ameliorating action taken after the adverse event occurred in order to reduce the extent of harm. One of these 2:
    "itemReference" : { Reference(DocumentReference|MedicationAdministration|
    MedicationRequest|Procedure) },
    "itemCodeableConcept" : { CodeableConcept }
  }],
  "supportingInfo" : [{ // Supporting information relevant to the event
    // item[x]: Subject medical history or document relevant to this adverse event. One of these 2:
    "itemReference" : { Reference(AllergyIntolerance|Condition|DocumentReference|
    FamilyMemberHistory|Immunization|MedicationAdministration|
    MedicationStatement|Observation|Procedure|QuestionnaireResponse) },
    "itemCodeableConcept" : { CodeableConcept }
  }],
  "note" : [{ Annotation }] // Comment on adverse event
}
*/
