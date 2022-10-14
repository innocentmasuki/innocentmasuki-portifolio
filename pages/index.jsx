import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>i.me | Home</title>
      </Head>
      <Layout>
        <h1 className="text-3xl text-red-500 font-bold underline">Home</h1>
      </Layout>
    </>
  );
}
