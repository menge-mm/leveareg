// // RedirectBasedOnAuth.js
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useIsAuthenticated } from "@azure/msal-react";

// const RedirectBasedOnAuth = () => {
//   const isAuthenticated = useIsAuthenticated();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/main");
//     } else {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   return null;
// };

// export default RedirectBasedOnAuth;
