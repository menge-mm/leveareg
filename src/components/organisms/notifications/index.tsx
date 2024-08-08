import { BellIcon } from "lucide-react";
import NotificationItem from "./item";
import { Button } from "@/components/atoms/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/atoms/use-toast";
import { ToastClose } from "@/components/atoms/toast";
import type { Notification } from "./create-notification-form";
import Drawer from "@/components/molecules/drawer";
import NotificationForm from "./create-notification-form";
import { NotificationType } from "./types";
import UpdateNotificationForm from "./update-notification-form";

export const getServerSideProps = async () => {
  const response = await fetch(`/api/read-notifications?offset=0&limit=6`);
  const data = await response.json();
  console.log({ data });

  return {
    props: {
      nots: data.notifications,
    },
  };
};



function Notifications({ nots }: any) { 
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const { toast } = useToast();

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      const response = await fetch(`/api/read-notifications?offset=0&limit=5`);
      const data = await response.json();
      if (data.notifications) {
        setNotifications(data.notifications);
        setLoading(false);
      } else {
        setLoading(false);
        toast({
          title: "Error Fetching Notifications",
          description: "An error occurred while fetching notifications. Please try again later.",
          variant: "destructive",
          action: (
            <ToastClose onClick={() => {}} className="bg-red-700">
              Close
            </ToastClose>
          ),
        });
      }
    };

    fetchNotifications();
  }, [toast]);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    setOffset(offset + limit);

    const response = await fetch(`/api/read-notifications?offset=${offset + 5}&limit=${limit}`);
    const data = await response.json();
    if (data.notifications) {
      setNotifications((prev) => [...prev, ...data.notifications]);
      setLoadingMore(false);
    } else {
      setLoadingMore(false);
      toast({
        title: "Error Fetching Notifications",
        description: "An error occurred while fetching notifications. Please try again later.",
        variant: "destructive",
        action: (
          <ToastClose onClick={() => {}} className="bg-red-700">
            Close
          </ToastClose>
        ),
      });
    }
  };

  return (
    <div className="min-h-[60vh]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <BellIcon size={12} />
          <p className="font-thin text-gray-500 text-xs">
            Here are the latest {notifications.length} notifications 🎉
          </p>
        </div>
        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => {
            setOpenDrawer(true);
            setSelectedNotification({
              title: "",
              description: "",
              message: "",
              type: "",
              tags: "",
            });
          }}
          className="flex items-center gap-1 text-primary hover:bg-primary hover:text-background border-primary transition-colors duration-150"
        >
          Create Notification
        </Button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-full text-primary font-bold mt-12">
          <span>Loading...</span>
        </div>
      ) : notifications && notifications.length > 0 ? (
        <>
          <ul className="flex flex-col gap-2">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                setOpen={setOpenDrawer}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
                setSelectedNotification={setSelectedNotification}
              />
            ))}
          </ul>
          {loadingMore && (
            <div className="flex items-center justify-center h-full text-primary font-bold mt-12">
              <span>Loading more...</span>
            </div>
          )}

          <div className="flex items-center justify-center mt-5">
            <Button
              className="flex items-center px-5 text-foreground hover:bg-primary hover:text-background"
              variant={"outline"}
              onClick={handleLoadMore}
            >
              Load More Notifications
            </Button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-primary font-bold mt-12">
          <span>No Notifications 😔</span>
        </div>
      )}

      <Drawer open={openDrawer} setOpen={setOpenDrawer}>
        {selectedNotification && selectedNotification.id ? (
          <UpdateNotificationForm setOpen={setOpenDrawer} notification={selectedNotification} />
        ) : (
          <NotificationForm setOpen={setOpenDrawer} />
        )}
      </Drawer>
    </div>
  );
}

export default Notifications;
