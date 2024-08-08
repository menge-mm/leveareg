import { z } from 'zod';

/**
 * **Medication Statement Schema**
 * - `status` - R! -   active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
 *  - `subject` - R! -  Reference(Patient) - which should be filled by the system
 * - `dateAsserted` - Optional! -  When the statement was asserted
 * - `reasonCode` - R! -  Reason for the MedicationStatement
 * - `dosage` - Optional! -  Amount of medication taken
 * - `category` - Optional! -  Type of medication statement
 * - `note` - Optional! -  Further information about the statement
 * - `reasonReference` - Optional! -  Condition or observation that supports why the medication is being taken
 */

const medicationStatement = z.object({
  id: z.string().optional(),
  resourceType: z.string().default('MedicationStatement'),
  status: z.string().min(1, {
    message: 'يجب اختيار خيار واحد على الأقل',
  }),
  reasonCode: z.string().min(1, {
    message: 'يجب اختيار خيار واحد على الأقل',
  }),
  dateAsserted: z.string().optional(),
  dosage: z.coerce
    .number({
      message: 'يجب أن تكون الجرعة بتنسيق رقمي',
    })
    .gt(0, {
      message: 'يجب أن تكون الجرعة أكبر من 0',
    })
    .optional(),

  category: z.string().optional(),
  note: z.string().optional(),
  medicationReference: z.string().optional(),
});

export const defaultMedicationStatement = {
  medicationStatement: {
    resourceType: 'MedicationStatement',
    status: '',
    dateAsserted: '',
    reasonCode: '',
    dosage: 0,
    category: '',
    note: '',
    medicationReference: '',
  },
};

export type MedicationStatementType = {
  medicationStatement: {
    id?: string;
    resourceType: string;
    status: string;
    dateAsserted: string;
    reasonCode: string;
    dosage: number;
    category: string;
    note: string;
    medicationReference: string;
  };
};

const formSchema = z.object({
  medicationStatement,
});

export default formSchema;
