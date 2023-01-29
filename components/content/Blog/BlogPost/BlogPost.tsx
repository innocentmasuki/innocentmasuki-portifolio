import Heading from "@/components/common/heading";
import { BlogPostProps } from "./type";
import Image from "next/image";
import urlFor from "lib/urlFor";
import { Category } from "types";
import PortableText from "react-portable-text";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { useState } from "react";

const BlogPost = ({ post }: BlogPostProps) => {
  const [coppied, setCoppied] = useState(false);

  const URL = window.location.href;

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCoppied(true);
    setTimeout(() => {
      setCoppied(false);
    }, 2000);
  };

  return (
    <article className="py-20">
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div className="px-4 md:px-10 lg:px-32">
        <div className="text-gray-500 md:text-center">
          Published at :{" "}
          {new Date(post._createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            year: "numeric",
            month: "short",
          })}
        </div>
        <h1 className="md:text-center font-bold  w-full pt-2 text-6xl ">
          {post.title}
        </h1>
        <div className="flex mt-4 flex-wrap gap-1 w-full md:justify-center flex-row">
          {post.categories &&
            post.categories.map((category: Category, index: number) => (
              <span
                className={
                  " text-gray-500 bg-white   border-2 border-gray-500 cursor-pointer whitespace-nowrap rounded-xl px-2 py-1 text-base capitalize"
                }
                key={index}
              >
                {category.title}
              </span>
            ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="relative mt-20 w-full  h-96">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            25vw"
            className="object-cover"
          />
          <div className="absolute -bottom-10 right-0">
            <div className=" sticky text-xl top-20 bg-gray-200 border-8 items-center border-r-0 border-white p-4 rounded-l-2xl flex flex-row gap-6">
              {coppied ? (
                <span className="text-xs">Coppied</span>
              ) : (
                <>
                  <a
                    href={`http://twitter.com/share?text=${post.title}&url=${URL}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsTwitter className="hover:text-[#1DA1F2] cursor-pointer" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=http://google.com`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsLinkedin className="hover:text-[#0072b1] cursor-pointer" />
                  </a>
                  <a
                    href={`https://wa.me/?text=${post.title} ${URL}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BsWhatsapp className="hover:text-[#25D366] cursor-pointer" />
                  </a>
                </>
              )}

              <AiOutlineLink
                onClick={() => copy(window.location.href)}
                className="hover:text-red-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="absolute w-full flex justify-center flex-row -top-10">
            <div className="group/profile border-8 py-4 px-5 flex flex-center gap-3 items-center flex-row border-white  bg-gray-500 rounded-3xl h-30">
              <div className="relative h-12 w-12  overflow-hidden rounded-full border-2 border-white">
                <Image
                  src={urlFor(post.author.image.asset._ref).url()}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      25vw"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-white text-lg font-bold">
                  {post.author.name}
                </div>
                <div className="text-white text-xs font-bold">
                  {post.author.bio[0].children[0].text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex w-full flex-row justify-center">
        <div className="max-w-6xl px-4">
          <PortableText
            // Pass in block content straight from Sanity.io
            content={post.body}
            // Optionally override marks, decorators, blocks, etc. in a flat
            // structure without doing any gymnastics
            serializers={{
              h1: (props) => (
                <h1
                  className="text-gray-700  font-bold py-4  text-5xl"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="text-gray-700 font-bold py-3  text-4xl"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-gray-700 font-bold py-3  text-3xl"
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  className="text-gray-700 font-bold py-3  text-2xl"
                  {...props}
                />
              ),
              normal: (props) => (
                <p className="text-gray-600  font-bold  text-lg" {...props} />
              ),
              strong: (props) => (
                <strong className="text-black font-bold text-lg" {...props} />
              ),
              image: ({ asset }) => (
                <div className="flex justify-center w-full">
                  <div className="relative my-4 w-full  h-60">
                    <Image
                      src={urlFor(asset._ref).url()}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  {...children}
                  className="border-8 text-lg bg-gray-100 my-5 border-gray-500 p-4 border-y-0 border-r-0"
                >
                  {children}
                </blockquote>
              ),
              link: ({ href, children }) => (
                <a
                  className="text-black text-lg cursor-pointer underline"
                  href={href}
                >
                  {children}
                </a>
              ),

              li: ({ children }) => (
                <li className="text-gray-600 ml-10 text-lg list-disc">
                  {children}
                </li>
              ),
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
