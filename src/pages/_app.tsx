import "../styles/globals.css";
import "@tremor/react/dist/esm/tremor.css";

import { type AppType } from "next/app";
import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { api } from "../utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Story Analytics</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-grow flex-col">
        <Component {...pageProps} />
      </main>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
