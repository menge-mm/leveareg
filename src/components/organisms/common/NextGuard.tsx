import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMsal } from "@azure/msal-react";

const NextGuard = () => {
  const router = useRouter();
  const { instance } = useMsal();
  useEffect(() => {
    // if (instance.getActiveAccount() === null) {
    //   router.push("/");
    // }

    instance.addEventCallback((message) => {
      if (message.eventType === "msal:acquireTokenFailure") {
        router.push("/");
      }
    });

    return () => {
      instance.removeEventCallback("msal:acquireTokenFailure");
    };
  }, [instance, router]);

  return <div>NextGuard</div>;
};

export default NextGuard;
