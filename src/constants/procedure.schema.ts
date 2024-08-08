import { z } from "zod";
/**
 * **Procedure Schema** *
 * `subject` - R! -  Reference(Patient) - which should be filled by the system
 * - `status` - R! -  preparation | in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
 * - `code` - R! -  Code that identifies the procedure
 * - `reasonCode` - Optional! -  Reason the procedure performed
 * - `performer` - Optional! -  The people who performed the procedure
 * - `performedDateTime` - Optional! -  When the procedure was performed
 * - `location` - Optional! -  Where the procedure happened
 * - `outcome` - Optional! -  What was the outcome of the procedure
 */

const procedure = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default("Procedure"),
    code: z.string().min(1, { message: "يجب اختيار أحد الخيارات" }), // <---
    status: z
      .enum(
        [
          "preparation",
          "in-progress",
          "not-done",
          "on-hold",
          "completed",
          "entered-in-error",
          "stopped",
          "unknown",
        ],
        {
          message: "يجب اختيار أحد الخيارات",
        }
      )
      .default("preparation"),
    reasonCode: z.string().optional(),
    performer: z.string().optional(),
    performedDateTime: z.string().optional(),
    location: z.string().optional(),
    outcome: z.string().optional(),
  })
);

export const defaultProcedure = {
  procedures: [
    {
      resourceType: "Procedure",
      status: "preparation",
      code: "",
      reasonCode: "",
      performer: "",
      performedDateTime: "",
      location: "",
      outcome: "",
    },
  ],
};

export type ProcedureType = {
  procedures: {
    id?: string;
    resourceType: string;
    code: string;
    status: string;
    reasonCode: string;
    performer: string;
    performedDateTime: string;
    location: string;
    outcome: string;
  }[];
};

const formSchema = z.object({
  procedures: procedure,
});

export default formSchema;
