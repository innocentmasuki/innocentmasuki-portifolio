import groq from "groq";
import { BlogPost } from "types";
import BlogPostCard from "../BlogPostCard";
import { BlogPostListProps } from "./type";
export const query = groq` *[_type=="post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-5 lg:grid-cols-3 xl:grid-cols-4 ">
      {posts &&
        posts.map((post: BlogPost, index: number) => (
          <BlogPostCard key={index} post={post} />
        ))}
    </div>
  );
}
