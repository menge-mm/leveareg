import { z } from "zod";

/**
 * **Immunization Schema**
 * - `vaccineCode` - R! -  Vaccine that was administered
 * - `status` - R! -  completed | entered-in-error | not-done
 * - `occurrenceDateTime` - Optional -  When the immunization was administered
 * - `location` - Optional! -  The location where the immunization was administered
 * - `manufacturer` - Optional! -  The manufacturer of the vaccine
 * - `lotNumber` - Optional! -  The lot number of the vaccine
 * - `expirationDate` - Optional -  The expiration date of the vaccine
 * - `site` - Optional -  LA | RA
 * - `doseQuantity` - Optional -  The amount of vaccine administered
 */

const immunization = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default("Immunization"),
    vaccineCode: z.string().min(1, {
      message: "يجب اختيار خيار واحد على الأقل",
    }),
    status: z
      .enum(["completed", "entered-in-error", "not-done"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("completed"),
    site: z
      .enum(["LA", "RA"], {
        message: "يجب اختيار أحد الخيارات",
      })
      .default("LA"),
    occurrenceDateTime: z.string().optional(),
    location: z.string().optional(), // reference to location
    manufacturer: z.string().optional(), // reference to organization
    lotNumber: z.string().optional(),
    expirationDate: z.string().optional(),

    doseQuantity: z.coerce
      .number({
        message: "يجب أن تكون الكمية بتنسيق رقمي",
      })
      .gt(0, {
        message: "يجب أن تكون الكمية أكبر من 0",
      })
      .optional(),
  })
);

export const defaultImmunization = {
  immunizations: [
    {
      resourceType: "Immunization",
      vaccineCode: "",
      status: "completed",
      occurrenceDateTime: "",
      location: "",
      manufacturer: "",
      lotNumber: "",
      expirationDate: "",
      site: "LA",
      doseQuantity: 0,
    },
  ],
};

export type ImmunizationType = {
  immunizations: {
    id?: string;
    resourceType: string;
    vaccineCode: string;
    status: string;
    occurrenceDateTime: string;
    location: string;
    manufacturer: string;
    lotNumber: string;
    expirationDate: string;
    site: string;
    doseQuantity: number;
  }[];
};

const formSchema = z.object({
  immunizations: immunization,
});

export default formSchema;
