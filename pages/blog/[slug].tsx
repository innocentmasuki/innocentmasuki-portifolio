import BlogPost from "@/components/content/Blog/BlogPost";
import RootLayout from "@/components/rootLayout";
import { client } from "lib/sanity.client";
import urlFor from "lib/urlFor";
import { groq } from "next-sanity";
import Head from "next/head";
import { BlogPost as BlogPostType } from "types";

const Article = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title}`}</title>

        {/* Open Graph */}
        <meta property="og:title" content={`${post.title}`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.innocentmasuki.me/blog/${post.slug.current}`}
        />
        <meta property="og:image" content={urlFor(post.mainImage).url()} />
        <meta property="og:description" content={`${post.title}`} />
        <meta property="og:site_name" content="Innocent Masuki" />
        <meta property="article:published_time" content={post._createdAt} />
        <meta property="article:section" content="Blog" />
        <meta property="article:tag" content="blog post" />
      </Head>
      <RootLayout>
        <BlogPost post={post} />
      </RootLayout>
    </>
  );
};

export default Article;

type ServerSideProps = {
  params: {
    slug: string;
  };
  blog: BlogPostType;
};

export const getServerSideProps = async ({
  params: { slug },
}: ServerSideProps) => {
  const postQuery = groq`*[_type=="post" && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
      }
      `;
  const post = await client.fetch(postQuery, { slug });

  return { props: { post } };
};
