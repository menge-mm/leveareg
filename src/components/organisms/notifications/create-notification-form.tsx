import { use, useState } from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useToast } from "@/components/atoms/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/atoms/button";
import { FormInput, FormTextArea } from "../../molecules/form-elements";
import { useUser } from "@/contexts/UserContext";
import RichTextEditor from "@/components/molecules/form-elements/RichTextEditor";

const notificationSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  message: z.string(),
  type: z.string(),
  tags: z.string(),
  userId: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Notification = z.infer<typeof notificationSchema>;

const NotificationForm = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();
  const { userInfo } = useUser();

  const form = useForm<Notification>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      title: "",
      description: "",
      message: "",
      type: "",
      tags: "",
      userId: userInfo?.id,
    },
  });

  const submitForm = async (data: Notification) => {
    try {
      setLoading(true);
      const response = await fetch("/api/create-notification", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
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
        <input type="hidden" {...form.register("userId")} />
        <FormInput placeholder="Title" label="Title" name="title" />
        <FormInput placeholder="Description" label="Description" name="description" />
        <FormInput placeholder="Type" label="Type" name="type" />
        <FormInput placeholder="Tags" label="Tags" name="tags" />
        {/* <FormTextArea placeholder="Message" label="Message" name="message" /> */}

        <RichTextEditor name="message" label="Message" placeholder="Message" />

        <Button type="submit" className="bg-primary py-3 px-16 ml-auto">
          {loading ? "Submitting" : "Submit"}
        </Button>
        <div className="my-5" />
      </form>
    </FormProvider>
  );
};

export default NotificationForm;
