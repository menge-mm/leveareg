const immunization = {
  vaccineCode: "",
  patientId: "",
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

const immunizationDictionary = [
  { value: "0", arDisplay: "لقاح الإنفلونزا", display: "Influenza Vaccine" },
  {
    value: "1",
    arDisplay: "لقاح الحصبة والنكاف والحصبة الألمانية",
    display: "Measles, Mumps, and Rubella Vaccine",
  },
  { value: "2", arDisplay: "لقاح التهاب الكبد ب", display: "Hepatitis B Vaccine" },
  { value: "3", arDisplay: "لقاح الكزاز", display: "Tetanus Vaccine" },
  { value: "4", arDisplay: "لقاح الدفتيريا", display: "Diphtheria Vaccine" },
  { value: "5", arDisplay: "لقاح السعال الديكي", display: "Pertussis Vaccine" },
  { value: "6", arDisplay: "لقاح شلل الأطفال", display: "Polio Vaccine" },
  { value: "7", arDisplay: "لقاح الالتهاب الرئوي", display: "Pneumonia Vaccine" },
  { value: "8", arDisplay: "لقاح الروتا فيروس", display: "Rotavirus Vaccine" },
  { value: "9", arDisplay: "لقاح جدري الماء", display: "Varicella Vaccine" },
  {
    value: "10",
    arDisplay: "لقاح فيروس الورم الحليمي البشري",
    display: "Human Papillomavirus (HPV) Vaccine",
  },
  { value: "11", arDisplay: "لقاح السحائي", display: "Meningococcal Vaccine" },
  { value: "12", arDisplay: "لقاح التهاب الكبد أ", display: "Hepatitis A Vaccine" },
  {
    value: "13",
    arDisplay: "لقاح هيموفيلوس إنفلونزا ب",
    display: "Haemophilus Influenzae Type B Vaccine",
  },
  { value: "14", arDisplay: "لقاح داء الكلب", display: "Rabies Vaccine" },
  { value: "15", arDisplay: "لقاح التيفوئيد", display: "Typhoid Vaccine" },
  { value: "16", arDisplay: "لقاح الحمى الصفراء", display: "Yellow Fever Vaccine" },
  { value: "17", arDisplay: "لقاح الهربس النطاقي", display: "Herpes Zoster Vaccine" },
  { value: "18", arDisplay: "لقاح السل (بي سي جي)", display: "Tuberculosis (BCG) Vaccine" },
  {
    value: "19",
    arDisplay: "لقاح التهاب الدماغ الياباني",
    display: "Japanese Encephalitis Vaccine",
  },
  { value: "20", arDisplay: "لقاح الكوليرا", display: "Cholera Vaccine" },
  { value: "21", arDisplay: "لقاح داء الكلب", display: "Rabies Vaccine" },
  { value: "22", arDisplay: "لقاح الجمرة الخبيثة", display: "Anthrax Vaccine" },
  { value: "23", arDisplay: "لقاح الجدري", display: "Smallpox Vaccine" },
  { value: "24", arDisplay: "لقاح التيفوس", display: "Typhus Vaccine" },
  { value: "25", arDisplay: "لقاح الملاريا", display: "Malaria Vaccine" },
  { value: "26", arDisplay: "لقاح حمى الضنك", display: "Dengue Fever Vaccine" },
  { value: "27", arDisplay: "لقاح فيروس زيكا", display: "Zika Virus Vaccine" },
  { value: "28", arDisplay: "لقاح الإنفلونزا ب", display: "Influenza B Vaccine" },
  {
    value: "29",
    arDisplay: "لقاح الدمج دي تي بي-هيب ب-هيب",
    display: "DTP-HepB-Hib Combination Vaccine",
  },
  { value: "30", arDisplay: "لقاح شلل الأطفال الفموي", display: "Oral Polio Vaccine" },
  {
    value: "31",
    arDisplay: "لقاح شلل الأطفال غير المُفعل",
    display: "Inactivated Polio Vaccine",
  },
  {
    value: "32",
    arDisplay: "لقاح الحصبة والنكاف والحصبة الألمانية وجدري الماء",
    display: "Measles, Mumps, Rubella, and Varicella Vaccine",
  },
  {
    value: "33",
    arDisplay: "لقاح الدفتيريا والكزاز والسعال الديكي",
    display: "Diphtheria, Tetanus, and Pertussis Vaccine",
  },
  {
    value: "34",
    arDisplay: "لقاح الكزاز والدفتيريا والسعال الديكي",
    display: "Tetanus, Diphtheria, and Pertussis Vaccine",
  },
  {
    value: "35",
    arDisplay: "لقاح إنفلونزا إتش1إن1 (إنفلونزا الخنازير)",
    display: "H1N1 Influenza (Swine Flu) Vaccine",
  },
  { value: "36", arDisplay: "لقاح الإنفلونزا الموسمية", display: "Seasonal Influenza Vaccine" },
  { value: "37", arDisplay: "لقاح الإنفلونزا الأنفي", display: "Nasal Influenza Vaccine" },
  {
    value: "38",
    arDisplay: "لقاح الالتهاب الرئوي البوليسكاريدي للبالغين",
    display: "Pneumococcal Polysaccharide Vaccine for Adults",
  },
  {
    value: "39",
    arDisplay: "لقاح الالتهاب الرئوي المقترن للأطفال",
    display: "Pneumococcal Conjugate Vaccine for Children",
  },
  { value: "40", arDisplay: "لقاح الحزام الناري", display: "Shingles Vaccine" },
  {
    value: "41",
    arDisplay: "لقاح الإنفلونزا الموهن الحي",
    display: "Live Attenuated Influenza Vaccine",
  },
  {
    value: "42",
    arDisplay: "لقاح الإنفلونزا المُعاد تركيبه",
    display: "Recombinant Influenza Vaccine",
  },
  { value: "43", arDisplay: "لقاحات السفر", display: "Travel Vaccines" },
  { value: "44", arDisplay: "لقاح التهاب الكبد س", display: "Hepatitis C Vaccine" },
  {
    value: "45",
    arDisplay: "لقاح إتش بي في 9 (جارداسيل 9)",
    display: "HPV 9 Vaccine (Gardasil 9)",
  },
  { value: "46", arDisplay: "لقاح السحائي ب", display: "Meningococcal B Vaccine" },
  { value: "47", arDisplay: "لقاح السحائي ACWY", display: "Meningococcal ACWY Vaccine" },
  {
    value: "48",
    arDisplay: "لقاح روتا تيك للروتا فيروس",
    display: "Rotarix Rotavirus Vaccine",
  },
  {
    value: "49",
    arDisplay: "لقاح إنفانريكس هيكسا (6 في 1)",
    display: "Infanrix Hexa (6-in-1) Vaccine",
  },
];

export type Immunization = typeof immunization;

export const formatImmunizationResource = (immunization: Immunization) => ({
  resourceType: "Immunization",
  status: immunization.status,
  vaccineCode: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: immunization.vaccineCode,
        display: immunizationDictionary.find((c) => c.value === immunization.vaccineCode)?.display, //dictionary
      },
    ],
  },
  occurrenceDateTime: immunization.occurrenceDateTime ? immunization.occurrenceDateTime : undefined,

  location: immunization.location && {
    reference: immunization.location,
  },
  manufacturer: immunization.manufacturer && {
    reference: immunization.manufacturer,
  },
  lotNumber: immunization.lotNumber ? immunization.lotNumber : undefined,
  expirationDate: immunization.expirationDate ? immunization.expirationDate : undefined,
  site: immunization.site && {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        code: immunization.site,
        display: "Left Arm",
      },
    ],
  },
  doseQuantity: immunization.doseQuantity && {
    value: immunization.doseQuantity,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  patient: {
    reference: `Patient/${immunization.patientId}`,
  },
  encounter: {
    reference: "Encounter/example",
  },
});

/* 
 {
  "resourceType" : "Immunization",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // Business identifier
  "basedOn" : [{ Reference(CarePlan|ImmunizationRecommendation|
   MedicationRequest|ServiceRequest) }], // Authority that the immunization event is based on
  "status" : "<code>", // R!  completed | entered-in-error | not-done
  "statusReason" : { CodeableConcept }, // Reason for current status
  "vaccineCode" : { CodeableConcept }, // R!  Vaccine administered
  "administeredProduct" : { CodeableReference(Medication) }, // Product that was administered
  "manufacturer" : { CodeableReference(Organization) }, // Vaccine manufacturer
  "lotNumber" : "<string>", // Vaccine lot number
  "expirationDate" : "<date>", // Vaccine expiration date
  "patient" : { Reference(Patient) }, // R!  Who was immunized
  "encounter" : { Reference(Encounter) }, // Encounter immunization was part of
  "supportingInformation" : [{ Reference(Any) }], // Additional information in support of the immunization
  // occurrence[x]: Vaccine administration date. One of these 2:
  "occurrenceDateTime" : "<dateTime>",
  "occurrenceString" : "<string>",
  "primarySource" : <boolean>, // Indicates context the data was captured in
  "informationSource" : { CodeableReference(Organization|Patient|Practitioner|
   PractitionerRole|RelatedPerson) }, // Indicates the source of a  reported record
  "location" : { Reference(Location) }, // Where immunization occurred
  "site" : { CodeableConcept }, // Body site vaccine  was administered
  "route" : { CodeableConcept }, // How vaccine entered body
  "doseQuantity" : { Quantity(SimpleQuantity) }, // Amount of vaccine administered
  "performer" : [{ // Who performed event
    "function" : { CodeableConcept }, // What type of performance was done
    "actor" : { Reference(Organization|Patient|Practitioner|PractitionerRole|
    RelatedPerson) } // R!  Individual or organization who was performing
  }],
  "note" : [{ Annotation }], // Additional immunization notes
  "reason" : [{ CodeableReference(Condition|DiagnosticReport|Observation) }], // Why immunization occurred
  "isSubpotent" : <boolean>, // Dose potency
  "subpotentReason" : [{ CodeableConcept }], // Reason for being subpotent
  "programEligibility" : [{ // Patient eligibility for a specific vaccination program
    "program" : { CodeableConcept }, // R!  The program that eligibility is declared for
    "programStatus" : { CodeableConcept } // R!  The patient's eligibility status for the program
  }],
  "fundingSource" : { CodeableConcept }, // Funding source for the vaccine
  "reaction" : [{ // Details of a reaction that follows immunization
    "date" : "<dateTime>", // When reaction started
    "manifestation" : { CodeableReference(Observation) }, // Additional information on reaction
    "reported" : <boolean> // Indicates self-reported reaction
  }],
  "protocolApplied" : [{ // Protocol followed by the provider
    "series" : "<string>", // Name of vaccine series
    "authority" : { Reference(Organization) }, // Who is responsible for publishing the recommendations
    "targetDisease" : [{ CodeableConcept }], // Vaccine preventatable disease being targeted
    "doseNumber" : "<string>", // R!  Dose number within series
    "seriesDoses" : "<string>" // Recommended number of doses for immunity
  }]
}
*/
