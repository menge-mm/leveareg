import { FormEvent, use, useEffect, useState } from 'react';
import styles from './PrivacySettings.module.css';
import { Button } from '@/components/atoms/button';
import { useToast } from '@/components/atoms/use-toast';
import { useUser } from '@/contexts/UserContext';
import { emailNotifications, generalPrivacy, telegramNotifications } from './data';
import DataManagement from './data-management';
import Notification from './notification-form';
import AlertNotification from './alert-notify';
import type { SettingsState } from './types';
import { Separator } from '@/components/atoms/separator';
import { Staff } from '@/types';

function PrivacySettings() {
  const { toast, dismiss } = useToast();
  const { userInfo, updateUserInfo } = useUser();

  const [settings, setSettings] = useState<SettingsState>({
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
  });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const { id, healthCareStaffId, ...rest } = userInfo.privacySettings as Staff['privacySettings'];
    if (id) setSettings({ ...rest });
  }, [userInfo.privacySettings]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let privacy = userInfo.privacySettings || ({} as any);

    const API = privacy.id ? `/api/privacy-settings/update` : `/api/privacy-settings/create`;

    try {
      const formData = privacy.id ? { ...settings, id: privacy.id } : { ...settings, healthCareStaffId: userInfo?.id };

      const res = await fetch(API, {
        method: privacy.id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      await updateUserInfo(userInfo.homeAccountId);

      toast({
        title: 'Success',
        description: data.message,
        variant: 'success',
        action: (
          <Button
            variant="outline"
            className="bg-transparent border border-blue-300 text-background"
            onClick={() => {
              dismiss();
            }}
          >
            Close
          </Button>
        ),
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
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

  const handleDataChecked = (name: string, data: boolean) => {
    setSettings((prev) => ({ ...prev, [name]: data }));
    setActive(true);
  };

  return (
    <div className={styles.scrollableContainer}>
      <AlertNotification />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <Button
            type="submit"
            size={'sm'}
            variant={'outline'}
            className="hover:bg-primary hover:text-background"
            disabled={!active}
          >
            {userInfo.privacySettings?.id ? 'Update Profile' : 'Save Changes'}
          </Button>
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row  rounded justify-around pt-2">
          <Notification
            settings={settings}
            handleDataChecked={handleDataChecked}
            subtitle="Email Notifications"
            notifications={emailNotifications}
          />
          <Notification
            settings={settings}
            handleDataChecked={handleDataChecked}
            subtitle="Telegram Notifications"
            notifications={telegramNotifications}
          />
          <Notification
            settings={settings}
            handleDataChecked={handleDataChecked}
            subtitle="General Privacy Settings"
            notifications={generalPrivacy}
          />
        </div>
      </form>
      <Separator className="my-5" />
      <DataManagement />
    </div>
  );
}

export default PrivacySettings;
