import { PublicClientApplication } from "@azure/msal-browser";

const TENANT_ID = process.env.NEXT_PUBLIC_AZURE_TENANT_ID as string;
const CLIENT_ID = process.env.NEXT_PUBLIC_AZURE_CLIENT_ID as string;

const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: `https://login.microsoftonline.com/${TENANT_ID}`,
    redirectUri: `/`,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
