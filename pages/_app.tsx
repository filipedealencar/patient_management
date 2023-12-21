import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { NextPage } from "next";
import "@/styles/fonts.css";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import SidebarWithHeader from "@/layouts/SidebarWithHeader";
import { Toaster } from "react-hot-toast";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeWrapper = () => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SidebarWithHeader>
          <Component {...pageProps} />
        </SidebarWithHeader>
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <GlobalContextProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <ThemeWrapper />
      </GlobalContextProvider>
    )
  );
};

export default App;
