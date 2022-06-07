import { GraphQLClient, gql } from "graphql-request";
import { getSlugList } from "../../lib/data";

export async function getStaticProps({ params }) {
  const POST = gql`
    query ($slug: String!) {
      blogPost(where: { slug: $slug }) {
        slug
      }
    }
  `;
  const slug = await graphcms.request(POST, { slug: params.slug });

  return {
    props: {
      slug,
    },
  };
}

export async function getStaticPaths() {
  const list = await graphcms.getSlugList();
  return {
    paths: list.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export default function Post({ post, title, slug }) {
  console.log(post);
  return (
    <>
      hello world
      <>{title}</>
      <>{slug}</>
    </>
  );
}
