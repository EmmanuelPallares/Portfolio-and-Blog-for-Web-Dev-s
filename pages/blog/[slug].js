import { getBlogSlugs, getPost } from "../../lib/data";
import he from "he";
import Head from "next/head";
import Image from "next/image";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";

export const getStaticPaths = async () => {
  const slugsRes = await getBlogSlugs();
  const slugs = slugsRes.posts;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: {
      post: post.posts[0],
      content: await renderToString(he.decode(post.posts[0].content)),
    },
  };
};

export default function Post({ post, content }) {
  console.log(content);
  return (
    <>
      <div className="prose prose-xl max-w-none">{hydrate(content)}</div>
    </>
  );
}
