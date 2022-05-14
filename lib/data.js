import { GraphQLClient, gql } from "graphql-request";
const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl339o8uy4aru01z84ry54y9n/master"
);
export async function getPortfolioProps() {
  const PORTFOLIO = gql`
    query {
      portfolios {
        title
        slug
        id
        imagePortfolio {
          url
        }
        description
        createdAt
        stage
      }
    }
  `;
  const portfolios = await graphcms.request(PORTFOLIO);

  return {
    props: {
      portfolios,
    },
  };
}
export async function getNavigationProps() {
  const NAVIGATIONQUERY = gql`
    query {
      navigations {
        navitem
        slug
      }
    }
  `;
  const DATA = await graphcms.request(NAVIGATION);

  return {
    DATA,
  };
}
