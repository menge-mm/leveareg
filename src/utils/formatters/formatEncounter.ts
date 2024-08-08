const encounter = {
  resourceType: "Encounter",
  patientId: "",
  status: "",
  class: "",
  type: "",
  period: "",
  reasonCode: "",
  location: "",
  hospitalization: "",
  serviceProvider: "",
};

export type Encounter = typeof encounter;

export const encounterDictionary = [
  { value: "AMB", label: "Ambulatory" },
  { value: "EMER", label: "Emergency" },
  { value: "IMP", label: "Inpatient" },
  { value: "SS", label: "Short Stay" },
];

export const formatEncounterResource = (encounter: Encounter) => ({
  resourceType: "Encounter",
  status: encounter.status,
  class: {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    code: encounter.class,
    display: encounterDictionary.find((c) => c.value === encounter.class)?.label,
    version: "1.0.0",
    userSelected: false,
  },
  subject: {
    reference: `Patient/${encounter.patientId}`,
  },

  serviceProvider: {
    reference: "Organization/1", // it is good if we hv a list of providers
    display: encounter.serviceProvider,
  },

  type: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: encounter.type,
          display: "Consultation",
        },
      ],
    },
  ],
  period: encounter.period
    ? {
        start: encounter.period,
        end: new Date().toISOString(),
      }
    : undefined,
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "359615001",
          display: "Partial lobectomy of lung",
        },
      ],
    },
  ],

  location: encounter.location
    ? [
        {
          location: { reference: "Location/1" },
        },
      ]
    : undefined,
  // sample additional fields
  /* 
  admission: {
    preAdmissionIdentifier: {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/pre-admissions",
      value: "98682",
    },
    admitSource: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "305997006",
          display: "Referral by radiologist",
        },
      ],
    },
    dischargeDisposition: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "306689006",
          display: "Discharge to home",
        },
      ],
    },
  },*/
  hospitalization: {
    origin: {
      reference: encounter.hospitalization,
      display: `Location/${encounter.hospitalization}`,
    },
  },
});

/* 
{
  "resourceType" : "Encounter",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // Identifier(s) by which this encounter is known
  "status" : "<code>", // R!  planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
  "class" : [{ CodeableConcept }], // Classification of patient encounter context - e.g. Inpatient, outpatient icon
  "priority" : { CodeableConcept }, // Indicates the urgency of the encounter icon
  "type" : [{ CodeableConcept }], // Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...)
  "serviceType" : [{ CodeableReference(HealthcareService) }], // Specific type of service
  "subject" : { Reference(Group|Patient) }, // The patient or group related to this encounter
  "subjectStatus" : { CodeableConcept }, // The current status of the subject in relation to the Encounter
  "episodeOfCare" : [{ Reference(EpisodeOfCare) }], // Episode(s) of care that this encounter should be recorded against
  "basedOn" : [{ Reference(CarePlan|DeviceRequest|ImmunizationRecommendation|
   MedicationRequest|NutritionOrder|RequestOrchestration|ServiceRequest|
   VisionPrescription) }], // The request that initiated this encounter
  "careTeam" : [{ Reference(CareTeam) }], // The group(s) that are allocated to participate in this encounter
  "partOf" : { Reference(Encounter) }, // Another Encounter this encounter is part of
  "serviceProvider" : { Reference(Organization) }, // The organization (facility) responsible for this encounter
  "participant" : [{ // List of participants involved in the encounter
    "type" : [{ CodeableConcept }], // I Role of participant in encounter
    "period" : { Period }, // Period of time during the encounter that the participant participated
    "actor" : { Reference(Device|Group|HealthcareService|Patient|Practitioner|
    PractitionerRole|RelatedPerson) } // I The individual, device, or service participating in the encounter
  }],
  "appointment" : [{ Reference(Appointment) }], // The appointment that scheduled this encounter
  "virtualService" : [{ VirtualServiceDetail }], // Connection details of a virtual service (e.g. conference call)
  "actualPeriod" : { Period }, // The actual start and end time of the encounter
  "plannedStartDate" : "<dateTime>", // The planned start date/time (or admission date) of the encounter
  "plannedEndDate" : "<dateTime>", // The planned end date/time (or discharge date) of the encounter
  "length" : { Duration }, // Actual quantity of time the encounter lasted (less time absent)
  "reason" : [{ // The list of medical reasons that are expected to be addressed during the episode of care
    "use" : [{ CodeableConcept }], // What the reason value should be used for/as
    "value" : [{ CodeableReference(Condition|DiagnosticReport|
    ImmunizationRecommendation|Observation|Procedure) }] // Reason the encounter takes place (core or reference)
  }],
  "diagnosis" : [{ // The list of diagnosis relevant to this encounter
    "condition" : [{ CodeableReference(Condition) }], // The diagnosis relevant to the encounter
    "use" : [{ CodeableConcept }] // Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
  }],
  "account" : [{ Reference(Account) }], // The set of accounts that may be used for billing for this Encounter
  "dietPreference" : [{ CodeableConcept }], // Diet preferences reported by the patient
  "specialArrangement" : [{ CodeableConcept }], // Wheelchair, translator, stretcher, etc
  "specialCourtesy" : [{ CodeableConcept }], // Special courtesies (VIP, board member)
  "admission" : { // Details about the admission to a healthcare service
    "preAdmissionIdentifier" : { Identifier }, // Pre-admission identifier
    "origin" : { Reference(Location|Organization) }, // The location/organization from which the patient came before admission
    "admitSource" : { CodeableConcept }, // From where patient was admitted (physician referral, transfer)
    "reAdmission" : { CodeableConcept }, // Indicates that the patient is being re-admitted icon
    "destination" : { Reference(Location|Organization) }, // Location/organization to which the patient is discharged
    "dischargeDisposition" : { CodeableConcept } // Category or kind of location after discharge
  },
  "location" : [{ // List of locations where the patient has been
    "location" : { Reference(Location) }, // R!  Location the encounter takes place
    "status" : "<code>", // planned | active | reserved | completed
    "form" : { CodeableConcept }, // The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.)
    "period" : { Period } // Time period during which the patient was present at the location
  }]
}
*/
