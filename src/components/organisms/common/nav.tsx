import {
  BellIcon,
  BookOpenCheck,
  BookUser,
  HandHelpingIcon,
  HelpCircle,
  Home,
  InfoIcon,
  LockIcon,
  UserRoundCog,
} from "lucide-react";

export const navs = [
  {
    path: "/",
    tooltip: "Home",
    icon: <Home className="w-7 h-7" />,
  },
  // {
  //   path: "/",
  //   tooltip: "Patient Registration",
  //   icon: <UserPlus className="w-7 h-7" />,
  // },
  // {
  //   path: "/registration",
  //   tooltip: "Patient Registration 2",
  //   icon: <UserPlus className="w-7 h-7" />,
  // },

  {
    path: "/privacy-settings",
    tooltip: "Privacy Settings",
    icon: <LockIcon className="w-7 h-7" />,
  },
  {
    path: "/notifications",
    tooltip: "Notifications",
    icon: <BellIcon className="w-7 h-7" />,
  },
  {
    path: "/information",
    tooltip: "Information",
    icon: <HelpCircle className="w-7 h-7" />,
  },
  {
    path: "/account-info",
    tooltip: "Account Information",
    icon: <BookUser className="w-7 h-7" />,
  },
];
