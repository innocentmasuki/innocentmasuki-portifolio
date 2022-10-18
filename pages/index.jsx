import Layout from "../components/layout";
import Head from "next/head";

import Button from "../components/common/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>i.me | Home</title>
      </Head>
      <Layout>
        <div className="flex items-center w-full justify-center md:justify-start h-full">
          <div className="text-center md:text-left text-gray-700">
            <h1 className="font-bold  text-4xl pb-4">{"Hi, I'm"}</h1>
            <p className=" text-6xl md:text-8xl  ">Innocent Masuki</p>
            <p className="md:text-xl mb-20 pb-8 ">
              <span className="font-bold">freelance </span>
              <span className="font-bold">web</span> and{" "}
              <span className="font-bold">mobile</span> developer.
            </p>
            <Button title={"My Works"} link={"/works"} />
          </div>
        </div>
      </Layout>
    </>
  );
}
