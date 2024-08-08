export type Staff = {
  id: string;
  // givenName: string; // givenName // duplicate
  // familyName: string; // surname // duplicate
  // telecom: string; // mobilePhone // duplicate
  // role: string; // jobTitle // duplicate
  username: string; // userPrincipalName //duplicate

  homeAccountId: string; // id // used for referencing one to one for msal

  addressId: string;
  // city: string; // officeLocation // duplicate
  // state: string;
  // street: string;
  // zip: string;

  healthCareProviderId: string;
  providerName: string;

  // homeNumber: string;

  // photo: string; // avatar

  privacySettings: {
    id: string;
    healthCareStaffId: string;
    consentManagement: boolean;
    usageAnalytics: boolean;
    marketingCookies: boolean;
    analyticsCookies: boolean;
    geoLocation: boolean;
    geoLocationTracking: boolean;
    emailEncryption: boolean;
    anonymousDataUsage: boolean;
    scientificResearch: boolean;
    // Email Notifications
    emailPromotion: boolean;
    emailSurvey: boolean;
    emailMedicalMessages: boolean;
    emailSystemMessages: boolean;
    emailOtherNotifications: boolean;
    // Telegram Notifications
    telegramPromotion: boolean;
    telegramSurvey: boolean;
    telegramMedicalMessages: boolean;
    telegramSystemMessages: boolean;
    telegramOtherNotifications: boolean;
  };
};
