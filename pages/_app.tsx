import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollBackground from "@/components/ScrollBackground";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollBackground />
      <CursorGlow />
      {/* z-index: 1 lifts content above the CursorGlow blob (z-index: 0) */}
      <div
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
