import { use, useState } from "react";
import { z } from "zod";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useToast } from "@/components/atoms/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/atoms/separator";
import { Button } from "@/components/atoms/button";
import { FormInput, FormTextArea } from "../../molecules/form-elements";
import { useUser } from "@/contexts/UserContext";

const notificationSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  message: z.string(),
  type: z.string(),
  tags: z.string(),
  userId: z.string().optional(),
  user_id: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Notification = z.infer<typeof notificationSchema>;

const UpdateNotificationForm = ({
  notification,
  setOpen,
}: {
  notification: Notification;
  setOpen: (value: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const { userInfo } = useUser();

  const form = useForm<Notification>({
    resolver: zodResolver(notificationSchema),
    defaultValues: notification,
  });

  const submitForm = async (data: Notification) => {
    if (data.userId !== userInfo?.id) {
      toast({
        title: "Error",
        description: "You are not allowed to update this notification.",
        variant: "destructive",
        action: (
          <Button
            variant="outline"
            className="bg-transparent border border-red-300 text-background"
            onClick={() => {
              dismiss();
            }}
          >
            Close
          </Button>
        ),
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.put("/api/update-notification/", data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Your data saved successfully.",
          variant: "success",
          action: (
            <Button
              variant="outline"
              className="bg-transparent border border-blue-300 text-background"
              onClick={() => {
                dismiss();
              }}
            >
              Close
            </Button>
          ),
        });
        setOpen(false);
      } else {
        throw new Error("An error occurred while saving your data.");
      }
    } catch (e: any) {
      toast({
        title: "Error",
        description: e.message,
        variant: "destructive",
        action: (
          <Button
            variant="outline"
            className="bg-transparent border border-red-300 text-background"
            onClick={() => {
              dismiss();
            }}
          >
            Close
          </Button>
        ),
      });
    }

    setLoading(false);
  };

  return (
    <FormProvider {...form}>
      <h2 className="text-xl font-semibold mt-5">Create Notification</h2>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-3 flex flex-col mt-5">
        <input type="hidden" {...form.register("userId")} value={notification.user_id as string} />
        <input type="hidden" {...form.register("id")} />
        <FormInput placeholder="Title" label="Title" name="title" />
        <FormInput placeholder="Description" label="Description" name="description" />
        <FormInput placeholder="Type" label="Type" name="type" />
        <FormInput placeholder="Tags" label="Tags" name="tags" />
        <FormTextArea placeholder="Message" label="Message" name="message" />
        <Separator className="my-5" />
        <Button type="submit" className="bg-primary py-3 px-16 ml-auto">
          {loading ? "Submitting" : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default UpdateNotificationForm;
