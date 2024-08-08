import React from "react";

const Preferences = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-col mt-3 justify-center">
          <h2 className="text-lg mb-1 font-medium text-gray-600">User Preferences</h2>
          <p className="text-xs text-gray-500">Update your user preferences and settings</p>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
