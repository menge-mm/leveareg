import { z } from "zod";
/**
 * Condition Schema
 * - `subject` - R! -  Reference(Patient) - which should be filled by the system
 * - `code` - R! -  Code that identifies the condition
 * - `clinicalStatus` - R! -  active | relapse | inactive | recurrence | remission | resolved
 * - `verificationStatus` - Optional -  unconfirmed | confirmed | provisional | differential | refuted | entered-in-error
 * - `severity` - R! -  mild | moderate | severe
 * - `onsetDateTime` - Optional -  When the condition was identified
 */
const condition = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.literal("Condition"),
    code: z.string().min(1, {
      message: "رمز الحالة حقل مطلوب",
    }),
    clinicalStatus: z
      .enum(["active", "relapse", "inactive", "recurrence", "remission", "resolved"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("active"),
    verificationStatus: z
      .enum([
        "unconfirmed",
        "confirmed",
        "provisional",
        "differential",
        "refuted",
        "entered-in-error",
        "",
      ])
      .optional(),
    severity: z
      .enum(["mild", "moderate", "severe"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("mild"),
    onsetDateTime: z.string().optional(),
  })
);

export const defaultCondition = {
  conditions: [
    {
      resourceType: "Condition",
      code: "",
      clinicalStatus: "active",
      verificationStatus: "unconfirmed",
      severity: "mild",
      onsetDateTime: "",
    },
  ],
};

export type ConditionType = {
  conditions: {
    id?: string;
    resourceType: string;
    code: string;
    clinicalStatus: string;
    verificationStatus: string;
    severity: string;
    onsetDateTime: string;
  }[];
};

const formSchema = z.object({
  conditions: condition,
});

export default formSchema;
