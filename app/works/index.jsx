import RootLayout from "../../components/rootLayout";
import Head from "next/head";

function Works() {
  return (
    <>
      <Head>
        <title>i.me | Works</title>
      </Head>
      <RootLayout>
        <h1 className="text-3xl text-red-500 font-bold underline">works</h1>
      </RootLayout>
    </>
  );
}

export default Works;
