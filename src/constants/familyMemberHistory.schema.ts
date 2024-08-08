import { z } from "zod";

/**
 * **Family Member History Schema**
 * - `status` - R! - partial | completed | entered-in-error | health-unknown
 * - `patient` - R! -  Reference(Patient) - which should be filled by the system
 * - `relationship` - R! -  The relationship of the related person to the patient
 * - `date` - Optional -  When history was recorded
 * - `age` - Optional -  Age of the related person at the time the family member history is recorded
 * - `deceasedBoolean` - Optional -  Deceased flag
 * - `deceasedDate` - Optional -  Deceased date
 * - `sex` - Optional - indicates the gender of the related person
 * - `reason` - Optional -  Why the family member history is relevant
 */
const familyMemberHistory = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default("FamilyMemberHistory"),
    relationship: z.string().min(1, {
      message: "يجب اختيار خيار واحد على الأقل",
    }), // <--- code http://terminology.hl7.org/CodeSystem/v3-RoleCode
    status: z.string().min(1, {
      message: "يجب اختيار خيار واحد على الأقل",
    }), // <--- code http://hl7.org/fhir/ValueSet/history-status
    date: z.string().optional(),
    age: z.coerce
      .number({
        message: "يجب أن يكون العمر بتنسيق رقمي",
      })
      .gt(0, {
        message: "يجب أن يكون العمر أكبر من 0",
      })
      .optional(),
    deceasedBoolean: z.boolean().default(false),
    deceasedDate: z.string().optional(),
    sex: z
      .enum(["male", "female", "other", "unknown", ""], {
        message: "يجب اختيار أحد الخيارات",
      })
      .optional(),
    reason: z.string().optional(),
  })
);

export const defaultFamilyMemberHistory = {
  familyMemberHistories: [
    {
      resourceType: "FamilyMemberHistory",
      relationship: "",
      status: "",
      date: "",
      age: null,
      deceasedBoolean: false,
      deceasedDate: "",
      sex: "male",
      reason: "",
    },
  ],
};

export type FamilyMemberHistoryType = {
  familyMemberHistories: {
    id?: string;
    resourceType: string;
    relationship: string;
    status: string;
    date: string;
    age: number | null;
    deceasedBoolean: boolean;
    deceasedDate: string;
  }[];
};

const formSchema = z.object({
  familyMemberHistories: familyMemberHistory,
});

export default formSchema;
