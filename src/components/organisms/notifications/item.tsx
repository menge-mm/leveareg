import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { NotificationType } from "./types";
import { formatDistance } from "date-fns";
import { motion } from "framer-motion";
import type { Notification } from "./create-notification-form";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import clsx from "clsx";

const NotificationItem = ({
  notification,
  expandedId,
  setOpen,
  setExpandedId,
  setSelectedNotification,
}: {
  notification: NotificationType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  expandedId: string | null;
  setExpandedId: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedNotification: React.Dispatch<React.SetStateAction<Notification | null>>;
}) => {
  useEffect(() => {
    if (expandedId === null) {
      setOpen(false);
    }
  }, [expandedId, setOpen]);
  return (
    <li
      className={`grid grid-cols-12 items-center py-2 px-3 shadow-sm border cursor-pointer border-gray-100 rounded gap-5 hover:border-gray-300 transition duration-150 justify-items-start w-full${
        expandedId ? " border-gray-200" : ""
      }`}
      onDoubleClick={() => {
        setOpen((prev) => !prev);
        setSelectedNotification(notification);
      }}
      onClick={() => setExpandedId(notification.id)}
    >
      <Image
        src="/images/logoMinimal.jpg"
        width={36}
        height={36}
        alt="LEVEA logo"
        className="rounded-full p-1 border col-span-1 border-gray-200"
      />
      <div className="flex flex-col col-span-4">
        <span className="text-sm font-semibold text-start">{notification.title}</span>
        <span className="text-xs text-muted-foreground text-start">{notification.description}</span>
      </div>
      <span className="text-sm font-mono text-gray-500 col-span-3">
        {formatDistance(new Date(notification.createdAt), new Date(), { addSuffix: true })}
      </span>

      <span
        className={clsx(
          "font-bold rounded-full py-[2px] w-[70px] text-[10px] text-center mx-auto flex justify-center col-span-2",
          getBadgeColor(notification.type)
        )}
      >
        {notification.type}
      </span>

      <Button
        size="xs"
        variant="outline"
        className="ml-2 text-[10px] border-none hover:bg-primary hover:text-background col-span-2 mx-auto"
        onDoubleClick={() => {
          setOpen(true);
          setSelectedNotification(notification);
        }}
        onClick={() => setExpandedId(notification.id)}
      >
        {/* <span>See more</span> */}
        {expandedId === notification.id ? (
          <ChevronDown size={16} className="ml-1" />
        ) : (
          <ChevronRight size={16} className="ml-1" />
        )}
        <span className="sr-only">Close Notification</span>
      </Button>

      {expandedId === notification.id && (
        <motion.div
          className="p-3 col-span-12 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <ReactMarkdown>{notification.message}</ReactMarkdown>

          <div className="flex justify-end items-center gap-3 mt-5">
            {/* <span className="text-xs font-medium rounded-full border px-3 py-1 border-primary text-primary ">
              Read {notification.read_count} times
            </span> */}
            {/* <Button
              size="xs"
              variant="outline"
              className="text-[10px] hover:bg-primary hover:text-background border-primary py-[12px] px-3"
              onClick={() => setExpandedId(null)}
            >
              Close
            </Button> */}
          </div>
        </motion.div>
      )}
    </li>
  );
};

export default NotificationItem;

type BadgeColor = string | null;

const getBadgeColor = (type?: string): BadgeColor => {
  switch (type) {
    case "Alert":
      return "bg-red-50 text-red-700 border border-red-700";
    case "Notification":
      return "bg-blue-50 text-blue-700 border border-blue-700";
    case "Urgent":
      return "bg-orange-50 text-orange-700 border border-orange-700";
    case "Information":
      return "bg-green-50 text-green-700 border border-green-700";
    case "Error":
      return "bg-red-50 text-red-700 border border-red-700 ";
    case "Warning":
      return "bg-yellow-50 text-yellow-900 border border-yellow-700";
    case "Feedback":
      return "bg-violet-50 text-violet-700 border border-violet-700";
    default:
      return "bg-gray-50 text-gray-700 border border-gray-700";
  }
};
