import BlogPost from "@/components/content/Blog/BlogPost";
import RootLayout from "@/components/rootLayout";
import { client } from "lib/sanity.client";
import { groq } from "next-sanity";
import Head from "next/head";
import { BlogPost as BlogPostType } from "types";

const Article = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title}`}</title>
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
};

export const getStaticProps = async ({ params: { slug } }: ServerSideProps) => {
  const postQuery = groq`*[_type=="post" && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
      }
      `;
  const post = await client.fetch(postQuery, { slug });

  return { props: { post } };
};

export async function getStaticPaths() {
  const posts = await client.fetch(`*[_type == "post"]`);
  const paths = posts.map((post: BlogPostType) => `/blog/${post.slug.current}`);
  return {
    paths,
    fallback: false,
  };
}
