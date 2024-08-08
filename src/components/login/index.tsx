import Image from "next/image";
import { useMsal } from "@azure/msal-react";
import styles from "./login.module.css";
import BasicLayout from "../layout/layout-basic";
import Header from "../organisms/header/HeaderLogin";
import Footer from "../organisms/footer/FooterLogin";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import Microsoft from "../icons/microsoft";
import { useAuth } from "@/auth/AuthProvider";

function Login() {
  const { login } = useAuth();
  // const { instance } = useMsal();
  // const handleLogin = () => {
  //   instance.loginPopup();
  // };

  return (
    <BasicLayout headerChildren={<Header />} footerChildren={<Footer />}>
      <Card
        style={{
          backgroundColor: "#f7f7f7",
        }}
        className="w-[350px] flex flex-col items-center justify-center sm:shadow-lg shadow-primary px-5 sm:px-5"
      >
        <CardContent className="pt-5">
          <div className="rounded-full overflow-hidden">
            <Image src="/images/logoMinimal.jpg" alt="Hospital Logo" width={150} height={150} />
          </div>
        </CardContent>
        <CardHeader className="pb-2 font-bold tracking-wide text-lg">
          <p>Login to Your Account</p>
        </CardHeader>
        <div className="w-25 border border-primary boder-dotted bg-primary mt-2"></div>
        <CardFooter>
          <div className={`${styles.buttonStack} d-flex flex-column align-items-center`}>
            <Button
              onClick={login}
              className={`w-[300px] mb-2 py-4 px-5 max-w-full mt-3 text-md flex items-center gap-3 font-medium tracking-wide`}
            >
              <Microsoft w={24} h={24} /> Login with Microsoft
            </Button>
          </div>
        </CardFooter>
      </Card>
    </BasicLayout>
  );
}

export default Login;
