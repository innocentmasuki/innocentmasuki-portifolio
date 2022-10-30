import Layout from "@/components/layout";
import Head from "next/head";

import HomePage from "@/components/content/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>i.me | Home</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
