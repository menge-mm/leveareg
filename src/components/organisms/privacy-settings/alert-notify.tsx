import React from "react";
import { Alert } from "../../atoms/alert";
import { useDialog } from "../../../contexts/Dialog";
import { privacyPolicy, termsOfService } from "./data";
import styles from "./PrivacySettings.module.css";

const AlertNotification = () => {
  const { openDialogWithContent } = useDialog();

  return (
    <Alert className={`bg-sky-100 mb-3 md:mb-4 ${styles.alert}`}>
      <strong>Privacy Policy and Terms of Service Review:</strong> Please review our{" "}
      <span
        className={styles.privacyLink}
        onClick={() =>
          openDialogWithContent(
            privacyPolicy.title,
            "This content explains the privacy policy of LEVEA",
            privacyPolicy.content
          )
        }
      >
        Privacy Policy
      </span>{" "}
      and{" "}
      <span
        className={styles.termsLink}
        onClick={() =>
          openDialogWithContent(
            termsOfService.title,
            termsOfService.description,
            termsOfService.content
          )
        }
      >
        Terms of Service
      </span>
      .
      <p className="mt-2">
        For any concerns related to data protection, please contact our Data Protection Officer at{" "}
        <a href="mailto:manuel.knott@levea.eu">manuel.knott@levea.eu</a>.
      </p>
    </Alert>
  );
};

export default AlertNotification;
