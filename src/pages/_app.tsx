import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { themeconst } from "../Chakra/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeconst}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
