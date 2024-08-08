type PrivacySetting = {
  geolocation: boolean;
  emailEncryption: boolean;
  anonymousUsageData: boolean;
  emailMarketingConsent: boolean;
  usageAnalyticsConsent: boolean;
  marketingCookies: boolean;
  analyticsCookies: boolean;
  scientificResearch: boolean;
  emailPromotion: boolean;
  telegramPromotion: boolean;
  emailSurvey: boolean;
  telegramSurvey: boolean;
  emailMedicalMessages: boolean;
  telegramMedicalMessages: boolean;
  emailSystemMessages: boolean;
  telegramSystemMessages: boolean;
  emailOtherNotifications: boolean;
  telegramOtherNotifications: boolean;
};
type PrivacySettingMap = {
  [key: string]: PrivacySetting;
};

export type { PrivacySettingMap };
export type { PrivacySetting };
