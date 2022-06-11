import { GraphQLClient, gql } from "graphql-request";

import { getPortfolioItem, getPortfolioSlugs } from "../../lib/data";
export const getStaticPaths = async () => {
  const slugsRes = await getPortfolioSlugs();
  const slugs = slugsRes.portfolios;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const portfolioItem = await getPortfolioItem(params.slug);
  return {
    props: {
      portfolioItem: portfolioItem.portfolios[0],
    },
  };
};
export default function Home({ portfolioItem, content }) {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-6xl text-gray-900 font-bold">
          {portfolioItem.title}
        </h1>
      </div>
    </div>
  );
}
