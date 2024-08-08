import { z } from 'zod';
/**
 * **Social History Schema:**
 * *The social history of a patient is a record of the patient's life and may include information about the patient's occupation, education, family status, and other social issues.*
 * - `economicStatus` - R! -  One of the economics status should be selected
 * - `highestLevelOfEducation` - R! -  One of the highest level of education should be selected
 * - `physicalActivity` - R! -  One of the physical activity should be selected
 * - `dietAndNutrition` - R! -  One of the diet and nutrition should be selected
 * - `substanceUse` - R! -  One of the physical activity should be selected
 * - `stressAndCoping` - R! -  One of the stress and coping should be selected
 */
const socialHistory = z.object({
  id: z.string().optional(),
  resourceType: z.literal('Basic'),
  economicStatus: z.string().min(2, { message: 'يجب اختيار خيار واحد على الأقل' }),
  highestLevelOfEducation: z.string().min(2, { message: 'يجب اختيار خيار واحد على الأقل' }),
  physicalActivity: z.string().min(1, { message: 'يجب اختيار خيار واحد على الأقل' }),
  dietAndNutrition: z.string().min(1, { message: 'يجب اختيار خيار واحد على الأقل' }),
  substanceUse: z.array(z.string()).min(1, { message: 'يجب اختيار خيار واحد على الأقل' }),
  stressAndCoping: z.string().min(1, { message: 'يجب اختيار خيار واحد على الأقل' }),
});

export type SocialHistoryType = {
  socialHistory: {
    id?: string;
    resourceType: string;
    economicStatus: string;
    highestLevelOfEducation: string;
    physicalActivity: string;
    dietAndNutrition: string;
    substanceUse: string[]; // should be an array of strings at least one should be selected
    stressAndCoping: string;
  };
};

export const defaultSocialHistory = {
  socialHistory: {
    resourceType: 'Basic',
    economicStatus: '',
    highestLevelOfEducation: '',
    physicalActivity: '',
    dietAndNutrition: '',
    substanceUse: [''],
    stressAndCoping: '',
  },
};

const formSchema = z.object({
  socialHistory: socialHistory,
});

export default formSchema;
