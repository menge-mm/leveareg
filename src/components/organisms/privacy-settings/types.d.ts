export type SettingsState = {
  [key: string]: boolean;
};

export type Notification = {
  id: number;
  name: string;
  label: string;
  description: string;
};

export interface NotificationProps {
  settings: SettingsState;
  subtitle: string;
  handleDataChecked: (name: string, checked: boolean) => void;
  notifications: Notification[];
}
