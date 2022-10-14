import Layout from "../../components/layout";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>i.me | About</title>
      </Head>
      <Layout>
        <h1 className="text-3xl text-red-500 font-bold underline">about</h1>
      </Layout>
    </>
  );
}

export default About;
