// import React, { useEffect } from "react";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
// import { useRouter } from "next/router";
// import styles from "./login.module.css";
// import BasicLayout from "../organisms/LayoutBasic";
// import Header from "../organisms/header/HeaderLogin";
// import Footer from "../organisms/FooterLogin";

// function Login() {
//   const router = useRouter(); // Use useRouter instead of useNavigate
//   const { instance } = useMsal();
//   const isAuthenticated = useIsAuthenticated();

//   useEffect(() => {
//     if (isAuthenticated) {
//       router.push("/main"); // Use router.push instead of navigate
//     }
//   }, [isAuthenticated, router]);

//   const handleLogin = () => {
//     instance.loginRedirect();
//   };

//   const handleSignup = () => {
//     instance.loginRedirect();
//   };

//   return (
//     <BasicLayout headerChildren={<Header />} footerChildren={<Footer />}>
//       <div className={styles.flexWrapper}>
//         <div
//           className={`${styles.loginContainer} d-flex align-items-center justify-content-center`}
//         >
//           <div className={styles.loginCard}>
//             <Image
//               src="/sacredYusnaviLogo.webp"
//               className={styles.hospitalLogo}
//               alt="Hospital Logo"
//             />
//             <div className={`${styles.buttonStack} d-flex flex-column align-items-center`}>
//               <Button onClick={handleLogin} className={`${styles.loginButtons} w-100 mb-2`}>
//                 Login
//               </Button>
//               <Button
//                 onClick={() => router.push("/signup")}
//                 variant="outline-primary"
//                 className={`${styles.loginButtons} w-100`}
//               >
//                 Sign Up
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </BasicLayout>
//   );
// }

// export default Login;
