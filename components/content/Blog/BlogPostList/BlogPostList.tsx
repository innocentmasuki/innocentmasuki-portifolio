import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { BlogPost, Category } from "types";
import BlogPostCard from "../BlogPostCard";
import { BlogPostListProps } from "./type";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import NoContent from "@/components/common/NoContent";

export function BlogPostList({ posts, categories }: BlogPostListProps) {
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [blogPosts, setBlogPosts] = useState(posts);

  const filterBySearch = (blogPosts: BlogPost[]) => {
    if (search.trim().length > 0)
      return blogPosts.filter((blogPost: BlogPost) =>
        blogPost.title.toLowerCase().includes(search.trim().toLowerCase())
      );
    else return blogPosts;
  };

  const filterByCategory = (blogPosts: BlogPost[]) => {
    if (selectedCategory > -1)
      return blogPosts.filter((blogPost: BlogPost) =>
        blogPost?.categories?.some(
          (category: Category) =>
            category?._id === categories[selectedCategory]._id
        )
      );
    else blogPosts;
  };

  useEffect(() => {
    if (selectedCategory > -1) {
      setBlogPosts(filterBySearch(filterByCategory(posts)));
    } else {
      setBlogPosts(filterBySearch(posts));
    }
  }, [search, selectedCategory]);

  return (
    <div className="px-4 md:px-10 lg:px-32">
      <Heading text={"Stories, How-to & Ideas"} className="md:text-center " />
      <Paragraph
        className={"md:text-center"}
        text={
          "Sharing experiences, thoughts, and musings on technology and beyond. Subscribe for new posts in your inbox."
        }
      />
      <form>
        <div className="w-full flex pt-5 mb-5 justify-center gap-2">
          <input
            type="email"
            className="text-gray-700 w-full md:w-1/3 h-10 px-3 py-2 border-2 border-gray-700 rounded-2xl"
            placeholder="yourname@example.com"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <button className="group bg-gray-700 h-10 border-2 border-gray-700 py-1 px-3 rounded-2xl text-bold duration-300 ">
            <div className="flex text-white ">
              <div className=" underline-offset-1 duration-300">Subscribe</div>
            </div>
          </button>
        </div>
      </form>

      <div className="w-full">
        <div className="flex sticky  top-16 bg-white z-10 pt-5 pb-4 items-center flex-row justify-between">
          <div className="w-full scrollbar-hide flex flex-row justify-start gap-1 overflow-x-scroll">
            <span
              onClick={() => setSelectedCategory(-1)}
              className={`${
                selectedCategory === -1
                  ? " text-white   bg-gray-500"
                  : " text-gray-500    bg-white"
              } mr-1  border-2 border-gray-500 cursor-pointer rounded-xl px-2 py-1 text-base capitalize`}
            >
              All
            </span>
            {categories &&
              categories.map((category: Category, index: number) => (
                <span
                  onClick={() => setSelectedCategory(index)}
                  className={`${
                    selectedCategory === index
                      ? " text-white   bg-gray-500"
                      : " text-gray-500    bg-white"
                  } mr-1  border-2 border-gray-500 cursor-pointer whitespace-nowrap rounded-xl px-2 py-1 text-base capitalize`}
                  key={index}
                >
                  {category.title}
                </span>
              ))}
          </div>
          <div className="group/search pl-2 ml-1 hover:ml-5  duration-500 overflow-hidden border-2 items-center  border-gray-700    rounded-xl flex flex-row justify-between ">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e: any) => {
                setSearch(e.target.value);
              }}
              className={`${
                search.trim().length > 0 ? "w-full" : "w-[0px]"
              } outline-none text-gray-700 group-hover/search:w-full  duration-700  h-full `}
            />
            {search.trim().length > 0 ? (
              <FiX
                onClick={() => setSearch("")}
                className="py-2 pr-2 text-4xl stroke-3  bg-white  cursor-pointer "
              />
            ) : (
              <FiSearch className="py-2 pr-2 text-4xl stroke-3  bg-white  cursor-pointer " />
            )}
          </div>
        </div>
        {blogPosts?.length > 0 ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 767: 3, 1024: 4 }}
          >
            <Masonry>
              {[
                ...blogPosts,
                ...blogPosts,
                ...blogPosts,
                ...blogPosts,
                ...blogPosts,
                ...blogPosts,
                ...blogPosts,
              ].map((blogPost: BlogPost, index: number) => (
                <BlogPostCard index={index} key={index} post={blogPost} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <div className="flex w-full h-32 justify-center items-center">
            <NoContent
              className="text-3xl font-bold"
              text={`No Post found ${
                search.trim().length > 0
                  ? " with a title '" + search.trim() + "'."
                  : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
