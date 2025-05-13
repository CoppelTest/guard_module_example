import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthConfig, AuthService } from "guard-module";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // *Initialize GuardModule
  const auth0Config: AuthConfig = {
    redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT!,
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
  };

  console.log(auth0Config);

  AuthService.initialize(auth0Config);

  return <Component {...pageProps} />;
}
