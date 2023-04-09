import { BlogPostCardProps } from "./type";
import Image from "next/image";
import urlFor from "lib/urlFor";
import { Category } from "types";
import Link from "next/link";

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="p-2">
        <div
          title={post.title}
          className="rounded-2xl  cursor-pointer overflow-hidden group/post hover:scale-[1.03] bg-gray-100  border-2 border-gray-700 w-full  duration-150"
        >
          <div className="relative h-48 w-full">
            <Image
              className="object-cover"
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            25vw"
              priority={index <= 5 ? true : false}
              src={urlFor(post.mainImage).url()}
            />
          </div>
          <div className="p-2 w-full flex flex-col ">
            <div className="flex mt-2  text-gray-500 text-sm flex-row justify-start gap-2">
              <span className="capitalize ">{post.author.name}</span>
              <span>-</span>
              <span>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div className="capitalize line-clamp-2 my-2 text-xl font-bold group-hover/post:underline">
              {post.title}
            </div>

            <div className="w-full flex  flex-wrap flex-row justify-start gap-1">
              {post.categories &&
                post.categories.map((category: Category, index: number) => (
                  <span
                    className="text-gray-500 whitespace-nowrap  border-[1px] border-gray-500 rounded-lg px-2 py-1 text-xs capitalize"
                    key={index}
                  >
                    {category.title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
