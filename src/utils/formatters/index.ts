import { formatAdverseEventResource } from "./formatAdverseEvent";
import { formatAllergyIntoleranceResource } from "./formatAllergyIntollerance";
import { formatConditionResource } from "./formatCondition";
import { formatEncounterResource } from "./formatEncounter";
import { formatImmunizationResource } from "./formatImmunization";
import { formatMedicationStatementResource } from "./formatMedicationStatement";
import { formatObservationResource } from "./formatObservation";
import { formatProcedureResource } from "./formatProcedure";
import { formatSocialHistoryResource } from "./formatSocialHistory";
import { formatFamilyMemberHistoryResource } from "./formatFamilyMemberHistory";
import { formatBundleResource } from "./formatBundleResource";
import { formatPatientResource } from "./formatPatient";

export const selectResourceAndFormat = (resourceType: string, resource: any) => {
  switch (resourceType) {
    case "AdverseEvent":
      return formatAdverseEventResource(resource);
    case "AllergyIntolerance":
      return formatAllergyIntoleranceResource(resource);
    case "Condition":
      return formatConditionResource(resource);
    case "Encounter":
      return formatEncounterResource(resource);
    case "Immunization":
      return formatImmunizationResource(resource);
    case "MedicationStatement":
      return formatMedicationStatementResource(resource);
    case "Observation":
      return formatObservationResource(resource);
    case "Procedure":
      return formatProcedureResource(resource);
    case "Basic":
      // Azure FHIR API Doesn't Support New Custom FHIR Resource. The only
      // workaround is using Basic Resource and extending the basic resource
      return formatSocialHistoryResource(resource);
    case "Patient":
      return formatPatientResource(resource);
    case "FamilyMemberHistory":
      return formatFamilyMemberHistoryResource(resource);
    case "Bundle":
      return formatBundleResource(resource);
    default:
      return null;
  }
};

export default formatBundleResource;
