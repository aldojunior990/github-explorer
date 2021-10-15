import React from "react";
import { Header } from "../components/header";
import { GlobalStyle } from "../styles/globals";
import "../styles/globals.ts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
