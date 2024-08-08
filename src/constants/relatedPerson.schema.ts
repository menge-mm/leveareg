import { z } from 'zod';

const relatedPerson = z.object({
  id: z.string().optional(),
  resourceType: z.literal('RelatedPerson'),
  active: z.boolean().default(true),
  identifier: z.string(),
  photo: z.string().optional(),
  relationshipCode: z.string(),
  familyName: z.string().min(1, { message: 'اسم العائلة حقل مطلوب' }),
  givenName: z.string().min(1, { message: 'الاسم حقل مطلوب' }),
  phone: z.string().min(10, { message: 'رقم الهاتف يجب ان يكون بالصيغة الصحيحة' }),
  email: z.string().email(),
  // gender: z.enum(['male', 'female', 'other', 'unknown']),
  // birthDate: z.string().datetime(),
});

export const defaultRelatedPerson = {
  relatedPerson: {
    resourceType: 'RelatedPerson',
    active: true,
    identifier: '',
    photo: '',
    relationshipCode: '',
    familyName: '',
    givenName: '',
    phone: '',
    email: '',
    // gender: '',
    // birthDate: '',
  },
};

export type RelatedPersonType = {
  relatedPerson: {
    id?: string;
    resourceType: string;
    active: boolean;
    identifier: string;
    relationshipCode: string;
    photo?: string;
    familyName: string;
    givenName: string;
    phone: string;
    email: string;
    // gender: string;
    // birthDate: string;
  };
};

const formSchema = z.object({
  relatedPerson,
});

export default formSchema;
