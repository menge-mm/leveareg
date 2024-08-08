import styles from "./layout-basic.module.css";

type BasicLayoutProps = {
  children: React.ReactNode;
  headerChildren: React.ReactNode;
  footerChildren: React.ReactNode;
};
function BasicLayout({ children, headerChildren, footerChildren }: BasicLayoutProps) {
  return (
    <div className={`flex flex-col max-h-screen ${styles.wrapper}`}>
      <div className={`${styles.header} justify-center w-full`}>{headerChildren}</div>

      <div className={styles.content}>{children}</div>

      <div className={`${styles.footer} justify-content-center`}>{footerChildren}</div>
    </div>
  );
}

export default BasicLayout;
