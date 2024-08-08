export const allergyIntoleranceDictionary = [
  {
    value: "Cereals",
    label: "Allergy or intolerance to cereals containing gluten (e.g., wheat, rye, barley, oats)",
  },
  {
    value: "Crustaceans",
    label: "Allergy or intolerance to crustaceans (e.g., shrimp, crab, lobster)",
  },
  { value: "Eggs", label: "Allergy or intolerance to eggs" },
  { value: "Fish", label: "Allergy or intolerance to fish" },
  { value: "Peanuts", label: "Allergy or intolerance to peanuts" },
  { value: "Soybeans", label: "Allergy or intolerance to soybeans" },
  { value: "Milk", label: "Allergy or intolerance to milk (including lactose intolerance)" },
  {
    value: "Nuts",
    label:
      "Allergy or intolerance to tree nuts (e.g., almonds, hazelnuts, walnuts, cashews, pistachios)",
  },
  { value: "Celery", label: "Allergy or intolerance to celery" },
  { value: "Mustard", label: "Allergy or intolerance to mustard" },
  { value: "Sesame", label: "Allergy or intolerance to sesame seeds" },
  {
    value: "Sulfites",
    label:
      "Allergy or intolerance to sulfites (often used as a preservative in dried fruit and wine)",
  },
  {
    value: "Lupin",
    label: "Allergy or intolerance to lupin (Lupinus species, often used in flour)",
  },
  {
    value: "Molluscs",
    label: "Allergy or intolerance to molluscs (e.g., clams, mussels, oysters, snails)",
  },
];

const allergyIntolerance = {
  //id: uniqueId(),
  patientId: "",
  resourceType: "AllergyIntolerance",
  code: "",
  clinicalStatus: "",
  verificationStatus: "",
  category: "",
  criticality: "",
  onsetDateTime: "",
  reaction: "",
};

export type AllergyIntolerance = typeof allergyIntolerance;

export const formatAllergyIntoleranceResource = (allergyIntolerance: AllergyIntolerance) => ({
  resourceType: "AllergyIntolerance",
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        code: allergyIntolerance.clinicalStatus,
      },
    ],
  },

  verificationStatus: allergyIntolerance.verificationStatus
    ? {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            code: allergyIntolerance.verificationStatus,
          },
        ],
      }
    : undefined,
  criticality: allergyIntolerance.criticality,
  category: [allergyIntolerance.category],

  code: {
    coding: [
      {
        system: "http://rxnorm.info",
        code: allergyIntolerance.code,
        display: allergyIntoleranceDictionary.find((c) => c.value === allergyIntolerance.code)
          ?.label,
      },
    ],
  },
  patient: {
    reference: `Patient/${allergyIntolerance.patientId}`,
  },
  onsetDateTime: allergyIntolerance.onsetDateTime ? allergyIntolerance.onsetDateTime : undefined,
  recordedDate: new Date().toISOString(),

  reaction: allergyIntolerance.reaction
    ? [
        {
          manifestation: [
            {
              concept: {
                coding: [
                  {
                    system: "http://snomed.info/sct",
                    code: allergyIntolerance.reaction,
                    display: "",
                  },
                ],
              },
            },
          ],
        },
      ]
    : undefined,
});

/*
{
   "resourceType" : "AllergyIntolerance",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // External ids for this item
  "clinicalStatus" : { CodeableConcept }, // active | inactive | resolved
  "verificationStatus" : { CodeableConcept }, // unconfirmed | presumed | confirmed | refuted | entered-in-error
  "type" : { CodeableConcept }, // allergy | intolerance - Underlying mechanism (if known)
  "category" : ["<code>"], // food | medication | environment | biologic
  "criticality" : "<code>", // low | high | unable-to-assess
  "code" : { CodeableConcept }, // Code that identifies the allergy or intolerance
  "patient" : { Reference(Patient) }, // R!  Who the allergy or intolerance is for
  "encounter" : { Reference(Encounter) }, // Encounter when the allergy or intolerance was asserted
  // onset[x]: When allergy or intolerance was identified. One of these 5:
  "onsetDateTime" : "<dateTime>",
  "onsetAge" : { Age },
  "onsetPeriod" : { Period },
  "onsetRange" : { Range },
  "onsetString" : "<string>",
  "recordedDate" : "<dateTime>", // Date allergy or intolerance was first recorded
  "participant" : [{ // Who or what participated in the activities related to the allergy or intolerance and how they were involved
    "function" : { CodeableConcept }, // Type of involvement
    "actor" : { Reference(CareTeam|Device|Organization|Patient|Practitioner|
    PractitionerRole|RelatedPerson) } // R!  Who or what participated in the activities related to the allergy or intolerance
  }],
  "lastReactionOccurrence" : "<dateTime>", // Date(/time) of last known occurrence of a reaction
  "note" : [{ Annotation }], // Additional text not captured in other fields
  "reaction" : [{ // Adverse Reaction Events linked to exposure to substance
    "substance" : { CodeableConcept }, // Specific substance or pharmaceutical product considered to be responsible for event
    "manifestation" : [{ CodeableReference(Observation) }], // R!  Clinical symptoms/signs associated with the Event
    "description" : "<string>", // Description of the event as a whole
    "onset" : "<dateTime>", // Date(/time) when manifestations showed
    "severity" : "<code>", // mild | moderate | severe (of event as a whole)
    "exposureRoute" : { CodeableConcept }, // How the subject was exposed to the substance
    "note" : [{ Annotation }] // Text about event not captured in other fields
  }]
}
*/
