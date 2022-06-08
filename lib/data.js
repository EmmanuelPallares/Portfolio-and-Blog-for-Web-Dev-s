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
  const BLOGSPROPS = gql`
    query {
      blogPosts {
        title
        coverImage {
          url
        }
        id
        slug
        content
      }
    }
  `;
  const blogs = await graphcms.request(BLOGSPROPS);

  return {
    props: blogs,
  };
}

export const getBlogSlugs = async () => {
  const query = gql`
    {
      blogPosts {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};
export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      blogPosts(where: { slug: $slug }) {
        title
        slug
        content
        coverImage {
          url
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};
