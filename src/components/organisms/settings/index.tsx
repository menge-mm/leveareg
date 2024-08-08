import React from "react";
import Notification from "./notification";
import GeneralSetting from "./general";
import Preferences from "./preferences";

const Settings = () => {
  const [tab, setTab] = React.useState(0);
  const activeState = {
    borderBottom: "2px solid #2563EB",
    color: "#2563EB",
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="flex flex-col min-h-[65vh]">
      <div className="flex items-center">
        <button
          role="tab"
          onClick={() => setTab(0)}
          style={tab == 0 ? activeState : {}}
          className="px-3 py-1 text-sm  border-b active:border-b-primary transition-all duration-300 ease-in-out font-medium"
        >
          General
        </button>

        <button
          role="tab"
          onClick={() => setTab(1)}
          style={tab === 1 ? activeState : {}}
          className="px-3 py-1  text-sm border-b active:border-b-primary transition-all duration-300 ease-in-out font-medium"
        >
          Preferences
        </button>

        <button
          role="tab"
          onClick={() => setTab(2)}
          style={tab === 2 ? activeState : {}}
          className="px-3 py-1 text-sm border-b active:border-b-primary transition-all duration-300 ease-in-out font-medium"
        >
          App Settings
        </button>
      </div>
      <>
        {tab === 0 && <GeneralSetting />}
        {tab === 1 && <Preferences />}
        {tab === 2 && <Notification />}
      </>
    </div>
  );
};

export default Settings;
