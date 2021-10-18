import React from "react";
import { Header } from "../components/header";
import { RepoProvider } from "../hooks/useRepository";
import { GlobalStyle } from "../styles/globals";
import "../styles/globals.ts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RepoProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </RepoProvider>
    </>
  );
}

export default MyApp;
