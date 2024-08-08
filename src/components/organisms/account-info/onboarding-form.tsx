import React, { useEffect, useState } from "react";
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";

import { useForm } from "react-hook-form";
import { Button } from "@/components/atoms/button";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "../../atoms/separator";
import { AccountInfo } from "@/types";
import { userProfileInfo } from "@/utils/userInfo";
import { useRouter } from "next/router";
import { useToast } from "../../atoms/use-toast";

const StaffSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  }),
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }),
  givenName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  familyName: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  role: z
    .enum(["Doctor", "Nurse", "Receptionist", "Pharmacist", "Developer", "Admin", "Data Collector", "Coordinator", "Other"])
    .default("Doctor"),
  telecom: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  }),
  street: z.string({
    required_error: "Street address is required",
    invalid_type_error: "Street address must be a string",
  }),
  state: z.string({
    required_error: "State is required",
    invalid_type_error: "State must be a string",
  }),
  city: z.string({
    required_error: "City is required",
    invalid_type_error: "City must be a string",
  }),
  zip: z.string().min(5, { message: "Zip code must be 5 characters" }),
  homeAccountId: z.string({
    required_error: "User ID is required",
    invalid_type_error: "User ID must be a string",
  }),
  addressId: z.string({
    required_error: "Address ID is required",
    invalid_type_error: "Address ID must be a string",
  }),

  providerId: z.string({
    required_error: "Provider ID is required",
    invalid_type_error: "Provider ID must be a string",
  }),
});

type FormData = z.infer<typeof StaffSchema>;

const StaffOnboardingForm = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<AccountInfo>({
    id: "",
    email: "",
    username: "",
    givenName: "",
    familyName: "",
    photo: "",
    homeAccountId: "",
    localAccountId: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast, dismiss } = useToast();

  useEffect(() => {
    const data = userProfileInfo();    
    data && setUserInfo(data);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(StaffSchema),
    defaultValues: {
      email: userInfo.email,
      username: userInfo.username,
      givenName: userInfo.givenName,
      familyName: userInfo.familyName,
      homeAccountId: userInfo.homeAccountId,
      addressId: "971DE4D0-C02B-423A-802B-D30CDAE385F2",
      providerId: "AA30AF7D-89DD-45A2-9D5E-9B3E74911682",
      telecom: "",
      role: "Doctor",
      street: "",
      state: "",
      city: "",
      zip: "",
    },
  });

  const submitForm = async (data: FormData) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    if (!userInfo.homeAccountId || !userInfo.email) return;
    data.username = userInfo.username;
    data.email = userInfo.email as string;
    data.homeAccountId = userInfo.homeAccountId;
    data.givenName = data.givenName || (userInfo.givenName as string);
    data.familyName = data.familyName || (userInfo.familyName as string);
    data.addressId = "971DE4D0-C02B-423A-802B-D30CDAE385F2";
    data.providerId = "AA30AF7D-89DD-45A2-9D5E-9B3E74911682";
    setLoading(true);
    try {
      const response = await axios.put("/api/update-health-care-staff", data, { headers });
      if (response.status === 200) {
        router.push("/account-info/");
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
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
        action: (
          <Button
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-3 flex flex-col">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Staff Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} value={userInfo.email} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="givenName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  value={userInfo.givenName}
                  disabled
                  onDoubleClick={() => {}}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="familyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Last name"
                  {...field}
                  disabled
                  value={userInfo.familyName}
                  onDoubleClick={() => {}}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Doctor">Doctor</SelectItem>
                  <SelectItem value="Nurse">Nurse</SelectItem>
                  <SelectItem value="Receptionist">Receptionist</SelectItem>
                  <SelectItem value="Pharmacist">Pharmacist</SelectItem>
                  <SelectItem value="Data Collector">Data Collector</SelectItem>
                  <SelectItem value="Coordinator">Coordinator</SelectItem>
                  <SelectItem value="Developer">Developer</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telecom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Street Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="Zip Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="my-5" />
        <Button type="submit" className="bg-primary py-3 px-16 ml-auto">
          {loading ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default StaffOnboardingForm;
