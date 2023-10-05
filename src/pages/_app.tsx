import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import DataProvider from "@src/containers/home/DataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DataProvider>
  );
}

export default MyApp;
