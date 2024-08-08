import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useMsal, useIsAuthenticated, useMsalAuthentication } from '@azure/msal-react';
import { loginRequest, tokenRequest } from './msalConfig';
import {
  BrowserAuthError,
  InteractionRequiredAuthError,
  InteractionStatus,
  InteractionType,
} from '@azure/msal-browser';
import useLocalStorage from '@/hooks/useLocalStorage';

type UserDetails = {
  id: string;
  businessPhones: string[];
  displayName: string; //givenName + surname
  givenName: string;
  jobTitle: string;
  avatar?: string;
  coverPhoto?: string;
  address?: string;
  mail: string; // email
  mobilePhone: string | null;
  officeLocation: string;
  preferredLanguage: string | null;
  surname: string; // familyName
  userPrincipalName: string; //username
};

type AuthContextType = {
  isAuthenticated: boolean;
  instance: any;
  userDetails: any;
  login: () => void;
  logout: () => void;
  acquireToken: () => Promise<string | null>;
  fetchUserDetails: () => Promise<void>;
  updateProfile: (updates: any) => Promise<any>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  instance: null,
  userDetails: null,
  login: () => {},
  logout: () => {},
  acquireToken: async () => '',
  fetchUserDetails: async () => {},
  updateProfile: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { addItem, getItem, removeItem } = useLocalStorage();

  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const account = accounts[0] || null;

  const { result, error } = useMsalAuthentication(InteractionType.Silent, tokenRequest);

  // check if browser's popup preferences are enabled - if blocked
  // then fallback to redirect
  const isPopupBlocked = () => {
    let popupTest;
    try {
      popupTest = window.open('', '', 'width=1,height=1');
      if (!popupTest || popupTest.closed || typeof popupTest.closed === 'undefined') {
        // Popup is blocked
        return true;
      }
      popupTest.close();
      return false;
    } catch (e) {
      // An error occurred while trying to open the popup, assume popup is blocked
      return true;
    }
  };

  const login = async () => {
    if (inProgress === InteractionStatus.None) {
      try {
        await instance.loginRedirect(loginRequest);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const logout = async () => {
    if (inProgress === InteractionStatus.None) {
      try {
        await instance.logoutRedirect();

        setUserDetails(null);
        removeItem('user');
        removeItem('user-db');
        sessionStorage.clear();
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('Interaction already in progress');
    }
  };

  const acquireToken = useCallback(async () => {
    try {
      const res = await instance.acquireTokenSilent({
        ...tokenRequest,
        account: account,
      });

      return res.accessToken;
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError || error instanceof BrowserAuthError) {
        if (inProgress === InteractionStatus.None) {
          try {
            const response = await instance.acquireTokenPopup(tokenRequest);
            return response.accessToken;
          } catch (popupError) {
            throw popupError;
          }
        } else {
          // throw new Error("Interaction already in progress");
          return null;
        }
      }
      throw error;
    }
  }, [account, inProgress, instance]);

  const fetchUserDetails = useCallback(async () => {
    const user = (await getItem('user')) as UserDetails | null;
    if (user) {
      setUserDetails(user);
      return;
    }
    if (result && result.accessToken && !user) {
      try {
        const response = await fetch('https://graph.microsoft.com/v1.0/me', {
          headers: {
            Authorization: `Bearer ${result.accessToken}`,
          },
        });
        const data = await response.json();
        await addItem('user', data);
        setUserDetails(data);
      } catch (error) {
        console.log('Error fetching user details', error);
      }
    }
  }, [result, getItem, addItem]);

  const updateProfile = async (updates: any) => {
    const accessToken = await acquireToken();

    if (!accessToken) {
      throw new Error('Unable to get access token');
    }

    try {
      const res = await fetch('https://graph.microsoft.com/v1.0/me/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(updates),
      });
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (isAuthenticated && !userDetails) {
      fetchUserDetails();
    }
  }, [isAuthenticated, userDetails, fetchUserDetails]);

  const contextValue = {
    isAuthenticated,
    instance,
    userDetails,
    login,
    logout,
    acquireToken,
    fetchUserDetails,
    updateProfile,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
