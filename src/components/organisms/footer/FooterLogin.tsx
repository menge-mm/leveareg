import { useState, useCallback } from "react";
import { Phone, CircleHelp, Info as CircleInfo, TriangleAlert, BookUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/atoms/dropdown-menu";
import styles from "./Footer.module.css";

const getFormattedDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

type MenuItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: (href: string) => void;
};
function MenuItem({ href, icon, label, onClick }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <DropdownMenuItem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(href)}
      className="px-2 flex gap-3  bg-gray-800 text-white py-2 rounded-md cursor-pointer hover:bg-gray-500 focus:bg-gray-700 hover:text-white text-md"
    >
      {icon}
      {label}
    </DropdownMenuItem>
  );
}

const Footer = () => {
  const [selectedHelpItem, setSelectedHelpItem] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);
  // const router = useRouter();

  const handleMenuItemClick = useCallback((href: string) => {
    // router.push(href);
    setSelectedHelpItem(href);
    setShowHelpModal(true);
  }, []);

  return (
    <footer className={`w-full ${styles.footerRow} flex items-center justify-between px-5`}>
      <span className={`${styles.textSpan} ${styles.textSpanBottomMargin}`}>
        {getFormattedDate()}
      </span>

      <span className={styles.textSpan}>
        This Application is a protected project through Hora e.V. ZVR: 1335812639.
      </span>

      <div className="flex items-center">
        <span className={styles.textSpan}>BY LEVEA™</span>
        <div style={{ marginRight: "10px", marginLeft: "10px" }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className={styles.dropdownToggle}>
              <CircleInfo color="#333333" className="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={styles.helpDropdown}>
              <DropdownMenuLabel className="text-white text-xl">About LEVEA</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="flex flex-col gap-1 pb-3">
                <MenuItem
                  onClick={handleMenuItemClick}
                  href="#/about"
                  icon={<BookUser size={24} />}
                  label="About Us"
                />
                <MenuItem
                  onClick={handleMenuItemClick}
                  href="#/help"
                  icon={<CircleHelp size={24} />}
                  label="Help"
                />
                <MenuItem
                  onClick={handleMenuItemClick}
                  href="#/faq"
                  icon={<CircleInfo size={24} />}
                  label="FAQ"
                />
                <MenuItem
                  onClick={handleMenuItemClick}
                  href="#/contact"
                  icon={<Phone size={24} />}
                  label="Contact"
                />
                <MenuItem
                  onClick={handleMenuItemClick}
                  href="#/disclaimer"
                  icon={<TriangleAlert size={24} />}
                  label="Disclaimer"
                />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React, { useState, useCallback } from "react";

// import styles from "./FooterLogin.module.css";

// const getFormattedDate = () => {
//   const date = new Date();
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   return `${day}-${month}-${year} ${hours}:${minutes}`;
// };

// type MenuItemProps = {
//   href: string;
//   icon: any;
//   label: string;
//   lastItem?: boolean;
//   onClick: (href: string) => void;
// };
// function MenuItem({ href, icon, label, lastItem, onClick }: MenuItemProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);
//   return (
//     <Dropdown.Item
//       href={href}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={() => onClick(href)}
//       style={{
//         color: "#ffffff",
//         marginBottom: lastItem ? "0" : "5px",
//         backgroundColor: isHovered ? "rgba(40, 36, 44, 1.0)" : "transparent",
//         transition: "background-color 0.2s ease-in-out",
//       }}
//     >
//       <FontAwesomeIcon style={{ marginRight: "15px" }} icon={icon} />
//       {label}
//     </Dropdown.Item>
//   );
// }

// const Footer = () => {
//   const [selectedHelpItem, setSelectedHelpItem] = useState<string | null>(null);
//   const [showHelpModal, setShowHelpModal] = useState(false);

//   const handleMenuItemClick = useCallback((href: string) => {
//     setSelectedHelpItem(href);
//     setShowHelpModal(true);
//   }, []);

//   return (
//     <Row className={`w-100 mx-0 ${styles.footerRow}`}>
//       <Col className="d-flex align-items-center justify-content-start">
//         <div>
//           <span className={`${styles.textSpan} ${styles.textSpanBottomMargin}`}>
//             {getFormattedDate()}
//           </span>
//         </div>
//       </Col>
//       <Col className="d-flex align-items-center justify-content-center">
//         <div>
//           <span className={`${styles.textSpan}`}>
//             This Application is a protected project through Hora e.V. ZVR: 1335812639.
//           </span>
//         </div>
//       </Col>
//       <Col className="d-flex align-items-center justify-content-end">
//         <div className="d-flex align-items-center">
//           <span className={styles.textSpan}>BY LEVEA™</span>
//           <div style={{ marginRight: "20px", marginLeft: "10px" }}>
//             <Dropdown id="helpDropdownMenuID">
//               <Dropdown.Toggle variant="none" id="dropdown-basic" className={styles.dropdownToggle}>
//                 <FontAwesomeIcon icon={faCircleInfo} size="2x" color="#222" />
//               </Dropdown.Toggle>
//               <Dropdown.Menu className={styles.helpDropdown}>
//                 <MenuItem
//                   onClick={handleMenuItemClick}
//                   href="#/about"
//                   icon={faAddressBook}
//                   label="About Us"
//                 />
//                 <MenuItem
//                   onClick={handleMenuItemClick}
//                   href="#/help"
//                   icon={faQuestionCircle}
//                   label="Help"
//                 />
//                 <MenuItem
//                   onClick={handleMenuItemClick}
//                   href="#/faq"
//                   icon={faInfoCircle}
//                   label="FAQ"
//                 />
//                 <MenuItem
//                   onClick={handleMenuItemClick}
//                   href="#/contact"
//                   icon={faPhoneAlt}
//                   label="Contact"
//                 />
//                 <MenuItem
//                   onClick={handleMenuItemClick}
//                   href="#/disclaimer"
//                   icon={faExclamationTriangle}
//                   label="Disclaimer"
//                 />
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default Footer;
