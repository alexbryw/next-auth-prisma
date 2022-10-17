import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "next" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
