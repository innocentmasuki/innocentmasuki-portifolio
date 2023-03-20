import Head from "next/head";
import RootLayout from "@/components/rootLayout";

import HomePage from "@/components/section/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>i.me | Home</title>
      </Head>
      <RootLayout>
        <HomePage />
      </RootLayout>
    </>
  );
}
