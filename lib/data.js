import { GraphQLClient, gql } from "graphql-request";
const endpoint =
  "https://api-us-west-2.graphcms.com/v2/cl339o8uy4aru01z84ry54y9n/master";
const graphcms = new GraphQLClient(endpoint);

export async function getPageProps() {
  const { page } = await graphcms.request(gql`
    query {
      page(where: { slug: "home" }) {
        slug
        title

        seo {
          title
          description
          image {
            url
          }
        }
      }
    }
  `);
  return page;
}
export async function getPortfolioProps() {
  const PORTFOLIO = gql`
    query {
      portfolios {
        title
        slug
        id

        imagePortfolioOne {
          url
        }
        imagePortfolioTwo {
          url
        }
        imagePortfolioThree {
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
    props: portfolios,
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
  const DATA = await graphcms.request(NAVIGATIONQUERY);

  return {
    props: {
      DATA,
    },
  };
}

export async function getBlogProps() {
  const BLOGQUERY = gql`
    query {
      blogPosts {
        authorBlogPost {
          ... on Author {
            name
            userImage {
              url
            }
          }
        }
        coverImage {
          url
        }
        content
        id
        createdAt
        slug
        title
      }
    }
  `;
  const DATA = await graphcms.request(BLOGQUERY);

  return {
    props: {
      DATA,
    },
  };
}
