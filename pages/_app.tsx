import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../src/components/layout/main-layout";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
   
  );
}
