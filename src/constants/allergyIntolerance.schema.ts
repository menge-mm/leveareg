import { z } from "zod";

/**
 * Allergy Intolerance Schema
 * - `patient` - R! -  Reference(Patient) - which should be filled by the system
 * - `code` - R! -   that identifies the allergy or intolerance
 * - `clinicalStatus` - R! -  active | inactive | resolved
 * - `verificationStatus` - Optional -  unconfirmed | confirmed | refuted | entered-in-error
 * - `category` - R! -  food | medication | environment | biologic
 * - `criticality` - R! -  low | high | unable-to-assess
 * - `onsetDateTime` - Optional -  When the allergy or intolerance was identified
 * - `reaction` - Optional -  Description of the reaction
 *
 */

const allergyIntolerance = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default("AllergyIntolerance"),
    code: z.string().min(1, { message: "هذا حقل مطلوب" }),
    clinicalStatus: z
      .enum(["active", "inactive", "resolved"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("active"),
    verificationStatus: z
      .enum(["unconfirmed", "confirmed", "refuted", "entered-in-error", ""], {
        message: "يجب اختيار أحد الخيارات",
      })
      .optional(),
    category: z
      .enum(["food", "medication", "environment", "biologic"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("food"),
    criticality: z
      .enum(["low", "high", "unable-to-assess"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("low"),
    onsetDateTime: z.string().optional(),
    reaction: z.string().optional(),
  })
);

export const defaultAllergyIntolerance = {
  allergyIntolerances: [
    {
      resourceType: "AllergyIntolerance",
      code: "",
      clinicalStatus: "active",
      verificationStatus: "unconfirmed",
      category: "food",
      criticality: "low",
      onsetDateTime: "",
      reaction: "",
    },
  ],
};

export type AllergyIntoleranceType = {
  allergyIntolerances: {
    id?: string;
    resourceType: string;
    code: string;
    clinicalStatus: string;
    verificationStatus: string;
    category: string;
    criticality: string;
    onsetDateTime: string;
    reaction: string;
  }[];
};

const formSchema = z.object({
  allergyIntolerances: allergyIntolerance,
});

export default formSchema;
