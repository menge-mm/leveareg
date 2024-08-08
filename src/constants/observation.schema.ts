import { z } from 'zod';

/**
 * **Observation Schema**
 * - `code` - R! -  Code that identifies the observation
 * - `status` - R! -  registered | preliminary | final | amended | corrected | cancelled | entered-in-error | unknown
 * - `effectiveDateTime` - Optional -  Date/Time this was made available
 * - `valueQuantity` - Optional -  Actual result
 */
const observation = z.array(
  z.object({
    id: z.string().optional(),
    resourceType: z.string().default('Observation'),
    code: z.string().min(1, {
      message: 'يجب اختيار خيار واحد على الأقل',
    }),
    status: z
      .enum(
        ['registered', 'preliminary', 'final', 'amended', 'corrected', 'cancelled', 'entered-in-error', 'unknown'],
        {
          message: 'يجب اختيار أحد الخيارات',
        }
      )
      .default('registered'),
    effectiveDateTime: z.string().optional(),
    valueQuantity: z.coerce
      .number({
        message: 'يجب أن تكون القيمة بتنسيق رقمي',
      })
      .gt(0, {
        message: 'يجب أن تكون القيمة أكبر من 0يجب أن تكون القيمة أكبر من 0',
      })
      .optional(),
  })
);

export const defaultObservation = {
  observations: [
    {
      resourceType: 'Observation',
      code: '',
      status: 'unknown',
      effectiveDateTime: '',
      valueQuantity: null,
    },
  ],
};

export type ObservationType = {
  observations: {
    id?: string;
    resourceType: string;
    code: string;
    status: string;
    effectiveDateTime: string;
    valueQuantity?: number | null | undefined;
  }[];
};

const formSchema = z.object({
  observations: observation,
});

export default formSchema;
