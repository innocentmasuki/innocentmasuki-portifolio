import { BlogPostCardProps } from "./type";
import Image from "next/image";
import urlFor from "lib/urlFor";
import category from "schemas/category";
import { Category } from "types";

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden group/post hover:scale-105 bg-gray-100  border-2 border-gray-700 w-full  duration-150">
      <div className="relative h-48 w-full">
        <Image
          className="object-cover"
          alt={post.title}
          fill
          src={urlFor(post.mainImage).url()}
        />
        <div className="absolute w-full  opacity-70 group-hover/post:opacity-100 top-0 right-0 p-1"></div>
      </div>
      <div className="p-2 w-full gap-4  flex flex-row justify-start">
        <div className="h-full">
          <div className="relative h-10 w-10  rounded-full">
            <Image
              className="object-cover border-2 border-gray-700  rounded-full"
              alt={post.author.name}
              fill
              src={urlFor(post.author.image).url()}
            />
          </div>
        </div>

        <div>
          <div className="capitalize font-bold group-hover/post:underline">
            {post.title}
          </div>
          <div className="text-xs text-gray-500">
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
