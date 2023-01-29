import RootLayout from "@/components/rootLayout";
import Head from "next/head";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import { BlogPostList } from "@/components/content/Blog/BlogPostList";
import { client } from "lib/sanity.client";
import groq from "groq";

const PreviewBlogPostList = lazy(
  () => import("@/components/content/Blog/PreviewBlogPostList")
);

export default function Blog({ preview, posts, categories }) {
  if (preview) {
    return (
      <>
        <Head>
          <title>Blog | i.me</title>
        </Head>
        <RootLayout>
          <PreviewSuspense fallback="Loading...">
            <PreviewBlogPostList />
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
        <BlogPostList posts={posts} categories={categories} />
      </RootLayout>
    </>
  );
}

export const getServerSideProps = async ({ preview = false, params }) => {
  const postsQuery = groq` *[_type=="post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;

  const categoriesQuery = groq` *[_type=="category"]{
  ...,
} | order(_createdAt desc)
`;
  if (preview) {
    return { props: { preview } };
  }

  let posts = await client.fetch(postsQuery);
  const categories = await client.fetch(categoriesQuery);

  return { props: { preview, posts, categories } };
};
