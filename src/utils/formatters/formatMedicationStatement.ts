const medicationStatement = {
  resourceType: "MedicationStatement",
  patientId: "",
  status: "active",
  category: "",
  note: "",
  dateAsserted: "",
  reasonCode: "", // SNOMED CT or ICD-10
  dosage: "",
  reasonReference: "",
  // medication: "",
};

const exampleMedicationStatement = {
  resourceType: "MedicationStatement",
  status: "Active",
  category: "inpatient",
  note: "Patient is allergic to penicillin",
  dateAsserted: "2020-03-01",
  reasonCode: "359615001",
  dosage: "Take 1 tablet by mouth daily",
};

export type MedicationStatement = typeof medicationStatement;

export const formatMedicationStatementResource = (medicationStatement: MedicationStatement) => ({
  resourceType: "MedicationStatement",
  subject: {
    reference: `Patient/${medicationStatement.patientId}`,
  },
  status: medicationStatement.status,
  category: medicationStatement.category && {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/medication-statement-category",
        code: medicationStatement.category,
      },
    ],
  },
  reasonCode: medicationStatement.reasonCode && [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: medicationStatement.reasonCode,
          display: medicationStatement.reasonCode,
        },
      ],
    },
  ],
  note: medicationStatement.note && [
    {
      text: medicationStatement.note,
    },
  ],
  dateAsserted: medicationStatement.dateAsserted,
  dosage: medicationStatement.dosage && [
    {
      sequence: 1,
      text: medicationStatement.dosage,
    },
  ],
  // medicationReference: {
  //   reference: "#med0309",
  // },
});

/* 
{
   "resourceType" : "MedicationStatement",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // External identifier
  "partOf" : [{ Reference(MedicationStatement|Procedure) }], // Part of referenced event
  "status" : "<code>", // R!  recorded | entered-in-error | draft
  "category" : [{ CodeableConcept }], // Type of medication statement
  "medication" : { CodeableReference(Medication) }, // R!  What medication was taken
  "subject" : { Reference(Group|Patient) }, // R!  Who is/was taking  the medication
  "encounter" : { Reference(Encounter) }, // Encounter associated with MedicationStatement
  // effective[x]: The date/time or interval when the medication is/was/will be taken. One of these 3:
  "effectiveDateTime" : "<dateTime>",
  "effectivePeriod" : { Period },
  "effectiveTiming" : { Timing },
  "dateAsserted" : "<dateTime>", // When the usage was asserted?
  "informationSource" : [{ Reference(Organization|Patient|Practitioner|
   PractitionerRole|RelatedPerson) }], // Person or organization that provided the information about the taking of this medication
  "derivedFrom" : [{ Reference(Any) }], // Link to information used to derive the MedicationStatement
  "reason" : [{ CodeableReference(Condition|DiagnosticReport|Observation|
   Procedure) }], // Reason for why the medication is being/was taken
  "note" : [{ Annotation }], // Further information about the usage
  "relatedClinicalInformation" : [{ Reference(Condition|Observation) }], // Link to information relevant to the usage of a medication
  "renderedDosageInstruction" : "<markdown>", // Full representation of the dosage instructions
  "dosage" : [{ Dosage }], // Details of how medication is/was taken or should be taken
  "adherence" : { // Indicates whether the medication is or is not being consumed or administered
    "code" : { CodeableConcept }, // R!  Type of adherence
    "reason" : { CodeableConcept } // Details of the reason for the current use of the medication
  }
}
*/
