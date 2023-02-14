import { StoreContextProvider } from "@/src/utils/StoreContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}
