"use client";

import { usePreview } from "lib/sanity.preview";
import { BlogPostList } from "../BlogPostList";
import groq from "groq";

export default function PreviewBlogPostList() {
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
  const posts = usePreview(null, postsQuery);
  const categories = usePreview(null, categoriesQuery);
  return <BlogPostList posts={posts} categories={categories} />;
}
