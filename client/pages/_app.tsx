import "../styles/globals.css";

import "swiper/swiper.scss";
import "tailwindcss/tailwind.css";

import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";

import { AuthProvider } from "../lib/auth";
import React from "react";
import { useApollo } from "lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { MenuProvider } from "../ContextAPI/menuContext";
function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />;
  </Head>;
  return (
    <ApolloProvider client={apolloClient}>
      <MenuProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MenuProvider>
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
