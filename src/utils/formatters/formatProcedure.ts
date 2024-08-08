export const procedureDictionary = [
  { value: "0FB03ZX", label: "Excision of Lung, Percutaneous Approach, Diagnostic" },
  { value: "0VBT0ZZ", label: "Resection of Left Kidney, Open Approach" },
  { value: "0HBT0ZZ", label: "Excision of Liver, Open Approach" },
  { value: "0DBN0ZZ", label: "Excision of Gallbladder, Open Approach" },
  {
    value: "0JH60MZ",
    label: "Insertion of Infusion Device into Superior Vena Cava, Open Approach",
  },
  { value: "0UMT0ZZ", label: "Resection of Uterus, Open Approach" },
  { value: "0WGF4ZZ", label: "Fragmentation in Left Lower Leg, Percutaneous Endoscopic Approach" },
  { value: "0SG007Z", label: "Repair Left Knee Joint, Open Approach" },
  { value: "0CPT0ZZ", label: "Excision of Right Breast, Open Approach" },
  { value: "0F9G0ZZ", label: "Drainage of Pancreas, Percutaneous Approach" },
];

const procedure = {
  resourceType: "Procedure",
  patientId: "",
  status: "",
  code: "",
  reasonCode: "",
  performer: "",
  performedDateTime: "",
  location: "",
  outcome: "",
};

type Procedure = typeof procedure;

export const formatProcedureResource = (procedure: Procedure) => ({
  resourceType: "Procedure",
  status: procedure.status,
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: procedure.code,
        display: procedureDictionary.find((c) => c.value === procedure.code)?.label, //dictionary
      },
    ],
    text: procedureDictionary.find((c) => c.value === procedure.code)?.label, //should refined
  },
  subject: {
    reference: `Patient/${procedure.patientId}`,
  },

  performedDateTime: procedure.performedDateTime ? procedure.performedDateTime : undefined, //should refined

  // recorder: {
  //   reference: "Practitioner/123",
  //   display: "Dr. John Doe",
  // },

  performer: procedure.performer && [
    {
      actor: {
        reference: "Practitioner/123",
        display: procedure.performer,
      },
    },
  ],
  outcome: procedure.outcome && {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385654001",
        display: procedure.outcome,
      },
    ],
    text: procedure.outcome,
  },
  location: procedure.location && {
    reference: procedure.location,
    display: procedure.location,
  },
  // note: [
  //   {
  //     text: "Patient is allergic to penicillin",
  //   },
  // ],
});

export const previousFunc = (procedure: Procedure) => ({
  resourceType: "Procedure",
  // id: uniqueId(), //id is system generated - we can add this also here using uuid
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Routine Appendectomy</div>',
  },
  status: procedure.status,
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: procedure.code,
        display: procedureDictionary.find((c) => c.value === procedure.code)?.label, //dictionary
      },
    ],
    text: procedureDictionary.find((c) => c.value === procedure.code)?.label, //should refined
  },
  subject: {
    reference: "Patient/123",
  },
  occuranceDateTime: procedure.performedDateTime, //should refined

  recorder: {
    reference: "Practitioner/123",
    display: "Dr. John Doe",
  },
  // reportedReference: {
  //   reference: "Practitioner/123",
  //   display: "Dr. John Doe",
  // },
  performer: [
    {
      actor: {
        reference: "Practitioner/123",
        display: "Dr. John Doe",
      },
    },
  ], //This could be removed from the form - this can be added in the backend

  // reason: [
  //   {
  //     concept: {
  //       text: "Generalized abdominal pain 24 hours. Localized in RIF with rebound and guarding",
  //     },
  //   },
  // ],

  // location: {
  //   reference: "Location/123",
  //   display: procedure.location,
  // },

  // location: procedure.location,
  // outcome: [
  //   {
  //     reference: "Observation/123",
  //     display: "Vital Signs",
  //   },
  // ],

  outcome: procedure.outcome,
  // followUp: [
  //   {
  //     concept: {
  //       text: "Follow up in 2 weeks",
  //     },
  //   },
  // ],
  note: [
    {
      text: "Patient is allergic to penicillin",
    },
  ],
});

// ==============         Procedure         ==============
// {
//   "resourceType" : "Procedure",
//   // from Resource: id, meta, implicitRules, and language
//   // from DomainResource: text, contained, extension, and modifierExtension
//   "identifier" : [{ Identifier }], // External Identifiers for this procedure
//   "instantiatesCanonical" : ["<canonical(PlanDefinition|ActivityDefinition|Measure|OperationDefinition|Questionnaire)>"], // Instantiates FHIR protocol or definition
//   "instantiatesUri" : ["<uri>"], // Instantiates external protocol or definition
//   "basedOn" : [{ Reference(CarePlan|MedicationRequest|ServiceRequest) }], // A request for this procedure
//   "partOf" : [{ Reference(MedicationAdministration|Observation|Procedure) }], // Part of referenced event
//   "status" : "<code>", // R!  preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
//   "statusReason" : { CodeableConcept }, // Reason for current status
//   "category" : [{ CodeableConcept }], // Classification of the procedure
//   "code" : { CodeableConcept }, // Identification of the procedure
//   "subject" : { Reference(Device|Group|Location|Organization|Patient|
//    Practitioner) }, // R!  Individual or entity the procedure was performed on
//   "focus" : { Reference(CareTeam|Group|Organization|Patient|Practitioner|
//    PractitionerRole|RelatedPerson|Specimen) }, // Who is the target of the procedure when it is not the subject of record only
//   "encounter" : { Reference(Encounter) }, // The Encounter during which this Procedure was created
//   // occurrence[x]: When the procedure occurred or is occurring. One of these 6:
//   "occurrenceDateTime" : "<dateTime>",
//   "occurrencePeriod" : { Period },
//   "occurrenceString" : "<string>",
//   "occurrenceAge" : { Age },
//   "occurrenceRange" : { Range },
//   "occurrenceTiming" : { Timing },
//   "recorded" : "<dateTime>", // When the procedure was first captured in the subject's record
//   "recorder" : { Reference(Patient|Practitioner|PractitionerRole|
//    RelatedPerson) }, // Who recorded the procedure
//   // reported[x]: Reported rather than primary record. One of these 2:
//   "reportedBoolean" : <boolean>,
//   "reportedReference" : { Reference(Organization|Patient|Practitioner|
//    PractitionerRole|RelatedPerson) },
//   "performer" : [{ // Who performed the procedure and what they did
//     "function" : { CodeableConcept }, // Type of performance
//     "actor" : { Reference(CareTeam|Device|HealthcareService|Organization|
//     Patient|Practitioner|PractitionerRole|RelatedPerson) }, // I R!  Who performed the procedure
//     "onBehalfOf" : { Reference(Organization) }, // I Organization the device or practitioner was acting for
//     "period" : { Period } // When the performer performed the procedure
//   }],
//   "location" : { Reference(Location) }, // Where the procedure happened
//   "reason" : [{ CodeableReference(Condition|DiagnosticReport|DocumentReference|
//    Observation|Procedure) }], // The justification that the procedure was performed
//   "bodySite" : [{ CodeableConcept }], // I Target body sites
//   "bodyStructure" : [{ Reference(BodyStructure) }], // Target body structure
//   "outcome" : [{ CodeableReference(Observation) }], // The result of procedure
//   "report" : [{ Reference(Composition|DiagnosticReport|DocumentReference) }], // Any report resulting from the procedure
//   "complication" : [{ CodeableReference(Condition) }], // Complication following the procedure
//   "followUp" : [{ CodeableReference(PlanDefinition|ServiceRequest) }], // Instructions for follow up
//   "note" : [{ Annotation }], // Additional information about the procedure
//   "focalDevice" : [{ // Manipulated, implanted, or removed device
//     "action" : { CodeableConcept }, // Kind of change to device
//     "manipulated" : { Reference(Device) } // R!  Device that was changed
//   }],
//   "used" : [{ CodeableReference(BiologicallyDerivedProduct|Device|Medication|
//    Substance) }], // Items used during procedure
//   "supportingInfo" : [{ Reference(Any) }] // Extra information relevant to the procedure
// }
