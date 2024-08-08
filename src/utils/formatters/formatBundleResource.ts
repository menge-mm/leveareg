import { formatAdverseEventResource } from "./formatAdverseEvent";
import { formatAllergyIntoleranceResource } from "./formatAllergyIntollerance";
import { formatConditionResource } from "./formatCondition";
import { formatEncounterResource } from "./formatEncounter";
import { formatFamilyMemberHistoryResource } from "./formatFamilyMemberHistory";
import { formatImmunizationResource } from "./formatImmunization";
import { formatMedicationStatementResource } from "./formatMedicationStatement";
import { formatObservationResource } from "./formatObservation";
import { formatProcedureResource } from "./formatProcedure";
import { v4 as uuidv4 } from "uuid";
import { formatSocialHistoryResource } from "./formatSocialHistory";
import { formatPatientResource } from "./formatPatient";

export const formatBundleResource = (bundleResource: any[]) => {
  let id: string;
  return {
    id: uuidv4(),
    resourceType: "Bundle",
    type: "batch",
    entry: bundleResource.map((resource) => {
      switch (resource.resourceType) {
        case "AdverseEvent":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatAdverseEventResource(resource) },
            request: {
              method: "POST",
              url: "AdverseEvent",
            },
          };
        case "AllergyIntolerance":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatAllergyIntoleranceResource(resource) },
            request: {
              method: "POST",
              url: "AllergyIntolerance",
            },
          };
        case "Condition":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatConditionResource(resource) },
            request: {
              method: "POST",
              url: "Condition",
            },
          };
        case "Encounter":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatEncounterResource(resource) },
            request: {
              method: "POST",
              url: "Encounter",
            },
          };
        case "Immunization":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatImmunizationResource(resource) },
            request: {
              method: "POST",
              url: "Immunization",
            },
          };
        case "MedicationStatement":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatMedicationStatementResource(resource) },
            request: {
              method: "POST",
              url: "MedicationStatement",
            },
          };
        case "Observation":
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatObservationResource(resource) },
            request: {
              method: "POST",
              url: "Observation",
            },
          };
        case "Procedure":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatProcedureResource(resource) },
            request: {
              method: "POST",
              url: "Procedure",
            },
          };
        case "FamilyMemberHistory":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatFamilyMemberHistoryResource(resource) },
            request: {
              method: "POST",
              url: "FamilyMemberHistory",
            },
          };
        case "Basic":
          id = uuidv4();
          return {
            fullUrl: `urn:uuid:${id}`,
            resource: { id, ...formatSocialHistoryResource(resource) },
            request: {
              method: "POST",
              url: "Basic",
            },
          };
        case "Patient":
          return {
            fullUrl: `urn:uuid:${resource.id}`,
            resource: formatPatientResource(resource),
            request: {
              method: "POST",
              url: "Patient",
            },
          };
        default:
          throw new Error("Invalid resource type");
      }
    }),
  };
};
