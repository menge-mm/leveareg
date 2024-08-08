"use client";

import Layout from "@/components/layout";
import AccountInfo from "@/components/organisms/account-info";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Staff } from "@/types";

const Page = ({ staff }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Layout pageTitle="Account Information">{<AccountInfo />}</Layout>;
};

// check for first time login
export const getServerSideProps = (async ({ params }) => {
  try {
    const baseUrl = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

    const res = await axios.get(`${baseUrl}/health-care-staff/${params?.homeAccountId}`);
    const staff: Staff[] = await res.data;

    // if staff is not found, redirect to onboarding page
    if (staff.length === 0 && !staff[0]?.homeAccountId) {
      return {
        redirect: {
          destination: "/staff-onboarding",
          permanent: false,
        },
      };
    }

    return {
      props: { staff: staff[0] },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<{ staff: Staff }>;

export default Page;
