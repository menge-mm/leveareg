import { TooltipProvider } from '@/components/atoms/tooltip';
import Footer from '@/components/organisms/footer';
import { AuthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react';
import SideBar from '../organisms/sidebar';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '@/auth/msalConfig';
import Header from '../organisms/header/index';
import { Card, CardContent, CardHeader } from '../atoms/card';
import RightSidebar from '../organisms/sidebar/right-sidebar';
import { useEffect, useState } from 'react';

export default function Layout({
  pageTitle,
  arabic = false,
  children,
}: {
  pageTitle: string;
  arabic?: boolean;
  children: React.ReactNode;
}) {
  // const isAuthenticated = useIsAuthenticated();
  // const { instance, inProgress } = useMsal();
  // const [loginAttempted, setLoginAttempted] = useState(false);

  // useEffect(() => {
  //   if (inProgress === InteractionStatus.None && !isAuthenticated && !loginAttempted) {
  //     setLoginAttempted(true);
  //     instance.loginRedirect(loginRequest);
  //   }
  // }, [inProgress, isAuthenticated, instance, loginAttempted]);

  return (
    <TooltipProvider>
      {/* <AuthenticatedTemplate> */}
      <div className="flex min-h-screen flex-col bg-muted/40">
        <div className="h-full md:py-0 sm:px-3 md:mr-2 sm:mx-10 md:mx-5">
          <SideBar />
          <div className="min-h-screen flex flex-col h-full sm:gap-4 sm:pl-5 md:pl-10 relative pt-2 w-screen md:w-full">
            <Header />
            <main className="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 sm:my-12 md:mt-12">
              <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <Card
                  x-chunk="dashboard-05-chunk-3"
                  className="my-3 relative shadow-none rounded-none md:border md:shadow-md md:rounded-lg border-gray-200"
                >
                  <CardHeader className="py-2 md:py-3 border-b border-dashed mb-2 border-b-gray-300">
                    <h1
                      className="-pl-4 text-2xl md:text-3xl font-medium tracking-tight md:py-1"
                      style={arabic ? { direction: 'rtl' } : {}}
                    >
                      {pageTitle}
                    </h1>
                  </CardHeader>
                  <CardContent>{children}</CardContent>
                </Card>
              </div>
              <RightSidebar />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      {/* </AuthenticatedTemplate> */}
    </TooltipProvider>
  );
}
