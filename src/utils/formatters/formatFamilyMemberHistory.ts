const familyMemberHistory = {
  resourceType: "FamilyMemberHistory",
  patientId: "",
  relationship: "",
  date: "",
  age: "",
  deceasedBoolean: false,
  deceasedDateTime: "",
  sex: "",
  reason: "",
};

export type FamilyMemberHistory = typeof familyMemberHistory;

export const familyHistoryDictionary = [
  { value: "127940007", arDisplay: "والد/والدة", display: "Parent" },
  { value: "126830008", arDisplay: "شقيق/شقيقة", display: "Sibling" },
  { value: "127850005", arDisplay: "طفل/طفلة", display: "Child" },
  { value: "127930003", arDisplay: "جد/جدة من جهة الأم", display: "Maternal Grandparent" },
  { value: "127920004", arDisplay: "جد/جدة من جهة الأب", display: "Paternal Grandparent" },
  { value: "127910009", arDisplay: "عمة", display: "Aunt (Paternal)" },
  { value: "127900000", arDisplay: "خالة", display: "Aunt (Maternal)" },
  { value: "127890008", arDisplay: "خال", display: "Uncle (Maternal)" },
  { value: "127880007", arDisplay: "عم", display: "Uncle (Paternal)" },
  { value: "127870003", arDisplay: "ابن عم/ابن خال", display: "Male Cousin" },
  { value: "127860009", arDisplay: "ابنة عم/ابنة خال", display: "Female Cousin" },
  { value: "429000000", arDisplay: "والد/والدة زوج أو زوجة", display: "Parent-in-Law" },
  { value: "428900009", arDisplay: "أخ/أخت زوج أو زوجة", display: "Sibling-in-Law" },
  { value: "428800004", arDisplay: "ابن/ابنة زوج أو زوجة", display: "Stepchild" },
  { value: "128100014", arDisplay: "أب", display: "Father" },
  { value: "128080000", arDisplay: "أم", display: "Mother" },
  { value: "309090004", arDisplay: "أخ غير شقيق/أخت غير شقيقة", display: "Half-Sibling" },
  { value: "407940001", arDisplay: "حما", display: "Father-in-Law" },
  { value: "407950000", arDisplay: "حماة", display: "Mother-in-Law" },
  { value: "427900006", arDisplay: "صهر", display: "Brother-in-Law" },
  { value: "407930006", arDisplay: "كنة", display: "Daughter-in-Law" },
  {
    value: "427920001",
    arDisplay: "أخو زوج/أخو زوجة",
    display: "Brother-in-Law (Husband's Brother/Wife's Brother)",
  },
  {
    value: "427910006",
    arDisplay: "أخت زوج/أخت زوجة",
    display: "Sister-in-Law (Husband's Sister/Wife's Sister)",
  },
  { value: "127840000", arDisplay: "والد حاضن/والدة حاضنة", display: "Foster Parent" },
  { value: "127830001", arDisplay: "طفل حاضن/طفلة حاضنة", display: "Foster Child" },
  { value: "128000009", arDisplay: "والد/والدة بالتبني", display: "Adoptive Parent" },
  { value: "127990001", arDisplay: "طفل بالتبني/طفلة بالتبني", display: "Adoptive Child" },
];

export const formatFamilyMemberHistoryResource = (familyMemberHistory: FamilyMemberHistory) => ({
  resourceType: "FamilyMemberHistory",
  status: "completed",
  patient: {
    reference: `Patient/${familyMemberHistory.patientId}`,
  },
  relationship: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
        code: familyMemberHistory.relationship,
        display: familyHistoryDictionary.find(
          (item) => item.value === familyMemberHistory.relationship
        )?.display,
      },
    ],
  },
  reasonCode: familyMemberHistory.reason
    ? [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: familyMemberHistory.reason,
            },
          ],
        },
      ]
    : undefined,
  sex: familyMemberHistory.sex && {
    coding: [
      {
        system: "http://hl7.org/fhir/administrative",
        code: familyMemberHistory.sex,
        display: familyMemberHistory.sex,
      },
    ],
  },
  ageAge: familyMemberHistory.age && {
    value: familyMemberHistory.age,
    unit: "years",
    system: "http://unitsofmeasure.org",
    code: "a",
  },
  date: familyMemberHistory.age ? familyMemberHistory.date : undefined,
  deceasedBoolean: familyMemberHistory.deceasedBoolean
    ? familyMemberHistory.deceasedBoolean
    : undefined,
  deceasedDateTime: familyMemberHistory.deceasedDateTime
    ? familyMemberHistory.deceasedDateTime
    : undefined,
  // condition: [
  //   {
  //     code: {
  //       coding: [
  //         {
  //           system: "http://snomed.info/sct",
  //           code: "39839004",
  //           display: "Diaphragmatic hernia",
  //         },
  //       ],
  //     },
  //   },
  // ],
});

/* 
{
  "resourceType" : "FamilyMemberHistory",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // External Id(s) for this record
  "instantiatesCanonical" : ["<canonical(PlanDefinition|Questionnaire|ActivityDefinition|Measure|OperationDefinition)>"], // Instantiates FHIR protocol or definition
  "instantiatesUri" : ["<uri>"], // Instantiates external protocol or definition
  "status" : "<code>", // R!  partial | completed | entered-in-error | health-unknown
  "dataAbsentReason" : { CodeableConcept }, // subject-unknown | withheld | unable-to-obtain | deferred
  "patient" : { Reference(Patient) }, // R!  Patient history is about
  "date" : "<dateTime>", // When history was recorded or last updated
  "participant" : [{ // Who or what participated in the activities related to the family member history and how they were involved
    "function" : { CodeableConcept }, // Type of involvement
    "actor" : { Reference(CareTeam|Device|Organization|Patient|Practitioner|
    PractitionerRole|RelatedPerson) } // R!  Who or what participated in the activities related to the family member history
  }],
  "name" : "<string>", // The family member described
  "relationship" : { CodeableConcept }, // R!  Relationship to the subject icon
  "sex" : { CodeableConcept }, // male | female | other | unknown
  // born[x]: (approximate) date of birth. One of these 3:
  "bornPeriod" : { Period },
  "bornDate" : "<date>",
  "bornString" : "<string>",
  // age[x]: (approximate) age. One of these 3:
  "ageAge" : { Age },
  "ageRange" : { Range },
  "ageString" : "<string>",
  "estimatedAge" : <boolean>, // I Age is estimated?
  // deceased[x]: Dead? How old/when?. One of these 5:
  "deceasedBoolean" : <boolean>,
  "deceasedAge" : { Age },
  "deceasedRange" : { Range },
  "deceasedDate" : "<date>",
  "deceasedString" : "<string>",
  "reason" : [{ CodeableReference(AllergyIntolerance|Condition|
   DiagnosticReport|DocumentReference|Observation|QuestionnaireResponse) }], // Why was family member history performed?
  "note" : [{ Annotation }], // General note about related person
  "condition" : [{ // Condition that the related person had
    "code" : { CodeableConcept }, // R!  Condition, allergy, or intolerance suffered by relation
    "outcome" : { CodeableConcept }, // deceased | permanent disability | etc
    "contributedToDeath" : <boolean>, // Whether the condition contributed to the cause of death
    // onset[x]: When condition first manifested. One of these 4:
    "onsetAge" : { Age },
    "onsetRange" : { Range },
    "onsetPeriod" : { Period },
    "onsetString" : "<string>",
    "note" : [{ Annotation }] // Extra information about condition
  }],
  "procedure" : [{ // Procedures that the related person had
    "code" : { CodeableConcept }, // R!  Procedures performed on the related person
    "outcome" : { CodeableConcept }, // What happened following the procedure
    "contributedToDeath" : <boolean>, // Whether the procedure contributed to the cause of death
    // performed[x]: When the procedure was performed. One of these 5:
    "performedAge" : { Age },
    "performedRange" : { Range },
    "performedPeriod" : { Period },
    "performedString" : "<string>",
    "performedDateTime" : "<dateTime>",
    "note" : [{ Annotation }] // Extra information about the procedure
  }]
}
*/
