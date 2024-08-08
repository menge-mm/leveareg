import { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import { useUser } from "@/contexts/UserContext";

import { Button } from "../../atoms/button";
import { Check, ClockIcon, Edit, Edit2, ListIcon, LogInIcon, User2Icon, X } from "lucide-react";
import UserStat from "./user-stat";
import { useAuth } from "@/auth/AuthProvider";

const UserInfo = () => {
  // const { userInfo: userDetails, setUserInfo, submitInfoChange } = useUser();
  const { userDetails } = useAuth();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {}, []);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUserInfo({ ...userDetails, [e.target.name]: e.target.value });
  // };

  const submitChangeRequest = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditMode(false);
    // Submit the form data to the server
    // submitInfoChange(userDetails);
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={submitChangeRequest}>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-2 mb-2">
        {userDetails &&
          Object.entries(userDetails).map(([key, value]: [string, any]) => {
            if (
              key === "homeAccountId" ||
              key === "localAccountId" ||
              key === "id" ||
              key === "providerId" ||
              key === "privacySettings" ||
              key === "@odata.context"
            )
              return;
            return (
              <div key={key} className="w-full grid md:grid-cols-12 gap-2 items-center">
                <label className="font-sm col-span-4">{getFormattedLabel(key)}</label>
                <span
                  className={
                    "col-span-8 px-3 w-full  bg-transparent text-sm  rounded py-[6px] text-gray-500"
                  }
                >
                  {value}
                </span>
              </div>
            );
          })}
      </div>
    </form>
  );
};

export default UserInfo;

const getFormattedLabel = (key: string) => {
  switch (key) {
    case "providerName":
      return "Provider Name";
    case "givenName":
      return "First Name";
    case "familyName":
      return "Last Name";
    case "homeNumber":
      return "Home Number";
    default:
      return key.charAt(0).toUpperCase() + key.slice(1);
  }
};
