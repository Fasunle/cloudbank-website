import "./globals.scss";

import type { Metadata } from "next";
import Head from "next/head";

import Navbar from "@/Components/Layout/NavBar";
import Footer from "@/Components/Layout/Footer";

export const metadata: Metadata = {
  title: "Home | Cloudwallet Technologies",
  description: "Cloudbank provides a seamless banking services",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head key={"global"}>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Navbar />
        <main className="main">
          <div className="container-custom">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
