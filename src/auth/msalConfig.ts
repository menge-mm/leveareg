import { LogLevel } from "@azure/msal-browser";

const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID as string;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: `https://login.microsoftonline.com/${TENANT_ID}`,
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false, // it was false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
    },
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "email", "User.Read", "User.ReadWrite"], // Minimum necessary scopes
};

export const tokenRequest = {
  scopes: ["User.Read", "User.ReadWrite"],
};

// Enable MFA and Conditional Access policies in your Azure AD configuration
export const FHIRConfig = {
  endpoint: "https://leveahealthservice-levea-fhir-demo-1.fhir.azurehealthcareapis.com",
  scopes: [
    "https://leveahealthservice-levea-fhir-demo-1.fhir.azurehealthcareapis.com/patient.all.read",
    "https://leveahealthservice-levea-fhir-demo-1.fhir.azurehealthcareapis.com/user.all.read",
    "https://leveahealthservice-levea-fhir-demo-1.fhir.azurehealthcareapis.com/fhirUser",
    "https://leveahealthservice-levea-fhir-demo-1.fhir.azurehealthcareapis.com/user_impersonation",
  ],
};

export const FHIR_BASE_URL = `https://leveahealthservice-levea-fhir-demo-1.azurehealthcareapis.com`;

async function callFHIRServer(theUrl: string, method: string, message: any, accessToken: string) {
  try {
    const response = await fetch(theUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      body: message,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(
        "FHIR server call error:",
        response.status,
        response.statusText,
        await response.text()
      );
    }
  } catch (error) {
    console.error("Error calling FHIR server:", error);
  }
}

export { callFHIRServer };
