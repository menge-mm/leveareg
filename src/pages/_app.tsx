import type { AppProps } from 'next/app';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { msalInstance } from '@/auth/msalInstance';
import { Toaster } from '@/components/atoms/toaster';
import ErrorBoundary from '@/components/organisms/error/ErrorCatcher';
import { DialogProvider } from '@/contexts/Dialog';
import UserProvider from '@/contexts/UserContext';
import Login from '@/components/login';
import SearchProvider from '@/contexts/search';
import { AuthProvider } from '@/auth/AuthProvider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      {/* <AuthProvider> */}
      {/* <AuthenticatedTemplate> */}
      {/* <UserProvider> */}
      <ErrorBoundary>
        <DialogProvider>
          <SearchProvider>
            <Component {...pageProps} />
          </SearchProvider>
        </DialogProvider>
      </ErrorBoundary>
      <Toaster />
      {/* </UserProvider> */}
      {/* </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Login />
        </UnauthenticatedTemplate> */}
      {/* </AuthProvider> */}
    </MsalProvider>
  );
}
