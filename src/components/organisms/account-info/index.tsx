
import UserStat from "./user-stat";
import UserInfo from "./user-info";

const Account = () => {
  return (
    <div className="flex flex-col gap-5 px-3">
      <h2 className="text-lg text-gray-600 font-medium tracking-wide">Profile</h2>
      <UserInfo />
      <h2 className="text-lg text-gray-600 font-medium tracking-wide mt-5">User Activities</h2>
      <UserStat />
    </div>
  );
};

export default Account;
