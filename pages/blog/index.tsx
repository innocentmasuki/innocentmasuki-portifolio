import RootLayout from "@/components/rootLayout";
import Head from "next/head";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import { BlogPostList } from "@/components/content/Blog/BlogPostList";
import { client } from "lib/sanity.client";
import groq from "groq";

const PreviewBlogPost = lazy(
  () => import("@/components/content/Blog/PreviewBlogPostList")
);

export default function Blog({ preview, posts, categories }) {
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
        <BlogPostList posts={posts} categories={categories} />
      </RootLayout>
    </>
  );
}

export const getStaticProps = async ({ preview = false, params }) => {
  const category = params?.category;

  // const postsQuery = groq` *[_type=="post"&& categories.slug.current == "${category}"]{
  //   ...,
  //   author->,
  //   categories[]->
  // } | order(_createdAt desc)
  // `;

  const postsQuery = category
    ? groq` *[_type=="post"&& categories.slug.current == "${category}"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`
    : groq` *[_type=="post"]{
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
  const filterByCategory = async (selectedCategory: string) => {
    const query = groq`*[_type == "post" && category == $category]{
      ...,
    author->,
    categories[]->
    }| order(_createdAt desc)
    `;

    posts = await client.fetch(query, {
      category: selectedCategory,
    });
  };

  return { props: { preview, posts, categories } };
};
