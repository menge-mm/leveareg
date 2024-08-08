import { z } from "zod";
/**
 * **Consent Schema -**
 * - `consentDataCollection` - R! -  Consent for data collection
 * - `gdprCompliance` - R! -  GDPR Compliance
 * - `gdprProcessingAgreement` - R! -  GDPR Processing Agreement
 * - `hipaaCompliance` - R! -  HIPAA Compliance
 * - `hipaaConsent` - R! -  HIPAA Consent
 * - `dataSharing` - R! -  Data Sharing
 * - `rightToWithdraw` - R! -  Right to Withdraw
 * - `confidentialityAgreement` - R! -  Confidentiality Agreement
 * - `dataRetentionPolicy` - R! -  Data Retention Policy
 * - `termsAndConditions` - R! -  Terms and Conditions
 * - `privacyPolicy` - R! -  Privacy Policy
 * - `dnaCollectionConsent` - R! -  DNA Collection Consent
 */
const consent = z.object({
  consentDataCollection: z.boolean(),
  gdprCompliance: z.boolean(),
  gdprProcessingAgreement: z.boolean(),
  hipaaCompliance: z.boolean(),
  hipaaConsent: z.boolean(),
  dataSharing: z.boolean(),
  rightToWithdraw: z.boolean(),
  confidentialityAgreement: z.boolean(),
  dataRetentionPolicy: z.boolean(),
  termsAndConditions: z.boolean(),
  privacyPolicy: z.boolean(),
  dnaCollectionConsent: z.boolean(),
});

export const defaultConsent = {
  consent: {
    consentDataCollection: true,
    gdprCompliance: true,
    gdprProcessingAgreement: true,
    hipaaCompliance: true,
    hipaaConsent: true,
    dataSharing: true,
    rightToWithdraw: true,
    confidentialityAgreement: true,
    dataRetentionPolicy: true,
    termsAndConditions: true,
    privacyPolicy: true,
    dnaCollectionConsent: true,
  },
};

export type ConsentType = {
  consent: {
    consentDataCollection: boolean;
    gdprCompliance: boolean;
    gdprProcessingAgreement: boolean;
    hipaaCompliance: boolean;
    hipaaConsent: boolean;
    dataSharing: boolean;
    rightToWithdraw: boolean;
    confidentialityAgreement: boolean;
    dataRetentionPolicy: boolean;
    termsAndConditions: boolean;
    privacyPolicy: boolean;
    dnaCollectionConsent: boolean;
  };
};

const formSchema = z.object({
  consent: consent,
});

export default formSchema;
