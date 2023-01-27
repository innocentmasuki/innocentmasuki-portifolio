"use client";

import { usePreview } from "lib/sanity.preview";
import { query, BlogPostList } from "../BlogPostList";

export default function PreviewBlogPost() {
  const posts = usePreview(null, query);
  return <BlogPostList posts={posts} />;
}
