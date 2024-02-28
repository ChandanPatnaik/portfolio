import { CustomCursor } from "@/components/core";
import { useCustomScrolling } from "@/hooks";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }: AppProps) {
  useCustomScrolling();
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
