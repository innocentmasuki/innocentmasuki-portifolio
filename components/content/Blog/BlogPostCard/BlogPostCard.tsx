import { BlogPostCardProps } from "./type";
import Image from "next/image";
import urlFor from "lib/urlFor";

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden group/post bg-gray-100 border-2 border-gray-700 w-full  duration-150">
      <div className="relative h-32 w-full">
        <Image
          className="object-cover"
          alt={post.author.name}
          fill
          src={urlFor(post.author.image).url()}
        />
      </div>
      <div>{post.author.name}</div>
    </div>
  );
};

export default BlogPostCard;
