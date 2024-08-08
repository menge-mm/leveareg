import React from "react";
import Notifications from "../notifications";

const Notification = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-col mt-3 justify-center">
          <h2 className="text-lg mb-1 font-bold text-gray-600">Notification Settings</h2>
          <p className="text-xs text-gray-500">Update your user notification related settings</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
