import { msalInstance } from '@/auth/msalInstance';
import { AccountInfo } from '@/types';
import axios from 'axios';

export const userProfileInfo = (): AccountInfo | null => {
  const account = msalInstance.getAllAccounts()[0];

  if (!account) {
    return null;
  }

  return {
    id: account.homeAccountId,
    email: account.idTokenClaims?.email || account.username,
    username: account.username,
    givenName: account.name?.split(' ')[0],
    familyName: account.name?.split(' ')[1],
    photo: account.idTokenClaims?.picture,
    phone: account.idTokenClaims?.phone_number,
    homeAccountId: account.homeAccountId,
    localAccountId: account.localAccountId,
    account,
  };
};

export const getUserProfileInfo = async () => {
  const account = msalInstance.getAllAccounts()[0];

  if (!account) {
    return null;
  }

  const profile = await axios.get('https://graph.microsoft.com/v1.0/me', {
    headers: {
      Authorization: `Bearer ${account.idToken}`,
    },
  });

  return profile.data;
};
// export const userRole = async () => {
//   const account = msalInstance.getActiveAccount();
//   if (!account) {
//     return null;
//   }

//   return account.idTokenClaims.roles;
// };

export const getAvatarFallback = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

export const isFirstTimeLogin = async (username: string) => {
  // check if user has logged in before
  try {
    const user = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/health-care-staff/${username}`);
    const userData = await user.data;

    return !userData;
  } catch (e: any) {
    throw new Error(e);
  }
};
