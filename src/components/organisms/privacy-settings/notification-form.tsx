import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../atoms/tooltip";
import { Switch } from "../../atoms/switch";
import type { NotificationProps } from "./types";
import { Button } from "@/components/atoms/button";
import { TooltipArrow } from "@radix-ui/react-tooltip";

const Notification = ({
  subtitle,
  notifications,
  handleDataChecked,
  settings,
}: NotificationProps) => {
  return (
    <div className="flex flex-col space-y-1 py-3 md:px-4 flex-1 min-w-[300px]">
      <h2 className="text-xl font-semibold text-primary mb-2">{subtitle}</h2>
      {notifications.map((notification) => (
        <Tooltip key={notification.id}>
          <TooltipTrigger asChild>
            <div className="flex items-center space-x-3 border-l-2 border-b border-b-gray-100 p-2 shadow-sm ">
              <Switch
                id={notification.name}
                name={notification.name}
                className="data-[state=unchecked]:bg-gray-400"
                checked={settings[notification.name] as boolean}
                onCheckedChange={(checked) =>
                  handleDataChecked(notification.name, checked as boolean)
                }
              />
              <label
                htmlFor={notification.name}
                className="text-md cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {notification.label}
              </label>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="max-w-[300px]">
            <TooltipArrow className="bg-white border-white" />
            {notification.description}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Notification;
