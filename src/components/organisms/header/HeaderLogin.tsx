import React from "react";
import styles from "./HeaderLogin.module.css";
import Image from "next/image";

export default function HeaderLogin() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <div
          className={`${styles.leveaAndSubtextContainer} overflow-hidden rounded-full shodow-lg shadow-[#ac83c3]`}
        >
          <Image
            src={"/images/logoHeader.jpg"}
            alt="Hospital Logo"
            width={200}
            height={150}
            className="border-2 border-[#ac83c3] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
