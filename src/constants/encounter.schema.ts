import { z } from "zod";

/**
 * Encounter Schema
 * - `status` - R! -  planned | arrived | triaged | in-progress | onleave | finished | cancelled | entered-in-error | unknown
 * - `class` - R! -  inpatient | outpatient | ambulatory | emergency +
 * - `period` - Optional! -  The time that the episode was in the specified status
 * - `type` - R! -  Specific type of encounter
 * - `reasonCode` - R! -  Reason the encounter takes place
 * - `location` - Optional! -  Location the encounter takes place
 * - `hospitalization` - R! -  Details about the admission to a healthcare service
 * - `serviceProvider` - Optional! -  The organization responsible for the provision of the service
 * - `subject` - Optional! -  Reference(Patient) - which should be filled by the system
 */

const encounters = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default("Encounter"),
    status: z
      .enum(
        [
          "planned",
          "arrived",
          "triaged",
          "in-progress",
          "onleave",
          "finished",
          "cancelled",
          "entered-in-error",
          "unknown",
        ],
        {
          message: "يجب اختيار أحد الخيارات",
        }
      )
      .default("planned"),
    class: z.string().min(1, {
      message: "يجب اختيار خيار واحد على الأقل",
    }), // <--- code
    period: z.string().optional(), // <,
    type: z
      .enum(["General Checkup", "Emergency", "Surgery"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("General Checkup"), // <--- code
    /*period: object({
        start: z.string().datetime().nullable(),
        end: z.string().datetime().nullable(),
      }),*/
    reasonCode: z.string().min(1, {
      message: "يجب اختيار خيار واحد على الأقل",
    }),
    location: z.string().optional(),
    hospitalization: z.string().min(1, {
      message: "الاستشفاء حقل مطلوب",
    }),
    //reference to location/organization...?
    serviceProvider: z.string().optional(),
    // valid: z.boolean().default(true),
  })
);

export const defaultEncounter = {
  encounters: [
    {
      resourceType: "Encounter",
      status: "unknown",
      class: "",
      type: "General Checkup",
      period: "",
      reasonCode: "",
      location: "",
      hospitalization: "",
      serviceProvider: "",
      // valid: true,
    },
  ],
};

export type EncounterType = {
  encounters: {
    id?: string;
    resourceType: string;
    status: string;
    class: string;
    period: string;
    type: string;
    reasonCode: string;
    location: string;
    hospitalization: string;
    serviceProvider: string;
    // valid: boolean;
  }[];
};

const formSchema = z.object({
  encounters,
});

export default formSchema;
