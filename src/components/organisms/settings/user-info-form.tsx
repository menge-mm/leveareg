import { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
// import { useUser } from "@/contexts/UserContext";
import { Button } from "../../atoms/button";
import { Check, Edit, X } from "lucide-react";
import { useAuth } from "@/auth/AuthProvider";

const UserInfo = () => {
  // const { userInfo:userDetails, setUserInfo, submitInfoChange } = useUser();
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
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-2 ">
        {userDetails &&
          Object.entries(userDetails).map(([key, value]: [string, any]) => {
            if (
              key === "homeAccountId" ||
              key === "localAccountId" ||
              key === "id" ||
              key === "username" ||
              key === "providerId" ||
              key === "privacySettings" ||
              key === "providerName" ||
              key == "@odata.context"
            )
              return;
            return (
              <div key={key} className="w-full grid md:grid-cols-12 gap-2 items-center">
                <label className="font-sm col-span-3">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  // onChange={(e) => setUserInfo({ ...userInfo, [key]: e.target.value })}
                  disabled={!editMode || key === "email"}
                  className={`${
                    editMode
                      ? "border-gray-600 text-foreground"
                      : "border-gray-50 border-b-gray-300 text-gray-500 rounded-none"
                  } col-span-8 px-3 w-full border bg-transparent text-sm  rounded py-[6px]`}
                />
              </div>
            );
          })}
      </div>

      <div className="mt-5 ml-auto">
        {editMode ? (
          <div className="flex gap-5">
            <Button
              type="button"
              variant={"secondary"}
              className="text-background flex gap-1 items-center px-5 bg-gray-400 hover:bg-gray-500"
              onClick={() => setEditMode(false)}
            >
              <X size={16} /> Cancel
            </Button>

            <Button className="text-background flex gap-1 items-center px-5" type="submit">
              <Check size={16} /> Save
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setEditMode(true)}
            className="text-background flex gap-2 items-center px-5"
          >
            <Edit size={16} /> Edit
          </Button>
        )}
      </div>
    </form>
  );
};

export default UserInfo;
