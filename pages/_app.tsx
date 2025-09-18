// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}