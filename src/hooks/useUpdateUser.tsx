// import { useEffect } from "react";
// import { useUser } from "@/contexts/UserContext";
// import { Staff } from "@/types";

// const updateUserInformation = async (user: Staff) => {
//   setUserInfo((prev) => ({ ...prev, ...user }));
// };

// const useUpdateUser = () => {
//   const { userInfo, updateUserInformation } = useUser();

//   useEffect(() => {
//     const fetchPrivacySettings = async () => {
//       if (userInfo.privacySettings.id) {
//         const res = await fetch(`/api/privacy-settings/${userInfo.id}`);
//         const data = await res.json();

//         if (data.settings && data.settings.id) {
//           const { id, healthCareStaffId, ...rest } = data.settings;
//           updateUserInformation({ privacySettings: rest } as Staff);
//         }
//       }
//     };
//     if (userInfo) {
//       fetchPrivacySettings();
//     }
//   }, [userInfo, updateUserInformation]);

//   return { userInfo };
// };

// export default useUpdateUser;
