import { Staff } from '@/types';
import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useToast } from '@/components/atoms/use-toast';
import { Button } from '@/components/atoms/button';
import useLocalStorage from '@/hooks/useLocalStorage';
import { add } from 'date-fns';

type UserContextType = {
  userInfo: Staff;
  setUserInfo: (userInfo: Staff) => void;
  submitInfoChange: (data: Staff) => void;
  updateUserInfo: (homeAccountId: string) => void;
};

const initialValues = {
  id: '',
  username: '',
  healthCareProviderId: '',
  addressId: '',
  homeAccountId: '',
  providerName: '',
  privacySettings: {
    id: '',
    healthCareStaffId: '',
    consentManagement: true,
    usageAnalytics: true,
    marketingCookies: true,
    analyticsCookies: true,
    geoLocation: true,
    geoLocationTracking: true,
    emailEncryption: true,
    anonymousDataUsage: true,
    scientificResearch: true,
    // Email Notifications
    emailPromotion: true,
    emailSurvey: true,
    emailMedicalMessages: true,
    emailSystemMessages: true,
    emailOtherNotifications: true,
    // Telegram Notifications
    telegramPromotion: true,
    telegramSurvey: true,
    telegramMedicalMessages: true,
    telegramSystemMessages: true,
    telegramOtherNotifications: true,
  },
};

const UserContext = createContext<UserContextType>({
  userInfo: initialValues,
  setUserInfo: () => {},
  submitInfoChange: () => {},
  updateUserInfo: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast, dismiss } = useToast();
  const [hasFetched, setHasFetched] = useState(false);
  const [userInfo, setUserInfo] = useState<Staff>(initialValues);
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { addItem, getItem } = useLocalStorage();

  const updateUserInfo = async (homeAccountId: string) => {
    try {
      let res = await axios.get(`/api/get-health-care-staff/${homeAccountId}`);

      if (res.data.staff) {
        await addItem('user-db', res.data.staff);
        setUserInfo(res.data.staff);
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'An error occurred while updating user data. Please try again.',
        variant: 'destructive',
        action: (
          <Button
            className="bg-transparent border border-red-300 text-background"
            onClick={() => {
              dismiss();
            }}
          >
            Close
          </Button>
        ),
      });
    }
  };

  const submitInfoChange = async (data: Staff) => {
    try {
      let res = await axios.post(`/api/update-health-care-staff/${userInfo.id}`, data);
      if (res.data.staff) {
        setUserInfo(res.data.staff);
        localStorage.setItem('user-db', JSON.stringify(res.data.staff));
        toast({
          title: 'Success',
          description: 'User data updated successfully.',
          variant: 'default',
          action: (
            <Button
              className="bg-transparent border border-red-300 text-background"
              onClick={() => {
                dismiss();
              }}
            >
              Close
            </Button>
          ),
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'An error occurred while updating user data. Please try again.',
        variant: 'destructive',
        action: (
          <Button
            className="bg-transparent border border-red-300 text-background"
            onClick={() => {
              dismiss();
            }}
          >
            Close
          </Button>
        ),
      });
    }
  };

  const fetchUserInfo = useCallback(async () => {
    if (isAuthenticated) {
      try {
        const res = await axios.get(`/api/get-health-care-staff/${accounts[0].homeAccountId}`);
        return res.data.staff;
      } catch (e) {
        await axios.post(`/api/create-health-care-staff`, {
          homeAccountId: accounts[0].homeAccountId,
          username: accounts[0].username,
        });
      }
    }
  }, [isAuthenticated, accounts]);

  useEffect(() => {
    // console.log('useEffect called with:', { isAuthenticated, hasFetched });

    const info = getItem('user-db');
    // console.log('Retrieved info from local storage:', info);

    if (info) {
      setUserInfo(info);
      return;
    }

    if (!hasFetched && isAuthenticated) {
      console.log('Fetching user info...');
      fetchUserInfo().then((data) => {
        // console.log('User info fetched:', data);
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          ...data,
        }));
        setHasFetched(true);
        addItem('user-db', data);
      });
    }
  }, [isAuthenticated, hasFetched, fetchUserInfo, setUserInfo]);

  if (!userInfo || !instance) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, submitInfoChange, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
