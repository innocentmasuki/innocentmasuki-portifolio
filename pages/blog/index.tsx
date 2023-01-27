import RootLayout from "@/components/rootLayout";
import Head from "next/head";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import { BlogPostList, query } from "@/components/content/Blog/BlogPostList";
import { client } from "lib/sanity.client";

const PreviewBlogPost = lazy(
  () => import("@/components/content/Blog/PreviewBlogPostList")
);

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};

export default function Blog({ preview, data }) {
  if (preview) {
    return (
      <>
        <Head>
          <title>i.me | Blog</title>
        </Head>
        <RootLayout>
          <PreviewSuspense fallback="Loading...">
            <PreviewBlogPost />
          </PreviewSuspense>
        </RootLayout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>i.me | Blog</title>
      </Head>
      <RootLayout>
        <BlogPostList posts={data} />
      </RootLayout>
    </>
  );
}
