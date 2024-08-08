const patientSample = {
  resourceType: "Patient",
  id: "",
  active: true,
  familyName: "",
  givenName: "",
  telecom: "",
  gender: "",
  birthDate: "",
  deceasedBoolean: false,
  deceasedDateTime: "",
  photo: [{}],
  address: {},
  contact: [
    {
      relationship: "father",
      name: {
        family: "", //!R,
        given: "", //!R,
      },
      telecom: "",
      address: {},
      gender: "",
    },
  ],
  communication: [
    {
      language: "", //!R,
      preferred: false,
    },
  ],
};

export type Patient = typeof patientSample;

export const formatPatientResource = (patient: Patient) => {
  const generatePatientText = (patient: Patient) => {
    return `
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p style="border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;">
          <b>${patient.givenName} ${patient.familyName}</b> 
          ${patient.gender}, DoB: ${patient.birthDate} 
          ( Medical record number: ${patient.id} )
        </p>
        <hr/>
        <table class="grid">
          <tr>
            <td style="background-color: #f3f5da" title="Record is active">Active:</td>
            <td>${patient.active}</td>
            <td style="background-color: #f3f5da" title="Known status of Patient">Deceased:</td>
            <td colspan="3">${false}</td>
          </tr>
          ${
            patient.telecom
              ? `
          <tr>
            <td style="background-color: #f3f5da" title="Ways to contact the Patient">Contact Details:</td>
            <td colspan="3">
              <ul>
                <li>${patient.telecom} (PHONE)</li>
              </ul>
            </td>
          </tr>`
              : ""
          }
        </table>
      </div>`;
  };

  return {
    resourceType: "Patient",
    identifier: [
      {
        use: "official",
        system: `urn:oid:${patient.id}`,
        value: patient.id,
      },
    ],
    // text: {
    //   status: "generated",
    //   div: generatePatientText(patient),
    // },
    active: patient.active,
    name: [
      {
        use: "official",
        family: patient.familyName,
        given: [patient.givenName],
      },
    ],
    telecom: patient.telecom
      ? [
          {
            system: "phone",
            value: patient.telecom,
          },
        ]
      : undefined,
    gender: patient.gender,
    birthDate: patient.birthDate,
    deceasedBoolean: false,
    managingOrganization: {
      reference: "Organization/a0cbccf4-f045-4d5a-8ecc-921fa8867eaa",
    },
  };
};

/*
{
  "resourceType" : "Patient",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // An identifier for this patient
  "active" : <boolean>, // Whether this patient's record is in active use
  "name" : [{ HumanName }], // A name associated with the patient
  "telecom" : [{ ContactPoint }], // A contact detail for the individual
  "gender" : "<code>", // male | female | other | unknown
  "birthDate" : "<date>", // The date of birth for the individual
  // deceased[x]: Indicates if the individual is deceased or not. One of these 2:
  "deceasedBoolean" : <boolean>,
  "deceasedDateTime" : "<dateTime>",
  "address" : [{ Address }], // An address for the individual
  "maritalStatus" : { CodeableConcept }, // Marital (civil) status of a patient
  // multipleBirth[x]: Whether patient is part of a multiple birth. One of these 2:
  "multipleBirthBoolean" : <boolean>,
  "multipleBirthInteger" : <integer>,
  "photo" : [{ Attachment }], // Image of the patient
  "contact" : [{ // A contact party (e.g. guardian, partner, friend) for the patient
    "relationship" : [{ CodeableConcept }], // The kind of relationship
    "name" : { HumanName }, // I A name associated with the contact person
    "telecom" : [{ ContactPoint }], // I A contact detail for the person
    "address" : { Address }, // I Address for the contact person
    "gender" : "<code>", // male | female | other | unknown
    "organization" : { Reference(Organization) }, // I Organization that is associated with the contact
    "period" : { Period } // The period during which this contact person or organization is valid to be contacted relating to this patient
  }],
  "communication" : [{ // A language which may be used to communicate with the patient about his or her health
    "language" : { CodeableConcept }, // R!  The language which can be used to communicate with the patient about his or her health
    "preferred" : <boolean> // Language preference indicator
  }],
  "generalPractitioner" : [{ Reference(Organization|Practitioner|
   PractitionerRole) }], // Patient's nominated primary care provider
  "managingOrganization" : { Reference(Organization) }, // Organization that is the custodian of the patient record
  "link" : [{ // Link to a Patient or RelatedPerson resource that concerns the same actual individual
    "other" : { Reference(Patient|RelatedPerson) }, // R!  The other patient or related person resource that the link refers to
    "type" : "<code>" // R!  replaced-by | replaces | refer | seealso
  }]
}
*/
