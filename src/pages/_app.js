import { BuilderProvider } from "@/context/builderContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BuilderProvider>
      <Component {...pageProps} />
    </BuilderProvider>
  );
}
