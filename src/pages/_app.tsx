import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { themeconst } from "../Chakra/theme";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={themeconst}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
