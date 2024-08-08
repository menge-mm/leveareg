import { z } from 'zod';
import validator from 'validator';

/**
 * **Patient Schema**
 * - `givenName` - R! -  Given name of the patient
 * - `familyName` - R! -  Family name of the patient
 * - `telecom` - Optional! -  Phone number of the patient
 * - `homeNumber` - R -  Home number of the patient
 * - `gender` - R!
 * - `birthDate` - R! -  Date of birth of the patient
 * - `deceasedBoolean` - Optional -  Deceased flag
 * - `deceasedDateTime` - Optional -  Deceased date
 * - `photo` - Optional -  Photo of the patient
 * - `relationship` - Optional -  Relationship of the patient
 * - `contactFamilyName` - Optional -  Family name of the contact person
 * - `contactGivenName` - Optional -  Given name of the contact person
 * - `contact Gender` - Optional
 * - `contactTelecom` - Optional -  Phone number of the contact person
 * - `language` - R! -  Language of the patient
 * - `preferred` - Optional -  Preferred flag
 */

const homeRegex = new RegExp(/^\d{2,}$/);

const patient = z.object({
  id: z.string().optional(),
  resourceType: z.literal('Patient'),
  givenName: z.string().min(1, { message: 'الاسم حقل مطلوب' }),
  familyName: z.string().min(1, { message: 'اسم العائلة حقل مطلوب' }),
  homeNumber: z
    .string()
    .regex(homeRegex, {
      message: 'رقم المنزل يجب ان يكون بالصيغة الصحيحة',
    })
    .optional(),
  gender: z.enum(['male', 'female', 'other', 'unknown'], {
    message: 'يجب اختيار أحد الخيارات',
  }),
  birthDate: z
    .string()
    .datetime({
      message: 'تاريخ الميلاد يجب ان يكون بالصيغة الصحيحة',
    })
    .optional(),
  telecom: z.string().refine(validator.isMobilePhone, {
    message: 'رقم الهاتف يجب ان يكون بالصيغة الصحيحة',
  }),
  //deceasedBoolean: z.boolean().default(false).optional(),
  //deceasedDateTime: z.string().datetime().optional(),
  //photo: z.string().optional(),
  // relationship: z.string().optional(),
  //contactFamilyName: z.string().optional(),
  //contactGivenName: z.string().optional(),
  //contactGender: z.enum(["male", "female", "other", "unknown"]).optional(),
  //contactTelecom: z.string().optional(),
  //language: z.string().default("ar"),
  //preferred: z.boolean().default(false),
  healthInsurance: z.number().optional(),
  lifeInsurance: z.number().optional(),
});

export const defaultPatient = {
  patient: {
    resourceType: 'Patient',
    givenName: '',
    familyName: '',
    telecom: '',
    homeNumber: '',
    gender: '',
    birthDate: '',
    healthInsurance: 0,
    lifeInsurance: 0,
  },
};

export type PatientType = {
  patient: {
    id?: string;
    resourceType: string;
    givenName: string;
    familyName: string;
    telecom: string;
    homeNumber: string;
    healthInsurance: number;
    lifeInsurance: number;
  };
};

const formSchema = z.object({
  patient,
});

export default formSchema;
