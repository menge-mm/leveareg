import { z } from "zod";
/**
 * Adverse Event Schema
 * - `actuality`  -  R!  -  actual | potential
 * - `subject` - R! - System filled -  Reference(Patient | ResearchSubject | Device | Medication | Substance)
 * - `date` - Optional - shows when the event occurred
 * - `location` - Optional-  indicates where the event occurred
 * - `seriousness` - R! -   Non-Serious | Serious | SeriousResultsInDeath | SeriousIsLifeThreatening | SeriousResultsInHospitalization | SeriousResultsInDisability | SeriousIsBirthDefect | SeriousRequiresPreventImpairment
 * - `outcome` - R! -  recovered | recovering | fatal | ongoing | resolvedWithSequelae | unknown
 * - `contributingFactor` - Optional -  describes the contributing factor
 * - `category` - Optional -  product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
 */

const adverseEvents = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default("AdverseEvent"),
    actuality: z
      .enum(["actual", "potential"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("actual"),
    category: z
      .enum(
        [
          "product-problem",
          "product-quality",
          "product-use-error,",
          "wrong-dose",
          "incorrect-prescribing-information",
          "wrong-technique",
          "wrong-route-of-administration",
          "wrong-rate",
          "wrong-duration",
          "wrong-time",
          "expired-drug",
          "medical-device-use-error",
          "problem-different-manufacturer",
          "unsafe-physical-environment",
          "",
        ],
        {
          message: "يجب اختيار أحد الخيارات",
        }
      )
      .optional(),
    date: z.string().optional(),

    seriousness: z
      .enum(
        [
          "Non-Serious",
          "Serious",
          "SeriousResultsInDeath",
          "SeriousIsLifeThreatening",
          "SeriousResultsInHospitalization",
          "SeriousResultsInDisability",
          "SeriousIsBirthDefect",
          "SeriousRequiresPreventImpairment",
        ],
        {
          message: "يجب اختيار أحد الخيارات",
        }
      )
      .default("Non-Serious"), // <--- code http://terminology.hl7.org/CodeSystem/adverse-event-seriousness
    outcome: z
      .enum(["recovered", "recovering", "fatal", "ongoing", "resolvedWithSequelae ", "unknown"], {
        message: "يجب اختيار أحد الخيارات",
      }) //<--- code http://terminology.hl7.org/CodeSystem/adverse-event-outcome
      .default("recovered"),
    location: z.string().optional(), // reference to location
    contributingFactor: z.string().optional(),
  })
);

export const defaultAdverseEvent = {
  adverseEvents: [
    {
      resourceType: "AdverseEvent",
      category: "wrong-dose",
      actuality: "actual",
      date: "",
      location: "",
      seriousness: "Serious",
      outcome: "unknown",
      contributingFactor: "",
    },
  ],
};

export type AdverseEventType = {
  adverseEvents: {
    id?: string;
    resourceType: string;
    actuality: string;
    category: string;
    date: string;
    location: string;
    seriousness: string;
    outcome: string;
    contributingFactor: string;
  }[];
};

const formSchema = z.object({
  adverseEvents,
});

export default formSchema;
